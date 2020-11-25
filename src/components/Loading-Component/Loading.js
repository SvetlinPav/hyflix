import React from "react";
import HyLogo from "../Nav-Component/hyflixlogo.png";
import LoadingSpinner from "./loader.svg";
import "./Loading.css";

function Loading() {
  return (
    <div className="loader">
      <img className="loadingLogo" src={HyLogo} alt="Hyflix Logo" />
      <img className="loadingSpinner" src={LoadingSpinner} alt="Loading.." />
    </div>
  );
}

export default Loading;
