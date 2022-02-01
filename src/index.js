import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import GlobalStyles from './styles/global'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles />
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
