"use client";

import { languages } from "@/utils/languages";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Textarea } from "@workspace/ui/components/textarea";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  authors: z.string().min(1, "At least one author is required"),
  language: z.string().min(2, "Language is required"),
  pageCount: z.number().min(1, "Page count must be at least 1").optional(),
  isbn10: z.string().optional(),
  isbn13: z.string().optional(),
  publishedDate: z.date().optional(),
  publisher: z.string().optional(),
  format: z.enum(["hardcover", "paperback", "ebook", "audiobook"]).optional(),
  adultContent: z.boolean().optional(),
  coverImage: z.any().optional(),
});

export default function AddBookPage() {
  const [coverPreview, setCoverPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      authors: "",
      language: "en",
      pageCount: undefined,
      isbn10: "",
      isbn13: "",
      publishedDate: undefined,
      publisher: "",
      format: undefined,
      adultContent: false,
      coverImage: "",
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      setValue("coverImage", URL.createObjectURL(file));
    }
  };

  const handlePlaceholderClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen p-4 md:p-8"
    >
      <div className="mx-auto max-w-4xl pt-8 pb-24">
        <div className="mb-4">
          <h1 className="text-3xl heading font-bold tracking-tight">
            Create book
          </h1>
          <p className="text-muted-foreground mt-2">
            Before adding a book, please make sure you&apos;ve{" "}
            <Link
              href={"/book/create"}
              className="underline font-medium text-brand"
            >
              searched
            </Link>{" "}
            for it and set your profile settings to the right language.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle (optional)</Label>
              <Input id="subtitle" {...register("subtitle")} />
            </div>

            <div className="space-y-2">
              <Label>Cover Image (optional)</Label>
              <div className="flex items-center gap-4">
                <div
                  className="relative aspect-[3/4] w-32 overflow-hidden border bg-muted cursor-pointer hover:bg-muted/80 transition-colors"
                  onClick={handlePlaceholderClick}
                >
                  {coverPreview ? (
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <input
                  aria-label="Upload cover image"
                  id="coverImage"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                {...register("description")}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="authors">Authors (separated by commas)</Label>
              <Input id="authors" {...register("authors")} />
              {errors.authors && (
                <p className="text-red-500 text-sm">{errors.authors.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select {...register("language")} defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language.code} value={language.code}>
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="adultContent" {...register("adultContent")} />
              <Label htmlFor="adultContent">Adult content (optional)</Label>
            </div>
          </div>

          <Button type="submit" className="w-full sm:w-auto sm:min-w-52">
            Submit Book
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
