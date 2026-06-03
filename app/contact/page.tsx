import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ContactForm';
import { Eyebrow, Chip, ImageSlot, PageHeader, CtaBand } from '@/components/ui/primitives';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with AI Hub — general, partnership, incubator, and press enquiries. Tirana, Albania.',
};

const SOCIALS: [string, string][] = [
  ['Instagram', 'https://instagram.com/aihub.al'],
  ['LinkedIn', 'https://www.linkedin.com/company/ai-hub-albania'],
  ['Telegram', 'https://t.me/AIHubAlb'],
  ['Facebook', '#'],
  ['YouTube', '#'],
  ['X', '#'],
];

export default function ContactPage() {
  return (
    <main className="page-top" data-screen-label="Contact">
      <PageHeader
        watermark="HELLO"
        eyebrow="Contact"
        title="Let's talk."
        lede="Whether you want to join, partner, apply to the incubator, or write about us — we'd love to hear from you."
      />

      <section className="section-tight">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'start' }}>
            {/* LEFT */}
            <Reveal>
              <Eyebrow>Reach us</Eyebrow>
              <h2 className="display-l">A warm welcome, in Tirana and online.</h2>
              <p className="lede mt-m">
                We&apos;re a small, responsive team. Tell us what you&apos;re working on or curious
                about, and we&apos;ll get back to you.
              </p>

              <div className="cell-grid mt-l">
                <a
                  href="mailto:info@aihub.al"
                  className="cell-item flex between center"
                  style={{ padding: 22 }}
                >
                  <span>
                    <div className="caption" style={{ margin: 0 }}>
                      EMAIL
                    </div>
                    <div style={{ fontSize: 18, marginTop: 4 }}>info@aihub.al</div>
                  </span>
                  <span className="arrow">→</span>
                </a>
                <a
                  href="tel:+355693405778"
                  className="cell-item flex between center"
                  style={{ padding: 22 }}
                >
                  <span>
                    <div className="caption" style={{ margin: 0 }}>
                      PHONE
                    </div>
                    <div style={{ fontSize: 18, marginTop: 4 }}>+355 69 340 5778</div>
                  </span>
                  <span className="arrow">→</span>
                </a>
                <div className="cell-item flex between center" style={{ padding: 22, borderBottom: 0 }}>
                  <span>
                    <div className="caption" style={{ margin: 0 }}>
                      LOCATION
                    </div>
                    <div style={{ fontSize: 18, marginTop: 4 }}>Tirana, Albania</div>
                  </span>
                </div>
              </div>

              <div className="eyebrow mt-l">Follow</div>
              <div className="flex" style={{ gap: 10, flexWrap: 'wrap' }}>
                {SOCIALS.map(([name, href]) => (
                  <Chip key={name} href={href}>
                    {name}
                  </Chip>
                ))}
              </div>

              <div style={{ marginTop: 48 }}>
                <ImageSlot label="MAP · Tirana, Albania [slot]" ratio="wide" />
                <div className="caption">
                  <span className="dot">●</span> AI Hub · Tirana, Albania
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        watermark="AI"
        eyebrow="While you're here"
        title="Be part of Albania's AI future."
        primary={{ href: '/community', label: 'Join AI Hub' }}
        secondary={{ href: '/research', label: 'See our research' }}
      />
    </main>
  );
}
