import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Saved from "./pages/Saved";
import Work from "./pages/Work";
import { TasteProvider } from "./state/TasteContext";

/* HashRouter, not BrowserRouter: GitHub Pages serves static files only, so
   deep links like /gallery would 404 without a server-side rewrite. */
export default function App() {
  return (
    <TasteProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="work/:id" element={<Work />} />
            <Route path="saved" element={<Saved />} />
            <Route path="feed" element={<Navigate to="/gallery" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TasteProvider>
  );
}
