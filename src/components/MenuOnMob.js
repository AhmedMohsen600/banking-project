import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import goldLogo from "../img/goldLogo.png";
export default function MenuOnMob({
  opacity = "1",
  zIndex = "20",
  height = "10vh",
}) {
  const [toggle, setToggle] = useState(false);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const body = document.querySelector("body");
  const handelMenuMob = () => {
    setToggle(!toggle);
    body.style.overflow = `${toggle ? "" : "hidden"}`;
    line1.current.style.transform = `${
      toggle
        ? "rotateZ(0deg) translateY(0%) "
        : "rotateZ(45deg) translateY(200%) "
    }`;
    line2.current.style.transform = `${
      toggle
        ? "rotateZ(0deg) translateY(0%)"
        : "rotateZ(-45deg) translateY(-100%)"
    }`;
  };
  const closeMenu = () => {
    setToggle(false);
    body.style.overflow = "";
    line1.current.style.transform = "rotateZ(0deg)";
    line2.current.style.transform = "rotateZ(0deg)";
  };
  return (
    <div
      className="mom"
      style={{
        position: "sticky",
        top: "0",
        height: height,
        zIndex,
      }}
    >
      <nav
        style={{ opacity, transition: "opacity 0.5s ease" }}
        className="menu-mob"
      >
        <div className="logo-holder">
          <img src={goldLogo} alt="logo-dragon" />
        </div>
        <div onClick={handelMenuMob} className="burger-menu">
          <span ref={line1} className="burger-line1"></span>
          <span ref={line2} className="burger-line2"></span>
        </div>
        <div className={`nav-links ${toggle ? "nav-open" : ""}`}>
          <Link onClick={closeMenu} style={{ textDecoration: "none" }} to="/">
            <p>Home</p>
          </Link>
          <Link
            onClick={closeMenu}
            style={{ textDecoration: "none" }}
            to="/services"
          >
            <p>Services</p>
          </Link>
          <Link
            onClick={closeMenu}
            style={{ textDecoration: "none" }}
            to="/programme"
          >
            <p>Programs & creatifies</p>
          </Link>
          <Link
            onClick={closeMenu}
            style={{ textDecoration: "none" }}
            to="/about"
          >
            <p>About</p>
          </Link>
          <Link
            onClick={closeMenu}
            style={{ textDecoration: "none" }}
            to="/events"
          >
            <p>Events</p>
          </Link>
          <Link
            onClick={closeMenu}
            style={{ textDecoration: "none" }}
            to="/contact"
          >
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
