import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '~/storyblok/config';


export default async function DynamicPage(props: {
  params: Promise<{ slug: string[] }>
}) {
  const { data } = await getStoryblokApi().get(`cdn/stories/${(await props.params).slug.join('/')}`, { 
    version: process.env.NODE_ENV !== 'production' ? 'draft' : 'published'
  })

  return (
    <div className="page">
      <nav>

      </nav>
      <StoryblokStory story={data.story} />
      <footer>
        
      </footer>
    </div> 
  )
}
