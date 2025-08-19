"use client";

import { getStoryblokApi } from "./config";


export function StoryblokProvider({ children }: React.PropsWithChildren) {
  getStoryblokApi();

  return children;
}