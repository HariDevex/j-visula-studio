"use client";

import { MessageCircle } from "lucide-react";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <div className={styles.floatingWhatsApp}>
      <a
        href="https://wa.me/919677589131"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className={styles.whatsappIcon} />
      </a>
      <span className={styles.tooltip}>Get a quick quote!</span>
    </div>
  );
}