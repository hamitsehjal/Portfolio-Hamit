/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";


const Home = ({ name, writings, projects }) => {
  return (
    <div className=" m-auto p-5 block  lg:mb-28 lg:ml-28">

      <div className="lg:w-1/2 ">
        {/* title */}
        <div className="mt-5 mb-10 text-2xl font-bold font-sans">
          {name}
        </div>

        {/* Bio */}
        <div className="mb-8">
          <p>Student at <a className="underline text-blue-900 " href="https://www.senecapolytechnic.ca/home.html" target="_blank">Seneca Polytechnic</a>, pursuing Computer Science. Previously, I interned at the <a className="underline text-blue-900 " href="www.tdsb.on.ca" target="_blank">TDSB</a> as a <span className="text-lg">Software Developer</span> in the Web Communications Department and at <a className="underline text-blue-900 " href="https://library.senecapolytechnic.ca/learningcentre" target="_blank">Learning Centre Seneca</a>  as a Teaching Assistant. I currently reside in Toronto, Canada.</p>
          <br />
          <br />
          <p>I'm interested in the internet, books, cities, lifting, and soccer. Currently, learning  <span className="text-lg">ios Development</span> and <span className="text-lg">Deep Learning </span></p>
        </div>
      </div>
      {/* Writing */}
      <div className="mb-8">
        <p className="mt-5 mb-7 text-lg font-bold font-sans">Writings</p>
        <ul>
          {writings.map((blog, index) => (
            <li key={index}>< a className="underline text-blue-900 " href={blog.url} target="_blank">{blog.title}</a></li>
          ))}

        </ul>
        <br />
        <p className="italic text-sm">I am in process of migrating my blogs from Hashnode to my site. If interested, you can checkout my < a className="underline text-blue-900 " href="https://hamitsehjal.hashnode.dev/">Hashnode</a> for more writings.</p>
      </div>

      {/* Projects */}

      <div className="mb-8">
        <p className="mt-5 mb-7 text-lg font-bold font-sans">Projects</p>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>< a className="underline text-blue-900 " href={project.url} target="_blank">{project.title}</a>: {project.description}</li>
          ))}

        </ul>
      </div>
      {/* contact/other */}

      <div className="mb-8">
        <p className="mt-5 mb-7 text-lg font-bold font-sans">Contact/Other Stuff</p>
        <p><a className="underline text-blue-900 " href="https://twitter.com/SehjalHamit">Twitter, </a><a className="underline text-blue-900 " href="https://github.com/hamitsehjal/">GitHub, </a><a className="underline text-blue-900 " href="https://www.linkedin.com/in/hamitsehjal/">LinkedIn </a></p>
        <p>Email: <a className=" text-blue-900" href="mailto:hamitsehjal26@gmail.com">hamitsehjal26@gmail.com</a></p>
      </div>
    </div >

  );
};

Home.defaultProps = {
  name: "",
  writings: [],
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  writings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;
