import type { NextConfig } from "next";


export default {
  images: {
    remotePatterns: [
      new URL('https://a.storyblok.com/**')
    ],
  },
} satisfies NextConfig;
