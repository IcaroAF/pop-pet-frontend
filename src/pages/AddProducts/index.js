import React, { useContext } from 'react'
import Header from '../../components/Header'
import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import axios from 'axios'
import { AuthContext } from '../../contexts/authContext'

function AddProduct() {
  const { register, handleSubmit } = useForm()
  const { token } = useContext(AuthContext)

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        url: 'https://pop-pet-challenge.herokuapp.com/add-product',
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        data: data,
      })

      if (response.status === 200) {
        console.log('produto adicionado')
      }
    } catch (error) {
      return error.message
    }
  }

  return (
    <>
      <Header />
      <Flex alignContent="center" justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="name">Nome:</FormLabel>
            <Input
              id="name"
              placeholder="Nome do produto"
              {...register('name', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="price">Preço:</FormLabel>
            <Input
              id="price"
              placeholder="Preço do produto em centavos"
              {...register('price', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Descrição:</FormLabel>
            <Input
              id="description"
              placeholder="Descrição do produto"
              {...register('description', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="category">Categoria:</FormLabel>
            <Input
              id="category"
              placeholder="Categoria do produto"
              {...register('category', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="amount">Quantidade:</FormLabel>
            <Input
              id="amount"
              placeholder="Quantidade do produto em estoque"
              {...register('amount', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="img">URL da imagem do produto:</FormLabel>
            <Input
              id="img"
              placeholder="URL da imagem"
              {...register('img', { required: true })}
            />
          </FormControl>
          <Button type="submit">Enviar</Button>
        </form>
      </Flex>
    </>
  )
}

export default AddProduct
