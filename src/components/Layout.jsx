import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTaste } from "../state/TasteContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  // Block body on purpose: window.scrollTo() returns null in Chrome, and React
  // would take that non-undefined value for a cleanup function and call it.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { saved, hasTaste } = useTaste();

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="page header-inner">
          <Link to="/" className="wordmark">
            Salon
          </Link>
          <nav className="site-nav" aria-label="Main">
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/saved">
              Saved
              {saved.length > 0 && <span className="count">{saved.length}</span>}
            </NavLink>
            <NavLink to="/quiz" className="nav-cta">
              {hasTaste ? "Retake quiz" : "Take the quiz"}
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="page footer-inner">
          <p>
            <strong>Salon</strong> — find what you're drawn to.
          </p>
          <p className="fine-print">
            A design prototype. The artists, artworks and prices are fictional; every
            picture is drawn in the browser as SVG.
          </p>
        </div>
      </footer>
    </>
  );
}
