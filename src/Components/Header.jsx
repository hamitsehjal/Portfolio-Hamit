/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

import image from "../images/logo.png";
const Header = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  items-center">
      <div className="items-center">
        <img
          src={image}
          alt="My Logo"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" />
      </div>
      <div className="flex flex-wrap md:ml-auto md:mr-auto items-center text-base justify-center">
        <a className="mr-5" href="#home">
          Home
        </a>
        <a className="mr-5" href="#about">
          About
        </a>
        <a className="mr-5" href="#portfolio">
          Portfolio
        </a>
        <a className="mr-5" href="#footer">
          Contact
        </a>
      </div>
      <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">
        Resume
      </button>
    </div>
  );
};

export default Header;
