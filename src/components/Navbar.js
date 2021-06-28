import React from 'react';
import '@styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="app-logo">
            <a href="#" className="nav-text">Shane Dev</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-num">01.&nbsp;
              <span className="nav-text">About</span></a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-num">02.&nbsp;
              <span className="nav-text">Work</span></a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-num">03.&nbsp;
              <span className="nav-text">Experience</span></a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-num">04.&nbsp;
              <span className="nav-text">Contact</span></a>
          </li>

          {/* Mobile Menu Icon */}
          <li id="nav-mobile-menu" className="nav-item">
            <FontAwesomeIcon className="nav-menu" icon={faEquals} />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;