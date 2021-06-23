import React from 'react'
import '../styles/home.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from './Navbar'

const Home = () => {
    return (
      <main>
        <Navbar />
        <div className="hero">
          <h1>Full Stack Developer</h1>
          <p>MERN Stack Expert</p>
          <Link to="projects" className="project-link">
            <h4>View Projects</h4>
          </Link>
        </div>
      </main>
    );
}
export default Home