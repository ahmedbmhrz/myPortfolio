import React from "react";
import "./NavBar.css";
import dragon from "../../assets/dragon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="dra" src={dragon} alt="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
