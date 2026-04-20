"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Fashion Brand Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "J Visual Studio completely transformed our product photography. The attention to detail and creative vision exceeded our expectations. Our sales have increased significantly since we started working with them.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "YouTube Content Creator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "My thumbnail click-through rate doubled after switching to J Visual Studio designs. They really understand what makes content stand out in a crowded feed. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Restaurant Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "The menu redesign completely changed how our customers perceive our brand. Professional, timely, and incredibly talented. We've worked with them on multiple projects and couldn't be happier.",
    rating: 5,
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

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Client Reviews</span>
          <h2 className={styles.title}>Testimonials</h2>
          <p className={styles.subtitle}>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.author}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={52}
                  height={52}
                  className={styles.authorImage}
                />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{testimonial.name}</span>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}