import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './product/Product'

function HomePage() {
  const [data, setData] = useState([])

  const productFetch = async () => {
    await axios.get('https://dummyjson.com/products')
    .then(res => {
      setData(res.data.products)  
    })
  }

  useEffect(() => {
    productFetch()
  }, [])
  
  return (
    <div className="products">
      {
        data && data.map((item, i) => (
          <Product key={i} item={item} />
        ))
      }
    </div>
  )
}

export default HomePage