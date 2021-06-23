import React from "react";
import "../styles/projects.css";
import Navbar from "./Navbar";

const Projects = () => {
  return (
    <div className="projects">
      <Navbar />
      <h1>Projects Section</h1>
      <p>
        I have been focusing on Front-End Projects since I finished my
        Full-Stack Development Course at Lambda School, and animation. Here some
        of my latest projects
      </p>
      <section className="photos">
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
        <img src="photos/placeholderFish.webp" alt="placeholder" />
      </section>
    </div>
  );
};

export default Projects;
