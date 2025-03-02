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

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Royal Bloom Weddings</div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/aboutUs">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/contactUs">Contact</Link></li>
      </ul>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
