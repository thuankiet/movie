import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfiguration from "../../api/apiConfiguration";
import tmdbApi from "../../api/tmdbApi";
import dummyPic from '../../assets/dummy-pic.png';

const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  const getProfilePath = (profilePath) => {
    if (profilePath) {
      return (
        <div
          className="profile-path"
          style={{
            backgroundImage: `url(${apiConfiguration.image(
              profilePath
            )})`,
          }}
        ></div>
      );
    } else {
      return (
        <div
          className="profile-path"
          style={{
            backgroundImage: `url(${dummyPic})`
          }}
        ></div>
      );
    }
  };

  return (
    <div className="wrap-casts">
      {casts.map((item, i) => {
        return (
          <div key={i}>
            {getProfilePath(item.profile_path)}
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CastList;
