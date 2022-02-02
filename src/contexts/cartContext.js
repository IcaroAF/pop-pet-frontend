import React, { createContext, useState } from 'react'

const CartContext = createContext()

function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      return JSON.parse(localCart)
    }
    return []
  })

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
