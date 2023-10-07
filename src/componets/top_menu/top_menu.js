import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './top_menu.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="navigation"> {/* Add an ID for custom CSS */}
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

            <li className="p-2 m-2 " id="topbar">
              <a className="nav-link" href="#pic">
                <h5>About</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#third">
                <h5>Skills</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#fourth">
                <h5>Qualifications</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#fifth">
                <h5>Projects</h5>
              </a>
            </li>
            <li className="nav-item active p-2 m-2 " id="topbar">
              <a className="nav-link" href="#sixth">
                <h5>Contact</h5>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
