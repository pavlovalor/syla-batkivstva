/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';

export function Page({ blok }: any) {
  console.log(blok)

  return (
    <main>
      test blok
      {/* {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </main>
  );
}