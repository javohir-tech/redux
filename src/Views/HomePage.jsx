import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'

function HomePage() {

  useEffect(() => {
    fetchProducts()
  }, [])

  const [products, setProducts] = useState([])
  console.log(products)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API}`)
      // console.log(response.data)
      setProducts(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <div className='row g-4'>
        {!products.length == 0 && products.map((item) => {
          return <ProductCard
            img={item.thumbnail}
            price={item.price}
            title={item.title}
            chegirmaNarx={item.discountPercentage}
            rating={item.rating}
            sharhlar={item.reviews.length}
          />
        })}
      </div>
    </div>
  )
}

export default HomePage
