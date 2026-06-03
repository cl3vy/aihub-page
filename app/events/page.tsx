import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import Timeline, { type Milestone } from '@/components/Timeline';
import ValueGrid from '@/components/ValueGrid';
import {
  Eyebrow,
  Button,
  Tag,
  Chip,
  TextLink,
  ImageSlot,
  PageHeader,
  CtaBand,
} from '@/components/ui/primitives';
import { FORMATS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Meetups, hackathons, public lectures, policy discussions and workshops from AI Hub.',
};

const FORMAT_ITEMS = FORMATS.map((f, i) => [`0${i + 1}`, f[0], f[1]] as [string, string, string]);

const PAST = [
  { t: 'GDG Tirana Kickoff', m: 'Meetup · Mar 3 2026 · Tirana' },
  { t: 'Community meetup', m: 'Meetup · [date] · Tirana', empty: true },
  { t: 'Domain workshop', m: 'Workshop · [date] · [venue]', empty: true },
];

const TIMELINE: Milestone[] = [
  { date: 'MAR 3, 2026', title: 'GDG Tirana Official Kickoff', body: '“The AI Wave” keynote and the launch of the local developer community.', image: 'PHOTO · kickoff' },
  { date: 'EARLIER', title: 'Community meetups', body: 'Regular gatherings that grew AI Hub to 1,000+ members.' },
  { date: 'EARLIER', title: 'Workshops & talks', body: <>Hands-on sessions across the research domains. <span className="slot" style={{ display: 'block', marginTop: 8 }}>[ Recap &amp; gallery — to be added ]</span></> },
  { date: 'NEXT', title: 'Upcoming event', body: <span className="slot">[ Date · title · venue — to be announced ]</span> },
];

export default function EventsPage() {
  return (
    <main className="page-top" data-screen-label="Events">
      <PageHeader
        watermark="EVENTS"
        eyebrow="Events"
        title="Where the community shows up."
        lede="Meetups, hackathons, public lectures, policy discussions and workshops — momentum you can see and attend."
      />

      {/* NEXT EVENT */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Next event</Eyebrow>
          </Reveal>
          <Reveal className="card event-feature" style={{ overflow: 'hidden' }}>
            <div style={{ padding: 'clamp(30px,4vw,52px)' }}>
              <Tag>Meetup</Tag>
              <h2 className="display-l" style={{ marginTop: 16 }}>
                GDG Tirana — Official Kickoff Meetup
              </h2>
              <p className="lede mt-s">
                The talk{' '}
                <span className="serif-italic">
                  “The AI Wave: How Individuals Create Impact Today”
                </span>{' '}
                by Emiliano Mankolli, PhD — with Rome Business School context.
              </p>
              <div className="flex mt-m" style={{ gap: 12, flexWrap: 'wrap' }}>
                <Chip>Mar 3, 2026</Chip>
                <Chip>Tirana, Albania</Chip>
                <Chip>Talk + networking</Chip>
              </div>
              <div className="cta-row mt-m">
                <Button href="/contact" variant="ink">
                  Register interest
                </Button>
              </div>
            </div>
            <div className="img-slot frame" data-label="EVENT PHOTO · GDG Tirana kickoff" style={{ minHeight: 260 }} />
          </Reveal>
        </div>
      </section>

      {/* FORMATS */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>What we run</Eyebrow>
            <h2 className="display-l">Five formats, one community.</h2>
          </Reveal>
          <ValueGrid items={FORMAT_ITEMS} columns={3} />
        </div>
      </section>

      {/* PAST EVENTS + TIMELINE */}
      <section className="section">
        <div className="wrap">
          <Reveal className="wrap-end">
            <div>
              <Eyebrow>Past events</Eyebrow>
              <h2 className="display-l">A photo-forward record.</h2>
            </div>
            <p className="muted measure" style={{ maxWidth: '34ch' }}>
              Every gathering, documented. Recaps and galleries are added after each event.
            </p>
          </Reveal>
          <div className="grid g-3 mt-l">
            {PAST.map((p, i) =>
              p.empty ? (
                <Reveal key={p.t} delay={(i % 3) * 90} className="empty-card">
                  <div className="em-ic">+</div>
                  <div className="em-label">Recap coming soon</div>
                  <p className="muted" style={{ fontSize: 13, margin: 0 }}>
                    {p.m}
                  </p>
                </Reveal>
              ) : (
                <Reveal key={p.t} delay={(i % 3) * 90} className="card event-card">
                  <div className="img-slot" data-label="EVENT PHOTO · [slot]" />
                  <div className="ec-body">
                    <div className="caption" style={{ margin: 0 }}>
                      {p.m}
                    </div>
                    <h3>{p.t}</h3>
                    <TextLink href="/events" style={{ marginTop: 'auto' }}>
                      Recap
                    </TextLink>
                  </div>
                </Reveal>
              ),
            )}
          </div>

          <div style={{ marginTop: 80 }}>
            <Timeline items={TIMELINE} />
          </div>
        </div>
      </section>

      <CtaBand
        watermark="MEET"
        eyebrow="Be there"
        title="Come to the next one."
        primary={{ href: '/community', label: 'Join & get invites' }}
        secondary={{ href: '/contact', label: 'Host an event with us' }}
      />
    </main>
  );
}
