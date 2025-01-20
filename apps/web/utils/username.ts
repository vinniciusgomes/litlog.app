/**
 * Formats a string as an  username.
 *
 * This function takes a string, removes invalid characters, trims periods
 * from the start and end, and ensures the resulting string is between
 * 1 and 30 characters. If the resulting string does not meet these
 * criteria, an Error is returned instead.
 *
 * @param username - The string to format as an username.
 * @returns The formatted username as a string, or an Error if the input
 * does not meet the criteria.
 */
export function formatUsername(username: string): string | Error {
  // Remove all invalid characters (keeping letters, numbers, underscores, and periods)
  let formattedUsername = username.replace(/[^a-zA-Z0-9._]/g, "");

  // Replace multiple consecutive periods with a single one
  formattedUsername = formattedUsername.replace(/\.{2,}/g, ".");

  // Trim periods from the start and end
  formattedUsername = formattedUsername.replace(/^\.|\.$/g, "");

  // Ensure the username length is between 1 and 30 characters
  if (formattedUsername.length < 1 || formattedUsername.length > 30) {
    return new Error("Username must be between 1 and 30 characters.");
  }

  return formattedUsername;
}
