import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import remarkMath from 'remark-math'
import rehypeMathjax from "rehype-mathjax"
 
export default defineConfig({
  output: 'server',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
    gfm: true,
  },
  adapter: vercel(),
});
