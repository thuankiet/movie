import React from "react";
import MovieList from "../components/movie-list/MovieList";
import { category, movieType } from "../api/tmdbApi";

const Home = () => {
  return (
      <MovieList category={category.movie} type={movieType.popular} />
  );
};

export default Home;
