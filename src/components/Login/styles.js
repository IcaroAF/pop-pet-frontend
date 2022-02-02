import { Button, Input } from '@chakra-ui/react'
import styled from 'styled-components'

const LoginButton = styled(Button)``

const LogoutButton = styled(Button)`
  color: red;
`

const LoginInput = styled(Input)`
  margin-top: 15px;
  margin-bottom: 8px;
`

export { LoginButton, LoginInput, LogoutButton }
