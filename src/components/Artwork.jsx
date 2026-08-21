/* Every artwork in the collection is drawn here — no image assets, no CDN.
   Each renderer paints into the same 100 × 120 portrait frame. */

const ColorField = ([a, b]) => (
  <>
    <rect width="100" height="120" fill={a} />
    <rect y="66" width="100" height="54" fill={b} />
    <rect y="62" width="100" height="6" fill={b} opacity="0.45" />
  </>
);

const Geometric = ([a, b, c]) => (
  <>
    <rect width="100" height="120" fill="#EFE9DD" />
    <circle cx="34" cy="42" r="24" fill={a} />
    <rect x="46" y="52" width="42" height="42" fill={b} />
    <polygon points="14,108 44,64 74,108" fill={c} opacity="0.9" />
  </>
);

const Gestural = ([a, b]) => (
  <>
    <rect width="100" height="120" fill="#F5F2EA" />
    <path d="M10 90 C 30 20, 55 110, 88 30" stroke={a} strokeWidth="7" fill="none" strokeLinecap="round" />
    <path
      d="M15 40 C 45 95, 60 15, 92 80"
      stroke={b}
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      opacity="0.85"
    />
    <circle cx="26" cy="96" r="5" fill={a} />
  </>
);

const Organic = ([a, b]) => (
  <>
    <rect width="100" height="120" fill={b} />
    <path d="M50 14 C 84 20, 92 62, 66 84 C 46 100, 14 88, 14 58 C 14 34, 26 18, 50 14 Z" fill={a} />
    <path d="M58 44 C 70 50, 68 68, 54 70 C 42 72, 36 58, 44 50 Z" fill={b} opacity="0.7" />
  </>
);

const Linework = ([a]) => (
  <>
    <rect width="100" height="120" fill="#F7F5EF" />
    {Array.from({ length: 9 }, (_, i) => (
      <line
        key={i}
        x1="12"
        y1={16 + i * 11}
        x2="88"
        y2={20 + i * 11 + (i % 3) * 3}
        stroke={a}
        strokeWidth="1.6"
      />
    ))}
    <circle cx="70" cy="34" r="10" fill="none" stroke={a} strokeWidth="1.6" />
  </>
);

const RENDERERS = {
  colorField: ColorField,
  geometric: Geometric,
  gestural: Gestural,
  organic: Organic,
  linework: Linework,
};

/** The painting itself, matted on white inside its frame. */
export default function Artwork({ work }) {
  const render = RENDERERS[work.art.kind];
  return (
    <div className="matt">
      <svg
        className="canvas"
        viewBox="0 0 100 120"
        role="img"
        aria-label={`${work.title} by ${work.artist}`}
      >
        {render(work.art.colors)}
      </svg>
    </div>
  );
}
