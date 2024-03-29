import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import million from "million/compiler";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [
      million.vite({
        mode: "react",
        server: true,
        auto: true,
      }),
    ],
  },
  output: "hybrid",
  adapter: netlify(),
});
