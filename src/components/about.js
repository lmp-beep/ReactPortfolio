import React from "react";

import frame from "./images/frame.png";

function About() {
  return (
    <div className="">
      <div className="about">

        <div className="about-me col-sm" id="bio">
          <p className="bio">
            My name is Lisa Pessin and I am a web developer based in Atlanta,
            GA. Starting off as a photographer many years ago, the digital world
            won me over early on. I am new to the web world, but I love creating
            user-friendly digital designs.
          </p>
          <p className="bio">
            I have some knowledge of the back-end stuff, but I have a serious
            passion for creating intuitive and dynamic front-end user
            experiences.
          </p>
          <p className="bio">
            Knowledge of: CSS, HTML, JavaScript, Bootstrap, API/JSON, MongoDB,
            Express, React, Node, MySQL, GitHub, Heroku and Photoshop.
          </p>
        </div>

        <div className="about-me col-sm">
          <img src={frame} className="frame" alt="" id="frame-photo" />
        </div>

      </div>
    </div>
  );
}

export default About;
