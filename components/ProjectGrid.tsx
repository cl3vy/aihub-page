'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, PROJECT_FILTERS } from '@/lib/content';
import { Tag, TextLink, Photo } from './ui/primitives';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('All');
  const visible = PROJECTS.filter((p) => filter === 'All' || p.d === filter);

  return (
    <div>
      <div className="filter-bar">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' on' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid g-3">
        {visible.map((p) => (
          <motion.article
            key={p.t}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            data-domain={p.d}
            className={p.empty ? 'empty-card' : 'card proj-card'}
          >
            {p.empty ? (
              <>
                <div className="em-ic">+</div>
                <Tag>{p.d}</Tag>
                <div className="em-label" style={{ marginTop: 8 }}>
                  Initiative in progress
                </div>
                <p className="muted" style={{ fontSize: 13.5, margin: 0, maxWidth: '26ch' }}>
                  {p.s}
                </p>
              </>
            ) : (
              <>
                {p.image ? (
                  <Photo src={p.image} alt={p.t} ratio="4x3" sizes="(max-width: 900px) 100vw, 33vw" />
                ) : (
                  <div className="img-slot" data-label="PROJECT HERO · [slot]" />
                )}
                <div className="pc-body">
                  <div className="pc-tags">
                    <Tag>{p.d}</Tag>
                  </div>
                  <h3>{p.t}</h3>
                  <p className="muted" style={{ fontSize: 14.5 }}>
                    {p.s}
                  </p>
                  <TextLink href="/projects" style={{ marginTop: 'auto' }}>
                    View initiative
                  </TextLink>
                </div>
              </>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
