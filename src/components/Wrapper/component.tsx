import cn from 'clsx'
import styles from './styles.module.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface WrapperProps
extends React.HTMLAttributes<HTMLDivElement> {}

export const Wrapper: React.FC<WrapperProps> = props => (
  <div {...props} className={cn(styles.wrapper, props.className)} />
)