/**
 * Creates a slug from a given value.
 *
 * This function takes a string and lowercases it, replaces spaces with dashes, and removes any non-word characters.
 *
 * @example
 * createSlug("Hello World") // "hello-world"
 * createSlug("This is a test!") // "this-is-a-test"
 */
export function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
