import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import WorkCard from "../components/WorkCard";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useTaste } from "../state/TasteContext";

const SORTS = {
  match: { label: "Best match", compare: (a, b) => b.match - a.match },
  low: { label: "Price: low to high", compare: (a, b) => a.price - b.price },
  high: { label: "Price: high to low", compare: (a, b) => b.price - a.price },
};

export default function Gallery() {
  const { ranked, hasTaste, tasteSentence } = useTaste();
  const [sort, setSort] = useState("match");

  useDocumentTitle("Gallery");

  const works = useMemo(
    () => [...ranked].sort(SORTS[sort].compare),
    [ranked, sort]
  );

  return (
    <section className="page gallery">
      <header className="section-head">
        <p className="eyebrow">{hasTaste ? "Your taste" : "The collection"}</p>
        {hasTaste && tasteSentence ? (
          <h1>You're drawn to {tasteSentence}.</h1>
        ) : (
          <h1>Eight works, four artists.</h1>
        )}
        <p className="lede">
          {hasTaste ? (
            <>Every piece below is by a living, emerging artist — and actually for sale.</>
          ) : (
            <>
              Browse freely, or <Link to="/quiz">take the one-minute quiz</Link> and Salon
              will rank these to your taste.
            </>
          )}
        </p>
      </header>

      <div className="toolbar">
        <label htmlFor="sort">Sort</label>
        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          {Object.entries(SORTS).map(([key, { label }]) => (
            <option key={key} value={key}>
              {key === "match" && !hasTaste ? "Curator's order" : label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} showMatch={hasTaste} />
        ))}
      </div>

      {hasTaste && (
        <p className="section-foot">
          Not quite you?{" "}
          <Link to="/quiz" className="btn-ghost inline">
            Retake the taste quiz
          </Link>
        </p>
      )}
    </section>
  );
}
