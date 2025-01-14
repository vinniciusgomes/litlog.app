import Image from "next/image";
import { Check } from "lucide-react";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  status: string;
}

interface BookCardProps {
  index: number;
  book: Book;
  viewMode: "grid" | "list";
}

export function BookCard({ index, book, viewMode }: BookCardProps) {
  if (viewMode === "list") {
    return (
      <Link href={`/book/${book.id}`}>
        <Card className={cn("overflow-hidden rounded-none", index % 2 === 0 ? "border-b-0" : "")}>
          <CardContent className="flex items-center p-4">
            <div className="relative h-16 w-12 flex-shrink-0">
              <Image
                src={book.cover}
                alt={book.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold heading text-gray-700">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground italic">
                {book.author}
              </p>
            </div>
            <Badge
              variant={book.status === "reading" ? "secondary" : "default"}
            >
              <Check className="mr-1 h-3 w-3" />
              {book.status === "reading" ? "Reading" : "Finished"}
            </Badge>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/book/${book.id}`}>
      <Card className="overflow-hidden rounded-none">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={book.cover}
              alt={book.title}
              layout="responsive"
              width={120}
              height={160}
              className="object-cover"
            />
            <div className="absolute right-3 top-3">
              <Badge
                variant={book.status === "reading" ? "secondary" : "default"}
              >
                <Check className="mr-1 h-3 w-3" />
                {book.status === "reading" ? "Reading" : "Finished"}
              </Badge>
            </div>
          </div>
          <div className="p-3 border-t">
            <h3 className="line-clamp-1 font-semibold heading text-lg text-gray-700">
              {book.title}
            </h3>
            <p className="line-clamp-1 text-sm text-muted-foreground italic">
              {book.author}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
