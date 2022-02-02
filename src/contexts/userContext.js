import React, { createContext, useState } from 'react'

const UserContext = createContext()

function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      return JSON.parse(localUser)
    }
    return
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
