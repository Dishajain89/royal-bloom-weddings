"use client";
import { FaFacebook, FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";
import styles from "./style.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo & About */}
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>Royal Bloom Weddings</h2>
          <p>Creating unforgettable moments with elegance & style.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/aboutUs">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contactUs">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: contact@royalbloomweddings.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Location: New York, USA</p>
        </div>

        {/* Social Media */}
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
            <a href="mailto:contact@royalbloomweddings.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Royal Bloom Weddings All Rights Reserved. Developed by <a href="https://www.instagram.com/dizzytech_byd/?hl=en" target="_blank">Dizzytech_byd</a></p>
      </div>
    </footer>
  );
};

export default Footer;
