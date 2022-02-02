import React from 'react'
import { HeaderWrapper, LogoDiv, SearchInput } from './styles'
import PawsLogo from '../../assets/paws.svg'
import { Heading } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import Login from '../Login/'
import Cart from '../Cart'

function Header({ isMain, setFilterProduct, handleFilterProducts }) {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <img className="logo" src={PawsLogo} alt="logo pet-pop" />
        <Heading>Pop Pet</Heading>
      </LogoDiv>
      {isMain && (
        <>
          <SearchInput
            type="text"
            size="lg"
            width="70%"
            onChange={(e) => setFilterProduct(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleFilterProducts()}
          />
          <div>
            <ButtonGroup size="lg" spacing="10">
              <Login />
              <Cart />
            </ButtonGroup>
          </div>{' '}
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
