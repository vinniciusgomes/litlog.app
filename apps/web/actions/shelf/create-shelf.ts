"use server";

import { prisma } from "@/services/db";

interface CreateShelfData {
  name: string;
  description?: string;
  userId: string;
}

/**
 * Creates a new shelf for a given user.
 *
 * @param {CreateShelfData} data - The data to create the shelf with.
 * @param {string} data.name - The name of the shelf.
 * @param {string} [data.description] - The description of the shelf.
 * @param {string} data.userId - The ID of the user that is creating the shelf.
 *
 * @returns {Promise<{ error: string | null, data: { id: string, name: string, description: string | null, userId: string } | null }>}
 *
 * @throws {Error} If there is a problem with the database.
 */
export async function createShelf(data: CreateShelfData) {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const shelf = await prisma.shelf.create({
        data: {
          name: data.name,
          description: data.description,
          userId: data.userId,
        },
      });

      return {
        error: null,
        data: shelf,
      };
    });

    return {
      error: result.error,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      error: error instanceof Error ? error.message : "An error occurred",
      data: null,
    };
  }
}
