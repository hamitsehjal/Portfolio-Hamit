/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";

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
import image from "../images/Homepage.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <div className="w-screen h-screen text-white">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt={imageAltText}
          src={image}
        />
        <div className="text-center lg:w-5/12 w-full text-black">
          <p className="text-2xl mb-8">Hi, my name is {name}.</p>
          <h1 className="my-4 text-5xl font-bold leading-tight ">I&apos;m a {title}</h1>
          <div className="flex justify-center mx-auto">
            <button className="hover:underline bg-white text-gray-800 font-bold border rounded-full py-4 px-8">
              View Projects
            </button>
            <button className="ml-4 hover:underline bg-white text-gray-800 font-bold  border rounded-full py-4 px-8">
              Get in Touch
            </button>
          </div>
        </div>
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
