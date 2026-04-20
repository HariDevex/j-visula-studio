"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./BeforeAfter.module.css";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After" 
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    handleMove(e.clientX);
    const handleMouseMove = (moveEvent: MouseEvent) => handleMove(moveEvent.clientX);
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  return (
    <div 
      ref={containerRef}
      className={styles.comparison}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove as any}
    >
      <Image
        src={beforeImage}
        alt={beforeAlt}
        fill
        sizes="500px"
        className={`${styles.image} ${styles.beforeImage}`}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        draggable={false}
      />
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        sizes="500px"
        className={`${styles.image} ${styles.afterImage}`}
        draggable={false}
      />
      <div 
        className={styles.slider}
        style={{ left: `${sliderPosition}%` }}
      />
      <div className={styles.labels}>
        <span className={`${styles.label} ${styles.beforeLabel}`}>Before</span>
        <span className={`${styles.label} ${styles.afterLabel}`}>After</span>
      </div>
    </div>
  );
}