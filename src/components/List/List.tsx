import { ListItem } from 'mocks'

import styles from './List.module.css'

export const List = ({ items }: ListProps) => {
  return (
    <ul className={styles.List}>
      {
        items.map(item => (
          <li className={styles.ListItem} key={item.number} style={{ backgroundColor: item.color }}>
            {item.number}
          </li>
        ))
      }
    </ul>
  )
}

type ListProps = {
  items: ListItem[]
}
