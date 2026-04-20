"use client";

import { motion } from "framer-motion";
import { Camera, Users, Heart, Check } from "lucide-react";
import styles from "./Packages.module.css";

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic Session",
    price: "₹2,999",
    description: "Perfect for quick portraits and casual photoshoots",
    features: [
      "1 Hour Session",
      "10 Edited Photos",
      "Online Gallery",
      "Digital Downloads",
    ],
  },
  {
    id: "premium",
    name: "Premium Shoot",
    price: "₹7,999",
    description: "Ideal for portraits, couple shoots, and small events",
    features: [
      "2 Hours Session",
      "25 Edited Photos",
      "Online Gallery",
      "Digital Downloads",
      "Print Quality Images",
    ],
    featured: true,
  },
  {
    id: "cinematic",
    name: "Cinematic Package",
    price: "₹15,999",
    description: "Complete coverage for events and special occasions",
    features: [
      "4 Hours Coverage",
      "50+ Edited Photos",
      "Online Gallery",
      "All Digital Files",
      "Photo Album",
      "Highlight Video",
    ],
  },
];

export default function Packages() {
  return (
    <section className={styles.packages} id="packages">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>
            <Camera size={16} />
            Photography Packages
          </span>
          <h2 className={styles.title}>Choose Your Package</h2>
          <p className={styles.subtitle}>
            Transparent pricing for unforgettable photography experiences
          </p>
        </motion.div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`${styles.card} ${pkg.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {pkg.featured && <span className={styles.badge}>Popular</span>}
              
              <div className={styles.iconWrapper}>
                {index === 0 ? <Camera size={32} className={styles.icon} /> :
                 index === 1 ? <Users size={32} className={styles.icon} /> :
                 <Heart size={32} className={styles.icon} />}
              </div>
              
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <div className={styles.packagePrice}>
                {pkg.price}
                <span>/session</span>
              </div>
              <p className={styles.packageDescription}>{pkg.description}</p>
              
              <div className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <div key={i} className={styles.feature}>
                    <Check size={18} className={styles.featureIcon} />
                    {feature}
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className={`${styles.cta} ${pkg.featured ? styles.featuredCta : ''}`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}