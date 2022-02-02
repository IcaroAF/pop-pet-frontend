import styled from 'styled-components'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #124162;
  height: 10%;
  padding: 24px;
`

const SearchInput = styled(Input)``

const LogoDiv = styled.div`
  display: flex;
  .logo {
    width: 30px;
  }
  align-items: center;
  margin-left: 20px;
  color: #df99eb;
`

const EnterButton = styled(Button)``

const AdminButton = styled(Button)`
  background-color: green;
`

export { HeaderWrapper, LogoDiv, SearchInput, EnterButton, AdminButton }
