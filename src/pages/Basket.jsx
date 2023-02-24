import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product/Product'

function Basket() {
  const basketProducts = useSelector(state => state.product) 
  return (
    <>
      {
        basketProducts && basketProducts.map(product => (
          <div className='product-card'>
              <div className='product-card-img'>
                  {/* <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" alt="" /> */}
                  <img src={product.thumbnail} alt="" />
              </div>
              <div className='product-card-about'>
                  <p className='product-card-about-title'>{product.title}</p>  
                  <p>{product.price} $</p>
              </div>
          </div>
        ))
      }
      </>
  )
}

export default Basket