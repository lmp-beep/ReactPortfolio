import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <div>
      <p>
        Splash Page
        <Link to="/portfolio">ENTER</Link>
      </p>
    </div>
  );
}

export default Splash;
