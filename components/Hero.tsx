'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import Reveal from './ui/Reveal';
import Counter from './ui/Counter';
import { Button } from './ui/primitives';
import { IMG } from '@/lib/content';

const SLIDES = [
  { src: IMG.eventTalk, caption: 'AI Hub Albania · community meetup · Tirana' },
  { src: IMG.conference, caption: 'Climate & innovation conference · Tirana' },
  { src: IMG.officeMeeting, caption: 'AI Hub HQ · the team at work · Tirana' },
  { src: IMG.graduation, caption: 'Bootcamp cohort · certification day' },
];

const STATS: [number, string, string | undefined][] = [
  [1000, 'Members', '+'],
  [9, 'Universities', undefined],
  [20, 'Partners', '+'],
  [7, 'Domains', undefined],
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  // soft mouse parallax for depth
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5600);
    return () => clearInterval(t);
  }, [reduce]);

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -24);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -16);
  }

  return (
    <section className="hero" data-dark onMouseMove={onMove}>
      <motion.div className="hero-bg" style={{ x: px, y: py }}>
        <AnimatePresence>
          <motion.div
            key={i}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="hero-slide-img"
              initial={{ scale: reduce ? 1 : 1.04 }}
              animate={{ scale: reduce ? 1 : 1.14 }}
              transition={{ duration: 7.5, ease: 'linear' }}
            >
              <Image
                src={SLIDES[i].src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="hero-grade" />
        <div className="hero-dotgrid" />
        <div className="hero-grain" />
      </motion.div>

      <div className="wrap-wide hero-inner">
        <div className="hero-content">
          <Reveal immediate>
            <span className="hero-eyebrow">
              <span className="live" /> Non-profit · Tirana, Albania &amp; diaspora
            </span>
          </Reveal>
          <Reveal immediate delay={90}>
            <h1 className="display-xl hero-title">
              Advancing AI <em>research</em>, <em>education</em>, and <em>innovation</em>, in
              Albania and beyond.
            </h1>
          </Reveal>
          <Reveal immediate delay={180}>
            <p className="hero-lede">
              A community of researchers, engineers, and educators turning rigorous AI research into
              real-world impact, built on ethics, openness, and lasting collaboration.
            </p>
          </Reveal>
          <Reveal immediate delay={260}>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <Button href="/research" variant="solid">
                Explore our research
              </Button>
              <Button href="/community" variant="light">
                Join the community
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* glass HUD */}
      <div className="hero-hud-wrap">
        <Reveal immediate delay={360} className="wrap-wide">
          <div className="hero-hud">
            <div className="hud-stats">
              {STATS.map(([value, label, suffix]) => (
                <div className="hud-stat" key={label}>
                  <span className="hud-num">
                    <Counter value={value} suffix={suffix} />
                  </span>
                  <span className="hud-label">{label}</span>
                </div>
              ))}
            </div>
            <div className="hud-meta">
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  className="hud-caption"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  {SLIDES[i].caption}
                </motion.span>
              </AnimatePresence>
              <div className="hero-dots">
                {SLIDES.map((_, k) => (
                  <button
                    key={k}
                    className={`hero-dot${k === i ? ' on' : ''}`}
                    aria-label={`Show image ${k + 1}`}
                    onClick={() => setI(k)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
