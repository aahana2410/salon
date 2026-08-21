import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Artwork from "../components/Artwork";
import WorkCard from "../components/WorkCard";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { WORKS, formatPrice, getWork } from "../data/works";
import { useTaste } from "../state/TasteContext";

export default function Work() {
  const { id } = useParams();
  const work = getWork(id);
  const { matchFor, isSaved, toggleSave, hasTaste } = useTaste();
  const [toast, setToast] = useState("");
  const toastTimer = useRef();

  useDocumentTitle(work && `${work.title}, ${work.artist}`);
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  if (!work) return <Navigate to="/gallery" replace />;

  const saved = isSaved(work.id);
  const match = matchFor(work.id);
  const alsoBy = WORKS.filter((w) => w.artist === work.artist && w.id !== work.id);

  const flash = (message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <section className="page work-page">
      <Link to="/gallery" className="back-link">
        ← Back to the gallery
      </Link>

      <div className="work-layout">
        <div className="work-art">
          <div className="frame frame-lg">
            <Artwork work={work} />
          </div>
        </div>

        <div className="work-info">
          <div className="work-headline">
            <h1>{work.title}</h1>
            {hasTaste && match != null && <span className="pill">{match}% match</span>}
          </div>
          <p className="work-byline lg">{work.artist}</p>
          <p className="work-medium">{work.medium}</p>

          <div className="block">
            <p className="eyebrow">What am I looking at?</p>
            <p className="body">{work.plain}</p>
          </div>

          <div className="price-card">
            <div className="price-row">
              <span className="eyebrow muted">Price</span>
              <span className="price">{formatPrice(work.price)}</span>
            </div>
            <p className="fine-print">
              <strong>Why this price?</strong> {work.priceWhy}
            </p>
          </div>

          <div className="work-actions">
            <button
              type="button"
              className="btn-ghost"
              aria-pressed={saved}
              onClick={() => {
                toggleSave(work.id);
                flash(saved ? "Removed from your collection" : "Saved to your collection");
              }}
            >
              {saved ? "Saved ✓" : "Save"}
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => flash("In the real app: message the artist's gallery")}
            >
              Inquire to buy
            </button>
          </div>

          <p className="fine-print">
            Salon is a prototype — inquiries aren't sent anywhere, and this artist is
            fictional.
          </p>
        </div>
      </div>

      {alsoBy.length > 0 && (
        <div className="also">
          <h2 className="also-head">More from {work.artist}</h2>
          <div className="grid">
            {alsoBy.map((w) => (
              <WorkCard key={w.id} work={w} showMatch={false} />
            ))}
          </div>
        </div>
      )}

      <div className="toast-slot" aria-live="polite">
        {toast && <p className="toast">{toast}</p>}
      </div>
    </section>
  );
}
