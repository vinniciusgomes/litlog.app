import type { Book } from "@/models/book";
import type { GoogleBookItem } from "@/services/google/types";
import { createSlug } from "@/utils/create-slug";
import type { Author } from "@prisma/client";

/**
 * Takes a Google Book item and maps it to our Book model.
 * @param book A Google Book item
 * @returns A Book model
 */
export function googleBookToBook(book: GoogleBookItem): Book {
  const bookInfo = book.volumeInfo;

  const authors = bookInfo.authors?.map((author) => ({
    name: author,
    slug: createSlug(author),
  }));

  return {
    cover: bookInfo.imageLinks?.thumbnail || "",
    title: bookInfo.title || "",
    authors: authors as Author[],
    id: book.id,
    isbn10:
      bookInfo.industryIdentifiers?.find(
        (identifier) => identifier.type === "ISBN_10"
      )?.identifier || "",
    description: bookInfo.description || "",
    isbn13:
      bookInfo.industryIdentifiers?.find(
        (identifier) => identifier.type === "ISBN_13"
      )?.identifier || "",
    language: bookInfo.language || "",
    pageCount: bookInfo.pageCount || 0,
    physicalFormat: bookInfo.printType || "",
    publisher: bookInfo.publisher || "",
    publishedDate: new Date(bookInfo.publishedDate || ""),
    subtitle: bookInfo.subtitle || "",
    slug: createSlug((bookInfo.title || "") + " " + (authors?.[0]?.name || "")),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
