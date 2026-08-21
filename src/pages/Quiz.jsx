import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Caption from "../components/Caption";
import WorkOnBlob from "../components/WorkOnBlob";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { QUIZ, getWork } from "../data/works";
import { useTaste } from "../state/TasteContext";

export default function Quiz() {
  const [round, setRound] = useState(0);
  const { recordPick, resetTaste } = useTaste();
  const navigate = useNavigate();

  useDocumentTitle("the taste quiz");

  // Every visit to the quiz starts a clean read of your taste.
  useEffect(() => {
    resetTaste();
  }, [resetTaste]);

  const pick = (workId) => {
    recordPick(workId);
    if (round + 1 >= QUIZ.length) navigate("/atelier");
    else setRound(round + 1);
  };

  return (
    <section className="quiz">
      <header className="room-head">
        <h1>which pulls you in?</h1>
        <span className="count">
          {round + 1} of {QUIZ.length}
        </span>
      </header>
      <p className="aside">first instinct — tap the one you'd rather live with.</p>

      <div className="quiz-pair">
        {QUIZ[round].map(getWork).map((work, i) => (
          <button
            key={work.id}
            type="button"
            className={`choice${i === 1 ? " offset" : ""}`}
            onClick={() => pick(work.id)}
          >
            <WorkOnBlob work={work} index={round + i} />
            <Caption title={work.title} sub={`${work.artist}, ${work.year}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
