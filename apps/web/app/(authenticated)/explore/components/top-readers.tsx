"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";

// Simulated data - replace with actual API call
const mockTopReaders = [
  { id: 1, name: "Ana Silva", booksRead: 120, avatar: "/avatars/ana.jpg" },
  {
    id: 2,
    name: "Carlos Oliveira",
    booksRead: 115,
    avatar: "/avatars/carlos.jpg",
  },
  {
    id: 3,
    name: "Mariana Santos",
    booksRead: 110,
    avatar: "/avatars/mariana.jpg",
  },
];

export default function TopReaders() {
  const [readers, setReaders] = useState(mockTopReaders);

  useEffect(() => {
    // Fetch top readers from API
    // setReaders(fetchedReaders)
  }, []);

  return (
    <ul className="space-y-2">
      {readers.map((reader, index) => (
        <motion.li
          key={reader.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <Avatar>
            <AvatarImage src={reader.avatar} alt={reader.name} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <span>{reader.name}</span>
          <span className="text-sm text-muted-foreground">
            {reader.booksRead} livros
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
