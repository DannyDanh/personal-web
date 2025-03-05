import React from "react";

const Header = () => (
  <header className="bg-dark text-white py-3">
    <nav className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="navbar-brand mb-0">Danh Nguyen</h1>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#portfolio">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
