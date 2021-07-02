import React from "react";
import "../styles/about.css"
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <section>
      <h1 className='about-text'>
        I am a First Generation American Citizen, Army Veteran, and I have
        skateboarded for around 15 years and in 4 different countries. I decided
        to transition into Computer Software because I found that programming
        and other design careers match my personality. Let me know how I can help you. Thank you!
      </h1>
      <Footer  />
    </section></>
  );
};
export default About;
