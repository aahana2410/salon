import PAINTINGS from "./paintings";

/* A painting floating over a soft blob of shadow-colour — the recurring
   display object across every room. `index` just varies the blob shape. */
export default function WorkOnBlob({ work, index = 0, cutout = false, large = false }) {
  const paint = PAINTINGS[work.slug];
  const blob = (index % 3) + 1;
  const cutoutBlob = ((index + 1) % 3) + 1;

  return (
    <div className="work-on-blob">
      <div className={`blob blob-${blob}`} />
      <div
        className={`plate${large ? " plate-lg" : ""}${cutout ? ` cutout blob-${cutoutBlob}` : ""}`}
        role="img"
        aria-label={`${work.title} by ${work.artist}, ${work.year}`}
      >
        {paint()}
      </div>
    </div>
  );
}
