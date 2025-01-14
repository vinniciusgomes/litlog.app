import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Concatenates a list of class names and merges Tailwind CSS classes.
 *
 * @param inputs - An array of class values that can be strings or objects.
 * @returns A string of concatenated and merged class names.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
