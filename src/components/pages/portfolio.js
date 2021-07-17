import React from "react";

import github from "../images/github-logo1.png";
import linkedin from "../images/linkedin-logo1.png";
import camera from "../images/photo-camera1.png";

import newsFlashThumb from "../images/newsFlash.jpg";
import vaBackThumb from "../images/vaBack.jpg";
import myPhotos from "../images/myPhotos.jpg";
import placeholderThumb from "../images/placeholder.jpg";

function Portfolio() {
  return (
    <div className="App">
      <div className="grid">
        <div className="row hide-portfolio">
          <figure className="effect-bubba">
            <img src={newsFlashThumb} className="thumbnail" alt="" />
            <a href="portfolio#portfolioNewsFlash">
              <figcaption>
                <h2>NEWS FLASH</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={vaBackThumb} className="thumbnail" alt="" />
            <a href="#portfolioVA">
              <figcaption>
                <h2>MEDICAL MEDIA SHAREPOINT</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={myPhotos} className="thumbnail" alt="" />
            <a href="#portfolioMyPhotos">
              <figcaption>
                <h2>LISA PESSIN PHOTOGRAPHY</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={placeholderThumb} className="thumbnail" alt="" />
            <a href="#portfolioPlaceholder">
              <figcaption>
                <h2>Portfolio Placeholder</h2>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
      <div className="sidenav">
        <a href="https://github.com/lmp-beep" target="blank">
          <img id="github" src={github} alt=""></img>
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
  );
}

export default Portfolio;
