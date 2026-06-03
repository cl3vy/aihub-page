'use client';

import { useEffect, useRef } from 'react';
import { heroNetwork } from '@/lib/aihub';
import Reveal from './ui/Reveal';
import Counter from './ui/Counter';
import { Eyebrow, Button } from './ui/primitives';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const dispose = heroNetwork(canvasRef.current);
    return () => dispose?.();
  }, []);

  return (
    <section className="hero dark" data-dark>
      <div className="hero-scrim" />
      <div className="wrap-wide">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal immediate>
              <Eyebrow>Non-profit · Tirana, Albania &amp; diaspora</Eyebrow>
            </Reveal>
            <Reveal immediate delay={80}>
              <h1 className="display-xl">
                Advancing AI research, education, and innovation — in Albania and beyond.
              </h1>
            </Reveal>
            <Reveal immediate delay={160}>
              <p className="lede" style={{ color: 'rgba(255,255,255,0.74)', marginTop: 26 }}>
                A community of researchers, engineers, and educators bridging rigorous AI research
                with real-world application — built on ethics, openness, and lasting impact.
              </p>
            </Reveal>
            <Reveal immediate delay={240}>
              <div className="cta-row" style={{ marginTop: 34 }}>
                <Button href="/research" variant="solid">
                  Explore our research
                </Button>
                <Button href="/community" variant="light">
                  Join the community
                </Button>
              </div>
            </Reveal>
            <Reveal immediate delay={320}>
              <div className="hero-counters">
                <div className="stat">
                  <div className="num">
                    <Counter value={1000} suffix="+" />
                  </div>
                  <div className="label">Members</div>
                </div>
                <div className="stat">
                  <div className="num">
                    <Counter value={9} />
                  </div>
                  <div className="label">Universities</div>
                </div>
                <div className="stat">
                  <div className="num">
                    <Counter value={20} suffix="+" />
                  </div>
                  <div className="label">Partners</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal immediate delay={200} className="hero-panel">
            <canvas ref={canvasRef} aria-hidden="true" />
            <div className="panel-tag">
              <span className="live" /> Live community graph
            </div>
            <div className="panel-foot">
              <span>Members · Universities · Partners</span>
              <span>AI Hub</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
