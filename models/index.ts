export interface Movie {
  title: string;
  director: string;
  image: string;
  
}

export interface Book {
  title: string;
  author: string;
  image: string;
  datePublished: string;
}

export type Item = Movie | Book;