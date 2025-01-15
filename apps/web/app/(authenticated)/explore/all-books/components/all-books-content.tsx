"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Book, Filter } from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

// Simulated data - replace with actual API call
const mockBooks = [
  {
    id: 1,
    title: "Dom Quixote",
    author: "Miguel de Cervantes",
    genre: "Clássico",
  },
  {
    id: 2,
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    genre: "Ficção Política",
  },
  { id: 3, title: "O Alquimista", author: "Paulo Coelho", genre: "Ficção" },
  // Add more books...
];

export default function AllBooksContent() {
  const [books, setBooks] = useState(mockBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    // Fetch books from API
    // setBooks(fetchedBooks)
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (genreFilter === "" || book.genre === genreFilter)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Pesquisar livros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/3"
        />
        <Select value={genreFilter} onValueChange={setGenreFilter}>
          <SelectTrigger className="md:w-1/3">
            <SelectValue placeholder="Filtrar por gênero" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os gêneros</SelectItem>
            <SelectItem value="Clássico">Clássico</SelectItem>
            <SelectItem value="Ficção">Ficção</SelectItem>
            <SelectItem value="Ficção Política">Ficção Política</SelectItem>
            {/* Add more genres */}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm("");
            setGenreFilter("");
          }}
        >
          <Filter className="mr-2 h-4 w-4" />
          Limpar Filtros
        </Button>
      </div>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book, index) => (
          <motion.li
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="border p-4 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {book.author}
              </p>
              <p className="text-sm text-muted-foreground mt-auto">
                {book.genre}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
