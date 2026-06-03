import Link from 'next/link';
import { TEAM } from '@/lib/content';
import Reveal from './ui/Reveal';

export default function TeamGrid() {
  return (
    <div className="grid g-4 mt-l">
      {TEAM.map((p, i) => {
        const label = p.open ? 'OPEN · join the team' : `PORTRAIT · ${p.name.split(',')[0]}`;
        const card = (
          <>
            <div className="portrait" data-label={label}>
              <div className="p-over">
                <p className="p-quote">{p.focus}</p>
                <div className="p-pin">◉ {p.place}</div>
              </div>
            </div>
            <div style={{ padding: 18 }}>
              <div className="p-name">{p.name}</div>
              <div className="p-role">{p.role}</div>
            </div>
          </>
        );
        return (
          <Reveal key={p.name} delay={(i % 4) * 80} className="person card">
            {p.open ? (
              <Link href="/community" style={{ display: 'block' }}>
                {card}
              </Link>
            ) : (
              card
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
