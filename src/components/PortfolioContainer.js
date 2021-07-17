import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Splash from "./pages/splash";
import NavTabs from "./Navbar";
// import Footer from "./Footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";

import PortfolioNewsFlash from "./pages/portfolioNewsFlash";
import PortfolioVA from "./pages/portfolioVA";
import PortfolioMyPhotos from "./pages/portfolioMyPhotos";
import PortfolioPlaceholder from "./pages/portfolioPlaceholder";

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(false);
  const { hash } = window.location;

  useEffect(() => {
    if (hash.length <= 2) {
      setShowLandingPage(true);
    } else {
      setShowLandingPage(false);
    }
  });

  return (
    <Router>
      <div>
        <NavTabs />
        <div>
          <Switch>
            <Route exact path="/">
              {showLandingPage ? <Splash /> : <Portfolio />}
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            {/* <Route exact path="/home">
              <Home />
            </Route> */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio#portfolioNewsFlash">
              <PortfolioNewsFlash />
            </Route>
            <Route exact path="/portfolioVA">
              <PortfolioVA />
            </Route>
            <Route exact path="/portfolioMyPhotos">
              <PortfolioMyPhotos />
            </Route>
            <Route exact path="/portfolioPlaceholder">
              <PortfolioPlaceholder />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
export default App;
