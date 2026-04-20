"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Clock, Award } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <div className={styles.imageOverlay} />
        <div className={`${styles.gradientOrb} ${styles.orb1}`} />
        <div className={`${styles.gradientOrb} ${styles.orb2}`} />
        <div className={`${styles.gradientOrb} ${styles.orb3}`} />
        <div className={styles.gridOverlay} />
        <div className={styles.vignette} />
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
            Premium Photo Editing Studio
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your Moments.{" "}
            <span className={styles.headlineAccent}>Reimagined.</span>
          </motion.h1>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We don't just edit photos — we transform them into cinematic visuals that tell your story.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#portfolio" className={styles.primaryCta}>
              View Work
            </a>
            <a href="#contact" className={styles.secondaryCta}>
              Get Your Photo Edited
            </a>
          </motion.div>

          <motion.div
            className={styles.trustLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className={styles.trustItem}>
              <Zap size={16} />
              Fast delivery
            </span>
            <span className={styles.trustDivider}>•</span>
            <span className={styles.trustItem}>
              <Award size={16} />
              High-quality edits
            </span>
            <span className={styles.trustDivider}>•</span>
            <span className={styles.trustItem}>
              <Clock size={16} />
              24-48hr turnaround
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </motion.div>
    </section>
  );
}