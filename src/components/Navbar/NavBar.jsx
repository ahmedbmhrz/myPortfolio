import React from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
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
