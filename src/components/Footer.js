import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <a href="mailto:eric.santos.dev@gmail.com.com">
          eric.santos.dev@gmail.com
        </a>
        <a
          href="https://github.com/Eric-Santos"
          alt="github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GoMarkGithub size="25" />
        </a>
        <a
          href="https://www.linkedin.com/in/ericsantos01/"
          alt="linkedin"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImLinkedin size="25" />
        </a>
        <a
          href="profiles.lambdaschool.com/?g=recYeXiWWNoTe5sIL"
          alt="lambda school profile"
          rel="noopener noreferrer"
          target="_blank"
        >
          <CgProfile size="25" />
        </a>
      </footer>
    </>
  );
};
export default Footer;
