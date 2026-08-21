import React, { useState, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  SALON — find what you're drawn to.                                 */
/*  Light, luminous, soft. Ivory air, champagne glow, one whisper      */
/*  of gold. Gallery morning light, not gilded night.                  */
/* ------------------------------------------------------------------ */

const IVORY = "#FBF9F4";
const CHAMPAGNE = "#F3ECDF";
const BLUSH = "#EFE3DA";
const GOLD = "#B99B5F";        // muted, elegant
const INK = "#3B3833";         // soft warm ink
const FAINT = "#8C8577";       // secondary text

const glow = {
  background: `
    radial-gradient(120% 90% at 85% -10%, ${CHAMPAGNE} 0%, transparent 60%),
    radial-gradient(110% 80% at -10% 100%, ${BLUSH} 0%, transparent 55%),
    ${IVORY}`,
};

/* ---------------- fictional artworks ---------------- */

const Art = {
  colorField: (a, b) => (
    <svg viewBox="0 0 100 120" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="100" height="120" fill={a} />
      <rect y="66" width="100" height="54" fill={b} />
      <rect y="62" width="100" height="6" fill={b} opacity="0.45" />
    </svg>
  ),
  geometric: (a, b, c) => (
    <svg viewBox="0 0 100 120" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="100" height="120" fill="#EFE9DD" />
      <circle cx="34" cy="42" r="24" fill={a} />
      <rect x="46" y="52" width="42" height="42" fill={b} />
      <polygon points="14,108 44,64 74,108" fill={c} opacity="0.9" />
    </svg>
  ),
  gestural: (a, b) => (
    <svg viewBox="0 0 100 120" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="100" height="120" fill="#F5F2EA" />
      <path d="M10 90 C 30 20, 55 110, 88 30" stroke={a} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M15 40 C 45 95, 60 15, 92 80" stroke={b} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85" />
      <circle cx="26" cy="96" r="5" fill={a} />
    </svg>
  ),
  organic: (a, b) => (
    <svg viewBox="0 0 100 120" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="100" height="120" fill={b} />
      <path d="M50 14 C 84 20, 92 62, 66 84 C 46 100, 14 88, 14 58 C 14 34, 26 18, 50 14 Z" fill={a} />
      <path d="M58 44 C 70 50, 68 68, 54 70 C 42 72, 36 58, 44 50 Z" fill={b} opacity="0.7" />
    </svg>
  ),
  linework: (a) => (
    <svg viewBox="0 0 100 120" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="100" height="120" fill="#F7F5EF" />
      {[...Array(9)].map((_, i) => (
        <line key={i} x1="12" y1={16 + i * 11} x2="88" y2={20 + i * 11 + (i % 3) * 3} stroke={a} strokeWidth="1.6" />
      ))}
      <circle cx="70" cy="34" r="10" fill="none" stroke={a} strokeWidth="1.6" />
    </svg>
  ),
};

const WORKS = [
  { id: 1, title: "Harbor at Dusk", artist: "Mireille Okafor", price: 1400, tags: ["color", "calm"], render: () => Art.colorField("#C96F4A", "#3E4E5E"),
    plain: "Two fields of color meet like water and sky. Color-field painting asks you to feel before you think — stand close and the edge between the tones starts to shimmer.",
    priceWhy: "Mireille has had two group shows in Brooklyn and sells 8–10 works a year. Mid-size original oils from artists at this stage typically run $1,200–2,000." },
  { id: 2, title: "Study for a Fanfare", artist: "Tomás Iglesias", price: 850, tags: ["bold", "geometry"], render: () => Art.geometric("#D9A521", "#2E4057", "#B14A3A"),
    plain: "Hard-edged shapes borrowed from Bauhaus design, arranged like a chord. Geometric abstraction is about balance — cover the triangle with your thumb and feel the picture tip over.",
    priceWhy: "A smaller acrylic on panel from an emerging artist. Panel works under 24\" usually price below canvas pieces of the same period." },
  { id: 3, title: "Wind Diary III", artist: "Hana Sato", price: 2100, tags: ["energy", "gesture"], render: () => Art.gestural("#23252B", "#B8862E"),
    plain: "Each stroke was made in a single breath — gestural abstraction records the artist's movement, so you're really looking at a dance that left a trace.",
    priceWhy: "Third in a sought-after series; the first two sold at a Lower East Side gallery. Series momentum nudges prices up." },
  { id: 4, title: "Slow Bloom", artist: "Adaeze Nwosu", price: 1150, tags: ["calm", "organic"], render: () => Art.organic("#8A9B6E", "#EFE7D8"),
    plain: "A soft botanical form that never resolves into a specific plant. Biomorphic abstraction borrows nature's shapes without copying them — it reads differently every season you live with it.",
    priceWhy: "Adaeze is a recent MFA graduate; early-career pricing is often the best value moment for collectors." },
  { id: 5, title: "Nine Horizons", artist: "Mireille Okafor", price: 980, tags: ["calm", "line"], render: () => Art.linework("#3E4E5E"),
    plain: "Nine drawn horizons, none quite level. Minimal line work rewards slow looking — the small wobbles are where the hand shows through.",
    priceWhy: "Works on paper are usually the most affordable way into an artist you love — often 40–60% below their canvas prices." },
  { id: 6, title: "Signal Fire", artist: "Tomás Iglesias", price: 1600, tags: ["bold", "energy"], render: () => Art.geometric("#B14A3A", "#23252B", "#D9A521"),
    plain: "The same geometric language as his quieter work, but turned up loud — high-contrast color doing the shouting.",
    priceWhy: "Larger canvas, and red-dominant works historically sell fastest at fairs, which galleries price for." },
  { id: 7, title: "Estuary", artist: "Hana Sato", price: 1250, tags: ["gesture", "calm"], render: () => Art.gestural("#5B7A8C", "#8A9B6E"),
    plain: "Looser and cooler than her ink pieces — the strokes slow down like a river reaching the sea.",
    priceWhy: "Mid-size work in a new palette for the artist; priced to match her established series." },
  { id: 8, title: "Night Garden", artist: "Adaeze Nwosu", price: 1900, tags: ["organic", "bold"], render: () => Art.organic("#B8862E", "#2E3440"),
    plain: "Her botanical forms moved into darkness — the gold shape floats like something seen by lantern light.",
    priceWhy: "Her largest work to date, and dark-ground paintings involve more layering time." },
];

const QUIZ = [ [0, 1], [2, 3], [4, 5], [6, 7], [1, 3] ];

/* ---------------- shared styles ---------------- */

const serif = { fontFamily: "Georgia, 'Times New Roman', serif" };
const eyebrow = { fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: GOLD, fontWeight: 500 };
const S = {
  app: { maxWidth: 420, margin: "0 auto", minHeight: "100vh", color: INK,
    fontFamily: "-apple-system, 'Segoe UI', Roboto, sans-serif", display: "flex", flexDirection: "column", ...glow },
  btn: { background: INK, color: IVORY, border: "none", borderRadius: 999, padding: "15px 30px",
    fontSize: 15, cursor: "pointer", width: "100%", boxShadow: "0 8px 24px rgba(59,56,51,0.18)" },
  ghost: { background: "rgba(255,255,255,0.5)", color: INK, border: `1px solid #DDD3C2`, borderRadius: 999,
    padding: "13px 28px", fontSize: 14, cursor: "pointer", width: "100%" },
  card: { background: "rgba(255,255,255,0.75)", borderRadius: 18, padding: 14,
    boxShadow: "0 10px 30px rgba(120,105,80,0.10)", border: "1px solid rgba(255,255,255,0.9)" },
  matt: { background: "#FFFFFF", padding: 10, borderRadius: 8 },
};

export default function SalonPrototype() {
  const [screen, setScreen] = useState("welcome");
  const [round, setRound] = useState(0);
  const [tagScore, setTagScore] = useState({});
  const [detailId, setDetailId] = useState(null);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");

  const pick = (workIdx) => {
    const w = WORKS[workIdx];
    setTagScore((prev) => {
      const next = { ...prev };
      w.tags.forEach((t) => (next[t] = (next[t] || 0) + 1));
      return next;
    });
    if (round + 1 >= QUIZ.length) setScreen("feed");
    else setRound(round + 1);
  };

  const ranked = useMemo(() => {
    const total = Object.values(tagScore).reduce((a, b) => a + b, 0) || 1;
    return WORKS.map((w) => {
      const raw = w.tags.reduce((s, t) => s + (tagScore[t] || 0), 0);
      const match = Math.min(98, Math.round(55 + (raw / total) * 90));
      return { ...w, match };
    }).sort((a, b) => b.match - a.match);
  }, [tagScore]);

  const topTags = useMemo(
    () => Object.entries(tagScore).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([t]) => t),
    [tagScore]
  );
  const tasteLabel = {
    calm: "quiet, contemplative work", bold: "bold color and contrast", gesture: "expressive, gestural mark-making",
    geometry: "clean geometric form", organic: "soft, organic shapes", line: "minimal line work",
    color: "rich fields of color", energy: "high-energy compositions",
  };

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2200); };
  const detail = WORKS.find((w) => w.id === detailId);
  const detailMatch = ranked.find((w) => w.id === detailId)?.match;

  /* ---------------- WELCOME ---------------- */
  if (screen === "welcome")
    return (
      <div style={{ ...S.app, justifyContent: "space-between", padding: "56px 30px 40px" }}>
        <div>
          <div style={{ ...eyebrow, letterSpacing: 6, fontSize: 13 }}>Salon</div>
          <h1 style={{ ...serif, fontSize: 44, lineHeight: 1.15, margin: "30px 0 18px", fontWeight: 400 }}>
            Find what you're <em style={{ color: GOLD }}>drawn</em> to.
          </h1>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: FAINT, maxWidth: 320 }}>
            You don't need to know art — you just need to know what pulls at you.
            Pick between a few artworks, and Salon learns your taste: real, buyable
            work from emerging artists, explained in plain language.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, margin: "34px 0", alignItems: "end" }}>
          {[WORKS[0], WORKS[2], WORKS[3]].map((w, i) => (
            <div key={w.id} style={{ ...S.card, padding: 8, aspectRatio: "5/6",
              transform: `translateY(${i === 1 ? -14 : 0}px)` }}>
              <div style={{ ...S.matt, padding: 6, height: "100%" }}>{w.render()}</div>
            </div>
          ))}
        </div>
        <button style={S.btn} onClick={() => setScreen("quiz")}>Begin — it takes a minute</button>
      </div>
    );

  /* ---------------- QUIZ ---------------- */
  if (screen === "quiz") {
    const [a, b] = QUIZ[round];
    return (
      <div style={{ ...S.app, padding: "48px 26px 40px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 34, justifyContent: "center" }}>
          {QUIZ.map((_, i) => (
            <div key={i} style={{ width: i === round ? 22 : 7, height: 7, borderRadius: 999,
              background: i <= round ? GOLD : "#E3DACB", transition: "all .3s" }} />
          ))}
        </div>
        <h2 style={{ ...serif, fontSize: 28, fontWeight: 400, margin: "0 0 8px", textAlign: "center" }}>
          Which pulls you in?
        </h2>
        <p style={{ color: FAINT, fontSize: 14, margin: "0 0 28px", textAlign: "center" }}>
          First instinct — don't overthink it.
        </p>
        {[a, b].map((idx) => (
          <div key={idx} onClick={() => pick(idx)} role="button" tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && pick(idx)}
            style={{ ...S.card, marginBottom: 18, cursor: "pointer", display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ ...S.matt, width: 108, aspectRatio: "5/6", flexShrink: 0, padding: 6 }}>{WORKS[idx].render()}</div>
            <div>
              <div style={{ ...serif, fontSize: 17 }}>{WORKS[idx].title}</div>
              <div style={{ fontSize: 13, color: FAINT, marginTop: 4 }}>{WORKS[idx].artist}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ---------------- FEED ---------------- */
  if (screen === "feed")
    return (
      <div style={{ ...S.app, padding: "48px 26px 44px" }}>
        <div style={{ ...eyebrow, textAlign: "center" }}>Your taste</div>
        <h2 style={{ ...serif, fontSize: 27, fontWeight: 400, margin: "14px 0 8px", lineHeight: 1.3, textAlign: "center" }}>
          You're drawn to<br />{topTags.map((t) => tasteLabel[t]).join(" and ")}.
        </h2>
        <p style={{ color: FAINT, fontSize: 14, lineHeight: 1.55, margin: "0 auto 30px", textAlign: "center", maxWidth: 300 }}>
          Every piece below is by a living, emerging artist — and actually for sale.
        </p>
        {ranked.map((w) => (
          <div key={w.id} onClick={() => { setDetailId(w.id); setScreen("detail"); }} role="button" tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && (setDetailId(w.id), setScreen("detail"))}
            style={{ ...S.card, marginBottom: 22, cursor: "pointer" }}>
            <div style={{ ...S.matt, aspectRatio: "5/4", overflow: "hidden" }}>{w.render()}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "14px 4px 4px" }}>
              <div>
                <div style={{ ...serif, fontSize: 18 }}>{w.title}</div>
                <div style={{ fontSize: 13, color: FAINT, marginTop: 3 }}>{w.artist} · ${w.price.toLocaleString()}</div>
              </div>
              <div style={{ background: CHAMPAGNE, color: "#8A7443", fontSize: 12, borderRadius: 999,
                padding: "5px 12px", whiteSpace: "nowrap" }}>
                {w.match}% match
              </div>
            </div>
          </div>
        ))}
        <button style={{ ...S.ghost, marginTop: 4 }} onClick={() => { setRound(0); setTagScore({}); setScreen("quiz"); }}>
          Retake taste quiz
        </button>
      </div>
    );

  /* ---------------- DETAIL ---------------- */
  if (screen === "detail" && detail)
    return (
      <div style={{ ...S.app, padding: "36px 26px 46px" }}>
        <button onClick={() => setScreen("feed")}
          style={{ background: "none", border: "none", color: FAINT, fontSize: 14, cursor: "pointer",
            padding: 0, textAlign: "left", marginBottom: 20 }}>
          ← Your feed
        </button>
        <div style={{ ...S.card, padding: 16 }}>
          <div style={{ ...S.matt, aspectRatio: "5/6", padding: 12 }}>{detail.render()}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 22 }}>
          <h2 style={{ ...serif, fontSize: 27, fontWeight: 400, margin: 0 }}>{detail.title}</h2>
          {detailMatch && (
            <span style={{ background: CHAMPAGNE, color: "#8A7443", fontSize: 12, borderRadius: 999, padding: "5px 12px" }}>
              {detailMatch}% match
            </span>
          )}
        </div>
        <div style={{ fontSize: 14, color: FAINT, marginTop: 5 }}>{detail.artist}</div>

        <div style={{ marginTop: 26 }}>
          <div style={eyebrow}>What am I looking at?</div>
          <p style={{ fontSize: 15.5, lineHeight: 1.68, margin: "10px 0 0" }}>{detail.plain}</p>
        </div>

        <div style={{ ...S.card, marginTop: 24, padding: "18px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ ...eyebrow, color: FAINT }}>Price</div>
            <div style={{ ...serif, fontSize: 26 }}>${detail.price.toLocaleString()}</div>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.62, color: FAINT, margin: "12px 0 0" }}>
            <strong style={{ color: INK }}>Why this price?</strong> {detail.priceWhy}
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
          <button style={{ ...S.ghost, flex: 1 }}
            onClick={() => { setSaved((s) => (s.includes(detail.id) ? s : [...s, detail.id])); showToast("Saved to your collection"); }}>
            {saved.includes(detail.id) ? "Saved ✓" : "Save"}
          </button>
          <button style={{ ...S.btn, flex: 1.4, boxShadow: "none" }} onClick={() => showToast("In the real app: message the artist's gallery")}>
            Inquire to buy
          </button>
        </div>

        {toast && (
          <div style={{ position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
            background: INK, color: IVORY, borderRadius: 999, padding: "10px 20px", fontSize: 14, whiteSpace: "nowrap" }}>
            {toast}
          </div>
        )}
      </div>
    );

  return null;
}
