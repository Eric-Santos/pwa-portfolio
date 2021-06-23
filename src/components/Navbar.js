import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
         <Link to='/'>
           <h1>Home</h1>
         </Link>
         <Link to='/projects'>
           <h1>Projects</h1>
         </Link>
         <Link to='/about'>
           <h1>About</h1>
         </Link>
         <Link to='/contact'>
           <h1>Contact</h1>
         </Link>
      </nav>
    </div>
  );;
}

export default Navbar
