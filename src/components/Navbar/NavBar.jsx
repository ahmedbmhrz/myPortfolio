import React , {useState} from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo.png";
import fire_long from "../../assets/fire-long.png"
const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="nav-menu">
        <li><p>Home</p></li>
        <li><p>About Me</p></li>
        <li><p>Services</p></li>
        <li><p>Portfolio</p></li>
        <li><p>Contact</p></li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
