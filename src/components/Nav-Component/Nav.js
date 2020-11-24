import React, { useState, useEffect } from "react";
import HyLogo from "./hyflixlogo.png";
import ProfileAvatar from "./profileavatar.jpg";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__solid"}`}>
      <a href="#">
        <img src={HyLogo} alt="Hyflix Logo" className="nav__logo" />
      </a>
      <img src={ProfileAvatar} alt="Hyflix Avatar" className="nav__avatar" />
    </div>
  );
}

export default Nav;
