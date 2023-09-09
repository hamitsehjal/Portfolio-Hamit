/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";
import { Button } from "flowbite-react";
/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/programmer.gif";

const imageAltText = "Guy with Laptop and Coffee";
const Home = ({ name, title }) => {
  return (
    <div className="w-screen h-screen">
      <div className="container mx-auto flex p-3 items-center justify-center flex-col md:flex-row">
        <div className="text-center lg:w-5/12 w-full text-black">
          <p className="text-2xl">
            Hi, my name is <span className="text-3xl underline">{name}</span>.
          </p>
          <h1 className="mt-4 mb-8 text-5xl">I&apos;m a {title}</h1>
          <div className="flex justify-center mx-auto">
            <Button color="success" size="xl" pill href="#projects" className="mx-2">
              View Projects
            </Button>
            <Button color="failure" size="xl" pill href="contact" className="mx-2">
              Get in Touch
            </Button>
          </div>
        </div>
        <img className="md:w-3/6 w-5/6 object-cover object-center" alt={imageAltText} src={image} />
      </div>
    </div>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
