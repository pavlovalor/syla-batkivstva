import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import * as layouts from '~/layouts'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: { 
    region: 'eu',
    // endpoint: "https://api.storyblok.com",
  },
  components: {
    // Layouts
    linkGridLayout: layouts.LinkGridLayout,
    pageLayout: layouts.PageLayout,
    
    // Bloks

  },
});