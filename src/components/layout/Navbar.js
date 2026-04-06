"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import vectorImg from "../../../public/images/Vector.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar">

        <div className="nav-left">
          <Link href="#home" className="nav-item" onClick={closeMenu}>
            Home
          </Link>
          <Link href="#about" className="nav-item" onClick={closeMenu}>
            About
          </Link>
          <Link href="#Services" className="nav-item" onClick={closeMenu}>
            Service
          </Link>
        </div>

        <div className="nav-center">
          <div className="logo-circle">
            <Image src={vectorImg} alt="logo" priority />
          </div>
          <span className="logo-text">JCREA</span>
        </div>

        <div className="nav-right">
          <Link href="/resume" className="nav-item" onClick={closeMenu}>
            Resume
          </Link>
          <Link href="#project" className="nav-item" onClick={closeMenu}>
            Project
          </Link>
          <Link href="#contact" className="nav-item" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link href="#home" className="mobile-nav-item" onClick={closeMenu}>
          Home
        </Link>
        <Link href="#about" className="mobile-nav-item" onClick={closeMenu}>
          About
        </Link>
        <Link href="#Services" className="mobile-nav-item" onClick={closeMenu}>
          Service
        </Link>
        <Link href="/resume" className="mobile-nav-item" onClick={closeMenu}>
          Resume
        </Link>
        <Link href="#project" className="mobile-nav-item" onClick={closeMenu}>
          Project
        </Link>
        <Link href="#contact" className="mobile-nav-item" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}