import React from "react";

import frame from "../images/frame.png";

function About() {
  return (
    <div className="">
      <div className="about">
        <div className="about-me col-sm" id="bio">
          <p className="bio">
            My name is Lisa Pessin and I am a web developer based in Atlanta,
            GA. Starting off as a photographer many years ago, the digital world
            won me over early on. I have a BFA and MA in Photography from
            Savannah College of Art and Design, and I have been working as a
            Medical and Forensic Photographer for the past 12 years.
          </p>
          <p className="bio">
            I received my certificate in full-stack web development from the{' '}
            <a target="blank" href="https://bootcamp.pe.gatech.edu/coding/">
              Georgia Tech Coding Bootcamp
            </a>{' '}
            in July 2021. I am new to the web world, but I love creating
            user-friendly digital designs. I have some knowledge of the back-end
            stuff, but I have a serious passion for creating intuitive and
            dynamic front-end user experiences.
          </p>
          <p className="bio">
            Knowledge of: HTML, CSS, JavaScript, Bootstrap, API/JSON, MongoDB,
            Express, React, Node, MySQL, Git, GitHub, Heroku and Photoshop.
          </p>
        </div>

        <div className="about-me col-sm">
          <img src={frame} className="frame" alt="" id="frame-photo" />
        </div>
      </div>
      <div>
        <p className="footer-text" id="copyright">
          COPYRIGHT © LISA PESSIN 2021
        </p>
      </div>
    </div>
  );
}

export default About;
