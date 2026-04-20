"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.387 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
import styles from "./Contact.module.css";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>Get In Touch</span>
          <h2 className={styles.title}>Send your image. Get it transformed.</h2>
          <p className={styles.subtitle}>
            Ready to transform your photos into cinematic visuals? Send us your image and get a quick quote today.
          </p>
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Connect With Us</h3>
            <p className={styles.infoDescription}>
              Prefer to reach out directly? Connect with us on WhatsApp for quick responses or DM us on Instagram to see our latest work.
            </p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://wa.me/919677589131" 
                className={`${styles.ctaButton} ${styles.whatsappCta}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a 
                href="https://instagram.com/jvisualstudio" 
                className={`${styles.ctaButton} ${styles.instagramCta}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                Follow on Instagram
              </a>
            </div>
          </div>

          <motion.div 
            className={styles.form}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <form className={styles.formFields} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input 
                  type="text" 
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input 
                  type="email" 
                  className={styles.input}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea 
                  className={styles.textarea}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
                <Send size={18} style={{ marginLeft: 8 }} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}