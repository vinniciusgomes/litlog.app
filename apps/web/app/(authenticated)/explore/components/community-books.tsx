"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Simulated data - replace with actual API call
const mockCommunityBooks = [
  {
    id: 1,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    readers: 1500,
  },
  {
    id: 2,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    readers: 1200,
  },
  {
    id: 3,
    title: "A Menina que Roubava Livros",
    author: "Markus Zusak",
    readers: 1000,
  },
];

export default function CommunityBooks() {
  const [books, setBooks] = useState(mockCommunityBooks);

  useEffect(() => {
    // Fetch community books from API
    // setBooks(fetchedBooks)
  }, []);

  return (
    <ul className="space-y-2">
      {books.map((book, index) => (
        <motion.li
          key={book.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center justify-between"
        >
          <span>
            {book.title} - {book.author}
          </span>
          <span className="flex items-center text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 mr-1" />
            {book.readers}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
