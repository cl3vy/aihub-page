'use client';

import { useRef, type ReactNode } from 'react';
import { useInView } from 'framer-motion';
import { ImageSlot } from './ui/primitives';

export type Milestone = { date: string; title: string; body: ReactNode; image?: string };

function Item({ m }: { m: Milestone }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  return (
    <div ref={ref} className={`tl-item${inView ? ' on' : ''}`}>
      <div className="tl-date">{m.date}</div>
      <h4>{m.title}</h4>
      <p className="muted">{m.body}</p>
      {m.image ? <ImageSlot label={m.image} ratio="wide" className="mt-s" /> : null}
    </div>
  );
}

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <div className="timeline">
      {items.map((m, i) => (
        <Item key={i} m={m} />
      ))}
    </div>
  );
}
