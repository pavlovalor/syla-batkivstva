import { SbBlokData } from '@storyblok/react';


export interface Blok<$Props extends object> {
  blok: $Props & SbBlokData
}

export interface MediaAsset {
  alt: string,
  copyright: string,
  fieldtype: 'asset', // | 'something-else'
  filename: string,
  focus: string,
  id: number,
  is_external_url: boolean,
  meta_data: object,
  name: string,
  source: string,
  title: string,
}

export interface SbInternalLink {
  id: string
  linktype: "story",
  cached_url: string,
}

export interface SbExternalLink {
  id: string
  linktype: "url",
  url: string,
}

export type SbLink = SbInternalLink | SbExternalLink

export interface PageContext {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface CommonLayoutMetaProps {
// Standard
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  // canonical?: string;
  // robots?: Robots | string;
  // author?: string | { name: string; url?: string };
  // themeColor?: string;
  // icons?: Icons;

  // Open Graph / Facebook
  // og?: OpenGraph;

  // Twitter Cards
  // twitter?: TwitterCard;

  // Alternates (i18n, media)
  // alternates?: {
  //   canonical?: string;
  //   languages?: Record<string, string>; // e.g., { 'en-US': '/en', 'uk-UA': '/uk' }
  //   media?: Record<string, string>;     // e.g., { '(prefers-color-scheme: dark)': '/dark' }
  // };

  // Extra arbitrary <meta name="..."> tags
  // other?: Record<string, string>;

  // Structured data (JSON-LD)
  // jsonLd?: object | object[];
}

// export interface Robots {
//   index?: boolean;
//   follow?: boolean;
//   noarchive?: boolean;
//   nosnippet?: boolean;
//   noimageindex?: boolean;
//   nocache?: boolean;
//   'max-snippet'?: number;
//   'max-image-preview'?: 'none' | 'standard' | 'large';
//   'max-video-preview'?: number;
// }

export interface Icons {
  icon?: string | string[];
  apple?: string | string[];
  shortcut?: string | string[];
  other?: Array<{ rel: string; url: string }>;
}

export interface OpenGraph {
  title?: string;
  description?: string;
  type?:
    | 'website'
    | 'article'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other';
  url?: string;
  siteName?: string;
  locale?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    secureUrl?: string;
    type?: string;
  }>;
}

export interface TwitterCard {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;     // @yourSite
  creator?: string;  // @authorHandle
  title?: string;
  description?: string;
  images?: string | string[] | Array<{ url: string; alt?: string }>;
  player?: { url: string; width?: number; height?: number };
  app?: {
    name?: string;
    id?: { iphone?: string; ipad?: string; googleplay?: string };
    url?: { iphone?: string; ipad?: string; googleplay?: string };
  };
}