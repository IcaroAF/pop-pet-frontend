/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { ReportDataBox } from './styles'
import axios from 'axios'
import { AuthContext } from '../../contexts/authContext.js'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { formatToBRL } from 'brazilian-values'
import { Link } from 'react-router-dom'

function Admin() {
  const { token } = useContext(AuthContext)
  const [resumeData, setResumeData] = useState({})

  useEffect(() => {
    getResume()
  }, [])

  async function getResume() {
    const response = await axios.get(
      'https://pop-pet-challenge.herokuapp.com/resume',
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    )

    const data = await response.data
    setResumeData(data)
  }

  return (
    <>
      <Header />
      <Flex flexDirection="column">
        <ReportDataBox>
          <Heading>Total de Itens vendidos</Heading>
          <Text fontSize="3xl">{resumeData[0]?.total_items_sold}</Text>
        </ReportDataBox>
        <ReportDataBox>
          <Heading>Número de Produtos no Estoque</Heading>
          <Text fontSize="3xl">{resumeData[0]?.total_products}</Text>
        </ReportDataBox>
        <ReportDataBox>
          <Heading>Número de usuários</Heading>
          <Text fontSize="3xl">{resumeData[0]?.total_users}</Text>
        </ReportDataBox>
        <ReportDataBox>
          <Heading>Faturamento</Heading>
          <Text fontSize="3xl">{formatToBRL(resumeData[0]?.total_value)}</Text>
        </ReportDataBox>
        <Button>
          <Link to="/sign-up">Criar usuário</Link>
        </Button>
        <Button>
          <Link to="/admin/addproduct">Adicionar produto</Link>
        </Button>
      </Flex>
    </>
  )
}

export default Admin
