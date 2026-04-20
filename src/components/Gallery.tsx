"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import styles from "./Gallery.module.css";

const InstaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.387 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop", category: "Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1529636798458-921569e5ea80?w=600&h=600&fit=crop", category: "Portrait" },
  { id: 3, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop", category: "Couple" },
  { id: 4, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop", category: "Fashion" },
  { id: 5, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop", category: "Portrait" },
  { id: 6, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e3?w=600&h=800&fit=crop", category: "Wedding" },
  { id: 7, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", category: "Couple" },
  { id: 8, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop", category: "Portrait" },
];

const categories = ["All", "Wedding", "Portrait", "Couple", "Fashion"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>
            <InstaIcon />
            Instagram Feed
          </span>
          <h2 className={styles.title}>Latest Work</h2>
        </motion.div>

        <motion.div 
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${activeCategory === category ? styles.categoryBtnActive : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`${styles.gridItem} ${index % 3 === 0 ? styles.tall : ''} ${index % 5 === 0 ? styles.wide : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.category}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.viewText}>
                      <ZoomIn size={16} className={styles.viewIcon} />
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button 
              className={styles.lightboxClose}
              onClick={() => setLightboxIndex(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              src={filteredImages[lightboxIndex].src.replace("w=600", "w=1200").replace("h=600", "h=1200").replace("h=800", "h=1600")}
              alt={filteredImages[lightboxIndex].category}
              className={styles.lightboxImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}