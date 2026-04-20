"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Portfolio.module.css";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Portrait Retouching", category: "Retouching", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop" },
  { id: 2, title: "Product Campaign", category: "Photo Editing", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop" },
  { id: 3, title: "Event Poster", category: "Poster Design", image: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&h=600&fit=crop" },
  { id: 4, title: "Brand Story", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop" },
  { id: 5, title: "Fashion Edit", category: "Retouching", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=600&fit=crop" },
  { id: 6, title: "Tech Launch", category: "Social Media", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=600&fit=crop" },
  { id: 7, title: "Album Cover", category: "Poster Design", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=600&fit=crop" },
  { id: 8, title: "Beauty Retouch", category: "Retouching", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop" },
  { id: 9, title: "Food Photography", category: "Photo Editing", image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=600&fit=crop" },
  { id: 10, title: "Fitness Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop" },
  { id: 11, title: "Movie Poster", category: "Poster Design", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=600&fit=crop" },
  { id: 12, title: "Headshot Pro", category: "Retouching", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" },
];

const categories = ["All", "Photo Editing", "Poster Design", "Social Media", "Retouching"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    const newIndex = direction === "prev" 
      ? (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      : (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(newIndex);
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Our Work</span>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>
            Explore our latest projects showcasing the quality and creativity we bring to every edit.
          </p>
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
              className={`${styles.categoryBtn} ${activeCategory === category ? styles.categoryBtnActive : ""}`}
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
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.gridItem}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(index)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.gridImage}
                  />
                </div>
                <div className={styles.overlay}>
                  <span className={styles.viewProject}>View Project</span>
                  <h3 className={styles.overlayTitle}>{item.title}</h3>
                  <span className={styles.overlayCategory}>{item.category}</span>
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
            onClick={closeLightbox}
          >
            <button 
              className={styles.lightboxClose}
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
            >
              <ChevronLeft size={24} />
            </button>

            <motion.img
              src={filteredItems[lightboxIndex].image.replace("w=600&h=600", "w=1200&h=1200")}
              alt={filteredItems[lightboxIndex].title}
              className={styles.lightboxImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}