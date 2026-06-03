import { UNIVERSITIES } from '@/lib/content';

export default function PartnerWall({ count = 15 }: { count?: number }) {
  return (
    <div className="wall">
      {Array.from({ length: count }).map((_, i) => (
        <div className="wall-tile" key={i}>
          <span>{i < UNIVERSITIES.length ? UNIVERSITIES[i] : '[ partner logo ]'}</span>
        </div>
      ))}
    </div>
  );
}
