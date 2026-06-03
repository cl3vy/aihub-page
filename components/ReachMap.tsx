'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

type City = { id: string; name: string; x: number; y: number; hub?: boolean; sm?: boolean };

const CITIES: City[] = [
  { id: 'tirana', name: 'Tirana HQ', x: 56, y: 60, hub: true },
  { id: 'munich', name: 'Munich', x: 49, y: 44 },
  { id: 'sf', name: 'San Francisco', x: 9, y: 47 },
  { id: 'u1', name: 'Albanian universities', x: 57, y: 66, sm: true },
  { id: 'u2', name: '', x: 54, y: 56, sm: true },
  { id: 'u3', name: '', x: 59, y: 63, sm: true },
];

function arc(a: City, b: City) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.hypot(a.x - b.x, a.y - b.y) * 0.32;
  return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
}

export default function ReachMap() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const hub = CITIES[0];

  return (
    <svg
      ref={ref}
      className={`reach-svg${inView ? ' drawn' : ''}`}
      viewBox="0 0 100 62"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Map showing Tirana HQ connected to Munich and San Francisco"
    >
      {['munich', 'sf'].map((id) => {
        const c = CITIES.find((x) => x.id === id)!;
        return <path key={id} d={arc(hub, c)} className="reach-arc" fill="none" />;
      })}
      {CITIES.map((c) => (
        <g key={c.id || `${c.x}-${c.y}`}>
          <circle
            cx={c.x}
            cy={c.y}
            r={c.hub ? 1.6 : c.sm ? 0.7 : 1.1}
            className={`reach-node${c.hub ? ' hub' : ''}`}
          />
          {c.hub && <circle cx={c.x} cy={c.y} r={1.6} className="reach-pulse" />}
          {c.name && !c.sm && (
            <text x={c.x + 2.2} y={c.y + 0.6} className="reach-label">
              {c.name}
            </text>
          )}
        </g>
      ))}
      <text x={61} y={67} className="reach-label">
        9 universities
      </text>
    </svg>
  );
}
