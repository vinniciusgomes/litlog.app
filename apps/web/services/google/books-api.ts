import axios, { AxiosResponse } from "axios";
import type { GoogleBookItem, GoogleBooksResponse } from "./types";

const GOOGLE_BOOKS_API_URL = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_URL;

/**
 * Fetches books from the Google Books API based on the provided search query.
 *
 * @param query - The search query string used to fetch books.
 * @returns A promise that resolves to an array of GoogleBookItem objects.
 * @throws Will throw an error if the search query is empty, no books are found,
 *         or if there is a failure in fetching books from the API.
 */
export const fetchBooks = async (query: string): Promise<GoogleBookItem[]> => {
  if (!query.trim()) {
    throw new Error("Search query cannot be empty");
  }

  try {
    const response: AxiosResponse<GoogleBooksResponse> = await axios.get(
      `${GOOGLE_BOOKS_API_URL}${encodeURIComponent(query)}`
    );

    const items = response.data.items;

    if (!items || items.length === 0) {
      throw new Error("No books found for the given query");
    }

    const books: GoogleBookItem[] = items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      authors: item.volumeInfo.authors || ["Unknown Author"],
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      description: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      pageCount: item.volumeInfo.pageCount,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      language: item.volumeInfo.language,
      previewLink: item.volumeInfo.previewLink,
      infoLink: item.volumeInfo.infoLink,
      buyLink: item.saleInfo?.buyLink,
      volumeInfo: item.volumeInfo,
      accessInfo: item.accessInfo,
      etag: item.etag,
      saleInfo: item.saleInfo,
      searchInfo: item.searchInfo,
      selfLink: item.selfLink,
      price: item.saleInfo?.listPrice
        ? {
            list: item.saleInfo.listPrice.amount,
            retail:
              item.saleInfo.retailPrice?.amount ||
              item.saleInfo.listPrice.amount,
            currency: item.saleInfo.listPrice.currencyCode,
          }
        : undefined,
    }));

    return books;
  } catch (error) {
    throw new Error(
      `Failed to fetch books: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};
