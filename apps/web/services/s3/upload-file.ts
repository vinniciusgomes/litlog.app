"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
import sharp from "sharp";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});


/**
 * Uploads a file to AWS S3 after processing it using Sharp.
 *
 * The function takes a file buffer, processes it by converting it to JPEG format
 * with a specified quality and resizing it to 800x400 pixels, and then uploads
 * the processed file to an S3 bucket at the specified path and file name.
 *
 * @param file - The buffer of the file to be uploaded.
 * @param fileName - The name of the file to be saved in S3.
 * @param filePath - The path within the S3 bucket where the file will be stored.
 * @param contentType - The MIME type of the file being uploaded.
 * @returns The full URL of the uploaded file on AWS CloudFront CDN.
 * @throws Will throw an error if the upload to S3 fails.
*/
async function uploadFileToS3(file: Buffer, fileName: string, filePath: string, contentType: string): Promise<string> {
  const fileBuffer = await sharp(file)
    .jpeg({ quality: 50 })
    .resize(800, 400)
    .toBuffer();

  const fullPath = `${process.env.AWS_CLOUDFRONT_CDN_URL}/${filePath}/${fileName}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: fullPath,
    Body: fileBuffer,
    ContentType: contentType,
  };

  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    console.log("File uploaded successfully:", response);
    
    return fullPath;
  } catch (error) {
    throw error;
  }
}

interface UploadResponse {
  status: "success" | "error";
  message: string;
}

interface UploadImageFileParams {
  formData: FormData;
  filePath: string;
  contentType: string; 
}

  /**
   * Uploads a file to AWS S3 using the Next.js API route.
   *
   * The function takes a file buffer from the `FormData` object, processes it by
   * converting it to JPEG format with a specified quality and resizing it to
   * 800x400 pixels, and then uploads the processed file to an S3 bucket at the
   * specified path and file name.
   *
   * @param params The parameters for the file upload.
   * @param params.formData The `FormData` object containing the file to be uploaded.
   * @param params.filePath The path within the S3 bucket where the file will be stored.
   * @param params.contentType The MIME type of the file being uploaded.
   *
   * @returns An object indicating the success or failure of the upload, along with a
   * message describing the result.
  */
export async function uploadImageFile(params: UploadImageFileParams): Promise<UploadResponse> {
  try {
    const file = params.formData.get("file") as File | null;

    if (!file || file.size === 0) {
      return { status: "error", message: "Please select a file." };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const savedPath = await uploadFileToS3(buffer, file.name, params.filePath, params.contentType);

    revalidatePath("/");
    return { status: "success", message: `File has been uploaded at ${savedPath}.` };
  } catch (error) {
    console.error("Error uploading file:", error);

    return { status: "error", message: "Failed to upload file." };
  }
}
