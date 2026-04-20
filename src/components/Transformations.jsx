"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BeforeAfter from "./BeforeAfter";
import styles from "./Transformations.module.css";

const transformations = [
  {
    id: 1,
    title: "Portrait Retouching",
    category: "Retouching",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Color Grading",
    category: "Photo Editing",
    beforeImage: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Skin Retouching",
    category: "Retouching",
    beforeImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Product Enhancement",
    category: "Product",
    beforeImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
  },
];

export default function Transformations() {
  return (
    <section className={styles.transformations} id="transformations">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>
            <Sparkles size={16} />
            See the Magic
          </span>
          <h2 className={styles.title}>Before & After Transformations</h2>
          <p className={styles.subtitle}>
            Drag the slider to see how we transform ordinary photos into stunning visuals.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.comparisonCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.cardCategory}>{item.category}</span>
              </div>
              <div className={styles.cardContent}>
                <BeforeAfter
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  beforeAlt={`${item.title} - Before`}
                  afterAlt={`${item.title} - After`}
                />
                <div className={styles.cardLabels}>
                  <span className={`${styles.cardLabel} ${styles.beforeLabel}`}>Before</span>
                  <span className={`${styles.cardLabel} ${styles.afterLabel}`}>After</span>
                </div>
              </div>
              <div className={styles.ctaHint}>
                <strong>Drag</strong> to compare
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}