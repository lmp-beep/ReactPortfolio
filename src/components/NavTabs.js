import React from "react";
import HoverImage from "react-hover-image";

import logo from "./images/LPlogo.png";
import github from "./images/github-logo1.png";
import githubHover from "./images/github-logo2.png";
import linkedin from "./images/linkedin-logo1.png";
import camera from "./images/photo-camera1.png";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="navbar">
          <ul>
            <a
              className="navbar"
              id="portfolio"
              href="#home"
              onClick={() => handlePageChange("home")}
              className={
                currentPage === "home" ? "nav-link active" : "nav-link"
              }
            >
              PORTFOLIO
            </a>
            <a
              className="navbar"
              id="about"
              href="#about"
              onClick={() => handlePageChange("about")}
              className={
                currentPage === "about" ? "nav-link active" : "nav-link"
              }
            >
              ABOUT
            </a>
            <a
              className="navbar"
              id="contact"
              href="#contact"
              onClick={() => handlePageChange("contact")}
              className={
                currentPage === "contact" ? "nav-link active" : "nav-link"
              }
            >
              CONTACT
            </a>
          </ul>
        </div>
      </header>

      <div className="main">
        <div className="sidenav">
          <a href="https://github.com/lmp-beep" target="blank">
            <img id="github" src={github} alt=""></img>
            {/* <HoverImage id="github" src={github} hoverSrc={githubHover}></HoverImage> */}
          </a>
          <a href="https://www.linkedin.com/in/lisa-pessin/" target="blank">
            <img id="linkedin" src={linkedin} alt=""></img>
            
          </a>
          <a
            href="https://lmp-beep.github.io/PhotographyPortfolio/"
            target="blank"
          >
            <img id="photo" src={camera} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
