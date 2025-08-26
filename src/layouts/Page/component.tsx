/* eslint-disable @typescript-eslint/no-explicit-any */
import { storyblokEditable, type ISbStoryData } from '@storyblok/react/rsc';
import { Blok, CommonLayoutMetaProps } from '~/storyblok/types';
import * as Composite from './components'
import Head from 'next/head';


export type PageLayoutProps = Blok<CommonLayoutMetaProps & {
  navigation: { story: ISbStoryData },
  footer: { story: ISbStoryData },
}>


export const PageLayout: React.FC<PageLayoutProps> = async ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <Head>
      {blok.meta_title && <title>{blok.meta_title}</title>}
      {blok.meta_keywords && <meta name="keywords" content={blok.meta_keywords} />}
      {blok.meta_description && <meta name="description" content={blok.meta_description} />}
    </Head>

    {'navigation' in blok && <Composite.Navigation {...blok.navigation.story as any} />}

    test blok
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    asdas
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
sadasd
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />


    {'footer' in blok && <Composite.Footer {...blok.footer.story as any} />}

    {/* {blok.body?.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))} */}
  </main>
)
