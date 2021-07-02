import React from 'react'
import '../styles/home.css'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import Footer from "./Footer";

const Home = () => {
    return (
      <main>
        <Navbar />
        <div className="hero">
          <h1>Full Stack Developer</h1>
          <p>
            A fun-loving skateboarder, I love to travel and learn about new
            cultures. As an experienced front-end developer and back-end
            developer, I strive to achieve perfection in everything I do.
          </p>
          <Link to="projects" className="project-link">
            <h2>View Projects</h2>
          </Link>
        </div>
        <Footer />
      </main>
    );
}
export default Home