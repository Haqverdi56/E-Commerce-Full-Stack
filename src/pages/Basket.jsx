import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/product/Product'
import './basket.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteById } from '../redux/store/features/productSlice'

function Basket() {
  const [count, setCount] = useState(0)
  const products = useSelector(state => state.product) 
  const dispatch = useDispatch()
  
  const productDelete = (id) => {
    dispatch(deleteById(id))
  }
  console.log(products);
  const totalPrice = (product) => {
    console.log(product);
    return product.reduce((acc, cur) => acc + cur.price.price * cur.count, 0).toFixed(2);
  }

  const increase = () => {
    setCount(prev => prev +1)
  }

  return (
    <div className='basket-div'>
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
                  <button className='buttonMinus'>-</button>
                  <p className='buttonCount'>{count}</p>
                  <button className='buttonPlus' onClick={() => increase()}>+</button>
                </div>
                <div className="basket-card-delete">
                  <AiOutlineDelete onClick={() => productDelete(product.id)} />
                </div>
            </div>
          ))
        }
      </div>
      <div className='price-evaluation'>
        <div className='price-evaluation-amount'>
          <p>Məbləğ</p>
          <span>1200$</span>
        </div>
      </div>
    </div>
  )
}

export default Basket