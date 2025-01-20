export interface GoogleBookItem {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  categories?: string[];
  pageCount?: number;
  thumbnail?: string;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  buyLink?: string;
  price?: {
    list: number;
    retail: number;
    currency: string;
  };
}

export interface GoogleBooksResponse {
  kind: string;
  totalItems: number;
  items?: Array<{
    id: string;
    volumeInfo: {
      title: string;
      subtitle?: string;
      authors?: string[];
      publisher?: string;
      publishedDate?: string;
      description?: string;
      categories?: string[];
      pageCount?: number;
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
      language?: string;
      previewLink?: string;
      infoLink?: string;
    };
    saleInfo?: {
      listPrice?: {
        amount: number;
        currencyCode: string;
      };
      retailPrice?: {
        amount: number;
        currencyCode: string;
      };
      buyLink?: string;
    };
  }>;
}
