import React, { useContext } from 'react'
import Header from '../../components/Header'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FormHeading, FormWrapper, SubmitButton, Wrapper } from './styles'
import { useForm } from 'react-hook-form'
import SuccessMessage from '../../components/Notifications/sucess'
import ErrorMessage from '../../components/Notifications/error'
import 'react-phone-number-input/style.css'
import axios from 'axios'
import { AuthContext } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const { register, handleSubmit } = useForm()
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
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
    }).catch(function (error) {
      return ErrorMessage(error.response.data)
    })

    if (response?.status === 200) {
      console.log('produto adicionado')
      SuccessMessage(response.data)
      navigate('/admin')
    }
  }

  return (
    <>
      <Header />
      <Wrapper direction="column" align="center" justify="center">
        <FormHeading>Adicionar Produto</FormHeading>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
          <SubmitButton colorScheme="purple" type="submit">
            Enviar
          </SubmitButton>
        </FormWrapper>
      </Wrapper>
    </>
  )
}

export default AddProduct
