import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import ReachMap from '@/components/ReachMap';
import TeamGrid from '@/components/TeamGrid';
import Timeline, { type Milestone } from '@/components/Timeline';
import ValueGrid from '@/components/ValueGrid';
import PartnerWall from '@/components/PartnerWall';
import {
  Eyebrow,
  Photo,
  TextLink,
  PageHeader,
  CtaBand,
} from '@/components/ui/primitives';
import { VALUES, IMG } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story, mission, values, team and reach of AI Hub, a non-profit advancing AI in Albania and its diaspora.',
};

const REACH = [
  ['HQ', 'Tirana, Albania', 'Home base: research, community, programs.'],
  ['DIASPORA', 'Munich · San Francisco', 'Engineering and research talent abroad, contributing back.'],
  ['NETWORK', '9 universities', 'Academic partners across the country.'],
];

const MILESTONES: Milestone[] = [
  { date: 'FOUNDING', title: 'AI Hub is established', body: 'A non-profit formed to build a collaborative AI community in Albania and bridge research with real-world application.', photo: IMG.discussion, photoAlt: 'AI Hub members at the community space' },
  { date: 'COMMUNITY', title: 'First meetups & growth to 1,000+ members', body: 'Regular gatherings, talks and workshops grow the community across the country and the diaspora.' },
  { date: 'PARTNERSHIPS', title: '9 universities & 20+ partners join', body: 'Academic and institutional partnerships form the backbone of the research and education programs.' },
  { date: 'MAR 3, 2026', title: 'GDG Tirana Official Kickoff Meetup', body: 'Featuring the talk “The AI Wave: How Individuals Create Impact Today,” with Rome Business School context.', photo: IMG.eventTalk, photoAlt: 'AI Hub Albania kickoff meetup' },
  { date: 'NEXT', title: 'What comes next', body: <span className="slot">[ Upcoming milestone, to be added ]</span> },
];

export default function AboutPage() {
  return (
    <main className="page-top" data-screen-label="About">
      <PageHeader
        watermark="ABOUT"
        eyebrow="About AI Hub"
        title="A research community, built to bridge AI and real life."
        lede="AI Hub is a non-profit fostering an open, collaborative AI community, connecting researchers, engineers, educators and policymakers across Albania and its diaspora."
      />

      {/* ORIGIN */}
      <section className="section-tight">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <Photo
                src={IMG.officeMeeting}
                alt="AI Hub founders and members meeting at the office"
                ratio="tall"
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="caption">
                <span className="dot">●</span> AI Hub HQ · Tirana
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="display-l">Founded to grow what Albania was missing.</h2>
              <p className="mt-m">
                AI Hub was founded to build a thriving, collaborative AI community in Albania, a
                place where research and real-world application meet. We bring together people who
                believe the country and its diaspora can do world-class work in artificial
                intelligence.
              </p>
              <p>
                As a non-profit, our purpose is not commercial. It is to accelerate responsible AI
                development: to educate, to convene, to publish, and to put research to work on
                problems that matter, from public services to public health.
              </p>
              <TextLink href="/research" className="mt-s">
                See what we research
              </TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM BANNER */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="photo-band">
            <Photo
              src={IMG.teamGroup}
              alt="The AI Hub team and community in Tirana"
              ratio="cine"
              sizes="100vw"
              graded={false}
            />
          </Reveal>
          <div className="caption">
            <span className="dot">●</span> The people of AI Hub · Tirana
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Mission &amp; values</Eyebrow>
            <h2 className="display-l measure">
              Five commitments that hold every project to the same standard.
            </h2>
          </Reveal>
          <ValueGrid items={VALUES} columns={3} />
        </div>
      </section>

      {/* REACH */}
      <section className="section">
        <div className="wrap">
          <Reveal className="wrap-end">
            <div>
              <Eyebrow>Reach</Eyebrow>
              <h2 className="display-l">From Tirana to the diaspora.</h2>
            </div>
            <p className="muted measure" style={{ maxWidth: '40ch' }}>
              A headquarters in Tirana, contributors in Munich and San Francisco, and partnerships
              with universities across Albania.
            </p>
          </Reveal>
          <div className="mt-l reach-layout">
            <Reveal>
              <ReachMap />
            </Reveal>
            <Reveal delay={120}>
              <div className="grid" style={{ gap: 18 }}>
                {REACH.map(([k, h, p]) => (
                  <div className="card" key={k} style={{ padding: 22 }}>
                    <div className="kicker-num">{k}</div>
                    <h4 className="display-s" style={{ marginTop: 6 }}>
                      {h}
                    </h4>
                    <p className="muted" style={{ fontSize: 14, margin: 0 }}>
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section tint">
        <div className="wrap">
          <Reveal className="wrap-end">
            <div>
              <Eyebrow>The team</Eyebrow>
              <h2 className="display-l">People behind the work.</h2>
            </div>
            <p className="muted measure" style={{ maxWidth: '34ch' }}>
              Hover a portrait for role and focus.
            </p>
          </Reveal>
          <TeamGrid />
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="display-l">A short history, so far.</h2>
          </Reveal>
          <Timeline items={MILESTONES} />
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Partners &amp; universities</Eyebrow>
            <h2 className="display-m">9 universities and 20+ partners.</h2>
          </Reveal>
          <Reveal className="mt-l">
            <PartnerWall count={20} />
          </Reveal>
          <p className="caption" style={{ justifyContent: 'center', marginTop: 20 }}>
            Logos shown as placeholders; partner lockups to be added.
          </p>
        </div>
      </section>

      <CtaBand
        watermark="JOIN"
        eyebrow="Work with us"
        title="Join the community, or partner on what's next."
        primary={{ href: '/community', label: 'Join AI Hub' }}
        secondary={{ href: '/contact', label: 'Partner with us' }}
      />
    </main>
  );
}
