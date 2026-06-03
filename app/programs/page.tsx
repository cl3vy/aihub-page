import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import Pipeline, { type Stage } from '@/components/Pipeline';
import {
  Eyebrow,
  Button,
  Photo,
  Chip,
  PageHeader,
  CtaBand,
} from '@/components/ui/primitives';
import { IMG } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Two engines: an Incubator & Accelerator for AI startups, and Education & Training for everyone.',
};

const INC: Stage[] = [
  { step: 'STAGE 01', title: 'Intake', body: 'Founders and research teams apply with an idea or early prototype.' },
  { step: 'STAGE 02', title: 'Incubate', body: 'Guidance, technology access and mentorship to find product market fit.' },
  { step: 'STAGE 03', title: 'Accelerate', body: 'Business development, funding connections and investor networking.' },
  { step: 'STAGE 04', title: 'Launch', body: 'A globally competitive AI company, ready to scale.' },
];

const INC_CARDS: [string, string][] = [
  ["Who it's for", 'Researchers with a commercial idea, early-stage founders, and teams turning a prototype into a product.'],
  ['What you get', 'Mentorship, technology and compute access, a peer community, and warm introductions to capital.'],
  ['What we look for', 'Technical depth, real-world relevance, and an ethical approach to building with AI.'],
];

const EDU: [string, string, string, string][] = [
  [IMG.graduation, 'AI ethics & development certifications', 'Structured credentials in both responsible AI and hands-on development.', 'Outcome: certified practitioners'],
  [IMG.mentorship, 'Coding bootcamps & mentorship', 'Free and low-cost bootcamps with mentorship for women, minorities and underserved communities.', 'Outcome: job-ready skills'],
  [IMG.workshop, 'AI-powered education tools', 'Platforms for local schools and digital-literacy outreach in rural areas.', 'Outcome: wider access'],
];

const UNI_FEATURES: [string, string, string][] = [
  ['01', 'Joint research', 'Co-supervised projects across the seven domains.'],
  ['02', 'Curriculum support', 'Modules in AI ethics, ML, and applied development.'],
  ['03', 'Guest lectures & talks', 'Practitioners and researchers in your classrooms.'],
  ['04', 'Student pipeline', 'A path from coursework to real initiatives and startups.'],
];

export default function ProgramsPage() {
  return (
    <main className="page-top" data-screen-label="Programs">
      <PageHeader
        watermark="PROGRAMS"
        eyebrow="Programs"
        title="Two engines for an AI ecosystem."
        lede="One builds globally competitive AI companies. The other builds the people who'll work in them. Together they turn a community into an economy."
      />

      {/* INCUBATOR */}
      <section className="section-tight">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <div className="kicker-num">PILLAR 01 · Startup &amp; Innovation</div>
              <h2 className="display-l" style={{ marginTop: 12 }}>
                Incubator &amp; Accelerator
              </h2>
              <p className="lede mt-m">
                We help founders bridge research and commercialization, providing guidance,
                technology access, community, funding connections, investor networking and business
                development to build globally competitive AI startups.
              </p>
              <div className="cta-row mt-m">
                <Button href="/contact" variant="ink">
                  Apply to the program
                </Button>
                <span className="slot" style={{ alignSelf: 'center' }}>
                  [ Application form, to be added ]
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Photo src={IMG.networking} alt="AI Hub accelerator cohort networking" ratio="tall" sizes="(max-width: 900px) 100vw, 45vw" />
              <div className="caption">
                <span className="dot">●</span> Accelerator cohort · Tirana
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-l">
            <Eyebrow>How it works</Eyebrow>
            <Pipeline stages={INC} />
          </Reveal>

          <div className="grid g-3 mt-l">
            {INC_CARDS.map(([h, p], i) => (
              <Reveal key={h} delay={i * 80} className="card" style={{ padding: 28 }}>
                <h4 className="display-s">{h}</h4>
                <p className="muted" style={{ fontSize: 14.5 }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section tint">
        <div className="wrap">
          <Reveal className="wrap-end">
            <div>
              <div className="kicker-num">PILLAR 02 · Education &amp; Training</div>
              <h2 className="display-l" style={{ marginTop: 12 }}>
                Education &amp; Training
              </h2>
            </div>
            <p className="muted measure" style={{ maxWidth: '38ch' }}>
              Inclusive by design, with dedicated tracks for women, minorities and underserved
              communities.
            </p>
          </Reveal>
          <div className="grid g-3 mt-l">
            {EDU.map(([img, h, p, out], i) => (
              <Reveal key={h} delay={i * 80} className="card" style={{ overflow: 'hidden' }}>
                <Photo src={img} alt={h} ratio="wide" sizes="(max-width: 900px) 100vw, 33vw" />
                <div style={{ padding: 24 }}>
                  <h4 className="display-s">{h}</h4>
                  <p className="muted" style={{ fontSize: 14.5 }}>
                    {p}
                  </p>
                  <Chip>{out}</Chip>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <Eyebrow>For universities &amp; institutions</Eyebrow>
              <h2 className="display-l">A partnership track for academia.</h2>
              <p className="lede mt-m">
                We co-develop curricula, host joint research, run guest lectures and connect students
                to real projects. Nine universities already partner with us, and there&apos;s room for
                more.
              </p>
              <div className="mt-m">
                <Button href="/contact" variant="ink">
                  Become a partner
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="feature-list">
                {UNI_FEATURES.map(([num, h, p]) => (
                  <li key={num}>
                    <span className="fl-num">{num}</span>
                    <div>
                      <h4>{h}</h4>
                      <p>{p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        watermark="LEARN"
        eyebrow="Take the next step"
        title="Apply, partner, or enroll."
        primary={{ href: '/contact', label: 'Apply' }}
        secondary={{ href: '/community', label: 'Enroll & join' }}
      />
    </main>
  );
}
