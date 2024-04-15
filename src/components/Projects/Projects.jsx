/** @format */

import React from "react";
import Project from "./Project";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const projects = [
  {
    name: "Cake Fairy",
    projectType: "Freelance project",
    projectDescription:
      "Cake Fairy is a website used by a cake business. Other than its awesome interface, users can place orders for cakes and make payments online in a secure way.",
    tools: ["React", "TypeScript", "Sass", "NextJS"],
    links: {
      github: "https://github.com/webala/wubalubadubdub",
      url: "https://cake-fiary.vercel.app/",
    },
    image: project5,
  },
  {
    name: "Password Ninja",
    projectType: "Personal project",
    projectDescription:
      "Password Ninja is a self-hosted password manager that encrypts and decrypts your password, preventing over-reliance on third-party password managers which can be insecure",
    tools: ["NextJS", "TypeScript", "CryptoJS", "NodeJS", "MongoDB"],
    links: {
      github: "https://github.com/TechGirl-254/Password-Ninja",
    },
    image: project1,
  },
  {
    name: "Space Cadet",
    projectType: "Frontend mentor",
    projectDescription:
      "This project shows information about space. It is a front end mentor challenge. The major take away from this project was the use of animations using `react-animation-on-scroll`. I aslo practiced my TypeScript.",
    tools: ["React", "TypeScript", "Sass", "NextJS"],
    links: {
      github: "https://github.com/webala/space-tourism-site",
      url: "https://space-tourism-site-beta.vercel.app/",
    },
    image: project4,
  },
  {
    name: "Space Cadet",
    projectType: "Frontend mentor",
    projectDescription:
      "This project shows information about space. It is a front end mentor challenge. The major take away from this project was the use of animations using `react-animation-on-scroll`. I aslo practiced my TypeScript.",
    tools: ["React", "TypeScript", "Sass", "NextJS"],
    links: {
      github: "https://github.com/webala/space-tourism-site",
      url: "https://space-tourism-site-beta.vercel.app/",
    },
    image: project4,
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div>
            <span>02.</span>
            <h1>Some things i've built</h1>
          </div>
        </AnimationOnScroll>
        <div className="line"></div>
      </div>

      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
