"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.textContent}>
            <span className={styles.sectionLabel}>About Us</span>
            <h2 className={styles.title}>Creating Cinematic Visuals</h2>
            <p className={styles.description}>
              J Visual Studio focuses on transforming ordinary images into cinematic visuals 
              using professional Photoshop techniques. We combine technical expertise with 
              creative vision to deliver visuals that tell your story.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
          </div>

          <motion.div 
            className={styles.imageGrid}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop"
                alt="Studio workspace"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop"
                alt="Design work"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=400&fit=crop"
                alt="Creative process"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className={styles.image}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}