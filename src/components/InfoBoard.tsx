import { useState } from 'react'
import { UserInfo } from './UserInfo'

export const InfoBoard = ({ title }: InfoBoardProps) => {
  const [isUserInfo, setIsUserInfo] = useState(false)

  return (
    <div>
      <h2>{title}</h2>
      <button type="button" onClick={() => setIsUserInfo(!isUserInfo)}>Show user info</button>
      {
        isUserInfo && <UserInfo />
      }
    </div>
  )
}

type InfoBoardProps = {
  title: string

}
