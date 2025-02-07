"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react";

const books = [
  {
    id: 1,
    title: "Red Mars",
    series: "Mars Trilogy",
    author: "Kim Stanley Robinson",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Forward the Foundation",
    author: "Isaac Asimov",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.5,
  },
  // Add more books as needed
];

export default function RecommendedBooks() {
  // const [books, setBooks] = useState(mockRecommendedBooks)

  // useEffect(() => {
  //   // Fetch recommended books from API
  //   // setBooks(fetchedBooks)
  // }, [])

  return (
    <div className="relative">
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[200px]"
          >
            <Link href={`/book/${book.id}`} className="group">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 text-sm">{book.rating}</span>
                </div>
                <h3 className="font-semibold leading-tight group-hover:text-primary">
                  {book.title}
                </h3>
                {book.series && (
                  <p className="text-sm text-muted-foreground">{book.series}</p>
                )}
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
