import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { Link } from 'react-router-dom'

function ShopPage() {
  const tovars = useSelector((state) => state.counter.tovars) // [{}, {}]
  console.log(tovars)
  return (
    <div>
      {tovars.length == 0
        ?
        <div>
          savatda hech nima yoq
          <Link to={'/'}>homa pagega otish</Link>
        </div>
        :
        tovars.map((item) => {
          return <ProductCard
            data={item}
            key={item.id}
            id={item.id}
            img={item.thumbnail}
            price={item.price}
            title={item.title}
            chegirmaNarx={item.discountPercentage}
            rating={item.rating}
            sharhlar={item.reviews.length}
          />
        })}
    </div>
  )
}

export default ShopPage
