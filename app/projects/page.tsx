import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import ProjectGrid from '@/components/ProjectGrid';
import { Eyebrow, Tag, Chip, Photo, PageHeader, CtaBand } from '@/components/ui/primitives';
import { IMG } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'AI Hub initiatives across seven research domains, built honestly, with outcomes documented as they reach pilot.',
};

export default function ProjectsPage() {
  return (
    <main className="page-top" data-screen-label="Projects">
      <PageHeader
        watermark="WORK"
        eyebrow="Projects"
        title="Initiatives, from idea to pilot."
        lede="These are the directions our domains are turning into work. We document outcomes only once they're real, so every card here is an honest snapshot, not a press release."
      />

      {/* FILTERABLE GRID */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <ProjectGrid />
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY TEMPLATE */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Case-study template</Eyebrow>
            <h2 className="display-l measure">How we&apos;ll document each project.</h2>
            <p className="lede mt-s measure">
              A consistent, image-forward structure, so when an initiative reaches pilot, its story
              is told the same rigorous way every time.
            </p>
          </Reveal>

          <Reveal className="card mt-l" style={{ overflow: 'hidden' }}>
            <Photo src={IMG.conference} alt="AI Hub initiative in the field" ratio="cine" sizes="100vw" />
            <div style={{ padding: 'clamp(28px,4vw,52px)' }}>
              <div className="flex" style={{ gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
                <Tag>Governance</Tag>
                <Chip>Pilot stage</Chip>
              </div>
              <h3 className="display-m">Example initiative title</h3>
              <div className="grid g-2 mt-l" style={{ gap: 48 }}>
                <div>
                  <div className="eyebrow no-rule">The challenge</div>
                  <p className="muted">
                    What problem this addresses, and why it matters now.
                    <span className="slot" style={{ display: 'block', marginTop: 10 }}>
                      [ Challenge, to be written ]
                    </span>
                  </p>
                  <div className="eyebrow no-rule mt-m">The approach</div>
                  <p className="muted">
                    The method, the data, and the partners involved.
                    <span className="slot" style={{ display: 'block', marginTop: 10 }}>
                      [ Approach, to be written ]
                    </span>
                  </p>
                </div>
                <div>
                  <div className="eyebrow no-rule">What was built</div>
                  <p className="muted">
                    The prototype or system delivered.
                    <span className="slot" style={{ display: 'block', marginTop: 10 }}>
                      [ Deliverable, to be written ]
                    </span>
                  </p>
                  <div className="eyebrow no-rule mt-m">Outcome &amp; metrics</div>
                  <div className="slot" style={{ display: 'block', marginTop: 6 }}>
                    [ Outcomes &amp; metrics: documented at pilot, no figures shipped early ]
                  </div>
                </div>
              </div>
              <hr className="rule mt-l" />
              <div className="grid g-2 mt-m" style={{ gap: 48 }}>
                <div>
                  <div className="eyebrow no-rule">Team</div>
                  <p className="muted" style={{ margin: 0 }}>
                    [ Contributors, to be listed ]
                  </p>
                </div>
                <div>
                  <div className="eyebrow no-rule">Partners</div>
                  <p className="muted" style={{ margin: 0 }}>
                    [ Partner organisations, to be listed ]
                  </p>
                </div>
              </div>
              <div className="grid g-3 mt-l" style={{ gap: 12 }}>
                <Photo src={IMG.audience1} alt="Project gallery" ratio="wide" sizes="(max-width: 900px) 100vw, 30vw" />
                <Photo src={IMG.audience2} alt="Project gallery" ratio="wide" sizes="(max-width: 900px) 100vw, 30vw" />
                <Photo src={IMG.networking} alt="Project gallery" ratio="wide" sizes="(max-width: 900px) 100vw, 30vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        watermark="BUILD"
        eyebrow="Get involved"
        title="Have a project for the real world?"
        primary={{ href: '/contact', label: 'Propose a project' }}
        secondary={{ href: '/community', label: 'Partner with us' }}
      />
    </main>
  );
}
