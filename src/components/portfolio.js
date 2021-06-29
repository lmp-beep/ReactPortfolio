import React from "react";

import newsFlashThumb from "./images/newsFlash.jpg";
import vaBackThumb from "./images/vaBack.jpg";
import placeholderThumb from "./images/placeholder.jpg";

function Portfolio() {
  return (
    <div className="App">
      <div className="grid">
        <div className="row hide-portfolio">
          <figure className="effect-bubba">
            <img src={newsFlashThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>NEWS FLASH</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={vaBackThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>MEDICAL MEDIA SHAREPOINT</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={placeholderThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>PLACEHOLDER</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={placeholderThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>PLACEHOLDER</h2>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
