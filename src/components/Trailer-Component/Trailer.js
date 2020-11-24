import React from "react";
import "./Trailer.css";
import YouTube from "react-youtube";

function Trailer({ movieName, movieImg, movieOverview, trailerUrl }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const opts = {
    height: "420",
    width: "750px",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };
  return (
    <header
      className="trailer"
      style={{
        bacgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movieImg}"
    )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="trailer__contents">
        <h1 className="trailer__title">{movieName}</h1>

        <h1 className="trailer__description">{truncate(movieOverview, 125)}</h1>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </header>
  );
}

export default Trailer;
