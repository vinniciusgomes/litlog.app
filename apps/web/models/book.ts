import type {
  Author as AuthorPrisma,
  Book as BookPrisma,
  GoalBook as GoalBookPrisma,
  LibraryBook as LibraryBookPrisma,
  Loan as LoanPrisma,
  ShelfBook as ShelfBookPrisma,
} from "@prisma/client";

export interface Book extends BookPrisma {
  authors?: AuthorPrisma[];
  libraryBooks?: LibraryBookPrisma[];
  loans?: LoanPrisma[];
  shelfBooks?: ShelfBookPrisma[];
  goalBooks?: GoalBookPrisma[];
}

export type BookStatus = "reading" | "finished" | "wantToRead";
