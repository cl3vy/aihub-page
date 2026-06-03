'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Voice = { q: string; n: string; r: string };

export default function Voices({ items }: { items: Voice[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  const go = useCallback(
    (k: number) => setI((k + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [reduce, items.length]);

  const v = items[i];

  return (
    <div className="voices">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="v-quote">{v.q}</p>
          <p className="v-who">{v.n}</p>
          <p className="v-role">{v.r}</p>
        </motion.div>
      </AnimatePresence>
      <div className="v-nav">
        <button className="v-prev" aria-label="Previous" onClick={() => go(i - 1)}>
          ←
        </button>
        <button className="v-next" aria-label="Next" onClick={() => go(i + 1)}>
          →
        </button>
      </div>
      <div className="v-dots">
        {items.map((_, k) => (
          <button
            key={k}
            className={`v-dot${k === i ? ' on' : ''}`}
            aria-label={`Go to slide ${k + 1}`}
            onClick={() => go(k)}
          />
        ))}
      </div>
    </div>
  );
}
