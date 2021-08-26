// This component can be very nested,
// so try to render an user's info without passing any props

import { useUserContext } from 'context'

import styles from './UserInfo.module.css'

export const UserInfo = () => {
  const user = useUserContext()
  // Render user info here
  return (
    <div className={styles.Wrapper}>
      {user.firstname && <><span>First name</span><span>:</span><span>{user.firstname}</span></>}
      <span>Last name</span><span>:</span><span>{user.lastname}</span>
      <span>Age</span><span>:</span><span>{user.age}</span>
    </div>
  )
}
