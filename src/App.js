import React from "react";

import "./App.css";

import Header from "./components/header";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Portfolio />
      </div>

      {/* <div>
        <About/>
      </div> */}

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
