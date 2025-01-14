export type Book = {
  id: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  link: string;
  status: string;
};

export type BookStatus = "reading" | "finished" | "wantToRead";