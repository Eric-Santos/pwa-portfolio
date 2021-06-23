import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState(false);;

  const handleClick = () => {
    setActive(!active);
  }
  
  return (
    <>
      <div className="icon">
        <HiMenu size="30" onClick={handleClick}        />
      </div>
      <nav className={active ? 'active' : null}>
        <Link to="/" className="link">
          <h1> Home </h1>
        </Link>
        <Link to="/projects" className="link">
          <h1> Projects </h1>
        </Link>
        <Link to="/about" className="link">
          <h1> About </h1>
        </Link>
        <Link to="/contact" className="link">
          <h1> Contact </h1>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
