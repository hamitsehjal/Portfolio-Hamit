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
  const onButtonClick = () => {
    fetch('https://onedrive.live.com/?authkey=%21AFEmTY3tLmSb5T4&id=2BE84FBC5DDBCC9B%211170044&cid=2BE84FBC5DDBCC9B&parId=root&parQt=sharedby&o=OneUp').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file 
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'HamitSehjal.pdf'
        alink.click();
      })
    })
  }

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
        <Button onClick={onButtonClick} >Resume</Button>
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
