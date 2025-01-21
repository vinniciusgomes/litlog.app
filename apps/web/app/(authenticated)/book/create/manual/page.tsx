"use client";

import {useRef, useState} from "react";
import {motion} from "framer-motion";
import {Button} from "@workspace/ui/components/button";
import {Input} from "@workspace/ui/components/input";
import {Label} from "@workspace/ui/components/label";
import {Textarea} from "@workspace/ui/components/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@workspace/ui/components/select";
import {Checkbox} from "@workspace/ui/components/checkbox";
import {Calendar} from "@workspace/ui/components/calendar";
import {Popover, PopoverContent, PopoverTrigger,} from "@workspace/ui/components/popover";
import {format} from "date-fns";
import {CalendarIcon, Upload} from "lucide-react";
import {cn} from "@workspace/ui/lib/utils";
import Link from "next/link";

interface BookFormData {
  title: string;
  subtitle?: string;
  description?: string;
  authors: string;
  language: string;
  pageCount?: number;
  isbn10?: string;
  isbn13?: string;
  publishedDate?: Date;
  publisher?: string;
  format?: string;
  isAdultContent: boolean;
  coverImage?: File;
}

export default function AddBookPage() {
  const [date, setDate] = useState<Date>();
  const [coverPreview, setCoverPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handlePlaceholderClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
      <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          className="min-h-screen p-4 md:p-8"
      >
        <div className="mx-auto max-w-4xl pt-8 pb-24">
          <div className="mb-4">
            <h1 className="text-3xl heading font-bold tracking-tight">Create book</h1>
            <p className="text-muted-foreground mt-2">
              Before adding a book, please make sure you&apos;ve <Link href={"/book/create"}
                                                                       className="underline font-medium text-brand">searched</Link> for
              it
              and set your profile settings to the right language.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle (optional)</Label>
                <Input id="subtitle" name="subtitle" />
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
                      id="coverImage"
                      title="Upload cover image"
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea id="description" name="description" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="authors">
                  Authors (separated if more than one)
                </Label>
                <Input id="authors" name="authors" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select name="language">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="pt">Portuguese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pageCount">Page Count (optional)</Label>
                  <Input id="pageCount" name="pageCount" type="number" min="1" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="isbn10">ISBN-10 (optional)</Label>
                  <Input id="isbn10" name="isbn10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="isbn13">ISBN-13 (optional)</Label>
                  <Input id="isbn13" name="isbn13" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Date of publication (optional)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                          variant="outline"
                          className={cn(
                              "w-full justify-start text-left font-normal h-10",
                              !date && "text-muted-foreground"
                          )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publisher">Publisher (optional)</Label>
                  <Input id="publisher" name="publisher" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="format">Format (optional)</Label>
                <Select name="format">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hardcover">Hardcover</SelectItem>
                    <SelectItem value="paperback">Paperback</SelectItem>
                    <SelectItem value="ebook">E-book</SelectItem>
                    <SelectItem value="audiobook">Audiobook</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="adultContent" />
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
