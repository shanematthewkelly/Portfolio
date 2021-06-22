import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import '@styles/navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="app-logo">
            <a href="#" className="nav-text">Logo</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-text">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-text">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-text">Work</a>
          </li>
          <li className="nav-item">
            <button className="contact-nav">Contact</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;