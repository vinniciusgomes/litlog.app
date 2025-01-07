import Image from "next/image";
import { Check } from "lucide-react";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  status: string;
}

interface BookCardProps {
  book: Book;
  viewMode: "grid" | "list";
}

export function BookCard({ book, viewMode }: BookCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden">
        <CardContent className="flex items-center p-4">
          <div className="relative h-16 w-12 flex-shrink-0">
            <Image
              src={book.cover}
              alt={book.title}
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
          <div className="ml-4 flex-grow">
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>
          <Badge variant={book.status === "reading" ? "secondary" : "default"}>
            <Check className="mr-1 h-3 w-3" />
            {book.status === "reading" ? "Reading" : "Finished"}
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] w-full p-3">
          <Image
            src={book.cover}
            alt={book.title}
            layout="responsive"
            width={120}
            height={160}
            className="rounded-md object-cover"
          />
          <div className="absolute right-5 top-5">
            <Badge
              variant={book.status === "reading" ? "secondary" : "default"}
            >
              <Check className="mr-1 h-3 w-3" />
              {book.status === "reading" ? "Reading" : "Finished"}
            </Badge>
          </div>
        </div>
        <div className="p-3">
          <h3 className="line-clamp-1 font-semibold">{book.title}</h3>
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {book.author}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
