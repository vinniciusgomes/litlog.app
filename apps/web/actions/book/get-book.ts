"use server";

import { prisma } from "@/services/db";

export type GetLibraryResponse = Awaited<ReturnType<typeof getBookBySlug>>;

/**
 * Finds a book by its slug.
 *
 * @param slug The slug of the book to find.
 *
 * @returns The book found, or null if not found.
 */
export async function getBookBySlug(slug: string) {
  console.log("Find book by slug:", slug);

  const library = await prisma.book.findFirst({
    where: {
      slug,
    },
    include: {
      authors: true,
    },
  });

  if (!library) {
    console.log("Livro não encontrado para o slug:", slug);
  }

  return library;
}
