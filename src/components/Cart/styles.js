import styled from 'styled-components'
import { Button } from '@chakra-ui/react'

const CartSpam = styled.span`
  background-color: red;
  color: white;
  padding: 2px 6px;
  position: absolute;
  top: 0;
  border-radius: 50%;
`
const CartButtonDiv = styled.div`
  margin-right: 15px;
`
const ControlButton = styled(Button)`
  border-radius: 50%;
  background-color: transparent;
  outline: none;
  height: 20px;
  img {
    height: 30px;
  }
`

export { CartSpam, CartButtonDiv, ControlButton }
