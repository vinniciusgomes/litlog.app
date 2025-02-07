"use server";

import type { Book } from "@/models/book";
import { prisma } from "@/services/db";

/**
 * Creates a new book record in the database if it doesn't already exist.
 * If a book with the same slug exists, it returns the existing book instead.
 *
 * @param {Book} data - The book data to be stored, including details such as title,
 * description, authors, and publication information.
 *
 * @returns {Promise<Book>} A promise that resolves with the existing or newly created book.
 */
export async function createBook(data: Book) {
  let book = await prisma.book.findUnique({
    where: { slug: data.slug },
  });

  if (book) {
    return book;
  }

  await prisma.book.create({
    data: {
      cover: data.cover,
      description: data.description,
      isbn10: data.isbn10,
      isbn13: data.isbn13,
      language: data.language,
      pageCount: data.pageCount,
      physicalFormat: data.physicalFormat,
      publishedDate: data.publishedDate,
      publisher: data.publisher,
      slug: data.slug,
      title: data.title,
      authors: {
        create: data.authors?.map((author) => ({
          name: author.name,
          slug: author.slug,
        })),
      },
    },
  });

  book = await prisma.book.findUnique({
    where: { slug: data.slug },
  });

  return book;
}
