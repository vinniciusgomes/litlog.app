import { S3Client } from '@aws-sdk/client-s3'

export const s3 = new S3Client({ region: process.env.AWS_REGION })
export const S3_URL = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`