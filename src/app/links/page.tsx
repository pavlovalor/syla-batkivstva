/* eslint-disable @typescript-eslint/no-explicit-any */
import { getStoryblokApi } from '~/storyblok/config';
import { StoryblokStory } from '@storyblok/react/rsc';


export default async function LinksPage(context: any) {
  const inEditor = '_storyblok' in context.searchParams;
  const { data } = await fetchData({ draft: inEditor, noStore: inEditor })

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div> 
  );
}

async function fetchData(options: { draft: boolean, noStore: boolean }) {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get(`cdn/stories/links`, { 
    version: process.env.NODE_ENV !== 'production' ? 'draft' : 'published'
  });
}