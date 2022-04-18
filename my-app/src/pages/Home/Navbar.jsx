import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <span>FIT </span>Formula
        </a>

        <div id="menu-btn" className="fas fa-bars"></div>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#features">features</a>

          <a href="#trainers">trainers</a>
          <a href="#schedule">Daily Schedule</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
