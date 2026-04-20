"use client";

import { motion } from "framer-motion";
import { Wand2, Scissors, Palette, Share2, Image, Sparkles } from "lucide-react";
import styles from "./Services.module.css";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: string;
}

const services: Service[] = [
  {
    icon: <Wand2 size={28} />,
    title: "Photo Retouching",
    description: "Professional skin retouching, color correction, and enhancement that brings out the best in every image while maintaining natural beauty.",
    index: "01",
  },
  {
    icon: <Scissors size={28} />,
    title: "Background Removal",
    description: "Clean cutouts and transparent backgrounds with precise edge detection. Perfect for e-commerce and product photography.",
    index: "02",
  },
  {
    icon: <Palette size={28} />,
    title: "Poster Design",
    description: "Eye-catching promotional posters and banners that capture attention and communicate your brand message effectively.",
    index: "03",
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media Creatives",
    description: "Engaging posts, stories, and ads designed to boost engagement and grow your following across all platforms.",
    index: "04",
  },
  {
    icon: <Image size={28} />,
    title: "Thumbnail Design",
    description: "Click-worthy YouTube thumbnails that stand out in search results and drive more views to your content.",
    index: "05",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Color Grading",
    description: "Cinematic color grading that sets the mood and creates a consistent visual style for your brand or project.",
    index: "06",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
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
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            From basic edits to complex manipulations, we deliver premium quality results tailored to your needs.
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