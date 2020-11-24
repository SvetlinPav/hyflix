import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import { store } from "react-notifications-component";
import Trailer from "../Trailer-Component/Trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieName, setmovieName] = useState();
  const [movieImg, setmovieImg] = useState();
  const [movieOverview, setmovieOverview] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const noTrailerAlert = () => {
    store.addNotification({
      title: "Something went wrong.",
      message: "Sorry we couldn't find the trailer for this movie.",
      type: "danger",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__backInRight"],
      animationOut: ["animate__animated", "animate__backOutRight"],
      showIcon: true,
      dismiss: {
        duration: 4000,
        onScreen: true,
      },
    });
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setmovieName(movie.title || movie.name || movie.original_name);
          setmovieImg(movie.backdrop_path);
          setmovieOverview(movie.overview);
        })
        .catch((error) => noTrailerAlert());
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        ;
      </div>
      {trailerUrl ? (
        <Trailer
          trailerUrl={trailerUrl}
          movieName={movieName}
          movieImg={movieImg}
          movieOverview={movieOverview}
        />
      ) : null}
    </div>
  );
}

export default Row;
