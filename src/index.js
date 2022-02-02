import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyles from './styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from './contexts/cartContext'
import { AuthContextProvider } from './contexts/authContext'
import { UserContextProvider } from './contexts/userContext'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <GlobalStyles />
            <Routes />
          </CartContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
