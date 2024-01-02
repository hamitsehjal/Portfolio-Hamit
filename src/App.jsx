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
  writings: [
    {
      title: "How can one find happiness?? - (Twitter Thread💈)",
      url: "https://twitter.com/SehjalHamit/status/1741177988593398027"
    },
    {
      title: "Understanding localStorage vs. sessionStorage",
      url: "https://hamitsehjal.hashnode.dev/understanding-localstorage-vs-sessionstorage-browser-storage-api"
    },
    {
      title: "Understanding logarithmic time complexity O(log n)",
      url: "https://hamitsehjal.hashnode.dev/why-are-algorithms-with-logarithmic-time-complexity-olog-n-considered-incredibly-efficient-especially-for-large-input-sizes"
    },
    {
      title: "Random Numbers Java",
      url: "https://hamitsehjal.hashnode.dev/how-to-generate-random-numbers-in-java"
    },

  ],
  projects: [
    {
      title: "CampusCart",
      description: "A Grocery Delivery Application",
      url: "https://campus-cart.vercel.app/",
    },
    {
      title: "Fragments",
      description: "A cloud-based microservice, enabling enterprises to perform CRUD operations for text and image fragments",
      url: "https://fragments555.vercel.app/",
    },
    {
      title: "Show Bizz II",
      description: "Application for television industry companies to efficiently manage actors, TV series, and episodes",
      url: "https://campus-cart.vercel.app/",
    },
    {
      title: "MET Museum",
      description: "A Web Application that lets users explore the Metropolitan Art Museum's art collections from anywhere",
      url: "https://met-museum-422.vercel.app/",
    },
  ],
};


const App = () => {
  return (
    <div id="main">
      {/* <Header /> */}
      <Home name={siteProps.name} writings={siteProps.writings} projects={siteProps.projects} />
      {/* <About />
      <Experience />
      <Portfolio />
      <Footer {...siteProps} /> */}
    </div>
  );
};

export default App;
