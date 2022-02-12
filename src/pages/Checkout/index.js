import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import { UserContext } from '../../contexts/userContext'
import { AuthContext } from '../../contexts/authContext'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { formatToBRL } from 'brazilian-values'
import { CartImg, CheckoutForm } from './styles'
import Header from '../../components/Header'
import { useForm, Controller } from 'react-hook-form'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import axios from 'axios'
import SuccessMessage from '../../components/Notifications/sucess'
import ErrorMessage from '../../components/Notifications/error'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const { register, handleSubmit, control } = useForm()
  const { user } = useContext(UserContext)
  const { token } = useContext(AuthContext)
  const { setCart, cart } = useContext(CartContext)
  const navigate = useNavigate()

  let total = 0
  for (let cartItem of cart) {
    total += cartItem.price * cartItem.amount
  }

  const onSubmit = async (cart) => {
    const response = await axios({
      url: 'https://pop-pet-challenge.herokuapp.com/products',
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-type': 'application/json',
      },
      data: cart,
    }).catch(function (error) {
      return ErrorMessage(error.response.data)
    })

    if (response.status === 200) {
      SuccessMessage(response.data)
      setCart([])
      localStorage.removeItem('cart')
      navigate('/')
    }
  }

  const onSubmitUser = async (data) => {
    console.log(data)

    try {
      const response = await axios({
        url: 'https://pop-pet-challenge.herokuapp.com/users',
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        data,
      })

      if (response.status === 200) {
        console.log('Requisição válida')
      }
    } catch (error) {
      return error.message
    }
  }

  return (
    <>
      <Header />
      <Flex>
        <CheckoutForm onSubmit={handleSubmit(onSubmitUser)}>
          <FormControl>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              id="name"
              defaultValue={user ? user.name : ''}
              placeholder="Seu Nome"
              {...register('name', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              defaultValue={user ? user.email : ''}
              placeholder="Seu nome de usuário"
              {...register('email', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="zipcode">CEP</FormLabel>
            <Input
              id="zipcode"
              defaultValue={user ? user.zipcode : ''}
              placeholder="Somente números"
              {...register('zipcode', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="street">Endereço</FormLabel>
            <Input
              id="street"
              defaultValue={user ? user.street : ''}
              placeholder="Somente números"
              {...register('street', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="ref_address">Ponto de Referência</FormLabel>
            <Input
              id="ref_address"
              defaultValue={user ? user.ref_address : ''}
              placeholder="Somente números"
              {...register('ref_address', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              defaultValue={user ? user.city : ''}
              placeholder="Somente números"
              {...register('city', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="state">Estado</FormLabel>
            <Input
              id="state"
              defaultValue={user ? user.state : ''}
              placeholder="Somente números"
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
                <PhoneInputWithCountry
                  name="phone"
                  control={control}
                  value={value}
                  onChange={onChange}
                  defaultCountry="BR"
                  defaultValue={user ? user.phone : ''}
                  id="phone"
                />
              )}
            />
          </FormControl>
          {user && <Button type="submit">Salvar Dados</Button>}
        </CheckoutForm>
        <Box>
          {cart.map((product) => (
            <Flex
              flexDirection="column"
              //alignItems="center"
              justifyContent="space-between"
              alignContent="space-between"
              key={product.id}
            >
              <CartImg src={product.img} alt="img-produto" />
              <Text fontSize="2xl">{product.name}</Text>
              <Text fontSize="2xl">
                {formatToBRL(product.price / 100)} x {product.amount}
              </Text>
            </Flex>
          ))}
          <Text>{formatToBRL(total / 100)}</Text>
          <Button onClick={() => onSubmit(cart)}>Finalizar Compra</Button>
        </Box>
      </Flex>
    </>
  )
}

export default Checkout
