"use client";

import { motion } from "framer-motion";
import { Wand2, Palette, Share2, Image } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    icon: <Wand2 size={32} />,
    title: "Photo Editing",
    description: "Transform your photos with professional color grading, exposure correction, and creative adjustments that bring out the best in every shot.",
    index: "01",
  },
  {
    icon: <Image size={32} />,
    title: "Retouching",
    description: "Expert skin retouching and enhancement that maintains natural beauty while removing imperfections for a flawless look.",
    index: "02",
  },
  {
    icon: <Palette size={32} />,
    title: "Poster Design",
    description: "Eye-catching promotional posters and visual designs that capture attention and communicate your brand message effectively.",
    index: "03",
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media Creatives",
    description: "Engaging posts, stories, and ads designed to boost engagement and help your brand stand out on social platforms.",
    index: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Professional editing solutions tailored to bring your vision to life.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <span className={styles.cardIndex}>{service.index}</span>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{service.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}