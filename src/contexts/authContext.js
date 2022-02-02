import React, { createContext, useState } from 'react'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [token, setToken] = useState('')

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
