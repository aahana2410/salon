/* The collection, the quiz, and everything the atelier fills itself with.
   Every artist, artwork, price and gathering here is invented. */

export const WORKS = [
  {
    id: 1,
    slug: "dusk",
    title: "Harbor at Dusk",
    year: 2026,
    artist: "Mireille Okafor",
    price: 1400,
    tags: ["#color", "#calm"],
    plain:
      "Two fields of color meet like water and sky. Color-field painting asks you to feel before you think — stand close and the edge between the tones starts to shimmer.",
    priceWhy:
      "Mireille has had two group shows in Brooklyn and sells 8–10 works a year. Mid-size original oils from artists at this stage typically run $1,200–2,000.",
  },
  {
    id: 2,
    slug: "fanfare",
    title: "Study for a Fanfare",
    year: 2025,
    artist: "Tomás Iglesias",
    price: 850,
    tags: ["#bold", "#geometry"],
    plain:
      "Hard-edged shapes borrowed from Bauhaus design, arranged like a chord. Geometric abstraction is about balance — cover the triangle with your thumb and feel the picture tip over.",
    priceWhy:
      'A smaller acrylic on panel from an emerging artist. Panel works under 24" usually price below canvas pieces of the same period.',
  },
  {
    id: 3,
    slug: "windDiary",
    title: "Wind Diary III",
    year: 2026,
    artist: "Hana Sato",
    price: 2100,
    tags: ["#energy", "#gesture"],
    plain:
      "Each stroke was made in a single breath — gestural abstraction records the artist's movement, so you're really looking at a dance that left a trace.",
    priceWhy:
      "Third in a sought-after series; the first two sold at a Lower East Side gallery. Series momentum nudges prices up.",
  },
  {
    id: 4,
    slug: "bloom",
    title: "Slow Bloom",
    year: 2025,
    artist: "Adaeze Nwosu",
    price: 1150,
    tags: ["#calm", "#organic"],
    plain:
      "A soft botanical form that never resolves into a specific plant. Biomorphic abstraction borrows nature's shapes without copying them — it reads differently every season you live with it.",
    priceWhy:
      "Adaeze is a recent MFA graduate; early-career pricing is often the best value moment for collectors.",
  },
  {
    id: 5,
    slug: "horizons",
    title: "Nine Horizons",
    year: 2024,
    artist: "Mireille Okafor",
    price: 980,
    tags: ["#calm", "#line"],
    plain:
      "Nine drawn horizons, none quite level. Minimal line work rewards slow looking — the small wobbles are where the hand shows through.",
    priceWhy:
      "Works on paper are usually the most affordable way into an artist you love — often 40–60% below their canvas prices.",
  },
  {
    id: 6,
    slug: "signalFire",
    title: "Signal Fire",
    year: 2026,
    artist: "Tomás Iglesias",
    price: 1600,
    tags: ["#bold", "#energy"],
    plain:
      "The same geometric language as his quieter work, but turned up loud — high-contrast color doing the shouting.",
    priceWhy:
      "Larger canvas, and red-dominant works historically sell fastest at fairs, which galleries price for.",
  },
  {
    id: 7,
    slug: "estuary",
    title: "Estuary",
    year: 2025,
    artist: "Hana Sato",
    price: 1250,
    tags: ["#gesture", "#calm"],
    plain:
      "Looser and cooler than her ink pieces — the strokes slow down like a river reaching the sea.",
    priceWhy:
      "Mid-size work in a new palette for the artist; priced to match her established series.",
  },
  {
    id: 8,
    slug: "nightGarden",
    title: "Night Garden",
    year: 2026,
    artist: "Adaeze Nwosu",
    price: 1900,
    tags: ["#organic", "#bold"],
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

/** Short readings, keyed to taste tags. */
export const LESSONS = {
  "#calm": {
    title: "the art of slow looking",
    body: "quiet works reveal themselves over minutes, not seconds. try standing with one piece for a full minute — most people never do, and it changes everything.",
  },
  "#bold": {
    title: "why loud color works",
    body: "high-contrast painting borrows tricks from signage and stained glass: your eye can't leave. the best bold works balance the shout with one quiet corner.",
  },
  "#gesture": {
    title: "reading a brushstroke",
    body: "a gestural mark is a recording of the artist's body — speed, hesitation, breath. you're not looking at a picture of movement; you're looking at movement itself.",
  },
  "#geometry": {
    title: "the comfort of shape",
    body: "geometric abstraction descends from bauhaus and quilt-making alike. its pleasure is balance: cover one shape with your thumb and feel the picture tip.",
  },
  "#organic": {
    title: "nature without copying",
    body: "biomorphic forms suggest leaves, cells, bodies — without becoming any of them. that openness is why they read differently every season you live with them.",
  },
  "#line": {
    title: "where the hand shows",
    body: "in minimal line work, the small wobbles are the point. a ruler could make it perfect; the artist chose not to. imperfection is the signature.",
  },
  "#color": {
    title: "how color carries feeling",
    body: "color-field painters believed hue alone could move you before thought arrives. notice which colors you keep returning to — that's data about you.",
  },
  "#energy": {
    title: "compositions that vibrate",
    body: "high-energy works use diagonal lines and clashing hues to keep your eye circling. hang one where you start your day, not where you end it.",
  },
};

/** Gatherings, in the spirit of the original salons. */
export const WORKSHOPS = [
  {
    title: "beginner's eye: a gallery walk",
    where: "lower east side",
    when: "sat, sep 12 · 11am",
    note: "two hours, five galleries, zero jargon.",
  },
  {
    title: "watercolor evening with adaeze nwosu",
    where: "greenpoint studio",
    when: "thu, sep 24 · 7pm",
    note: "paint alongside an artist from your feed.",
  },
  {
    title: "how art is priced: open q&a",
    where: "online",
    when: "wed, oct 7 · 6pm",
    note: "ask the awkward questions. we love them.",
  },
];

export const getWork = (id) => WORKS.find((w) => w.id === Number(id));

export const formatPrice = (n) => `$${n.toLocaleString("en-US")}`;
