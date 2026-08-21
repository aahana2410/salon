import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import PaintedWorld from "./PaintedWorld";

/* Each room stands in front of its own painted world. */
const WORLD_FOR = {
  "/": "cosmic",
  "/quiz": "sunset",
  "/atelier": "lake",
};

const worldFor = (pathname) =>
  WORLD_FOR[pathname] ?? (pathname.startsWith("/work/") ? "ochre" : "cosmic");

export default function Layout() {
  const { pathname } = useLocation();

  // Block body on purpose: window.scrollTo() returns null in Chrome, and React
  // would take that non-undefined value for a cleanup function and call it.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="stage">
      <PaintedWorld name={worldFor(pathname)} />

      <div className="sheet">
        <a className="skip-link" href="#room">
          skip to content
        </a>

        <nav className="sheet-nav" aria-label="Main">
          <span className="nav-links">
            <NavLink to="/" end>
              welcome
            </NavLink>
            <NavLink to="/atelier">your atelier</NavLink>
          </span>
          <Link to="/" className="nav-mark">
            salon
          </Link>
        </nav>

        <main id="room" className="sheet-body">
          <Outlet />
        </main>

        <footer className="sheet-foot">
          a design prototype — the artists, artworks, prices and gatherings are
          invented, and nothing you tap here sends a message to anyone.
        </footer>
      </div>
    </div>
  );
}
