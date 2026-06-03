import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import ResearchAtlas from '@/components/ResearchAtlas';
import Pipeline, { type Stage } from '@/components/Pipeline';
import { Eyebrow, Photo, PageHeader, CtaBand } from '@/components/ui/primitives';
import { DOMAINS, DOMAIN_IMAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Research',
  description:
    "Seven research domains, a research-to-deployment pipeline, and the philosophy behind AI Hub's work.",
};

const PIPELINE: Stage[] = [
  { step: 'STAGE 01', title: 'Research', body: 'Define the problem, review the field, and establish rigorous methods and data.' },
  { step: 'STAGE 02', title: 'Prototype', body: 'Build a working proof of concept and validate it against real conditions.' },
  { step: 'STAGE 03', title: 'Pilot', body: 'Test with partners in the field: universities, NGOs, public institutions.' },
  { step: 'STAGE 04', title: 'Deployment / Policy', body: 'Ship the tool, or translate findings into policy and lasting practice.' },
];

export default function ResearchPage() {
  return (
    <main className="page-top" data-screen-label="Research">
      <PageHeader
        watermark="ATLAS"
        eyebrow="Research"
        title="Rigorous research, pointed at problems that matter."
        lede="Our philosophy is simple: research should be ethical, applied, and accountable. We work where strong methods meet real needs in Albania, and we hold ourselves to international standards."
      >
        <Reveal immediate delay={240}>
          <div className="hero-counters" style={{ marginTop: 40 }}>
            <div className="stat">
              <div className="num">
                <Counter value={7} />
              </div>
              <div className="label">Research domains</div>
            </div>
            <div className="stat">
              <div className="num">
                <Counter value={9} />
              </div>
              <div className="label">University partners</div>
            </div>
            <div className="stat">
              <div className="num">
                <Counter value={4} />
              </div>
              <div className="label">Pipeline stages</div>
            </div>
          </div>
        </Reveal>
      </PageHeader>

      {/* ATLAS */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal className="wrap-end">
            <div>
              <Eyebrow>Research Atlas</Eyebrow>
              <h2 className="display-l">Seven domains. Click to explore.</h2>
            </div>
            <p className="muted measure" style={{ maxWidth: '36ch' }}>
              A navigable map of where AI Hub focuses. Each domain opens to its aims and directions.
            </p>
          </Reveal>
          <Reveal className="mt-l">
            <ResearchAtlas />
          </Reveal>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Methodology</Eyebrow>
            <h2 className="display-l">From research to the real world.</h2>
            <p className="lede mt-s measure">
              Every initiative moves along the same path, so good ideas don&apos;t stall in a
              paper. The line draws as research becomes deployment and policy.
            </p>
          </Reveal>
          <Pipeline stages={PIPELINE} />
        </div>
      </section>

      {/* FOCUS AREAS IN DEPTH */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Focus areas in depth</Eyebrow>
            <h2 className="display-l">The seven domains, in full.</h2>
          </Reveal>
          <div className="mt-l">
            {DOMAINS.map((d) => (
              <Reveal key={d.n} className="domain-row">
                <div>
                  <div className="kicker-num">{d.n} / 07</div>
                  <h3 className="display-m" style={{ marginTop: 10 }}>
                    {d.name}
                  </h3>
                  <Photo
                    src={DOMAIN_IMAGES[d.short]}
                    alt={`${d.name}, AI Hub`}
                    ratio="wide"
                    className="mt-m"
                    sizes="(max-width: 820px) 100vw, 40vw"
                  />
                </div>
                <div>
                  <p className="lede">{d.aim}</p>
                  <p className="muted" style={{ marginTop: 14 }}>
                    <strong style={{ color: 'var(--ink)' }}>Why it matters for Albania.</strong>{' '}
                    {d.why}
                  </p>
                  <div className="eyebrow no-rule" style={{ marginTop: 26 }}>
                    Example directions
                  </div>
                  <ul className="ap-list" style={{ marginTop: 6 }}>
                    {d.dirs.map((x) => (
                      <li key={x} style={{ color: 'var(--text)' }}>
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
                    <span className="slot">Lead: [ to be assigned ]</span>
                    <span className="slot">Related projects: [ in progress ]</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Outputs</Eyebrow>
            <h2 className="display-l">Selected outputs.</h2>
            <p className="lede mt-s measure">
              Papers, reports and open tools will be listed here as they are published.
            </p>
          </Reveal>
          <Reveal className="empty-card mt-l" style={{ minHeight: 200 }}>
            <div className="em-ic">+</div>
            <div className="em-label">Publications &amp; reports, coming soon</div>
            <p className="muted" style={{ fontSize: 13.5, maxWidth: '40ch', margin: 0 }}>
              We don&apos;t list work we haven&apos;t published. This space is reserved for
              peer-reviewed papers, technical reports and open-source releases.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        watermark="RESEARCH"
        eyebrow="Collaborate"
        title="Have a research problem worth solving?"
        primary={{ href: '/contact', label: 'Collaborate on research' }}
        secondary={{ href: '/community', label: 'Partner with us' }}
      />
    </main>
  );
}
