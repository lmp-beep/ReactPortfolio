import React from "react";

import myPhotosBanner from "../images/myPhotosBanner.jpg";
import myPhotosMonitor from "../images/myPhotosMonitor.jpg";
// import Screenshot from "../images/";

import arrowLeft from "../images/chevron-left.svg";
import arrowRight from "../images/chevron-right.svg";
import grid from "../images/grid-3x3-gap-fill.svg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function PortfolioMyPhotos() {
  return (
    <div>
      <Navbar className="portfolio-sidenav">
        <Nav>
          <Nav.Link as={Link} to="/portfolioPlaceholder">
            <img
              src={arrowRight}
              className="port-sidenav"
              id="right-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolioVA">
            <img
              src={arrowLeft}
              className="port-sidenav"
              id="left-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolio">
            <img src={grid} className="port-sidenav" id="grid" alt="" />
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="body-info">
        <div>
          <img src={myPhotosBanner} className="header-image" alt="" />
        </div>

        <div class="visit-btns">
          <a
            href="https://lmp-beep.github.io/PhotographyPortfolio/"
            target="blank"
          >
            <button class="visit-button" id="visit-website">
              VISIT WEBSITE
            </button>
          </a>
          <br></br>
          <br></br>
          <a
            href="https://github.com/lmp-beep/PhotographyPortfolio"
            target="blank"
          >
            <button class="visit-button" id="visit-github">
              VISIT GITHUB REPO
            </button>
          </a>
        </div>

        <br></br>

        <div className="description">
          <p>
            Description
          </p>

          <p className="description">
            Technologies Used: 
          </p>
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={myPhotosMonitor} className="image-monitor" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          {/* <img src={Screenshot} className="image-screenshot" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioMyPhotos;
