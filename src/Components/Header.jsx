import React, { useState } from "react";
import "./globalstyle.css";

const PortfolioHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/11vq7-l0rydzeqnumpPO-3C3joRk30HwC/view?usp=sharing"
      "_blank"
    );
  };

  // Function to scroll to the target section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <span>Rugveda</span>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li onClick={() => scrollToSection("header")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("education")}>Education</li>
            <li onClick={() => scrollToSection("experience")}>Experience</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>
        <div className="menu-bar" onClick={toggleMenu}>
          <div className="menu-bar-icon"></div>
          <div className="menu-bar-icon"></div>
          <div className="menu-bar-icon"></div>
        </div>
      </header>

      <main className="hero-section">
        <div className="center-content">
          <h1 className="name">Mannam Rugveda</h1>
          <p className="typing-effect">
            I'm a Full Stack Developer<span className="dynamic-text"></span>
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rugveda-mannam-91a177258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Rugvedamannam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <button className="resume-btn" onClick={openResume}>
            View Resume
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortfolioHeader;
