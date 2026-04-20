"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>
            J VISUAL<span className={styles.logoAccent}> STUDIO</span>
          </a>

          <ul className={styles.navLinks}>
            <li><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
            <li><a href="#services" className={styles.navLink}>Services</a></li>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#contact" className={styles.cta}>Get a Quote</a></li>
          </ul>

          <button className={styles.mobileToggle} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}