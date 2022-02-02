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
  const [displayProduct, setDisplayProduct] = useState([])
  const [filterProduct, setFilterProduct] = useState('')

  useEffect(() => {
    handlePopulateProducts()
  }, [])

  async function handlePopulateProducts() {
    const response = await axios.get(
      'https://pop-pet-challenge.herokuapp.com/products',
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

    const data = await response.data
    const formattedProducts = []

    for (const product of data) {
      formattedProducts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        description: product.description,
        maxAmount: product.amount,
      })
    }

    setProducts(formattedProducts)
    setDisplayProduct(formattedProducts)
  }

  function handleAddProductCart(productID) {
    const localProducts = [...products]
    const localCartProducts = [...cart]

    const productIndex = localProducts.findIndex(
      (product) => product.id === productID
    )

    const { id, name, img, price, maxAmount } = localProducts[productIndex]
    const cartIndex = localCartProducts.findIndex(
      (product) => product.id === productID
    )

    if (cartIndex >= 0) {
      localCartProducts[cartIndex].amount += 1
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
      localStorage.setItem('cart', JSON.stringify([...cart, productCart]))
    }
  }

  function handleFilterProducts() {
    if (filterProduct !== '') {
      const localProducts = [...products]

      const filteredProducts = localProducts.filter((product) =>
        product.name.toLowerCase().includes(filterProduct.toLowerCase())
      )
      filteredProducts.length > 0
        ? setDisplayProduct(filteredProducts)
        : setDisplayProduct(products)
    } else {
      setDisplayProduct(products)
    }
  }

  return (
    <S.Wrapper>
      <Header
        isMain
        setFilterProduct={setFilterProduct}
        handleFilterProducts={handleFilterProducts}
      />
      <div>
        <S.TopImg src={Pets} alt="alguns animais domésticos" />
      </div>
      <ProductCard
        products={displayProduct}
        handleAddProductCart={handleAddProductCart}
      />
      <h1>Produtos</h1>
    </S.Wrapper>
  )
}

export default Main
