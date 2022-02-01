import React, { useContext } from 'react'
import { AddCartButton, DivCard, ProductImg, ProductName } from './styles'
import { formatToBRL } from 'brazilian-values'
import { Flex, Text } from '@chakra-ui/react'
import { CartContext } from '../../contexts/cartContext'

function ProductCard({ products, handleAddProductCart }) {
  const { cart } = useContext(CartContext)

  function filterMaxAmount(cart, productID) {
    const isSameProduct = cart.filter((product) => productID === product.id)
    if (
      isSameProduct[0] &&
      isSameProduct[0].amount > isSameProduct[0].maxAmount
    ) {
      console.log('aaa')
      return true
    }
    return false
  }

  return (
    <>
      <Flex justifyContent="space-between">
        {products.map((product) => (
          <DivCard key={product.id} className="product-card">
            <ProductName>{product.name}</ProductName>
            <ProductImg src={product.img} />
            <Text fontSize="4xl">{formatToBRL(product.price / 100)}</Text>
            <AddCartButton
              colorScheme="purple"
              onClick={() => handleAddProductCart(product.id)}
              isDisabled={filterMaxAmount(cart, product.id)}
            >
              Adicionar ao carrinho
            </AddCartButton>
          </DivCard>
        ))}
      </Flex>
    </>
  )
}

export default ProductCard
