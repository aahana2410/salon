import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("nothing hanging here");

  return (
    <section className="atelier-empty">
      <h1>nothing hanging here.</h1>
      <p>that wall is bare — try the welcome room, or your own atelier.</p>
      <Link to="/" className="link-lg">
        back to the salon →
      </Link>
    </section>
  );
}
