import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductInfo() {
  const param = useParams()
  // console.log(param.id)

  useEffect(() => {
    FetchProduct()
  }, [])

  const [product , setProduct] =  useState([])
  console.log(product)

  const FetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API}/${param.id}`)
      // console.log(response)
      setProduct(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <img src={product.thumbnail} alt="" />
      <p>{product.price}</p>
    </div>
  )
}

export default ProductInfo
