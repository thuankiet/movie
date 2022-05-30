import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import tmdbApi from "./../api/tmdbApi";
import MovieCard from "./../components/movie-card/MovieCard";

const Catalog = (props) => {
  const [items, setItems] = useState([]);
  const { movieType } = useParams();
  const params = {};

  useEffect(() => {
    const getMovieByType = async () => {
      const response = await tmdbApi.getMovieList(movieType, { params });
      setItems(response.results);
    };
    getMovieByType()
  });

  return (
    <div className="container">
      <div className="movie-list row">
        {items.map((item) => {
          return (
            <MovieCard key={item.id} item={item} category={props.category} />
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
