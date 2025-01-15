"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.16,
    ratingCount: "173K",
  },
  {
    id: 2,
    title: "The God of the Woods",
    author: "Liz Moore",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.32,
    ratingCount: "2K",
  },
  {
    id: 2,
    title: "The God of the Woods",
    author: "Liz Moore",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.32,
    ratingCount: "2K",
  },
  {
    id: 2,
    title: "The God of the Woods",
    author: "Liz Moore",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.32,
    ratingCount: "2K",
  },
  {
    id: 2,
    title: "The God of the Woods",
    author: "Liz Moore",
    cover: "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    rating: 4.32,
    ratingCount: "2K",
  },
  // Add more books
];

export default function TrendingBooks() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {books.map((book, index) => (
        <motion.div
          key={book.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/book/${book.id}`} className="group block">
            <div className="relative aspect-[2/3] overflow-hidden">
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-3 space-y-1">
              <h3 className="font-semibold leading-tight group-hover:text-primary">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="ml-1 font-medium">{book.rating}</span>
                <span className="ml-1">· {book.ratingCount} ratings</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
