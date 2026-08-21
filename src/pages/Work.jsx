import { Link, Navigate, useParams } from "react-router-dom";
import { Tags } from "../components/Caption";
import WorkOnBlob from "../components/WorkOnBlob";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { formatPrice, getWork } from "../data/works";
import { useTaste } from "../state/TasteContext";
import { useToast } from "../state/ToastContext";

export default function Work() {
  const { id } = useParams();
  const work = getWork(id);
  const { matchFor, isSaved, toggleSave, hasTaste } = useTaste();
  const flash = useToast();

  useDocumentTitle(work && `${work.title.toLowerCase()}`);

  if (!work) return <Navigate to="/atelier" replace />;

  const saved = isSaved(work.id);
  const match = matchFor(work.id);

  return (
    <section className="work">
      <Link to="/atelier" className="link back">
        ← back to your atelier
      </Link>

      <div className="work-layout">
        <div className="work-art">
          <WorkOnBlob work={work} index={work.id} large />
        </div>

        <div className="work-info">
          <h1>{work.title}</h1>
          <p className="work-byline">
            {work.artist}, {work.year}
            {hasTaste && match != null ? ` · ${match}% match` : ""}
          </p>
          <Tags tags={work.tags} />

          <p className="work-plain">{work.plain}</p>

          <div className="price-card">
            <div className="price-row">
              <span className="aside">price</span>
              <span className="price">{formatPrice(work.price)}</span>
            </div>
            <p>
              <em>why this price?</em> {work.priceWhy}
            </p>
          </div>

          <div className="work-actions">
            <button
              type="button"
              className="link"
              aria-pressed={saved}
              onClick={() => {
                toggleSave(work.id);
                flash(saved ? "removed from your collection" : "saved to your collection");
              }}
            >
              {saved ? "saved ✓" : "save"}
            </button>
            <button
              type="button"
              className="link"
              onClick={() => flash("in the real app: message the artist's gallery")}
            >
              inquire to buy →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
