"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./style.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when a nav link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>Royal Bloom Weddings</Link>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/aboutUs" onClick={closeMenu}>About</Link></li>
        <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link href="/contactUs" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
