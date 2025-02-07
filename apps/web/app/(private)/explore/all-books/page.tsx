import { Metadata } from "next";

import AllBooksContent from "./components/all-books-content";

export const metadata: Metadata = {
  title: "Todos os Livros | LitLog",
  description: "Explore todos os livros disponíveis na plataforma LitLog",
};

export default function AllBooksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Todos os Livros</h1>
      <AllBooksContent />
    </div>
  );
}
