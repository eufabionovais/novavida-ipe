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
    assets: "/homologacao/novavida/ipe",
    inlineStylesheets: "never",
  },
  site: "https://www.fabionovais.com.br/homologacao/novavida/ipe",
  base: "/homologacao/novavida/ipe/",
});
