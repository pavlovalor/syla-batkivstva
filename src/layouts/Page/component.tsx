import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import Head from 'next/head';
import { Blok, CommonLayoutMetaProps } from '~/storyblok/types';


export type PageLayoutProps = Blok<CommonLayoutMetaProps & {
  test: 42
}>


export const PageLayout: React.FC<PageLayoutProps> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Head>
      {blok.meta_title && <title>{blok.meta_title}</title>}
      {blok.meta_keywords && <meta name="keywords" content={blok.meta_keywords} />}
      {blok.meta_description && <meta name="description" content={blok.meta_description} />}
    </Head>
    test blok
    {/* {blok.body?.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))} */}
  </main>
);
