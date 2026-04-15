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

  // Smooth scroll to a section by its id
  const scrollTo = (id) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar">

        <div className="nav-left">
          <button className="nav-item" onClick={() => scrollTo("home")}>
            Home
          </button>
          <button className="nav-item" onClick={() => scrollTo("about")}>
            About
          </button>
          <button className="nav-item" onClick={() => scrollTo("Services")}>
            Service
          </button>
        </div>

        <div className="nav-center">
          <div className="logo-circle">
            <Image src={vectorImg} alt="logo" priority />
          </div>
          <span className="logo-text">JCREA</span>
        </div>

        <div className="nav-right">
          <Link href="/resume" className="nav-item">
            Resume
          </Link>
          <button className="nav-item" onClick={() => scrollTo("project")}>
            Project
          </button>
          <button className="nav-item" onClick={() => scrollTo("contact")}>
            Contact
          </button>
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
        <button className="mobile-nav-item" onClick={() => scrollTo("home")}>
          Home
        </button>
        <button className="mobile-nav-item" onClick={() => scrollTo("about")}>
          About
        </button>
        <button className="mobile-nav-item" onClick={() => scrollTo("Services")}>
          Service
        </button>
        <Link href="/resume" className="mobile-nav-item" onClick={closeMenu}>
          Resume
        </Link>
        <button className="mobile-nav-item" onClick={() => scrollTo("project")}>
          Project
        </button>
        <button className="mobile-nav-item" onClick={() => scrollTo("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}