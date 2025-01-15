"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "framer-motion";
import Image from "next/image";

const readers = [
  {
    id: 1,
    name: "Julie Pib",
    avatar: "/placeholder.svg",
    books: [
      "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    ],
  },
  {
    id: 2,
    name: "Nenad Nikolic",
    avatar: "/placeholder.svg",
    books: [
      "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91VlF54YAlL._SL1500_.jpg",
    ],
  },
  // Add more readers
];

export default function SimilarReaders() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {readers.map((reader, index) => (
        <motion.div
          key={reader.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col space-y-4"
        >
          <div className="flex items-center space-x-4">
            <Image
              src={reader.avatar || "/placeholder.svg"}
              alt={reader.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{reader.name}</h3>
            </div>
            <Button variant="outline" size="sm">
              Follow
            </Button>
          </div>
          <div className="flex space-x-2">
            {reader.books.map((book, bookIndex) => (
              <div
                key={bookIndex}
                className="relative aspect-[2/3] w-16 overflow-hidden"
              >
                <Image
                  src={book || "/placeholder.svg"}
                  alt="Book cover"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
