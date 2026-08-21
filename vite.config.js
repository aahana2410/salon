import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://<user>.github.io/salon/ in production, from / in dev.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/salon/" : "/",
  plugins: [react()],
}));
