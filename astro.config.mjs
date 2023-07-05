import { defineConfig } from "astro";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
tegrations: [tailwind()], [image()],
  output: "server",
  adapter: {
   
  },
  integrations: [netlify()],
  buildOptions: {
    emptyOutDir: true
    
  }

})
