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
  const isStoryblokView = window.self !== window.top && /_storyblok/.test(window.location.search);
  return await storyblokApi.get(`cdn/stories/links`, { 
    version: isStoryblokView ? 'draft' : 'published'
  });
}