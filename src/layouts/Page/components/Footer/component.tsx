import cn from 'clsx'
import styles from './styles.module.scss'


export interface FooterProps {
  test?: 42

}


export const Footer: React.FC<FooterProps> = () => {

  return (
    <footer>
      [footer]
    </footer>
  )
}