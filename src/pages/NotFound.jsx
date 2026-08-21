import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <section className="page section-head">
      <p className="eyebrow">404</p>
      <h1>Nothing hanging here.</h1>
      <p className="lede">That wall is empty — try the gallery instead.</p>
      <p className="section-foot">
        <Link to="/gallery" className="btn inline">
          Go to the gallery
        </Link>
      </p>
    </section>
  );
}
