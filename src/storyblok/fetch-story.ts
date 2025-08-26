import { getStoryblokApi } from './config';


export async function getStory(
  slug: string, 
  resolve?: string[],
) {
  const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, { 
    version: process.env.NODE_ENV !== 'production' ? 'draft' : 'published',
    resolve_relations: resolve,
    resolve_links: 'story', 
  })

  return data
}