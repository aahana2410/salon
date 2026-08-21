import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Atelier from "./pages/Atelier";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Welcome from "./pages/Welcome";
import Work from "./pages/Work";
import { TasteProvider } from "./state/TasteContext";
import { ToastProvider } from "./state/ToastContext";

/* HashRouter, not BrowserRouter: GitHub Pages serves static files only, so
   deep links like /atelier would 404 without a server-side rewrite. */
export default function App() {
  return (
    <TasteProvider>
      <ToastProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Welcome />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="atelier" element={<Atelier />} />
              <Route path="work/:id" element={<Work />} />
              {/* the rooms this site used to have */}
              <Route path="gallery" element={<Navigate to="/atelier" replace />} />
              <Route path="saved" element={<Navigate to="/atelier" replace />} />
              <Route path="feed" element={<Navigate to="/atelier" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </ToastProvider>
    </TasteProvider>
  );
}
