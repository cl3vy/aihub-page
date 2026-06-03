'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LOGO } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap-wide">
        <div className="footer-top">
          <div>
            <Link className="logo" href="/">
              <span className="brand-logo">
                <Image src={LOGO.landscape} alt="AI Hub" fill sizes="200px" />
              </span>
            </Link>
            <p className="mission">Where AI meets ethics, innovation, and impact.</p>
            <p style={{ fontSize: '14px', maxWidth: '30ch', color: 'rgba(255,255,255,0.55)' }}>
              A non-profit advancing AI research, education, and innovation in Albania and its
              diaspora.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/events">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4>Programs</h4>
            <ul>
              <li><Link href="/programs">Incubator &amp; Accelerator</Link></li>
              <li><Link href="/programs">Education &amp; Training</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/research">Partner on research</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@aihub.al">info@aihub.al</a></li>
              <li><a href="tel:+355693405778">+355 69 340 5778</a></li>
              <li>Tirana, Albania</li>
            </ul>
          </div>
          <div className="foot-news">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '14px', marginBottom: '16px', color: 'rgba(255,255,255,0.55)' }}>
              Research notes &amp; event announcements.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" aria-label="Email" required />
              <button className="btn btn-light" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AI Hub · aihub.al</span>
          <div className="socials">
            <a href="https://instagram.com/aihub.al">Instagram</a>
            <a href="https://www.linkedin.com/company/ai-hub-albania">LinkedIn</a>
            <a href="https://t.me/AIHubAlb">Telegram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
