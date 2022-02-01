import React from 'react'
import { HeaderWrapper, LogoDiv, SearchInput } from './styles'
import PawsLogo from '../../assets/paws.svg'
import { Heading } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import Login from '../Login/'
import Cart from '../Cart'

function Header() {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <img className="logo" src={PawsLogo} alt="logo pet-pop" />
        <Heading>Pop Pet</Heading>
      </LogoDiv>
      <SearchInput type="text" size="lg" width="70%" />
      <div>
        <ButtonGroup size="lg" spacing="10">
          <Login />
          <Cart />
        </ButtonGroup>
      </div>
    </HeaderWrapper>
  )
}

export default Header
