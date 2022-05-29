import React, {Suspense} from "react";
// import MovieList from "../components/movie-list/MovieList";

import { category, movieType } from "../api/tmdbApi";

const Home = () => {
  const MovieList = React.lazy(() => import('../components/movie-list/MovieList')); 
  return (
    <Suspense fallback={<h1>Loading data....</h1>}>
      <MovieList category={category.movie} type={movieType.popular} />
    </Suspense>
  );
};

export default Home;
