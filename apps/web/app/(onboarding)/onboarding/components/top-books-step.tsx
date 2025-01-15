import Image from "next/image";

import { topBooks } from "../utils/mock";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

interface TopBooksStepProps {
  onFinish: () => void;
}

export function TopBooksStep({ onFinish }: TopBooksStepProps) {
  return (
    <Card className="border-none">
      <CardContent className="py-6 px-0">
        <h2 className="text-2xl heading font-bold mb-4">
          Livros populares na plataforma
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {topBooks.map((book) => (
            <div key={book.id} className="relative rounded-md overflow-hidden">
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
            </div>
          ))}
        </div>
        <Button onClick={onFinish} className="w-full">
          Começar a usar o LitLog
        </Button>
      </CardContent>
    </Card>
  );
}
