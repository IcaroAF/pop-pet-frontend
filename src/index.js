import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyles from './styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from './contexts/cartContext'
import { AuthContextProvider } from './contexts/authContext'
import { UserContextProvider } from './contexts/userContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
