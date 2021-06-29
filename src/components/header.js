import React from "react";

import logo from "./images/LPlogo.png";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import camera from "./images/camera-fill.svg";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="navbar">
          <ul>
            <a className="navbar" id="portfolio" href="#Portfolio">
              PORTFOLIO
            </a>
            <a className="navbar" id="about" href="#About">
              ABOUT
            </a>
            <a className="navbar" id="contact" href="#Contact">
              CONTACT
            </a>
          </ul>
        </div>
      </header>

      <div className="main">
        <div className="sidenav">
          <a href="https://github.com/lmp-beep" target="blank">
            <img id="github" src={github} alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/lisa-pessin/" target="blank">
            <img id="linkedin" src={linkedin} alt=""></img>
          </a>
          <a
            href="https://lmp-beep.github.io/PhotographyPortfolio/p"
            target="blank"
          >
            <img id="photo" src={camera} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
