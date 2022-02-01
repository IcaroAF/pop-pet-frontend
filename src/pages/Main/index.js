import * as S from './styles'
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Pets from '../../assets/pets.jpeg'
import ProductCard from '../../components/Products'
import { CartContext } from '../../contexts/cartContext'

function Main() {
  const { cart, setCart } = useContext(CartContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    handlePopulateProducts()
  }, [])

  async function handlePopulateProducts() {
    const response = await axios.get(
      'http://pop-pet-challenge.herokuapp.com/products',
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json',
        },
      }
    )

    console.log(response)
    const data = await response.data
    const formattedProducts = []

    //console.log(data)

    for (const product of data) {
      formattedProducts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        maxAmount: product.amount,
      })
    }

    setProducts(formattedProducts)
  }

  function handleAddProductCart(productID) {
    const localProducts = [...products]
    const localCartProducts = [...cart]

    const productIndex = localProducts.findIndex(
      (product) => product.id === productID
    )

    const { id, name, img, price, maxAmount } = localProducts[productIndex]
    console.log(`vou adicionar o produto de id ${id}`)
    const cartIndex = localCartProducts.findIndex(
      (product) => product.id === productID
    )

    if (cartIndex >= 0) {
      localCartProducts[cartIndex].amount += 1
      //localCartProducts[cartIndex].maxAmount -= 1
      setCart([...localCartProducts])
    } else {
      const productCart = {
        id,
        name,
        img,
        price,
        amount: 1,
        maxAmount: maxAmount - 1,
      }
      setCart([...cart, productCart])
    }
  }

  return (
    <S.Wrapper>
      <Header />
      <div>
        <S.TopImg src={Pets} alt="alguns animais domésticos" />
      </div>
      <ProductCard
        products={products}
        handleAddProductCart={handleAddProductCart}
      />
      <h1>Produtos</h1>
    </S.Wrapper>
  )
}

export default Main
