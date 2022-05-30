import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import tmdbApi from "../../api/tmdbApi";
import Error from "../error/Error";

import "./MovieList.css";
import MovieCard from "../movie-card/MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const params = {};

  useEffect(() => {
    const getList = async () => {
      let response = await tmdbApi.getMovieList(props.type, { params });
      setItems(response.results);
    };
    getList().catch(function (e) {
      setErrorMessage(e.response.data.status_message);
      setErrorCode(e.response.status);
    });
  }, []);

  const getMovieComponent = () => {
    console.log(1)
    if (errorMessage) {
      return <Error status={errorCode} message={errorMessage} />;
    } else {
      return (
        <div className="container">
          <div className="movie-list row">
            {items.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  item={item}
                  category={props.category}
                />
              );
            })}
          </div>
        </div>
      );
    }
  };

  return getMovieComponent();
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
