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
          <div className="title">
            <h1>Eric Santos</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className="btns">
            <Link to="projects" className="project-link">
              <h2>View Projects</h2>
            </Link>
            <Link to="about" className="project-link">
              <h2>More About Me</h2>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
}
export default Home