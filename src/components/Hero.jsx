"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Image } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <div className={styles.heroImage} />
        <div className={styles.imageOverlay} />
        <div className={`${styles.gradientOrb} ${styles.orb1}`} />
        <div className={`${styles.gradientOrb} ${styles.orb2}`} />
        <div className={`${styles.gradientOrb} ${styles.orb3}`} />
      </div>

      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className={styles.tagline}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={16} />
            Professional Photo Editing
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Turn Your Photos into{" "}
            <span className={styles.headlineAccent}>Cinematic Visuals</span>
          </motion.h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Professional Photoshop editing that makes your content stand out and look premium.
          </motion.p>

          <motion.div
            className={styles.trustLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Zap size={14} />
            Fast delivery • High-quality edits
          </motion.div>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#transformations" className={styles.primaryCta}>
              <Image size={18} />
              Send Your Photo
            </a>
            <a href="#portfolio" className={styles.secondaryCta}>
              View Transformations
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}