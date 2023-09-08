import React from "react";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Fragments - Microservice",
    description:
      "A cloud-based microservice, enabling enterprises to perform CRUD operations for text and image fragments",
    url: "https://fragments555.vercel.app/",
  },
  {
    title: "Show Bizz II",
    description:
      "Application for television industry companies to efficiently manage actors, TV series, and episodes.",
    url: "https://hsehjal-wa-web524-a6.azurewebsites.net/",
  },
  {
    title: "Metropolitan Museum of Art",
    description:
      "A Web Application that lets users explore the Metropolitan Museum' art Collection from anywhere",
    url: "https://met-museum-422.vercel.app/",
  },
  {
    title: "Utility Bill Calculator",
    description:
      "A cross-platform mobile application using Microsoft Xamarin for calculating utility bills.",
    url: "https://github.com/hamitsehjal/Utility-Bill-Calculator",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="flex flex-wrap items-center justify-center">
        {projectList.map((project) => (
          <div
            className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow"
            key={project.title}
          >
            <a href={project.url}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">{project.description}</p>
            <a
              href={project.url}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4
           focus:outline-none focus:ring-blue-300"
            >
              Read More
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
