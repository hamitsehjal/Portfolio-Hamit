/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import { Carousel, Card } from 'flowbite-react';
const skillsList = {
  // applications: [
  //   "System Design and Architecture",
  //   "Web Technologies",
  //   "Database Management",
  //   "Cloud Computing",
  //   "Mobile Solutions",
  //   "Software Testing",],
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C++/C",
    "Java",
    "C#",
    "Bash",
    "CSS",
    "HTML"
  ],
  tools: [
    "Git",
    "React JS",
    "Next JS",
    "ASP.NET",
    "Amazon Web Services(AWS)",
    "Dockers",
    "Xamarin",
    "Ionic",
    "Android Studio",
    "Tailwind CSS",
    "Jest"
  ],
  databases: [
    "MongoDB",
    "Oracle SQL",
    "Microsoft SQL Server"
  ]

};



const About = () => {
  return (

    <div className="container mx-auto mt-10 text-center" id="about">
      <h2 className="text-4xl font-semibold text-center text-gray-700">SKILLS</h2>
      <div className="flex flex-wrap flex-col items-center justify-center m-2 p-4">
        {
          Object.keys(skillsList).map((item) => (
            <div key={item}>
              <div className="inline-flex flex-wrap">
                <span className="text-2xl font-semibold tracking-tight text-gray-900 capitalize mr-4">{item}:</span>
                <ul className="list-none inline-flex flex-wrap items-center justify-center">
                  {
                    skillsList[item].map((skill, index) => (
                      <li className="mr-4" key={index}>{skill}</li>
                    ))
                  }
                </ul>
              </div>
              {/* <Card className="w-full mb-2 items-start">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
              <p>{item}</p>
            </h5>
            <ul className="flex">
              {
                skillsList[item].map((skill, index) => (
                  <li className="mr-4" key={index}>{skill}</li>
                ))
              }
            </ul>
          </Card> */}
              {/* </ul> */}

            </div>
          ))
        }
      </div>

    </div>
  );
};

export default About;
