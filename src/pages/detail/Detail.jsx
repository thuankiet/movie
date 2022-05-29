import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfiguration from "../../api/apiConfiguration";
import tmdbApi from "../../api/tmdbApi";
import "./Detail.css";
import CastList from "./CastList";
import Error from "../../components/error/Error";

const Detail = (props) => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
    };
    getDetail().catch(function (e) {
      if (e) {
        setErrorCode(e.response.status);
        setErrorMessage(e.response.data.status_message);
      }
    });
  }, [category, id]);

  const getDetailComponent = () => {
    if (errorMessage) {
      return <Error status={errorCode} message={errorMessage} />;
    } else {
      return (
        <>
          {item && (
            <div
              className="banner"
              style={{
                backgroundImage: `url(${apiConfiguration.originalImage(
                  item.backdrop_path || item.poster_path
                )})`,
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row detail-content">
                    <h1 className="col-12">{item.title}</h1>
                    <div className="col-12 genres row">
                      {item.genres.map((genre) => {
                        return (
                          <div
                            key={genre.id}
                            className="col-5 col-lg-2 genre-item"
                          >
                            {genre.name}
                          </div>
                        );
                      })}
                    </div>
                    <p className="col-12">{item.overview}</p>
                    <div>
                      <h2>Casts</h2>
                      <CastList id={item.id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
  };

  return getDetailComponent();
};

export default Detail;
