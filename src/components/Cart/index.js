import React, { useRef, useContext, useEffect, useState } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import CartIcon from '../../assets/cart.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus-icon.svg'
import { CartSpam, CartButtonDiv, CartImg } from './styles'
import { CartContext } from '../../contexts/cartContext'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { formatToBRL } from 'brazilian-values'

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { cart, setCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let sum = 0

    for (const products of cart) {
      sum += products.amount * products.price
    }

    setTotal(sum)
  }, [cart])

  function handleAddAmount(value, productID) {
    const localCart = [...cart]

    const indexCart = localCart.findIndex((product) => product.id === productID)

    const newAmount = localCart[indexCart].amount + value

    localCart[indexCart].amount = newAmount
    setCart([...localCart])
    localStorage.setItem('cart', JSON.stringify([...localCart]))
  }

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <CartButtonDiv>
          <img
            src={CartIcon}
            width="25"
            height="25"
            position="relative"
            alt="cart-icon"
          />
          {cart.length > 0 ? <CartSpam>{cart.length}</CartSpam> : ''}
        </CartButtonDiv>
        Carrinho
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="20px">Seu Carrinho</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 &&
              cart.map((product) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-between"
                  alignContent="space-between"
                  key={product.id}
                >
                  <CartImg src={product.img} alt="img-produto" />
                  <Text fontSize="2xl" align="center">
                    {product.name}
                  </Text>
                  <Text fontSize="3xl" align="center">
                    {formatToBRL(product.price / 100)}
                  </Text>
                  <Flex>
                    <IconButton
                      onClick={() => handleAddAmount(1, product.id)}
                      icon={<PlusIcon />}
                      disabled={product.amount > product.maxAmount}
                    />
                    <Text fontSize="2xl">{product.amount}</Text>
                    <IconButton
                      disabled={product.amount === 1}
                      onClick={() => handleAddAmount(-1, product.id)}
                      icon={<MinusIcon />}
                    />
                  </Flex>
                </Flex>
              ))}
            <Text fontSize="4xl">{formatToBRL(total / 100)}</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                setCart([])
                localStorage.removeItem('cart')
              }}
            >
              Limpar Carrinho
            </Button>
            <Button colorScheme="blue">Finalizar Compra</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart
