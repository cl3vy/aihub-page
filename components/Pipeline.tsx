'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export type Stage = { step: string; title: string; body: string };

export default function Pipeline({ stages }: { stages: Stage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });

  return (
    <div ref={ref} className={`pipeline${inView ? ' drawn' : ''}`}>
      <div className="pl-track">
        <div className="pl-line" />
        {stages.map((s, i) => (
          <div
            key={s.step}
            className={`pl-stage${inView ? ' on' : ''}`}
            style={{ transitionDelay: inView ? `${i * 220}ms` : '0ms' }}
          >
            <div className="pl-dot" />
            <div className="pl-step">{s.step}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
