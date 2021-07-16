import React from "react";

import newsFlashBanner4 from "../images/newsFlashBanner4.jpg";
import newsFlashMonitor from "../images/newsFlashMonitor.jpg";
import newsFlashScreenshot from "../images/newsFlashScreenshot.jpg";
import arrowLeft from "../images/chevron-left.svg";
import arrowRight from "../images/chevron-right.svg";
import grid from "../images/grid-3x3-gap-fill.svg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function PortfolioNewsFlash() {
  return (
    <div>
      <Navbar className="portfolio-sidenav">
        <Nav>
          <Nav.Link as={Link} to="/portfolioVA">
            <img
              src={arrowRight}
              className="port-sidenav"
              id="right-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolioBookSearch">
            <img
              src={arrowLeft}
              className="port-sidenav"
              id="left-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/home">
            <img src={grid} className="port-sidenav" id="grid" alt="" />
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="body-info">
        <div>
          <img src={newsFlashBanner4} className="header-image" alt="" />
        </div>

        <div class="visit-btns">
          <a
            href="https://lmp-beep.github.io/07-Project1-MyNews/"
            target="blank"
          >
            <button class="visit-button" id="visit-website">
              VISIT WEBSITE
            </button>
          </a>
          <br></br>
          <br></br>
          <a
            href="https://github.com/lmp-beep/07-Project1-MyNews"
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
            News Flash is a news aggregator that uses Javascript Fetch to
            Request current news stories from the New York Times public API. The
            JSON Response is then extracted to provide the user with a photo,
            headline and abstract of each story. If the user clicks on the story
            card, they are taken to the full story at the News York Times
            website. The user can choose to read stories from US News, World
            News, Sports, Travel and Health. A carousel of the dominant story
            from each category is at the top of the page, while several smaller
            cards of other news stories fill the rest of the page.
          </p>

          <p className="description">
            Technologies Used: HTML, CSS, Bootstrap, Javascript, JQuery, Fetch,
            API/JSON
          </p>
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={newsFlashMonitor} className="image-monitor" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={newsFlashScreenshot} className="image-screenshot" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioNewsFlash;
