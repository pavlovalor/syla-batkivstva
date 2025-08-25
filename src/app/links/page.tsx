import { getStoryblokApi } from '~/storyblok/config';
import { StoryblokStory } from '@storyblok/react/rsc';


export default async function LinksPage() {
  const { data } = await getStoryblokApi().get(`cdn/stories/links`, { 
    version: process.env.NODE_ENV !== 'production' ? 'draft' : 'published'
  })

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div> 
  );
}