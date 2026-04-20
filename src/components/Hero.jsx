"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <div className={styles.heroImage} />
        <div className={styles.imageOverlay} />
        <div className={`${styles.gradientOrb} ${styles.orb1}`} />
        <div className={`${styles.gradientOrb} ${styles.orb2}`} />
      </div>

      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className={styles.tagline}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Camera size={16} />
            Professional Photography Studio
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Capturing Moments,{" "}
            <span className={styles.headlineAccent}>Creating Memories</span>
          </motion.h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We don&apos;t just take photos — we craft visual stories that last a lifetime. 
            Every frame, a masterpiece. Every moment, forever.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#portfolio" className={styles.primaryCta}>
              View Our Work
            </a>
            <a href="#contact" className={styles.secondaryCta}>
              Book a Session
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}