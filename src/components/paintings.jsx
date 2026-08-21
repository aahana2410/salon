/* The eight paintings, each drawn as inline SVG with a turbulence filter so the
   edges wobble like wet pigment. Keyed by slug from data/works.js. */

const frame = {
  viewBox: "0 0 100 120",
  preserveAspectRatio: "xMidYMid slice",
  style: { width: "100%", height: "100%", display: "block" },
};

const PAINTINGS = {
  dusk: () => (
    <svg {...frame}>
      <defs>
        <filter id="p1">
          <feTurbulence type="fractalNoise" baseFrequency="0.03 0.05" numOctaves="3" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
        </filter>
        <linearGradient id="skyg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8A87C" />
          <stop offset="55%" stopColor="#C96F4A" />
          <stop offset="100%" stopColor="#8E4A3E" />
        </linearGradient>
      </defs>
      <rect width="100" height="120" fill="url(#skyg)" />
      <g filter="url(#p1)">
        <ellipse cx="50" cy="30" rx="16" ry="14" fill="#F3D9A4" opacity="0.9" />
        <rect y="68" width="100" height="52" fill="#3E4E5E" />
        <ellipse cx="30" cy="70" rx="40" ry="7" fill="#31404E" opacity="0.8" />
        <ellipse cx="75" cy="76" rx="35" ry="6" fill="#4A5D6E" opacity="0.7" />
        <ellipse cx="50" cy="90" rx="55" ry="9" fill="#2A3844" opacity="0.75" />
      </g>
    </svg>
  ),

  fanfare: () => (
    <svg {...frame}>
      <defs>
        <filter id="p2">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="9" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="6" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#F0E7D4" />
      <g filter="url(#p2)">
        <circle cx="34" cy="40" r="24" fill="#D9A521" />
        <circle cx="34" cy="40" r="15" fill="#E4B93F" opacity="0.7" />
        <rect x="44" y="50" width="44" height="44" fill="#2E4057" />
        <rect x="50" y="56" width="32" height="32" fill="#3A5170" opacity="0.7" />
        <path d="M12 110 L44 62 L76 110 Z" fill="#B14A3A" opacity="0.92" />
        <circle cx="78" cy="26" r="7" fill="#B14A3A" opacity="0.85" />
      </g>
    </svg>
  ),

  windDiary: () => (
    <svg {...frame}>
      <defs>
        <filter id="p3">
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="2" seed="2" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#F6F1E5" />
      <g filter="url(#p3)" strokeLinecap="round" fill="none">
        <path d="M10 92 C 30 18, 55 112, 90 28" stroke="#23252B" strokeWidth="8" />
        <path d="M14 40 C 45 96, 62 14, 92 82" stroke="#B8862E" strokeWidth="4.5" opacity="0.9" />
        <path d="M8 66 C 40 60, 66 74, 94 58" stroke="#23252B" strokeWidth="2" opacity="0.5" />
      </g>
      <circle cx="24" cy="98" r="5" fill="#B8862E" opacity="0.9" />
    </svg>
  ),

  bloom: () => (
    <svg {...frame}>
      <defs>
        <filter id="p4">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="6" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="10" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#EFE7D6" />
      <g filter="url(#p4)">
        <path d="M50 16 C 84 22, 92 62, 66 84 C 46 100, 16 88, 16 58 C 16 34, 28 20, 50 16 Z" fill="#8A9B6E" />
        <path d="M52 30 C 74 36, 78 60, 60 74 C 46 84, 28 74, 30 56 C 32 42, 40 32, 52 30 Z" fill="#A5B588" opacity="0.8" />
        <path d="M56 46 C 66 50, 66 64, 54 66 C 44 68, 40 56, 46 50 Z" fill="#EFE7D6" opacity="0.85" />
        <circle cx="70" cy="98" r="6" fill="#C97BA0" opacity="0.7" />
      </g>
    </svg>
  ),

  horizons: () => (
    <svg {...frame}>
      <defs>
        <filter id="p5">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.3" numOctaves="2" seed="8" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#F8F5EE" />
      <g filter="url(#p5)">
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={i}
            x1="12"
            y1={18 + i * 11}
            x2="88"
            y2={20 + i * 11 + (i % 3) * 2}
            stroke="#3E4E5E"
            strokeWidth={1.2 + (i % 2) * 0.8}
            opacity={0.65 + (i % 3) * 0.12}
          />
        ))}
      </g>
      <circle cx="70" cy="34" r="10" fill="none" stroke="#C96F4A" strokeWidth="1.8" opacity="0.8" />
    </svg>
  ),

  signalFire: () => (
    <svg {...frame}>
      <defs>
        <filter id="p6">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="5" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#B14A3A" />
      <g filter="url(#p6)">
        <rect x="8" y="10" width="84" height="100" fill="#C25848" opacity="0.6" />
        <circle cx="50" cy="44" r="26" fill="#D9A521" />
        <circle cx="50" cy="44" r="16" fill="#E8BE4B" opacity="0.8" />
        <path d="M20 116 L50 68 L80 116 Z" fill="#23252B" opacity="0.9" />
      </g>
    </svg>
  ),

  estuary: () => (
    <svg {...frame}>
      <defs>
        <filter id="p7">
          <feTurbulence type="fractalNoise" baseFrequency="0.03 0.06" numOctaves="3" seed="11" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="8" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#EAF0EC" />
      <g filter="url(#p7)" fill="none" strokeLinecap="round">
        <path d="M6 84 C 28 62, 50 96, 72 74 C 84 62, 92 70, 98 62" stroke="#5B7A8C" strokeWidth="7" />
        <path d="M4 52 C 30 44, 56 60, 96 40" stroke="#8A9B6E" strokeWidth="5" opacity="0.85" />
        <path d="M10 100 C 40 92, 66 106, 94 92" stroke="#3E5E6E" strokeWidth="3.5" opacity="0.7" />
      </g>
    </svg>
  ),

  nightGarden: () => (
    <svg {...frame}>
      <defs>
        <filter id="p8">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="13" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
        </filter>
      </defs>
      <rect width="100" height="120" fill="#232C3A" />
      <g filter="url(#p8)">
        <path d="M50 20 C 80 26, 88 60, 64 80 C 46 94, 20 84, 20 58 C 20 36, 30 24, 50 20 Z" fill="#B8862E" />
        <path d="M52 34 C 70 40, 72 60, 56 70 C 44 78, 30 68, 32 54 C 34 44, 42 36, 52 34 Z" fill="#D3A342" opacity="0.75" />
        <circle cx="76" cy="98" r="4" fill="#C97BA0" opacity="0.8" />
        <circle cx="24" cy="100" r="3" fill="#8A9B6E" opacity="0.8" />
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i} cx={(i * 37) % 100} cy={(i * 53) % 40} r="0.9" fill="#F4EDDA" opacity="0.7" />
        ))}
      </g>
    </svg>
  ),
};

export default PAINTINGS;
