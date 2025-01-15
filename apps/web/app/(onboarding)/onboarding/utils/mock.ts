import { Book, Genre } from "../types/onboarding";

export const genres: Genre[] = [
  "Romance",
  "Ficção",
  "Não-ficção",
  "Mistério",
  "Fantasia",
  "Sci-Fi",
];

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Fantasia",
  },
  {
    id: "2",
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ficção",
  },
  {
    id: "3",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ficção",
  },
  {
    id: "4",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ficção",
  },
  {
    id: "5",
    title: "O Código Da Vinci",
    author: "Dan Brown",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Mistério",
  },
  // Adicione mais livros conforme necessário
];

export const topBooks: Book[] = [
  {
    id: "6",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Fantasia",
  },
  {
    id: "7",
    title: "A Menina que Roubava Livros",
    author: "Markus Zusak",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ficção",
  },
  {
    id: "8",
    title: "O Alquimista",
    author: "Paulo Coelho",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ficção",
  },
  // Adicione mais livros populares conforme necessário
];
