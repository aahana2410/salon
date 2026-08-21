import { Link } from "react-router-dom";
import Caption, { Tags } from "../components/Caption";
import WorkOnBlob from "../components/WorkOnBlob";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { LESSONS, WORKSHOPS, formatPrice, getWork } from "../data/works";
import { useTaste } from "../state/TasteContext";
import { useToast } from "../state/ToastContext";

function EmptyAtelier() {
  return (
    <section className="atelier-empty">
      <h1>your atelier is waiting.</h1>
      <p>
        an atelier is an artist's studio — this one is yours. take the one-minute
        taste quiz and it fills with art, readings, and gatherings chosen for
        you.
      </p>
      <Link to="/quiz" className="link-lg">
        take the taste quiz →
      </Link>
    </section>
  );
}

export default function Atelier() {
  const { hasTaste, ranked, topTags, saved } = useTaste();
  const flash = useToast();
  useDocumentTitle("your atelier");

  if (!hasTaste) return <EmptyAtelier />;

  const chosen = ranked.slice(0, 4);
  const lessons = (topTags.length ? topTags : ["#calm", "#color"])
    .map((tag) => LESSONS[tag])
    .filter(Boolean);
  const savedWorks = saved.map(getWork).filter(Boolean);

  return (
    <section className="atelier">
      <header className="room-head stacked">
        <h1>your atelier</h1>
        <p className="leans">
          <span>your eye leans</span>
          <Tags tags={topTags.length ? topTags : ["#curious"]} />
        </p>
        <Link to="/quiz" className="link-quiet">
          retake the quiz →
        </Link>
      </header>

      <div className="block">
        <h2>chosen for you</h2>
        <p className="aside">real works by living artists, matched to your taste.</p>
        <div className="chosen-grid">
          {chosen.map((work, i) => (
            <Link to={`/work/${work.id}`} className="chosen" key={work.id}>
              <WorkOnBlob work={work} index={i} cutout={i === 3} />
              <Caption
                title={work.title}
                sub={`${formatPrice(work.price)} · ${work.match}% match`}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>learn your eye</h2>
        <p className="aside">short readings, chosen because of what you chose.</p>
        <div className="lessons">
          {lessons.map((lesson) => (
            <article className="lesson" key={lesson.title}>
              <h3>{lesson.title}</h3>
              <p>{lesson.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>workshops &amp; gatherings</h2>
        <p className="aside">
          the salon was always a place to meet — small, friendly, in person.
        </p>
        <ul className="workshops">
          {WORKSHOPS.map((ws) => (
            <li key={ws.title}>
              <div className="workshop-row">
                <span className="workshop-title">{ws.title}</span>
                <button
                  type="button"
                  className="link"
                  onClick={() => flash("in the real app: reserve your seat")}
                >
                  reserve →
                </button>
              </div>
              <span className="workshop-when">
                {ws.where} · {ws.when}
              </span>
              <span className="aside">{ws.note}</span>
            </li>
          ))}
        </ul>
      </div>

      {savedWorks.length > 0 && (
        <div className="block">
          <h2>saved to your collection</h2>
          <p className="aside">
            {savedWorks.length} {savedWorks.length === 1 ? "piece" : "pieces"} ·{" "}
            {formatPrice(savedWorks.reduce((sum, w) => sum + w.price, 0))} together.
          </p>
          <div className="chosen-grid">
            {savedWorks.map((work, i) => (
              <Link to={`/work/${work.id}`} className="chosen" key={work.id}>
                <WorkOnBlob work={work} index={i + 2} />
                <Caption title={work.title} sub={work.artist} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
