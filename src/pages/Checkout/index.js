import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import { UserContext } from '../../contexts/userContext'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { formatToBRL } from 'brazilian-values'
import { CartImg } from './styles'
import Header from '../../components/Header'
import { useForm, Controller } from 'react-hook-form'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import axios from 'axios'

function Checkout() {
  const { control } = useForm()
  const { user } = useContext(UserContext)
  const { cart } = useContext(CartContext)
  console.log(user)

  let total = 0
  for (let cartItem of cart) {
    total += cartItem.price * cartItem.amount
  }

  const onSubmit = async (cart) => {
    try {
      console.log(cart)
      const response = await axios({
        url: 'https://pop-pet-challenge.herokuapp.com/products',
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json',
        },
        data: cart,
      })

      console.log(response)
      if (response.status === 200) {
        console.log('vlw')
      }
    } catch (error) {
      return error.message
    }
  }

  return (
    <>
      <Header />
      <div>
        <form>
          <FormControl>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              id="name"
              defaultValue={user ? user.name : ''}
              placeholder="Seu Nome"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="username">Email</FormLabel>
            <Input
              id="email"
              defaultValue={user ? user.email : ''}
              placeholder="Seu nome de usuário"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">CPF</FormLabel>
            <Input
              id="cpf"
              defaultValue={user ? user.email : ''}
              placeholder="Somente números"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">CEP</FormLabel>
            <Input
              id="zipcode"
              defaultValue={user ? user.zipcode : ''}
              placeholder="Somente números"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Endereço</FormLabel>
            <Input
              id="street"
              defaultValue={user ? user.street : ''}
              placeholder="Somente números"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="ref_address">Ponto de Referência</FormLabel>
            <Input
              id="ref_address"
              defaultValue={user ? user.ref_address : ''}
              placeholder="Somente números"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">City</FormLabel>
            <Input
              id="city"
              defaultValue={user ? user.city : ''}
              placeholder="Somente números"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Estado</FormLabel>
            <Input
              id="state"
              defaultValue={user ? user.state : ''}
              placeholder="Somente números"
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
        </form>
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
      </div>
    </>
  )
}

export default Checkout
