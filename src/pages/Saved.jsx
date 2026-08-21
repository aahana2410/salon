import { Link } from "react-router-dom";
import WorkCard from "../components/WorkCard";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { formatPrice, getWork } from "../data/works";
import { useTaste } from "../state/TasteContext";

export default function Saved() {
  const { saved, hasTaste } = useTaste();
  useDocumentTitle("Your collection");

  const works = saved.map(getWork).filter(Boolean);
  const total = works.reduce((sum, w) => sum + w.price, 0);

  return (
    <section className="page">
      <header className="section-head">
        <p className="eyebrow">Your collection</p>
        <h1>{works.length === 0 ? "Nothing saved yet." : "Kept for later."}</h1>
        <p className="lede">
          {works.length === 0 ? (
            <>
              Save a piece from its page and it waits here — no account, nothing sent
              anywhere.{" "}
              <Link to="/gallery">Start with the gallery</Link>.
            </>
          ) : (
            <>
              {works.length} {works.length === 1 ? "work" : "works"} ·{" "}
              {formatPrice(total)} together.
            </>
          )}
        </p>
      </header>

      {works.length > 0 && (
        <div className="grid">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} showMatch={false} />
          ))}
        </div>
      )}

      {works.length === 0 && !hasTaste && (
        <p className="section-foot">
          <Link to="/quiz" className="btn inline">
            Take the taste quiz
          </Link>
        </p>
      )}
    </section>
  );
}
