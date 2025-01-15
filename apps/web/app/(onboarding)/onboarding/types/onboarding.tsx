export type Genre =
  | "Romance"
  | "Ficção"
  | "Não-ficção"
  | "Mistério"
  | "Fantasia"
  | "Sci-Fi";

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: Genre;
}

export interface OnboardingData {
  preferences: Genre[];
  favoriteBooks: string[];
}
