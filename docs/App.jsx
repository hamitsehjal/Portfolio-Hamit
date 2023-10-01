/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";


const siteProps = {
  name: "Hamit Sehjal",
  title: "Software Engineer",
  email: "hamitsehjal26@gmail.com",
  gitHub: "hamitsehjal",
  linkedIn: "hamitsehjal",
  medium: "hamitsehjal26",
  twitter: "SehjalHamit",
};


const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Experience />
      <Portfolio />
      <Footer {...siteProps} />
    </div>
  );
};

export default App;
