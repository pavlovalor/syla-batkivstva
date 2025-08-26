import { StoryblokStory } from '@storyblok/react/rsc';
import { getStory } from '~/storyblok/fetch-story';


export default async function DynamicPage(props: {
  params: Promise<{ slug: string[] }>
}) {
  const slug = (await props.params).slug.join('/') || 'root'
  const data = await getStory(slug, ['navigation', 'footer'])

  return <StoryblokStory story={data.story} />
}
