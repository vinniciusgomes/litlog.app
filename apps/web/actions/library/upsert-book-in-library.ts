"use server";

import type { Book } from "@/models/book";
import { prisma } from "@/services/db";

/**
 * Upserts a book into the user's library. If the book does not exist in the database,
 * it will be created along with any new authors. The book is then added to the user's
 * library with a default status of "WANT_TO_READ".
 *
 * @param {Object} params - The parameters for upserting the book.
 * @param {Book} params.book - The book object containing its details and authors.
 * @param {string} params.userId - The ID of the user whose library the book is being upserted into.
 *
 * @returns {Promise<{ success: boolean, error?: any }>} A promise that resolves to an object
 * indicating the success of the operation and an optional error message.
 */
export async function upsertBookInLibrary({
  book,
  userId,
}: {
  book: Book;
  userId: string;
}) {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Verifica se o livro já existe
      let existingBook = await prisma.book.findUnique({
        where: { slug: book.slug },
      });

      if (!book.authors) {
        return { success: false };
      }

      if (!existingBook) {
        const authors = await Promise.all(
          book.authors.map(async (author) => {
            return prisma.author.upsert({
              where: { slug: author.name.toLowerCase().replace(/\s+/g, "-") },
              update: {},
              create: {
                name: author.name,
                slug: author.name.toLowerCase().replace(/\s+/g, "-"),
              },
            });
          })
        );

        // Cria o livro
        existingBook = await prisma.book.create({
          data: {
            slug: book.slug,
            title: book.title,
            subtitle: book.subtitle,
            description: book.description,
            isbn10: book.isbn10,
            isbn13: book.isbn13,
            language: book.language,
            pageCount: book.pageCount,
            publishedDate: book.publishedDate,
            publisher: book.publisher,
            physicalFormat: book.physicalFormat,
            cover: book.cover,
            authors: {
              connect: authors.map((author) => ({ id: author.id })),
            },
          },
        });
      }

      // Verifica se a library do usuário existe
      let userLibrary = await prisma.library.findUnique({
        where: { userId },
      });

      if (!userLibrary) {
        userLibrary = await prisma.library.create({
          data: { userId },
        });
      }

      // Adiciona o livro à library do usuário
      await prisma.libraryBook.upsert({
        where: {
          libraryId_bookId: {
            libraryId: userLibrary.id,
            bookId: existingBook.id,
          },
        },
        update: {},
        create: {
          libraryId: userLibrary.id,
          bookId: existingBook.id,
          status: "WANT_TO_READ", // Padrão, pode ser alterado conforme necessidade
        },
      });

      return { success: true };
    });

    return result;
  } catch (error) {
    console.error("Error adding book to library:", error);
    return { success: false, error: error };
  }
}
