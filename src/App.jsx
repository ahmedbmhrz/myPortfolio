import React from "react";
import Navbar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/myWork/myWork";
import Conect from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// github
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Conect />
      <Footer />
    </div>
  )
}

export default App