import React from 'react'
import { AddCartButton, DivCard, ProductImg, ProductName } from './styles'
import { formatToBRL } from 'brazilian-values'
import { Flex, Text } from '@chakra-ui/react'

function ProductCard({ products }) {
  return (
    <>
      <Flex justifyContent="space-between">
        {products.map((product) => (
          <DivCard key={product.id} className="product-card">
            <ProductName>{product.name}</ProductName>
            <ProductImg src={product.img} />
            <Text fontSize="4xl">{formatToBRL(product.price / 100)}</Text>
            <AddCartButton colorScheme="purple">
              Adicionar ao carrinho
            </AddCartButton>
          </DivCard>
        ))}
      </Flex>
    </>
  )
}

export default ProductCard
