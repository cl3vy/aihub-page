import Reveal from './ui/Reveal';

/** Numbered "value" cards, reused for values, benefits, and event formats. */
export default function ValueGrid({
  items,
  columns = 3,
}: {
  items: [string, string, string][];
  columns?: 3 | 4;
}) {
  return (
    <div className={`grid g-${columns} mt-l`}>
      {items.map(([num, title, body], i) => (
        <Reveal key={num + title} delay={(i % columns) * 80} className="value">
          <div className="v-num">{num}</div>
          <h4>{title}</h4>
          <p>{body}</p>
        </Reveal>
      ))}
    </div>
  );
}
