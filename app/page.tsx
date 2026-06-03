import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import { GrowthChart, BarChart } from '@/components/Charts';
import ResearchAtlas from '@/components/ResearchAtlas';
import Voices from '@/components/Voices';
import PartnerWall from '@/components/PartnerWall';
import {
  Eyebrow,
  Button,
  TextLink,
  ImageSlot,
  Tag,
  Chip,
  SectionHead,
  CtaBand,
} from '@/components/ui/primitives';
import { VOICES, ACTIVITY_BARS } from '@/lib/content';

const DASH_STATS: [number, string, string | undefined][] = [
  [1000, 'Community members', '+'],
  [9, 'University partners', undefined],
  [20, 'Other partners', '+'],
  [7, 'Active research domains', undefined],
];

export default function Home() {
  return (
    <main data-screen-label="Home">
      <Hero />

      {/* MISSION STRIP */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="display-l">
                A thriving, collaborative AI community — turning research into impact for Albania.
              </h2>
              <p className="lede mt-m">
                We exist to bridge the gap between AI research and real-world application, and to
                accelerate responsible AI development through education, collaboration, and open
                community.
              </p>
              <TextLink href="/about" className="mt-s">
                Read our story
              </TextLink>
            </Reveal>
            <Reveal delay={120}>
              <ImageSlot label="TREATED PHOTO · community / workshop" ratio="tall" />
              <div className="caption">
                <span className="dot">●</span> AI Hub community gathering · Tirana · [date]
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section className="section tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Impact dashboard"
            title="Momentum, measured."
            note="Live community figures are actual. Growth trajectory and forward projections are marked as indicative."
          />
          <div className="grid g-4 mt-l">
            {DASH_STATS.map(([value, label, suffix], i) => (
              <Reveal key={label} delay={i * 80} className="card" style={{ padding: 28 }}>
                <div className="stat">
                  <div className="num">
                    <Counter value={value} suffix={suffix} />
                  </div>
                  <div className="label">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid g-2 mt-l">
            <Reveal>
              <GrowthChart />
            </Reveal>
            <Reveal delay={120}>
              <BarChart data={ACTIVITY_BARS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESEARCH ATLAS PREVIEW */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Research Atlas"
            title={
              <>
                Seven domains where AI
                <br />
                can serve a country.
              </>
            }
            action={
              <Button href="/research" variant="ghost">
                Open the full Atlas
              </Button>
            }
          />
          <Reveal className="mt-l">
            <ResearchAtlas short />
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Featured initiatives"
            title="From research to the real world."
            action={<TextLink href="/projects">All projects</TextLink>}
          />
          <div className="grid g-3 mt-l">
            <Reveal className="card proj-card">
              <div className="img-slot" data-label="PROJECT HERO · [slot]" />
              <div className="pc-body">
                <div className="pc-tags">
                  <Tag>Governance</Tag>
                </div>
                <h3>Civic participation tooling</h3>
                <p className="muted" style={{ fontSize: 14.5 }}>
                  An initiative exploring AI that widens citizen participation in local government
                  decisions.
                </p>
                <TextLink href="/projects" style={{ marginTop: 'auto' }}>
                  View initiative
                </TextLink>
              </div>
            </Reveal>
            <Reveal delay={100} className="card proj-card">
              <div className="img-slot" data-label="PROJECT HERO · [slot]" />
              <div className="pc-body">
                <div className="pc-tags">
                  <Tag>Environment</Tag>
                </div>
                <h3>Air-quality monitoring</h3>
                <p className="muted" style={{ fontSize: 14.5 }}>
                  Sensing and modelling urban air quality to inform public health and policy.
                </p>
                <TextLink href="/projects" style={{ marginTop: 'auto' }}>
                  View initiative
                </TextLink>
              </div>
            </Reveal>
            <Reveal delay={200} className="empty-card">
              <div className="em-ic">+</div>
              <div className="em-label">Initiative in progress</div>
              <p className="muted" style={{ fontSize: 13.5, margin: 0, maxWidth: '24ch' }}>
                New case studies are documented here as they reach pilot stage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Programs</Eyebrow>
            <h2 className="display-l">Two engines for the ecosystem.</h2>
          </Reveal>
          <div className="grid g-2 mt-l">
            <Reveal className="card frame" style={{ overflow: 'hidden' }}>
              <Link href="/programs">
                <div className="img-slot ratio-wide" data-label="PHOTO · founders / accelerator" />
                <div style={{ padding: 28 }}>
                  <div className="kicker-num">01 — Startup &amp; Innovation</div>
                  <h3 className="display-s" style={{ marginTop: 10 }}>
                    Incubator &amp; Accelerator
                  </h3>
                  <p className="muted" style={{ fontSize: 15 }}>
                    Guidance, technology access, funding connections and investor networking —
                    bridging research to globally competitive AI startups.
                  </p>
                  <span className="textlink">
                    Explore the program <span className="arrow">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={120} className="card frame" style={{ overflow: 'hidden' }}>
              <Link href="/programs">
                <div className="img-slot ratio-wide" data-label="PHOTO · bootcamp / classroom" />
                <div style={{ padding: 28 }}>
                  <div className="kicker-num">02 — Education &amp; Training</div>
                  <h3 className="display-s" style={{ marginTop: 10 }}>
                    Education &amp; Training
                  </h3>
                  <p className="muted" style={{ fontSize: 15 }}>
                    Certifications, bootcamps and mentorship — with dedicated tracks for women,
                    minorities and underserved communities.
                  </p>
                  <span className="textlink">
                    Explore the program <span className="arrow">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PARTNERS WALL */}
      <section className="section tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Partners & universities"
            title="Built with 9 universities and 20+ partners."
            action={<TextLink href="/community">See the network</TextLink>}
          />
          <Reveal className="mt-l">
            <PartnerWall count={15} />
          </Reveal>
        </div>
      </section>

      {/* VOICES */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow style={{ justifyContent: 'center', display: 'flex' }}>The team</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <Voices items={VOICES} />
          </Reveal>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <Eyebrow>Next event</Eyebrow>
              <Tag>Meetup</Tag>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                GDG Tirana — Official Kickoff Meetup
              </h2>
              <p className="lede mt-s">
                Featuring the talk{' '}
                <span className="serif-italic">
                  “The AI Wave: How Individuals Create Impact Today”
                </span>{' '}
                by Emiliano Mankolli, PhD, with Rome Business School context.
              </p>
              <div className="flex mt-m" style={{ gap: 14, flexWrap: 'wrap' }}>
                <Chip>Mar 3, 2026</Chip>
                <Chip>Tirana, Albania</Chip>
              </div>
              <div className="cta-row mt-m">
                <Button href="/events" variant="ink">
                  All events
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ImageSlot label="EVENT PHOTO · GDG Tirana kickoff" ratio="wide" />
              <div className="caption">
                <span className="dot">●</span> GDG Tirana Kickoff · Mar 3 2026 · Tirana
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        watermark="HUB"
        eyebrow="Get involved"
        title="Be part of Albania's AI future."
        primary={{ href: '/community', label: 'Join AI Hub' }}
        secondary={{ href: '/contact', label: 'Partner with us' }}
      />
    </main>
  );
}
