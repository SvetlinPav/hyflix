import React from "react";
import Row from "./components/Row-Component/Row";
import "./App.css";
import requests from "./axios/requests";
import Banner from "./components/Banner-Component/Banner";
import Nav from "./components/Nav-Component/Nav";

import ReactNotification from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import Loading from "./components/Loading-Component/Loading";

const App = () => {
  return (
    <div className="App">
      <ReactNotification />
      <Nav />
      <Banner />
      <Row
        title="HYFLIX ORIGINALS"
        fetchUrl={requests.fetchHyFlixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default App;
