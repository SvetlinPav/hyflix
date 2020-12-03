import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import requests from "../../axios/requests";
import Loading from "../Loading-Component/Loading";
import "./Banner.css";
import { store } from "react-notifications-component";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchHyFlixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return movie < 1 ? (
    <Loading />
  ) : (
    <header
      className="banner"
      style={{
        bacgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name
            ? movie?.title || movie?.name || movie?.original_name
            : setTimeout(() => {
                store.addNotification({
                  title: "Page will be refreshed.",
                  message:
                    "We have to refresh the page because we couldn't get some data.",
                  type: "warning",
                  insert: "top",
                  container: "top-left",
                  animationIn: ["animate__animated", "animate__backInLeft"],
                  animationOut: ["animate__animated", "animate__backOutLeft"],
                  showIcon: true,
                  dismiss: {
                    duration: 4000,
                    onScreen: true,
                  },
                });
                setTimeout(() => {
                  window.location.reload();
                }, 3000);
              }, 1000)}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
