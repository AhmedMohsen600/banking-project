import React, { useRef } from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HeroSectionHome = () => {
  const buttonRef = useRef(null);

  const onMouseOver = () => {
    buttonRef.current.style.transform = "translateX(5px)";
  };
  function onMouseOut() {
    buttonRef.current.style.transform = "translateX(0px)";
  }

  const handelScrollDown = () => {
    const koko = document.getElementById("super");
    window.scrollTo({
      top: koko.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-home">
      <div id="overlay"></div>
      <div className="hero-logo">
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
          <Link className="pages-link" to="/services">
            <p className="link">Services</p>
          </Link>
          <Link className="pages-link" to="/programme">
            <p className="link">Programs & creatifies</p>
          </Link>
          <Link className="pages-link" to="/about">
            <p className="link">About</p>
          </Link>
          <Link className="pages-link" to="/events">
            <p className="link">Events</p>
          </Link>
          <Link className="pages-link" to="/contact">
            <p className="link">Contact</p>
          </Link>
        </div>
        <p onClick={handelScrollDown} className="scroll-down">
          Scroll down <FontAwesomeIcon icon={faAngleDown} size="sm" />
        </p>
      </div>
      <div className="hero-info">
        <header>
          <h1 className="on-desktop">
            The Clear and <br /> effcient way <br /> to be a banker.
          </h1>
        </header>
        <Link to="/services">
          <button
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            className="enroll-btn"
          >
            Enroll now
            <span className="right-arrow" ref={buttonRef}>
              <FontAwesomeIcon
                className="right-arrow"
                icon={faArrowRight}
                size="1x"
                color="#064875"
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionHome;
