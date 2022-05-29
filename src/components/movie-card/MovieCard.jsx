import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import apiConfiguration from "../../api/apiConfiguration";
import { category } from "../../api/tmdbApi";
import "./MovieCard.css";


const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;

  return (
    <Card className="col-3 pl-2 pr-2">
      <Link to={link}>
        <Card.Img
          src={apiConfiguration.image(item.poster_path)}
          className="card-image"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default MovieCard;
