import React, { useState } from "react";
import {motion} from 'framer-motion'
import "./Header.css";
import Logo from "../../assets/Naim.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    const [menuOpen , setMenuOpen] = useState(false)
   
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

        <button  type="button" className="menu-button">
            <RxHamburgerMenu  className="hamburger" />
        </button>
      </header>
    </div>
  );
}

export default Header;
