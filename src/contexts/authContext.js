import React, { createContext, useState } from 'react'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      return localToken
    }
    return ''
  })

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
