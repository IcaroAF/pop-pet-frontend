import React, { useContext } from 'react'
import Header from '../../components/Header'
import { Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
//import 'react-phone-number-input/style.css'
//import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import axios from 'axios'
import { AuthContext } from '../../contexts/authContext'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'
import { FormWrapper, Wrapper, PhoneInput, SubmitButton } from './styles'

function SignUp() {
  const { setToken } = useContext(AuthContext)
  const { user, setUser } = useContext(UserContext)
  const { register, handleSubmit, control } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const { confirm_password, ...finalData } = data
      if (confirm_password !== data.password) {
        console.log('senha n bate')
      }
      const response = await axios({
        url: 'https://pop-pet-challenge.herokuapp.com/users',
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json',
        },
        data: finalData,
      })

      if (response.status === 200) {
        setToken(response.token)
        setUser(response.userLogged)
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response?.userLogged))
        navigate('/')
      }
    } catch (error) {
      return error.message
    }
  }

  return (
    <>
      <Header />
      <Wrapper align="center" justify="center">
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              id="name"
              placeholder="Seu Nome"
              {...register('name', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="username">Nome de usuário</FormLabel>
            <Input
              id="username"
              placeholder="Seu nome de usuário"
              {...register('username', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              placeholder="seuemail@seuemail.com"
              {...register('email', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              {...register('password', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirm_password">Confirme a senha</FormLabel>
            <Input
              id="confirm_password"
              type="password"
              placeholder="Confirme sua senha"
              {...register('confirm_password', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="cpf">CPF</FormLabel>
            <Input
              id="cpf"
              placeholder="Somente Números"
              {...register('cpf', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="zipcode">CEP</FormLabel>
            <Input
              id="zipcode"
              placeholder="Confirme sua senha"
              {...register('zipcode', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="street">Endereço</FormLabel>
            <Input
              id="street"
              placeholder="Confirme sua senha"
              {...register('street', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="home_num">Número</FormLabel>
            <Input
              id="home_num"
              placeholder="Confirme sua senha"
              {...register('home_num', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="ref_address">Ponto de Referência</FormLabel>
            <Input id="ref_address" {...register('ref_address')} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirm-password">Cidade</FormLabel>
            <Input
              id="city"
              placeholder="Ex: Aracaju"
              {...register('city', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirm-password">Estado</FormLabel>
            <Input
              id="state"
              placeholder="Ex: BA"
              {...register('state', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Telefone</FormLabel>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  name="phone"
                  control={control}
                  value={value}
                  onChange={onChange}
                  defaultCountry="BR"
                  id="phone"
                  placeholder="Seu Telefone"
                />
              )}
            />
          </FormControl>
          {user?.is_admin && (
            <Controller
              control={control}
              name="is_admin"
              defaultValue={false}
              render={({ field: { onChange, ref, value } }) => (
                <Checkbox
                  onChange={onChange}
                  textTransform="capitalize"
                  ref={ref}
                  isChecked={value}
                >
                  Admin
                </Checkbox>
              )}
            />
          )}
          <SubmitButton colorScheme="purple" type="submit">
            Enviar
          </SubmitButton>
        </FormWrapper>
      </Wrapper>
    </>
  )
}

export default SignUp
