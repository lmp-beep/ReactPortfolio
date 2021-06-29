import logo from "./LPlogo.png";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import camera from "./camera-fill.svg";

import newsFlashThumb from "./newsFlash.jpg";
import vaBackThumb from "./vaBack.jpg";
import placeholderThumb from "./placeholder.jpg";

import "./App.css";

function App() {
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

      <div className="grid">
        <div className="row hide-portfolio">
          <figure class="effect-bubba">
            <img src={newsFlashThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>NEWS FLASH</h2>
              </figcaption>
            </a>
          </figure>

          <figure class="effect-bubba">
            <img src={vaBackThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>MEDICAL MEDIA SHAREPOINT</h2>
              </figcaption>
            </a>
          </figure>

          <figure class="effect-bubba">
            <img src={placeholderThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>PLACEHOLDER</h2>
              </figcaption>
            </a>
          </figure>

          <figure class="effect-bubba">
            <img src={placeholderThumb} className="thumbnail" alt="" />
            <a href="">
              <figcaption>
                <h2>PLACEHOLDER</h2>
              </figcaption>
            </a>
          </figure>

          
        </div>
      </div>

      <footer class="footer mt-auto py-4">
        <div>
          <p class="footer-text" id="copyright">
            COPYRIGHT © LISA PESSIN 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
