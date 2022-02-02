import React, { useContext, useState } from 'react'
import {
  AddCartButton,
  DivCard,
  ProductImg,
  ProductName,
  InfoButton,
} from './styles'
import { formatToBRL } from 'brazilian-values'
import {
  Wrap,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { CartContext } from '../../contexts/cartContext'

function ProductCard({ products, handleAddProductCart }) {
  const { cart } = useContext(CartContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectProduct, setSelectProduct] = useState()

  function filterMaxAmount(cart, product) {
    const isSameProduct = cart.filter(
      (cartProduct) => product.id === cartProduct.id
    )
    if (
      product.maxAmount <= 0 ||
      (isSameProduct[0] && isSameProduct[0].amount > isSameProduct[0].maxAmount)
    ) {
      return true
    }
    return false
  }

  function handleModalClick(product) {
    setSelectProduct(product)
    onOpen()
  }

  return (
    <>
      <Wrap justify="center" align="center">
        {products.map((product) => (
          <DivCard key={product.id} className="product-card">
            <InfoButton onClick={() => handleModalClick(product)}>
              <ProductName>{product.name}</ProductName>
            </InfoButton>
            <InfoButton onClick={() => handleModalClick(product)}>
              <ProductImg src={product.img} />
            </InfoButton>
            <Text fontSize="4xl">{formatToBRL(product.price / 100)}</Text>
            <AddCartButton
              colorScheme="purple"
              onClick={() => handleAddProductCart(product.id)}
              isDisabled={filterMaxAmount(cart, product)}
            >
              Adicionar ao carrinho
            </AddCartButton>
          </DivCard>
        ))}
      </Wrap>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl">Descrição do produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="2xl">{selectProduct?.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProductCard
