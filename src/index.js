import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyles from './styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from './contexts/cartContext'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CartContextProvider>
        <GlobalStyles />
        <Routes />
      </CartContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
