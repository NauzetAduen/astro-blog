import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: { port: 4321, host: true },
  site: "https://nauzet.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
});
