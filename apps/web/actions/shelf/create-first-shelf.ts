"use server";

import { prisma } from "@/services/db";

export async function createFirstShelf(userId: string) {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const shelf = await prisma.shelf.create({
        data: {
          name: "My Shelf",
          description: "This is my first shelf",
          userId,
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
