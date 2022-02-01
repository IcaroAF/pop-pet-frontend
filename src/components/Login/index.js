import React from 'react'
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
import { LoginButton, LoginInput } from './styles'

function Login() {
  const { register, handleSubmit } = useForm()
  return (
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
            <form onSubmit={handleSubmit()}>
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
            Ainda não tem uma conta? Cadastre-se
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default Login
