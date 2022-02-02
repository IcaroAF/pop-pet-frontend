import styled from 'styled-components'
import { Button, Heading } from '@chakra-ui/react'

const DivCard = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const AddCartButton = styled(Button)`
  height: 50px;
`

const ProductName = styled(Heading)`
  font-size: 14px;
  line-height: 19px;
  height: 57px;
  min-height: 42px;
  text-align: center;
  color: #262626;
  opacity: 1;
  margin: 0 0 12px;
  overflow: hidden;
`
const ProductImg = styled.img`
  width: 70%;
  margin: auto;
`
const InfoButton = styled.button`
  all: unset;
  cursor: pointer;
`

export { DivCard, AddCartButton, InfoButton, ProductImg, ProductName }
