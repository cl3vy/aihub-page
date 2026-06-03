import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';
import Reveal from './Reveal';

const isInternal = (href: string) => href.startsWith('/');

/* ---------- Eyebrow ---------- */
export function Eyebrow({
  children,
  noRule,
  className = '',
  style,
}: {
  children: ReactNode;
  noRule?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`eyebrow${noRule ? ' no-rule' : ''} ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ---------- Tag & Chip ---------- */
export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

export function Chip({ children, href }: { children: ReactNode; href?: string }) {
  const inner = (
    <>
      <span className="ic" />
      {children}
    </>
  );
  if (href) {
    return isInternal(href) ? (
      <Link className="chip" href={href}>
        {inner}
      </Link>
    ) : (
      <a className="chip" href={href}>
        {inner}
      </a>
    );
  }
  return <span className="chip">{inner}</span>;
}

/* ---------- Buttons & links ---------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: 'ink' | 'ghost' | 'light' | 'solid';
  className?: string;
  style?: CSSProperties;
};

export function Button({ href, children, variant = 'ink', className = '', style }: BtnProps) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (
    <>
      {children} <span className="arrow">→</span>
    </>
  );
  return isInternal(href) ? (
    <Link className={cls} href={href} style={style}>
      {inner}
    </Link>
  ) : (
    <a className={cls} href={href} style={style}>
      {inner}
    </a>
  );
}

export function TextLink({
  href,
  children,
  className = '',
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const inner = (
    <>
      {children} <span className="arrow">→</span>
    </>
  );
  return isInternal(href) ? (
    <Link className={`textlink ${className}`.trim()} href={href} style={style}>
      {inner}
    </Link>
  ) : (
    <a className={`textlink ${className}`.trim()} href={href} style={style}>
      {inner}
    </a>
  );
}

/* ---------- Image placeholder ---------- */
export function ImageSlot({
  label,
  ratio = 'wide',
  framed = true,
  className = '',
}: {
  label: string;
  ratio?: 'wide' | 'tall' | 'sq' | 'cine';
  framed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`img-slot ratio-${ratio}${framed ? ' frame' : ''} ${className}`.trim()}
      data-label={label}
    />
  );
}

/* ---------- Stat ---------- */
export function Stat({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="stat">
      <div className="num">{children}</div>
      <div className="label">{label}</div>
    </div>
  );
}

/* ---------- Section heading (title left, action right) ---------- */
export function SectionHead({
  eyebrow,
  title,
  note,
  action,
  delay = 0,
}: {
  eyebrow?: string;
  title: ReactNode;
  note?: ReactNode;
  action?: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal className="wrap-end" delay={delay}>
      <div>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="display-l">{title}</h2>
      </div>
      {note ? (
        <p className="muted measure" style={{ maxWidth: '36ch' }}>
          {note}
        </p>
      ) : null}
      {action}
    </Reveal>
  );
}

/* ---------- Page header (inner pages) ---------- */
export function PageHeader({
  watermark,
  eyebrow,
  title,
  lede,
  children,
}: {
  watermark: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="page-header">
      <div className="watermark wm">{watermark}</div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal immediate>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal immediate delay={80}>
          <h1 className="display-xl measure">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal immediate delay={160}>
            <p className="lede mt-m">{lede}</p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </header>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand({
  watermark,
  eyebrow,
  title,
  primary,
  secondary,
}: {
  watermark: string;
  eyebrow: string;
  title: ReactNode;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <section className="cta-band dark" data-dark>
      <div className="watermark wm">{watermark}</div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Eyebrow style={{ justifyContent: 'center', display: 'flex' }}>{eyebrow}</Eyebrow>
        <h2 className="display-xl" style={{ maxWidth: '17ch', margin: '0 auto' }}>
          {title}
        </h2>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 34 }}>
          <Button href={primary.href} variant="solid">
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="light">
            {secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
