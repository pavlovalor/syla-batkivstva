import { Blok, MediaAsset } from '~/storyblok/types';
import { storyblokEditable } from "@storyblok/react/rsc";
import instagramLogo from './assets/instagram-logo.svg'
import styles from './styles.module.scss'
import Image from 'next/image'
import cn from 'clsx'


export interface LinkGridProps {
  avatar: MediaAsset,
  username: string,
  title: string,
  url: string,
  links: Array<{
    color: string,
    description: string,
    icon: string,
    multiline: boolean,
    title: string,
    url: string,
    size: `s${3 | 5 | 6 | 10}`,
  }>,
}

export function LinkGrid({ blok }: Blok<LinkGridProps>) {
  console.log
  return (
    <main {...storyblokEditable(blok as never)}>
      <svg className={styles.curve} viewBox="0 0 1356 411" fill="none">
        <path d="M477.649 58.4153C532.343 132.609 526.915 226.856 602.844 290.253C694.981 367.423 845.066 397.07 961.719 377.683C1173.05 342.46 1301.18 178.442 1355.71 0.458008H1076.18C1032.77 78.4566 966.17 146.502 855.546 120.188C783.239 103.074 758.842 54.3582 739.946 0.458008H409.644C436.889 14.2512 460.033 34.4733 477.649 58.4153Z" fill="#FFF2E4"/>
        <path d="M0.0449219 410.246C21.1524 328.862 61.636 188.463 118.949 113.846C152.126 70.7205 193.098 25.5198 244.09 0.458008H0.0449219V410.246Z" fill="#FFF2E4"/>
      </svg>

      <div className={styles.body}>
        <Image
          width={160}
          height={160}
          className={styles.avatar}
          src={blok.avatar.filename} 
          alt={blok.avatar.alt} 
          title={blok.avatar.title} />
        <a target="_blank" rel="nofollow" href={blok.url}>
          <h1 className={styles.username}>
            <Image 
              width={16} height={16}
              style={{ marginRight: 4 }}
              src="/instagram-logo.svg"
              alt="instagram logo" />
            {blok.username}
          </h1>
        </a>
        <p className={styles.topics}>{blok.title}</p>

        <ul className={styles.grid}>
          {blok.links?.map((props, index) => (
            <a {...storyblokEditable(props)}
              className={cn(styles.link, styles[props.color], styles[props.size])}
              title={props.title}
              href={props.url}
              key={index}>
                {props.title && <p className={styles.title} key="title">{props.title}</p>}
                {props.description && <p className={styles.description} key="description">{props.description}</p>}
            </a>
          ))}
        </ul>
      </div>
    </main>
  );
}