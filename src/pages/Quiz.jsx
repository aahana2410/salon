import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Artwork from "../components/Artwork";
import { QUIZ, getWork } from "../data/works";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useTaste } from "../state/TasteContext";

export default function Quiz() {
  const [round, setRound] = useState(0);
  const { recordPick, resetTaste } = useTaste();
  const navigate = useNavigate();

  useDocumentTitle("Taste quiz");

  // Every visit to /quiz starts a clean read of your taste.
  useEffect(() => {
    resetTaste();
  }, [resetTaste]);

  const pick = (workId) => {
    recordPick(workId);
    if (round + 1 >= QUIZ.length) navigate("/gallery");
    else setRound(round + 1);
  };

  const pair = QUIZ[round].map(getWork);

  return (
    <section className="quiz page">
      <ol className="progress" aria-label={`Question ${round + 1} of ${QUIZ.length}`}>
        {QUIZ.map((_, i) => (
          <li
            key={i}
            className={i === round ? "is-current" : i < round ? "is-done" : ""}
          />
        ))}
      </ol>

      <h1 className="quiz-question">Which pulls you in?</h1>
      <p className="lede center">First instinct — don't overthink it.</p>

      <div className="quiz-pair">
        {pair.map((work) => (
          <button
            key={work.id}
            type="button"
            className="choice"
            onClick={() => pick(work.id)}
          >
            <div className="frame">
              <Artwork work={work} />
            </div>
            <span className="choice-meta">
              <span className="work-title">{work.title}</span>
              <span className="work-byline">{work.artist}</span>
            </span>
          </button>
        ))}
      </div>

      <p className="quiz-count">
        {round + 1} of {QUIZ.length}
      </p>
    </section>
  );
}
