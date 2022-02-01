import * as S from './styles'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Pets from '../../assets/pets.jpeg'
import ProductCard from '../../components/Products'

function Main() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    handlePopulateProducts()
  }, [])

  async function handlePopulateProducts() {
    const response = await fetch(
      'http://pop-pet-challenge.herokuapp.com/products',
      { method: 'GET' }
    )

    const data = await response.json()
    const formattedProducts = []

    console.log(data)

    for (const product of data) {
      formattedProducts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
      })
    }

    setProducts(formattedProducts)
  }

  return (
    <S.Wrapper>
      <Header />
      <div>
        <S.TopImg src={Pets} alt="alguns animais domésticos" />
      </div>
      <ProductCard products={products} />
      <h1>Produtos</h1>
    </S.Wrapper>
  )
}

export default Main
