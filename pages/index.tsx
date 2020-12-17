import * as React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { Movie } from "../models";

const initialState: Movie[] = [
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
];

export default function Home() {
  const [movies, setMovies] = React.useState(initialState);

  const [title, setTitle] = React.useState("");
  const [director, setDirector] = React.useState("");
  const [image, setImage] = React.useState("");

  const resetState = () => {
    setTitle("");
    setDirector("");
    setImage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMovies((prevState) => [
      ...prevState,
      {
        title,
        director,
        image,
      },
    ]);
    resetState();
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hi There</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Add</button>
      </form>
      {movies.map((movie) => (
        <Card key={movie.title} movie={movie} />
      ))}
    </Layout>
  );
}
