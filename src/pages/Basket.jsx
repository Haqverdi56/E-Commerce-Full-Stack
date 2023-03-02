import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './basket.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteById, increaseCount, decreaseCount } from '../redux/store/features/productSlice'

function Basket() {
  const products = useSelector(state => state.product) 
  const dispatch = useDispatch()
  
  const productDelete = (id) => {
    dispatch(deleteById(id))
  }

  const totalPrice = (product) => {
    return product.reduce((acc, cur) => acc + cur.price * cur.count, 0).toFixed(2);
  }

  const increase = id => {
    dispatch(increaseCount(id))
  }
  const decrease = id => {
    dispatch(decreaseCount(id))
  }

  return (
    <div className='basket-div'>
      {
        products.length > 0 ? 
        <div className='basket-product'>
        {
          products && products.map(product => (
            <div key={product.id} className='basket-card'>
                <div className='basket-card-img'>
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className='basket-card-about'>
                    <p className='basket-card-about-title'>{product.title}</p>  
                    <p className='basket-card-price'>{product.price}$</p>
                </div>
                <div className='basket-card-buttons'>
                  <button className='buttonMinus' onClick={() => decrease(product.id)}>-</button>
                  <p className='buttonCount'>{product.count}</p>
                  <button className='buttonPlus' onClick={() => increase(product.id)}>+</button>
                </div>
                <div className="basket-card-delete">
                  <AiOutlineDelete onClick={() => productDelete(product.id)} />
                </div>
            </div>
          ))
        }
      </div> : <h1>Səbət boşdur!</h1>
      }
      <div className='price-evaluation'>
        <div className='price-evaluation-amount'>
          <p>Məbləğ</p>
          <span>{totalPrice(products)}</span>
        </div>
      </div>
    </div>
  )
}

export default Basket