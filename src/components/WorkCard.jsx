import { Link } from "react-router-dom";
import Artwork from "./Artwork";
import { formatPrice } from "../data/works";

export default function WorkCard({ work, showMatch = true }) {
  return (
    <article className="work-card">
      <Link to={`/work/${work.id}`} className="work-card-link">
        <div className="frame">
          <Artwork work={work} />
        </div>
        <div className="work-meta">
          <div>
            <h3 className="work-title">{work.title}</h3>
            <p className="work-byline">
              {work.artist} · {formatPrice(work.price)}
            </p>
          </div>
          {showMatch && work.match != null && (
            <span className="pill">{work.match}% match</span>
          )}
        </div>
      </Link>
    </article>
  );
}
