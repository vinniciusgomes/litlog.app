"use server";

import { prisma } from "@/services/db";

/**
 * Finds a library by user ID.
 *
 * @param userId The ID of the user to find the library for.
 * @returns The library associated with the user, or null if not found.
 */

export type GetLibraryResponse = Awaited<ReturnType<typeof getLibrary>>;

export async function getLibrary(userId: string) {
  console.log("Find library for userId:", userId);

  const library = await prisma.library.findFirst({
    where: {
      userId,
    },
    include: {
      books: {
        include: {
          book: {
            include: {
              authors: true,
            },
          },
        },
      },
    },
  });

  if (!library) {
    console.log("Biblioteca não encontrada para o userId:", userId);
  }

  return library;
}
