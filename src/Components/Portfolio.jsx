import React from "react";
import { Button, Card } from "flowbite-react";
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
      "A cross-platform mobile application for calculating utility bills based on different range of parameters",
    url: "https://github.com/hamitsehjal/Utility-Bill-Calculator",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold text-center text-gray-700">PROJECTS</h2>

      <div className="flex flex-wrap items-center justify-center m-2">
        {projectList.map((project) => (
          <Card className="max-w-sm m-2" key={project.title}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{project.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>{project.description}</p>
            </p>
            <Button href={project.url}>
              <p>Read more</p>
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
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
