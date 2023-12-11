import React from "react";
import "./Header.css";
import Logo from "../../assets/Naim.png";

function Header() {
  return (
    <div className="header">
      <header className="header-content">
        <a href="#logo" className="logo">
          <img src={Logo} alt="logoImg" className="logo-icon" />
          {/* <span className="logo-text"> Naim </span> */}
        </a>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#service" className="nav-link">Services</a>
          <a href="#project"className="nav-link">Projects</a>
        </nav>
        <a href="#contact" className="contact-button">Contact Me</a>
      </header>
    </div>
  );
}

export default Header;
