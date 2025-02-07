"use server";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Separator } from "@workspace/ui/components/separator";
import { ChevronDown,Highlighter, Share, Star } from "lucide-react";
import Image from "next/image";

import { getBookBySlug } from "@/actions/book/get-book";

const book = {
  id: 1,
  title: "Clean Code",
  subtitle: "A Handbook of Agile Software Craftsmanship",
  author: "Robert C. Martin",
  year: "2008",
  cover: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg",
  description:
    'Looks at the principles and clean code, includes case studies showcasing the practices of writing clean code, and contains a list of heuristics and "smells" accumulated from the process of writing clean code.',
  tags: ["Clever", "Educational", "Predictable"],
  stats: {
    reviews: 60,
    highlights: 5,
    currentlyReading: 20,
    finished: 86,
    wantToRead: 155,
  },
};

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return <span>Not found</span>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-4 py-6 md:py-16 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            {/* Book Cover */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border bg-muted md:max-w-[300px] z-0">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Book Details */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-wrap gap-2">
                  {/* {book.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))} */}
                </div>
                <div>
                  <h1 className="text-2xl font-bold md:text-3xl heading mb-2">
                    {book.title}
                  </h1>
                  <p className="text-base italic text-muted-foreground">
                    {book.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>
                    {book.authors?.map((author) => author.name).join(", ")}
                  </span>
                  <span>—</span>
                  <span>{book.publishedDate.getFullYear()}</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  {book.description}
                  <button className="ml-2 text-primary hover:underline">
                    Show more
                  </button>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="w-full md:w-auto">
                  Buy
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full md:w-auto"
                    >
                      Currently reading
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Want to read</DropdownMenuItem>
                    <DropdownMenuItem>Currently reading</DropdownMenuItem>
                    <DropdownMenuItem>Finished</DropdownMenuItem>
                    <DropdownMenuItem>Did not finish</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex w-full flex-wrap gap-2 sm:gap-4 md:w-auto">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="flex-1 min-w-[120px]"
                  >
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="flex-1 min-w-[120px]"
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Review
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="flex-1 min-w-[120px]"
                  >
                    <Highlighter className="mr-2 h-4 w-4" />
                    Highlight
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                <div className="text-center">
                  <div className="text-xl font-thin heading italic mb-1">
                    {book.stats.reviews}
                  </div>
                  <div className="text-sm text-muted-foreground">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-thin heading italic mb-1">
                    {book.stats.highlights}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Highlights
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-thin heading italic mb-1">
                    {book.stats.currentlyReading}
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    Currently reading
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-thin heading italic mb-1">
                    {book.stats.finished}
                  </div>
                  <div className="text-sm text-muted-foreground">Finished</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-thin heading italic mb-1">
                    {book.stats.wantToRead}
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    Want to read
                  </div>
                </div>
              </div> */}

              <Separator />

              {/* Network */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">Your Network</h2>
                <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                  No one in your network has read this book yet
                </div>
              </div>

              <Separator />

              {/* Reviews */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">Reviews</h2>
                {/* Reviews will be added here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
