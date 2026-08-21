import { useEffect } from "react";

const BASE = "Salon";

/** Keeps the browser tab (and bookmark name) in step with the current page. */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : `${BASE} — find what you're drawn to`;
  }, [title]);
}
