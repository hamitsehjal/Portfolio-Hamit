/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { Button, Navbar } from "flowbite-react";
import image from "../images/logo.png";
const Header = () => {
  return (
    <Navbar fluid rounded className="bg-white shadow-lg px-4 z-5">
      <Navbar.Brand href="#home">
        <img
          src={image}
          alt="My Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Resume</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#home" className="md:text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" className="md:text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="#projects" className="md:text-lg">
          Project
        </Navbar.Link>
        <Navbar.Link href="#contact" className="md:text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
