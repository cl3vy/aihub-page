'use client';

import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  /** Animate on mount instead of on scroll-into-view (for above-the-fold content). */
  immediate?: boolean;
};

/**
 * Scroll-reveal wrapper: fades + rises into view once, with a refined ease.
 * Honours prefers-reduced-motion (renders statically). Above-the-fold content
 * should pass `immediate` so it animates on mount rather than waiting for an
 * intersection event.
 */
export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 20,
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const transition = { duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] as const };

  if (immediate) {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
