"use server";

import { prisma } from "@/services/db";

/**
 * Creates a new library for a specific user in the database.
 *
 * @param {string} userId - The ID of the user for whom the library is being created.
 *
 * @returns {Promise<void>} A promise that resolves when the library is successfully created.
 */

export async function createLibrary(userId: string) {
  await prisma.library.create({
    data: {
      userId,
    },
  });
}
