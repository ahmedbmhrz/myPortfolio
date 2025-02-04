import React, { PureComponent } from "react";
import "./Hero.css";
import dragon from "../../assets/dragon.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="dra" src={dragon} alt="" />
      <h1>
        <span>I'm Ahmed Bamuhriz,</span> Programer
      </h1>
      <p>Motivated young programmer seeking experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
