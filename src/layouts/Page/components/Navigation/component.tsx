'use client'

import { storyblokEditable } from '@storyblok/react/rsc';
import { Blok, SbLink } from '~/storyblok/types';
import { Wrapper } from '~/components';
import * as React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import cn from 'clsx'
import Link from 'next/link';
import { useIsAtTop } from './hooks';


export type NavigationProps = Blok<{
  instagramLink?: string,
  listLinks?: Array<Blok<{
    text: string,
    link: SbLink
  }>['blok']>
}>


export const Navigation: React.FC<{ content: NavigationProps['blok'] }> = ({ content }) => {
  const [isOpen, setOpenState] = React.useState(false)
  const isAtTop = useIsAtTop(40)
  console.log('nav: ', content)


  return (
    <div className={styles.placeholder} onClick={() => setOpenState(a => !a)}>
      <nav {...storyblokEditable(content)}
        className={cn(styles.container, { 
          [styles.loose]: !isAtTop,
          [styles.open]: isOpen,
      })}>
        <Wrapper className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image alt="logo"
              width={144}
              height={44}
              src="/images/logo.full.svg" />
          </Link>

          <ul className={styles.links}>
            {content.listLinks?.map(item => (
              <li key={item._uid} className={styles.item}>
                {item.link.linktype === 'story' ? (
              <Link {...storyblokEditable(item)} href={`/${item.link.cached_url}`}>
                {item.text}
              </Link>
            ) : (
              <a {...storyblokEditable(item)} href={item.link.url}>
                {item.text}
              </a>
            )}
              </li>
            ))}
          </ul>
        </Wrapper>
      </nav>
    </div>
  )
}