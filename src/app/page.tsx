import { getStoryblokApi } from '@storyblok/react';

export default async function HomePage() {
  const { data } = await getStoryblokApi().get(`cdn/stories/root`, { 
    version: process.env.NODE_ENV !== 'production' ? 'draft' : 'published'
  })

  return null
}
