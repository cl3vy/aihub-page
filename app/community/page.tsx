import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import ValueGrid from '@/components/ValueGrid';
import JoinForm from '@/components/JoinForm';
import PartnerWall from '@/components/PartnerWall';
import Image from 'next/image';
import { Eyebrow, Chip, Photo, PageHeader, CtaBand } from '@/components/ui/primitives';
import { BENEFITS, CHANNELS, IMG, LOGO } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Community',
  description:
    "Join 1,000+ members building Albania's AI future: education, events, startup support and ethical-AI advocacy.",
};

const BENEFIT_ITEMS = BENEFITS.map(
  (b, i) => [`0${i + 1}`, b[0], b[1]] as [string, string, string],
);

const WHO = ['Students', 'Researchers', 'Professionals', 'Policymakers', 'Founders', 'Educators', 'The simply curious'];

const WAYS: [string, string, string][] = [
  ['01', 'Attend', 'Come to meetups, talks and workshops. Free, open, and the easiest first step.'],
  ['02', 'Collaborate', 'Join an initiative and help take a prototype from idea to pilot.'],
  ['03', 'Contribute to research', 'Work alongside our researchers across the seven domains.'],
  ['04', 'Partner', 'Bring your university, company or NGO into the network.'],
];

export default function CommunityPage() {
  return (
    <main className="page-top" data-screen-label="Community">
      <PageHeader
        watermark="JOIN"
        eyebrow="Community"
        title="1,000+ people. One shared mission."
        lede="AI Hub is an open community for anyone curious about, or working with, artificial intelligence. Whatever your level, there's a way in."
      >
        <Reveal immediate delay={240}>
          <div className="hero-counters" style={{ marginTop: 40 }}>
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
      </PageHeader>

      {/* WHY JOIN */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Why join</Eyebrow>
            <h2 className="display-l">What membership gives you.</h2>
          </Reveal>
          <ValueGrid items={BENEFIT_ITEMS} columns={4} />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <h2 className="display-l">Everyone with a stake in AI.</h2>
              <p className="lede mt-m">
                You don&apos;t need a PhD, you need curiosity. Our members range from first-year
                students to senior researchers and policymakers.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Photo
                src={IMG.networking}
                alt="AI Hub members networking at the community space"
                ratio="wide"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="flex mt-m" style={{ gap: 10, flexWrap: 'wrap' }}>
                {WHO.map((w) => (
                  <Chip key={w}>{w}</Chip>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Get involved</Eyebrow>
            <h2 className="display-l">Four ways in.</h2>
          </Reveal>
          <Reveal className="cell-grid cols-2 mt-l">
            {WAYS.map(([num, h, p]) => (
              <div className="cell-item" key={num}>
                <div className="kicker-num">{num}</div>
                <h3 className="display-s mt-s">{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* JOIN FORM */}
      <section className="section tint">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <Eyebrow>Become a member</Eyebrow>
              <h2 className="display-l">Join AI Hub.</h2>
              <p className="lede mt-m">
                Tell us a little about you and we&apos;ll point you to the right channels, events and
                opportunities.
              </p>
              <div className="flex mt-m" style={{ gap: 12, flexWrap: 'wrap' }}>
                <Chip>Free to join</Chip>
                <Chip>Open to all</Chip>
              </div>
            </Reveal>
            <Reveal delay={120} className="card" style={{ padding: 'clamp(26px,3vw,40px)' }}>
              <JoinForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Channels</Eyebrow>
            <h2 className="display-l">Where the community lives.</h2>
          </Reveal>
          <div className="grid g-4 mt-l">
            {CHANNELS.map(([name, sub, href], i) => (
              <Reveal key={name} delay={(i % 4) * 80}>
                <a
                  className="card"
                  href={href}
                  style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 6 }}
                >
                  {name === 'Telegram' ? (
                    <Image src={LOGO.telegram} alt="" width={26} height={26} style={{ marginBottom: 4 }} />
                  ) : (
                    <div className="kicker-num">{String(i + 1).padStart(2, '0')}</div>
                  )}
                  <h4 className="display-s" style={{ marginTop: 8 }}>
                    {name}
                  </h4>
                  <div className="caption" style={{ margin: 0 }}>
                    {sub}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section className="section tint">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Moments</Eyebrow>
            <h2 className="display-l">From our community.</h2>
          </Reveal>
          <Reveal className="gallery-strip mt-l">
            <Photo src={IMG.workshop} alt="AI Hub workshop" ratio="4x3" sizes="(max-width: 900px) 50vw, 25vw" />
            <Photo src={IMG.discussion} alt="Members in discussion" ratio="4x3" sizes="(max-width: 900px) 50vw, 25vw" />
            <Photo src={IMG.graduation} alt="Cohort graduation" ratio="4x3" sizes="(max-width: 900px) 50vw, 25vw" />
            <Photo src={IMG.audienceFront} alt="Engaged audience" ratio="4x3" sizes="(max-width: 900px) 50vw, 25vw" />
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Universities &amp; partners</Eyebrow>
            <h2 className="display-m">The wider network.</h2>
          </Reveal>
          <Reveal className="mt-l">
            <PartnerWall count={20} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        watermark="HUB"
        eyebrow="One last thing"
        title="Join AI Hub."
        primary={{ href: 'https://t.me/AIHubAlb', label: 'Join on Telegram' }}
        secondary={{ href: '/contact', label: 'Talk to us' }}
      />
    </main>
  );
}
