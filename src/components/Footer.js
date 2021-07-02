import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <a href='"mailto: eric.santos.dev@gmail.com' alt='email'>
          <HiOutlineMail size="30" />
        </a>
        <a href="https://github.com/Eric-Santos" alt='github'>
          <GoMarkGithub size="25" />
        </a>
        <a href="https://www.linkedin.com/in/ericsantos01/" alt='linkedin'>
          <ImLinkedin size="20" />
        </a>
      </footer>
    </>
  );
};
export default Footer;
