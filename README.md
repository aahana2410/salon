# Salon

A single-file React prototype — *find what you're drawn to*.

An art-discovery interface built around a light, luminous palette (ivory air,
champagne glow, one whisper of gold). All artworks are fictional and drawn
inline as SVG, so the prototype has no image assets and no dependencies beyond
React.

## Usage

`SalonPrototype.jsx` exports a single default component:

```jsx
import SalonPrototype from "./SalonPrototype";

export default function App() {
  return <SalonPrototype />;
}
```

Drop it into any React 18+ project (Vite, Next.js, CRA). Styling is inline —
no CSS file or Tailwind setup required.
