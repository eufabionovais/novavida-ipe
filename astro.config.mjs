import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  outDir: "./dist",
  compressHTML: false,
  compressCSS: false,
  output: "static",
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
});
