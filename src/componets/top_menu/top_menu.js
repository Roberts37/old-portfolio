import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './top_menu.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar open and close
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="navigation"> 
      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav" id="list_contain">
            {/* Navigation links */}
            <li className="p-2 m-2 " id="topbar">
              <a className="nav-link" href="#about_main">
                <h5>About</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#skills">
                <h5>Skills</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#qualifications">
                <h5>Qualifications</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#project">
                <h5>Projects</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#contact_me">
                <h5>Contact</h5>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
