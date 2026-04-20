"use client";

import { motion } from "framer-motion";
import BeforeAfter from "./BeforeAfter";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <div className={`${styles.gradientOrb} ${styles.orb1}`} />
        <div className={`${styles.gradientOrb} ${styles.orb2}`} />
        <div className={styles.gridOverlay} />
      </div>

      <div className="container">
        <div className={styles.heroInner}>
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
              <span className={styles.taglineDot} />
              Premium Photo Editing
            </motion.div>

            <motion.h1
              className={styles.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We Don&apos;t Just Edit Photos.{" "}
              <span className={styles.headlineAccent}>We Create Visual Impact.</span>
            </motion.h1>

            <motion.p
              className={styles.subtext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Professional Photoshop editing, retouching, and creative design for brands and creators. 
              Transform your images into powerful visual assets.
            </motion.p>

            <motion.div
              className={styles.ctas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href="#portfolio" className={styles.primaryCta}>
                View Portfolio
              </a>
              <a href="#contact" className={styles.secondaryCta}>
                Get a Quote
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.comparisonWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=350&fit=crop"
              afterImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=350&fit=crop"
              beforeAlt="Original portrait"
              afterAlt="Retouched portrait"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}