/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";


const siteProps = {
  name: "Hamit Sehjal",
  title: "Software Engineer",
  email: "hamitsehjal26@gmail.com",
  gitHub: "hamitsehjal",
  instagram: "hamit_sehjal/",
  linkedIn: "hamitsehjal",
  medium: "",
  twitter: "SehjalHamit",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Experience />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
