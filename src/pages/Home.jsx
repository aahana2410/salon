import { Link } from "react-router-dom";
import Artwork from "../components/Artwork";
import { WORKS, getWork } from "../data/works";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useTaste } from "../state/TasteContext";

const HERO_IDS = [1, 3, 4];

const STEPS = [
  {
    n: "01",
    title: "Pick what pulls you",
    body: "Five quick pairs of artworks. No right answers, no vocabulary required — just first instinct.",
  },
  {
    n: "02",
    title: "See your taste named",
    body: "Salon reads the pattern in your picks and puts it in plain words: gestural, quiet, geometric, loud.",
  },
  {
    n: "03",
    title: "Meet the work",
    body: "Pieces by living, emerging artists — each one explained, including why it costs what it costs.",
  },
];

export default function Home() {
  const { hasTaste, tasteSentence } = useTaste();

  useDocumentTitle();

  return (
    <>
      <section className="hero page">
        <div className="hero-copy">
          <p className="eyebrow">Salon</p>
          <h1>
            Find what you're <em>drawn</em> to.
          </h1>
          <p className="lede">
            You don't need to know art — you just need to know what pulls at you. Pick
            between a few artworks and Salon learns your taste: real, buyable work from
            emerging artists, explained in plain language.
          </p>
          <div className="hero-actions">
            <Link to="/quiz" className="btn">
              {hasTaste ? "Retake the taste quiz" : "Begin — it takes a minute"}
            </Link>
            <Link to="/gallery" className="btn-ghost">
              {hasTaste ? "Back to your feed" : "Browse the collection"}
            </Link>
          </div>
          {hasTaste && tasteSentence && (
            <p className="hero-note">
              Last time, you were drawn to <strong>{tasteSentence}</strong>.
            </p>
          )}
        </div>

        <div className="hero-art" aria-hidden="true">
          {HERO_IDS.map((id) => (
            <div className="frame" key={id}>
              <Artwork work={getWork(id)} />
            </div>
          ))}
        </div>
      </section>

      <section className="steps page">
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <span className="step-n">{s.n}</span>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </section>

      <section className="strip page">
        <div className="strip-head">
          <p className="eyebrow">In the collection</p>
          <h2>
            {WORKS.length} works, {new Set(WORKS.map((w) => w.artist)).size} artists
          </h2>
          <p className="lede">
            From ${Math.min(...WORKS.map((w) => w.price)).toLocaleString()} — early-career
            pricing, before the galleries catch up.
          </p>
        </div>
        <div className="strip-art" aria-hidden="true">
          {WORKS.map((w) => (
            <div className="frame frame-sm" key={w.id}>
              <Artwork work={w} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
