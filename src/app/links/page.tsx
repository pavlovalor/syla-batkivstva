import { StoryblokStory } from '@storyblok/react/rsc';
import { getStory } from '~/storyblok/fetch-story';


export default async function LinksPage() {
  const data = await getStory('links')

  return <StoryblokStory story={data.story} />
}