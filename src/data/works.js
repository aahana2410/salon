/* The collection. Every artwork here is fictional and drawn as inline SVG —
   `art.kind` picks a renderer in components/Artwork.jsx, `art.colors` feeds it. */

export const WORKS = [
  {
    id: 1,
    title: "Harbor at Dusk",
    artist: "Mireille Okafor",
    price: 1400,
    medium: "Oil on canvas, 30 × 36 in",
    tags: ["color", "calm"],
    art: { kind: "colorField", colors: ["#C96F4A", "#3E4E5E"] },
    plain:
      "Two fields of color meet like water and sky. Color-field painting asks you to feel before you think — stand close and the edge between the tones starts to shimmer.",
    priceWhy:
      "Mireille has had two group shows in Brooklyn and sells 8–10 works a year. Mid-size original oils from artists at this stage typically run $1,200–2,000.",
  },
  {
    id: 2,
    title: "Study for a Fanfare",
    artist: "Tomás Iglesias",
    price: 850,
    medium: "Acrylic on panel, 18 × 22 in",
    tags: ["bold", "geometry"],
    art: { kind: "geometric", colors: ["#D9A521", "#2E4057", "#B14A3A"] },
    plain:
      "Hard-edged shapes borrowed from Bauhaus design, arranged like a chord. Geometric abstraction is about balance — cover the triangle with your thumb and feel the picture tip over.",
    priceWhy:
      'A smaller acrylic on panel from an emerging artist. Panel works under 24" usually price below canvas pieces of the same period.',
  },
  {
    id: 3,
    title: "Wind Diary III",
    artist: "Hana Sato",
    price: 2100,
    medium: "Ink and pigment on canvas, 40 × 48 in",
    tags: ["energy", "gesture"],
    art: { kind: "gestural", colors: ["#23252B", "#B8862E"] },
    plain:
      "Each stroke was made in a single breath — gestural abstraction records the artist's movement, so you're really looking at a dance that left a trace.",
    priceWhy:
      "Third in a sought-after series; the first two sold at a Lower East Side gallery. Series momentum nudges prices up.",
  },
  {
    id: 4,
    title: "Slow Bloom",
    artist: "Adaeze Nwosu",
    price: 1150,
    medium: "Oil on linen, 24 × 30 in",
    tags: ["calm", "organic"],
    art: { kind: "organic", colors: ["#8A9B6E", "#EFE7D8"] },
    plain:
      "A soft botanical form that never resolves into a specific plant. Biomorphic abstraction borrows nature's shapes without copying them — it reads differently every season you live with it.",
    priceWhy:
      "Adaeze is a recent MFA graduate; early-career pricing is often the best value moment for collectors.",
  },
  {
    id: 5,
    title: "Nine Horizons",
    artist: "Mireille Okafor",
    price: 980,
    medium: "Graphite on cotton paper, 22 × 26 in",
    tags: ["calm", "line"],
    art: { kind: "linework", colors: ["#3E4E5E"] },
    plain:
      "Nine drawn horizons, none quite level. Minimal line work rewards slow looking — the small wobbles are where the hand shows through.",
    priceWhy:
      "Works on paper are usually the most affordable way into an artist you love — often 40–60% below their canvas prices.",
  },
  {
    id: 6,
    title: "Signal Fire",
    artist: "Tomás Iglesias",
    price: 1600,
    medium: "Acrylic on canvas, 36 × 42 in",
    tags: ["bold", "energy"],
    art: { kind: "geometric", colors: ["#B14A3A", "#23252B", "#D9A521"] },
    plain:
      "The same geometric language as his quieter work, but turned up loud — high-contrast color doing the shouting.",
    priceWhy:
      "Larger canvas, and red-dominant works historically sell fastest at fairs, which galleries price for.",
  },
  {
    id: 7,
    title: "Estuary",
    artist: "Hana Sato",
    price: 1250,
    medium: "Ink and gouache on canvas, 28 × 34 in",
    tags: ["gesture", "calm"],
    art: { kind: "gestural", colors: ["#5B7A8C", "#8A9B6E"] },
    plain:
      "Looser and cooler than her ink pieces — the strokes slow down like a river reaching the sea.",
    priceWhy:
      "Mid-size work in a new palette for the artist; priced to match her established series.",
  },
  {
    id: 8,
    title: "Night Garden",
    artist: "Adaeze Nwosu",
    price: 1900,
    medium: "Oil on linen, 44 × 52 in",
    tags: ["organic", "bold"],
    art: { kind: "organic", colors: ["#B8862E", "#2E3440"] },
    plain:
      "Her botanical forms moved into darkness — the gold shape floats like something seen by lantern light.",
    priceWhy:
      "Her largest work to date, and dark-ground paintings involve more layering time.",
  },
];

/** The pairs shown in the taste quiz, by artwork id. */
export const QUIZ = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [2, 4],
];

/** Plain-language name for each taste tag. */
export const TASTE_LABEL = {
  calm: "quiet, contemplative work",
  bold: "bold color and contrast",
  gesture: "expressive, gestural mark-making",
  geometry: "clean geometric form",
  organic: "soft, organic shapes",
  line: "minimal line work",
  color: "rich fields of color",
  energy: "high-energy compositions",
};

export const getWork = (id) => WORKS.find((w) => w.id === Number(id));

export const formatPrice = (n) => `$${n.toLocaleString("en-US")}`;
