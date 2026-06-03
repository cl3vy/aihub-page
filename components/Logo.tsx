type LogoProps = { size?: number; idSuffix?: string };

export default function Logo({ size = 30, idSuffix = 'a' }: LogoProps) {
  const id = `lg-${idSuffix}`;
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="4" y1="4" x2="32" y2="32">
          <stop offset="0" stopColor="#5BA9D6" />
          <stop offset="0.55" stopColor="#1E7FB0" />
          <stop offset="1" stopColor="#155F86" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth="1.3" opacity="0.85">
        <line x1="18" y1="18" x2="7" y2="9" />
        <line x1="18" y1="18" x2="29" y2="11" />
        <line x1="18" y1="18" x2="9" y2="28" />
        <line x1="18" y1="18" x2="28" y2="27" />
        <line x1="7" y1="9" x2="29" y2="11" />
        <line x1="9" y1="28" x2="28" y2="27" />
      </g>
      <g fill={`url(#${id})`}>
        <circle cx="18" cy="18" r="3.4" />
        <circle cx="7" cy="9" r="2" />
        <circle cx="29" cy="11" r="2" />
        <circle cx="9" cy="28" r="2" />
        <circle cx="28" cy="27" r="2" />
      </g>
    </svg>
  );
}
