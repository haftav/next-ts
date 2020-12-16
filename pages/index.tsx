import * as React from "react";
import Head from "next/head";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";
import Layout from "../components/Layout";
import {Item, Movie, Book} from '../models';

const initialState: Item[] = [
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    image:
      "https://a.ltrbxd.com/resized/film-poster/5/1/8/1/8/51818-the-godfather-0-230-0-345-crop.jpg?k=9576b36051",
  },
  {
    title: "Moonrise Kingdom",
    director: "Wes Anderson",
    image:
      "https://a.ltrbxd.com/resized/sm/upload/v5/7f/mn/y8/ysTohGF7NY9Z6MYz9vLNYiyzh0r-0-230-0-345-crop.jpg?k=1f946407f7",
  },
  {
    title: "Ex Machina",
    director: "Alex Garland",
    image:
      "https://a.ltrbxd.com/resized/film-poster/1/8/7/9/8/6/187986-ex-machina-0-230-0-345-crop.jpg?k=c7ab793a16",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    datePublished: 'Oct 10, 1934',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
  }
];

function isMovie(item: Item): item is Movie {
  return (item as Movie).director !== undefined;
}

function isBook(item: Item): item is Book {
  return (item as Book).author !== undefined;
}

function getCardComponent(item: Item): JSX.Element | null {
  const commonProps = {
    key: item.title,
  }
  if (isMovie(item)) {
    return <MovieCard {...commonProps} movie={item} />;
  }
  if (isBook(item)) {
    return <BookCard {...commonProps} book={item} />;
  }

  return null;
}

export default function Home() {
  const [items, setItems] = React.useState(initialState);

  const [title, setTitle] = React.useState("");
  const [director, setDirector] = React.useState("");
  const [image, setImage] = React.useState("");

  const resetInputState = () => {
    setTitle("");
    setDirector("");
    setImage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextMovies = [...items, { title, director, image }];
    setItems(nextMovies);

    resetInputState();
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Movie Store</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          id="director"
          onChange={(e) => setDirector(e.target.value)}
          value={director}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <button type="submit">Add</button>
      </form>
      {items.map((item) => getCardComponent(item))}
    </Layout>
  );
}
