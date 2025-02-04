import React , {useState} from "react";
import "./NavBar.css";
import Logo from "../../assets/Logo.png";
import fire_long from "../../assets/fire-long.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="nav-menu">
        <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={() => setMenu("home")} >Home</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
