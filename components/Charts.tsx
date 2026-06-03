'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const W = 600;
const H = 260;
const PAD = 36;

/* ===== Community growth — area + line, gridlines, hover guide ===== */
const GROWTH = [0.04, 0.07, 0.12, 0.18, 0.27, 0.36, 0.48, 0.6, 0.74, 0.86, 1];
const GROWTH_LABELS = ['', "'24", '', '', "'25", '', '', "'26", '', '', 'now'];

export function GrowthChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [hover, setHover] = useState<number | null>(null);

  const x = (i: number) => PAD + (W - PAD * 2) * (i / (GROWTH.length - 1));
  const y = (v: number) => H - PAD - (H - PAD * 2) * v;
  const linePath =
    `M${x(0)},${y(GROWTH[0])}` + GROWTH.map((p, i) => (i ? ` L${x(i)},${y(p)}` : '')).join('');
  const areaPath = `${linePath} L${x(GROWTH.length - 1)},${y(0)} L${x(0)},${y(0)} Z`;

  return (
    <div className="chart-card">
      <div className="chart-head">
        <span className="chart-title">Community growth</span>
        <span className="chart-note">↗ trajectory illustrative · endpoint actual</span>
      </div>
      <svg
        ref={ref}
        className="chart-svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Community growth trajectory reaching 1,000+ members"
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2F6FED" stopOpacity="0.26" />
            <stop offset="1" stopColor="#2F6FED" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.5, 1].map((v) => (
          <line
            key={v}
            x1={PAD}
            x2={W - PAD}
            y1={y(v)}
            y2={y(v)}
            stroke="rgba(11,18,32,0.08)"
          />
        ))}
        <path d={areaPath} fill="url(#gfill)" />
        <path
          d={linePath}
          fill="none"
          stroke="#1B4FCB"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`chart-line${inView ? ' drawn' : ''}`}
        />
        {/* hover hit-areas */}
        {GROWTH.map((p, i) => (
          <rect
            key={i}
            x={x(i) - (W - PAD * 2) / GROWTH.length / 2}
            y={0}
            width={(W - PAD * 2) / GROWTH.length}
            height={H}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
          />
        ))}
        {/* endpoint */}
        <circle cx={x(GROWTH.length - 1)} cy={y(1)} r="4.5" fill="#1B4FCB" />
        <text
          x={x(GROWTH.length - 1) - 8}
          y={y(1) - 12}
          textAnchor="end"
          className="chart-anno"
        >
          1,000+ members
        </text>
        {/* hover guide */}
        {hover !== null && (
          <g>
            <line
              x1={x(hover)}
              x2={x(hover)}
              y1={PAD}
              y2={H - PAD}
              stroke="rgba(27,79,203,0.35)"
              strokeDasharray="3 3"
            />
            <circle cx={x(hover)} cy={y(GROWTH[hover])} r="5" fill="#2F6FED" className="chart-dot" />
          </g>
        )}
        {GROWTH_LABELS.map((lb, i) =>
          lb ? (
            <text key={i} x={x(i)} y={H - 10} textAnchor="middle" className="chart-axis">
              {lb}
            </text>
          ) : null,
        )}
      </svg>
      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-swatch solid" /> Members over time
        </span>
        <span className="legend-item">— Endpoint is the actual figure</span>
      </div>
    </div>
  );
}

/* ===== Activity by format — animated bars, hover, legend ===== */
type Bar = { l: string; v: number; proj?: boolean };

export function BarChart({ data }: { data: Bar[] }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [hover, setHover] = useState<number | null>(null);
  const n = data.length;
  const max = Math.max(...data.map((d) => d.v));
  const bw = ((W - PAD * 2) / n) * 0.5;

  return (
    <div className="chart-card">
      <div className="chart-head">
        <span className="chart-title">Activity by format</span>
        <span className="chart-note">▢ dashed = planned</span>
      </div>
      <svg
        ref={ref}
        className="chart-svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Community activity by event format"
        onMouseLeave={() => setHover(null)}
      >
        {[0, 0.5, 1].map((v) => (
          <line
            key={v}
            x1={PAD}
            x2={W - PAD}
            y1={H - PAD - (H - PAD * 2) * v}
            y2={H - PAD - (H - PAD * 2) * v}
            stroke="rgba(11,18,32,0.08)"
          />
        ))}
        {data.map((d, i) => {
          const cx = PAD + (W - PAD * 2) * ((i + 0.5) / n);
          const bh = (H - PAD * 2) * (d.v / max);
          const topY = inView ? H - PAD - bh : H - PAD;
          return (
            <g key={d.l} onMouseEnter={() => setHover(i)}>
              <rect
                className="bar"
                x={cx - bw / 2}
                y={topY}
                width={bw}
                height={inView ? bh : 0}
                rx="3"
                fill={d.proj ? 'rgba(47,111,237,0.4)' : '#2F6FED'}
                strokeDasharray={d.proj ? '3 3' : undefined}
                stroke={d.proj ? '#2F6FED' : undefined}
                style={{ transitionDelay: `${i * 90}ms` }}
              />
              {hover === i && (
                <text x={cx} y={topY - 8} textAnchor="middle" className="chart-tip">
                  {d.v}
                  {d.proj ? ' (planned)' : ''}
                </text>
              )}
              <text x={cx} y={H - 10} textAnchor="middle" className="chart-axis">
                {d.l}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-swatch solid" /> Held
        </span>
        <span className="legend-item">
          <span className="legend-swatch proj" /> Planned
        </span>
      </div>
    </div>
  );
}
