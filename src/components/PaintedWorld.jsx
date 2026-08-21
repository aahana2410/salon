/* The painted world behind the sheet — one per room, fixed to the viewport.
   feTurbulence smears the ellipses into something closer to wet paint. */

const world = {
  className: "painted-world",
  viewBox: "0 0 400 800",
  preserveAspectRatio: "xMidYMid slice",
  "aria-hidden": "true",
};

const WORLDS = {
  cosmic: () => (
    <svg {...world}>
      <defs>
        <filter id="wcc">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="60" />
        </filter>
        <radialGradient id="cg" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#6E5A9E" />
          <stop offset="45%" stopColor="#3F3A78" />
          <stop offset="100%" stopColor="#232150" />
        </radialGradient>
      </defs>
      <rect width="400" height="800" fill="url(#cg)" />
      <g filter="url(#wcc)" opacity="0.85">
        <ellipse cx="90" cy="140" rx="150" ry="90" fill="#8B77BE" opacity="0.55" />
        <ellipse cx="330" cy="90" rx="130" ry="80" fill="#4E4390" opacity="0.6" />
        <ellipse cx="320" cy="420" rx="170" ry="120" fill="#7A64AE" opacity="0.45" />
        <ellipse cx="60" cy="520" rx="140" ry="110" fill="#39346B" opacity="0.6" />
        <ellipse cx="200" cy="700" rx="220" ry="130" fill="#8B77BE" opacity="0.4" />
        <ellipse cx="40" cy="330" rx="70" ry="50" fill="#C97BA0" opacity="0.25" />
      </g>
      {Array.from({ length: 40 }, (_, i) => (
        <circle
          key={i}
          cx={(i * 97) % 400}
          cy={(i * 211) % 800}
          r={(i % 3) * 0.7 + 0.6}
          fill="#F4EDDA"
          opacity={0.5 + (i % 4) * 0.12}
        />
      ))}
    </svg>
  ),

  sunset: () => (
    <svg {...world}>
      <defs>
        <filter id="wcs">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.03" numOctaves="3" seed="5" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="70" />
        </filter>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5D547" />
          <stop offset="30%" stopColor="#F2A65A" />
          <stop offset="58%" stopColor="#E4737F" />
          <stop offset="82%" stopColor="#9A5FA8" />
          <stop offset="100%" stopColor="#5B4A9E" />
        </linearGradient>
      </defs>
      <rect width="400" height="800" fill="url(#sg)" />
      <g filter="url(#wcs)" opacity="0.7">
        <ellipse cx="120" cy="170" rx="180" ry="55" fill="#F7E27A" opacity="0.65" />
        <ellipse cx="300" cy="330" rx="190" ry="60" fill="#EE8E68" opacity="0.6" />
        <ellipse cx="90" cy="470" rx="170" ry="55" fill="#D96C9F" opacity="0.55" />
        <ellipse cx="290" cy="620" rx="200" ry="70" fill="#7A5FB0" opacity="0.55" />
      </g>
    </svg>
  ),

  lake: () => (
    <svg {...world}>
      <defs>
        <filter id="wcl">
          <feTurbulence type="fractalNoise" baseFrequency="0.015 0.04" numOctaves="2" seed="12" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="30" />
        </filter>
      </defs>
      <rect width="400" height="800" fill="#2E5EB8" />
      <g filter="url(#wcl)" opacity="0.5">
        <ellipse cx="110" cy="180" rx="170" ry="80" fill="#4B78CC" />
        <ellipse cx="320" cy="440" rx="180" ry="100" fill="#24479A" />
        <ellipse cx="80" cy="640" rx="160" ry="90" fill="#4B78CC" opacity="0.8" />
      </g>
    </svg>
  ),

  ochre: () => (
    <svg {...world}>
      <defs>
        <filter id="wco">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="26" />
        </filter>
      </defs>
      <rect width="400" height="800" fill="#BE8F2C" />
      <g filter="url(#wco)" opacity="0.45">
        <ellipse cx="120" cy="200" rx="180" ry="90" fill="#D3A845" />
        <ellipse cx="310" cy="480" rx="180" ry="110" fill="#A67A20" />
        <ellipse cx="90" cy="680" rx="160" ry="90" fill="#D3A845" opacity="0.8" />
      </g>
    </svg>
  ),
};

export default function PaintedWorld({ name = "cosmic" }) {
  const Painted = WORLDS[name] ?? WORLDS.cosmic;
  return <Painted />;
}
