import { useState } from 'react'
import { UserInfo } from '../UserInfo'

import styles from './InfoBoard.module.css'

export const InfoBoard = ({ title }: InfoBoardProps) => {
  const [isUserInfo, setIsUserInfo] = useState(false)

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{title}</h2>
      <button className={styles.Button} type="button" onClick={() => setIsUserInfo(!isUserInfo)}>Show user info</button>
      {
        isUserInfo && <UserInfo />
      }
    </div>
  )
}

type InfoBoardProps = {
  title: string

}
