import React, { PureComponent } from "react";
import "./About.css";
import fireAbout from "../../assets/fire-About.png";
import draAbout from "../../assets/dragon-About.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={fireAbout} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="imgAbout" src={draAbout} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              This program is designed for developers who want to excel in both
              front-end development and C++. It provides hands-on experience
              with modern web technologies such as HTML, CSS, and JavaScript,
              along with in-depth knowledge of C++ for building efficient and
              high-performance applications.
            </p>
            <p>
              Whether you're looking to master UI/UX design, responsive web
              development, or advanced C++ programming concepts like data
              structures, algorithms, and system-level programming, this program
              offers the perfect blend of both worlds.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
