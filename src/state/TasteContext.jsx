import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { QUIZ, WORKS, getWork } from "../data/works";

const TasteContext = createContext(null);

const STORAGE_KEY = "salon.v1";

const readStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      tagScore: parsed.tagScore ?? {},
      saved: Array.isArray(parsed.saved) ? parsed.saved : [],
    };
  } catch {
    return null; // private mode, corrupt value — start fresh rather than crash
  }
};

export function TasteProvider({ children }) {
  const [{ tagScore, saved }, setState] = useState(
    () => readStored() ?? { tagScore: {}, saved: [] }
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ tagScore, saved }));
    } catch {
      /* storage unavailable — the session still works, it just won't persist */
    }
  }, [tagScore, saved]);

  const recordPick = useCallback((workId) => {
    const work = getWork(workId);
    setState((prev) => {
      const tags = { ...prev.tagScore };
      work.tags.forEach((t) => {
        tags[t] = (tags[t] || 0) + 1;
      });
      return { ...prev, tagScore: tags };
    });
  }, []);

  const resetTaste = useCallback(
    () => setState((prev) => ({ ...prev, tagScore: {} })),
    []
  );

  const toggleSave = useCallback(
    (workId) =>
      setState((prev) => ({
        ...prev,
        saved: prev.saved.includes(workId)
          ? prev.saved.filter((id) => id !== workId)
          : [...prev.saved, workId],
      })),
    []
  );

  const value = useMemo(() => {
    const picksMade = Object.values(tagScore).reduce((a, b) => a + b, 0);
    const total = picksMade || 1;

    // Match score: a floor of 55% plus however much of your taste this piece speaks to.
    const ranked = WORKS.map((work) => {
      const affinity = work.tags.reduce((sum, t) => sum + (tagScore[t] || 0), 0);
      return { ...work, match: Math.min(98, Math.round(55 + (affinity / total) * 90)) };
    }).sort((a, b) => b.match - a.match || a.title.localeCompare(b.title));

    const topTags = Object.entries(tagScore)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([tag]) => tag);

    return {
      tagScore,
      saved,
      ranked,
      topTags,
      hasTaste: picksMade > 0,
      quizComplete: picksMade >= QUIZ.length,
      matchFor: (id) => ranked.find((w) => w.id === Number(id))?.match,
      recordPick,
      resetTaste,
      toggleSave,
      isSaved: (id) => saved.includes(Number(id)),
    };
  }, [tagScore, saved, recordPick, resetTaste, toggleSave]);

  return <TasteContext.Provider value={value}>{children}</TasteContext.Provider>;
}

export function useTaste() {
  const ctx = useContext(TasteContext);
  if (!ctx) throw new Error("useTaste must be used inside <TasteProvider>");
  return ctx;
}
