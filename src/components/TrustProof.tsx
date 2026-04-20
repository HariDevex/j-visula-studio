"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, Star, TrendingUp } from "lucide-react";
import styles from "./TrustProof.module.css";

const stats = [
  {
    id: 1,
    icon: <CheckCircle size={28} />,
    number: "500+",
    label: "Edits Completed",
    description: "Projects delivered successfully",
  },
  {
    id: 2,
    icon: <Clock size={28} />,
    number: "24-48",
    label: "Hour Turnaround",
    description: "Fast delivery on all orders",
  },
  {
    id: 3,
    icon: <Star size={28} />,
    number: "4.9/5",
    label: "Client Rating",
    description: "Average client satisfaction",
  },
  {
    id: 4,
    icon: <TrendingUp size={28} />,
    number: "98%",
    label: "Repeat Clients",
    description: "Clients who return for more",
  },
];

export default function TrustProof() {
  return (
    <section className={styles.trustProof} id="trust">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Why Choose J Visual Studio</h2>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDescription}>{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}