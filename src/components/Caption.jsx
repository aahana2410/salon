export default function Caption({ title, sub }) {
  return (
    <div className="caption">
      <span className="caption-title">{title}</span>
      {sub && <span className="caption-sub">{sub}</span>}
    </div>
  );
}

export function Tags({ tags, center = false }) {
  return (
    <div className={`tags${center ? " center" : ""}`}>
      {tags.map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}
