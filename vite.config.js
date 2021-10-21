import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    brotliSize: false,
    outDir: "docs",
  },
});
