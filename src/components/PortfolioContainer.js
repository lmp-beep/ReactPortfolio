import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// import Splash from "./pages/splash";
import NavTabs from "./Navbar";
// import Footer from "./Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import PortfolioNewsFlash from "./pages/portfolioNewsFlash";
import PortfolioVA from "./pages/portfolioVA";
import PortfolioMyPhotos from "./pages/portfolioMyPhotos";
import PortfolioBookSearch from "./pages/portfolioBookSearch";

export default function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolioNewsFlash">
              <PortfolioNewsFlash />
            </Route>
            <Route exact path="/portfolioVA">
              <PortfolioVA />
            </Route>
            <Route exact path="/portfolioMyPhotos">
              <PortfolioMyPhotos />
            </Route>
            <Route exact path="/portfolioBookSearch">
              <PortfolioBookSearch />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}