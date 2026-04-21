"use client";

import { motion } from "framer-motion";
import { Upload, MessageSquare, Rocket } from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Send Your Image",
    description: "Upload your photo and share your vision. tell us what you're looking for.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Tell Your Requirements",
    description: "Discuss your specific needs - color grading, retouching, style preferences, or any special requests.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Receive Edited Result",
    description: "Get your professionally edited image delivered within 24-48 hours. revisions included.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>
            Simple process. Amazing results. Three easy steps to transform your photos.
          </p>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>
                <step.icon size={32} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}