import { Link } from "react-router-dom";
import Caption from "../components/Caption";
import WorkOnBlob from "../components/WorkOnBlob";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { getWork } from "../data/works";
import { useTaste } from "../state/TasteContext";

const STEPS = [
  "take a one-minute taste quiz",
  "your atelier fills with art chosen for you",
  "learn, wander, and — when a piece won't leave you alone — collect it",
];

export default function Welcome() {
  const { hasTaste } = useTaste();
  useDocumentTitle();

  const [first, second] = [getWork(3), getWork(4)];

  return (
    <section className="welcome">
      <div className="welcome-copy">
        <h1>welcome to the salon.</h1>
        <p>
          in 1700s paris, the salon was where everyone met art — thousands of
          ordinary people lining up to look, argue, and fall in love with
          paintings. then the art world moved behind appointment-only doors and
          unlisted prices.
        </p>
        <p>
          we're reopening the doors. you don't need to know art — only what
          you're <span className="drawn">drawn</span> to.
        </p>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step}>
              <span className="step-n">{i + 1} ·</span> {step}
            </li>
          ))}
        </ol>

        <p className="doorway">
          <Link to="/quiz" className="link-lg">
            {hasTaste ? "retake the taste quiz →" : "take the taste quiz →"}
          </Link>
          {hasTaste && (
            <Link to="/atelier" className="link-quiet">
              or visit your atelier
            </Link>
          )}
        </p>
      </div>

      <div className="welcome-art">
        <figure>
          <WorkOnBlob work={first} index={0} />
          <Caption title={first.title} sub={String(first.year)} />
        </figure>
        <figure className="offset">
          <WorkOnBlob work={second} index={1} cutout />
          <Caption title={second.title} sub={String(second.year)} />
        </figure>
      </div>
    </section>
  );
}
