import { StoryblokStory } from '@storyblok/react/rsc';
import { notFound } from 'next/navigation';
import { getStory } from '~/storyblok/fetch-story';


export default async function DynamicPage(props: {
  params: Promise<{ slug: string[] }>
}) {
  const slug = (await props.params).slug.join('/') || 'root'
  
  try {
    const data = await getStory(slug, ['navigation', 'footer'])
    return <StoryblokStory story={data.story} />
  } catch (error) {
    // If Storyblok returns 404, show Next.js not found page
    notFound();
  }
}
