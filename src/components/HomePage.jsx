import React from 'react'
import Product from './product/Product'

function HomePage({data}) {
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