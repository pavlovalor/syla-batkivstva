import { getStoryblokApi } from '~/storyblok/config';
import { StoryblokStory } from '@storyblok/react/rsc';


export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div> 
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/links`, { version: process.env.NODE_ENV === 'development' ? 'published' : 'draft' });
}