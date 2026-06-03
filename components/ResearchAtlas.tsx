'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { DOMAINS } from '@/lib/content';
import Logo from './Logo';

export default function ResearchAtlas({ short = false }: { short?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <div className="atlas-grid">
        {DOMAINS.map((d, i) => (
          <button
            key={d.n}
            className={`domain-node${open !== null && open !== i ? ' dim' : ''}`}
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="dn-num">{d.n}</span>
            <span className="dn-name">{d.name}</span>
            <span className="dn-aim">
              {short ? d.dirs.join(' · ') : `${d.aim.slice(0, 96)}…`}
            </span>
            <span className="dn-go">
              Explore <span className="arrow">→</span>
            </span>
          </button>
        ))}
        <div className="domain-fill">
          <Logo size={34} idSuffix="atlas" />
          <div className="df-text">
            Seven domains,
            <br />
            one research agenda.
          </div>
          <div className="df-sub">Ethics · applied impact</div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open !== null && (
          <motion.div
            className="atlas-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ap-inner">
              <button className="ap-close" aria-label="Close" onClick={() => setOpen(null)}>
                ✕
              </button>
              <div className="ap-num">{DOMAINS[open].n} / 07</div>
              <h3 className="display-m">{DOMAINS[open].name}</h3>
              <p className="lede" style={{ marginTop: 18 }}>
                {DOMAINS[open].aim}
              </p>
              <div className="ap-cols">
                <div>
                  <div className="eyebrow no-rule">Example directions</div>
                  <ul className="ap-list">
                    {DOMAINS[open].dirs.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow no-rule">Lead researcher</div>
                  <div className="slot-line">[ Lead, to be assigned ]</div>
                  <div className="eyebrow no-rule" style={{ marginTop: 26 }}>
                    Related projects
                  </div>
                  <div className="slot-line">[ Initiatives in progress ]</div>
                </div>
              </div>
              <Link className="textlink" href="/research" style={{ marginTop: 8 }}>
                Full focus area <span className="arrow">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
