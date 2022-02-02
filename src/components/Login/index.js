import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LoginButton, LoginInput, LogoutButton } from './styles'
import { AuthContext } from '../../contexts/authContext'
import { UserContext } from '../../contexts/userContext'

function Login() {
  const { token, setToken } = useContext(AuthContext)
  const { setUser } = useContext(UserContext)

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        url: 'https://pop-pet-challenge.herokuapp.com/login',
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json',
        },
        data: data,
      })

      if (response.status === 200) {
        setToken(response.data.token)
        setUser(response.data.userLogged)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.userLogged))
      }
    } catch (error) {
      return error.message
    }
  }
  const { register, handleSubmit } = useForm()

  function logout() {
    setToken('')
    setUser()
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <>
      {token ? (
        <LogoutButton to="/" onClick={logout}>
          <span>Deslogar</span>
        </LogoutButton>
      ) : (
        <Popover>
          <PopoverTrigger color="blackAlpha">
            <LoginButton colorScheme="blackAlpha" color="white">
              Entrar
            </LoginButton>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader fontSize="lg">Faça seu Login</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody size="20">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <LoginInput
                    type="text"
                    id="email"
                    placeholder="seuemail@dominio.com"
                    {...register('email', { required: true })}
                  />
                  <LoginInput
                    type="password"
                    id="password"
                    {...register('password', { required: true })}
                  />
                  <Button type="submit">Login </Button>
                </form>
              </PopoverBody>
              <PopoverFooter fontSize="lg">
                Ainda não tem uma conta? <Link to="/sign-up">Cadastre-se</Link>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      )}
    </>
  )
}

export default Login
