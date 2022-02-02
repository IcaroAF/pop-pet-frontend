import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyles from './styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from './contexts/cartContext'
import { AuthContextProvider } from './contexts/authContext'
import { UserContextProvider } from './contexts/userContext'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CookiesProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <CartContextProvider>
              <GlobalStyles />
              <Routes />
            </CartContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </CookiesProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
