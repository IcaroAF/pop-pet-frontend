import React, { useContext } from 'react'
import { HeaderWrapper, LogoDiv, SearchInput, AdminButton } from './styles'
import PawsLogo from '../../assets/paws.svg'
import { Heading } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import Login from '../Login/'
import Cart from '../Cart'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'

function Header({ isMain, setFilterProduct, handleFilterProducts }) {
  const { user } = useContext(UserContext)
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoDiv>
          <img className="logo" src={PawsLogo} alt="logo pet-pop" />
          <Heading>Pop Pet</Heading>
        </LogoDiv>
      </Link>
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
              {user?.is_admin ? (
                <AdminButton>
                  <Link to="/admin">Área do Admin</Link>
                </AdminButton>
              ) : (
                ''
              )}
              <Cart />
            </ButtonGroup>
          </div>{' '}
        </>
      )}
    </HeaderWrapper>
  )
}

export default Header
