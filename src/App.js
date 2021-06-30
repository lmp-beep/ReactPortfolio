import React from "react";

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import Test from "./components/test";


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      {/* <div>
        <Portfolio />
      </div> */}

      {/* <div>
        <About/>
      </div> */}

      <div>
        <ContactForm/>
      </div>

      {/* <div>
        <Test/>
      </div> */}

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
