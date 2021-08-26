import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { IUserInfo, loadUser } from 'mocks'

export const userContext = createContext<IUserInfo>(undefined!)
export const useUserContext = () => useContext(userContext)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [ user, setUser ] = useState<IUserInfo | null>(null)

  useEffect(() => {
    const initializeUser = async () => {
      const loadedUser = await loadUser()
      setUser(loadedUser)
    }
    void initializeUser()
  }, [])

  // Complete UserContextProvider
}

type UserContextProviderProps = {
  children?: ReactNode
}
