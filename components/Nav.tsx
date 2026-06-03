'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

const PAGES: [string, string][] = [
  ['About', '/about'],
  ['Research', '/research'],
  ['Projects', '/projects'],
  ['Programs', '/programs'],
  ['Events', '/events'],
  ['Community', '/community'],
];

export default function Nav() {
  const pathname = usePathname();
  const overDarkHero = pathname === '/'; // only home has the full-bleed dark hero
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // solid (light) bar unless we're sitting at the top of the dark home hero
  const solid = !overDarkHero || scrolled;

  return (
    <>
      <header className={`nav${solid ? ' solid' : ''}`}>
        <div className="nav-inner">
          <Link className="logo" href="/" aria-label="AI Hub home">
            <Logo size={30} idSuffix="nav" />
            <span className="word">AI Hub</span>
          </Link>
          <nav className="nav-links">
            {PAGES.map(([t, h]) => (
              <Link key={h} href={h} className={pathname === h ? 'active' : ''}>
                {t}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link className="contact" href="/contact">
              Contact
            </Link>
            <Link className="nav-join" href="/community">
              Join
            </Link>
            <button
              className="nav-burger"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <AnimatePresence>
          {menuOpen &&
            PAGES.concat([
              ['Contact', '/contact'],
              ['Join AI Hub', '/community'],
            ]).map(([t, h], idx) => (
              <motion.div
                key={`${h}-${idx}`}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={h} onClick={() => setMenuOpen(false)}>
                  {t}
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}
