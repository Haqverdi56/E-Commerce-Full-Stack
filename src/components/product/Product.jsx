import React from 'react'
import './product.scss'

function Product() {
  return (
    <div className='product-card'>
        <div className='product-card-img'>
            <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" alt="" />
        </div>
        <div className='product-card-about'>
            <p>Apple  iPhone 12, 64 GB, Purple</p>
            <p>1230$</p>
        </div>
    </div>
  )
}

export default Product