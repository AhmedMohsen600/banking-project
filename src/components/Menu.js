import React, { useState, useRef } from "react";
import logo from "../img/logo.png";
import goldLogo from "../img/goldLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Menu = React.memo(({ menuPosition = "fixed" }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const imgElement = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const handelMenuClick = () => {
    setToggleMenu(!toggleMenu);
    imgElement.current.style.opacity = `${toggleMenu ? "1" : "0"}`;
    line1.current.style.transform = `${
      toggleMenu
        ? "rotateZ(0deg) translateX(0%)"
        : "rotateZ(45deg) translateX(300%)"
    }`;
    line2.current.style.transform = `${
      toggleMenu
        ? "rotateZ(0deg) translateX(0%)"
        : "rotateZ(-45deg) translateX(-500%)"
    }`;
  };
  return (
    <div
      className={`menu ${toggleMenu ? "open" : "close"}`}
      style={{ position: menuPosition }}
    >
      <div className="menu-info">
        <img className="logo" src={logo} alt="logo" />
        <div className="menu-links">
          <Link className="pages-link" to="/">
            <p className="link">Home</p>
          </Link>
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
        <button className="enroll-btn">
          Enroll now
          <FontAwesomeIcon
            className="right-arrow"
            icon={faArrowRight}
            size="1x"
            color="#064875"
          />
        </button>
      </div>
      <div onClick={handelMenuClick} className="menu-toggle">
        <img
          className="toggle-img"
          ref={imgElement}
          src={goldLogo}
          alt="logo"
        />
        <div className="burger">
          <span ref={line1} className="line1"></span>
          <span ref={line2} className="line2"></span>
        </div>
        <h4>Menu</h4>
      </div>
    </div>
  );
});

export default React.memo(Menu);
