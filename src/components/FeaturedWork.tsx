"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FeaturedWork.module.css";

interface Project {
  number: string;
  title: string;
  image: string;
  clientNeed: string;
  solution: string;
  result: string;
}

const projects: Project[] = [
  {
    number: "Project 01",
    title: "Fashion Brand Campaign",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    clientNeed: "A leading fashion brand needed professional product imagery for their new seasonal collection launch.",
    solution: "We performed high-end retouching, color grading, and created multiple variations for different marketing channels.",
    result: "The campaign saw a 45% increase in engagement and the client reported higher conversion rates on their e-commerce platform.",
  },
  {
    number: "Project 02",
    title: "Restaurant Menu Redesign",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    clientNeed: "A premium restaurant wanted to elevate their visual presence with stunning food photography for their new menu.",
    solution: "We retouched existing photos, removed backgrounds, and created cohesive visual storytelling for the menu design.",
    result: "The new menu design helped increase average order value by 30% and received overwhelmingly positive customer feedback.",
  },
  {
    number: "Project 03",
    title: "YouTube Creator Branding",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=500&fit=crop",
    clientNeed: "A growing YouTuber needed consistent thumbnail templates and channel art to build a recognizable brand.",
    solution: "We designed a complete brand kit with bold thumbnails, channel banner, and end screen templates.",
    result: "Subscriber growth increased by 150% in 3 months with thumbnails getting 2x more clicks than previous designs.",
  },
];

export default function FeaturedWork() {
  return (
    <section className={styles.featured} id="featured">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Featured Work</span>
          <h2 className={styles.title}>Selected Projects</h2>
          <p className={styles.subtitle}>
            A showcase of our finest work and the impact we&apos;ve delivered for our clients.
          </p>
        </motion.div>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className={`${styles.project} ${index % 2 === 1 ? styles.projectReverse : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className={styles.imageWrapper}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </motion.div>

              <div className={styles.content}>
                <span className={styles.projectNumber}>{project.number}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Client Need</span>
                    <p className={styles.detailText}>{project.clientNeed}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Solution</span>
                    <p className={styles.detailText}>{project.solution}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Result</span>
                    <p className={styles.detailText}>{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}