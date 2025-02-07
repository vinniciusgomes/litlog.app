import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Book } from "../types/onboarding";
import { mockBooks } from "../utils/mock";

interface FavoriteBooksStepProps {
  onNext: (favoriteBooks: string[]) => void;
}

export function FavoriteBooksStep({ onNext }: FavoriteBooksStepProps) {
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  const toggleBook = (bookId: string) => {
    setSelectedBooks((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  return (
    <Card className="border-none">
      <CardContent className="py-6 px-0">
        <h2 className="text-2xl heading font-bold mb-4">
          Selecione seus livros favoritos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {mockBooks.map((book: Book) => (
            <div
              key={book.id}
              className={`relative cursor-pointer rounded-md overflow-hidden ${
                selectedBooks.includes(book.id) ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => toggleBook(book.id)}
            >
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                width={150}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-semibold text-center p-2">
                  {book.title}
                </p>
              </div>
              {selectedBooks.includes(book.id) && (
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                  <Check size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button
          onClick={() => onNext(selectedBooks)}
          disabled={selectedBooks.length === 0}
          className="w-full"
        >
          Próximo
        </Button>
      </CardContent>
    </Card>
  );
}
