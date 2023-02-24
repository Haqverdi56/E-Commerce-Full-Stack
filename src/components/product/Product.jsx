import React from 'react'
import { useDispatch } from 'react-redux';
import './product.scss'
import { add } from '../../redux/store/features/productSlice';

function Product(props) {
  console.log(props);
  const dispatch = useDispatch()

  const addProduct = (item) => {
    dispatch(add(item));
  }

  return (
    <div className='product-card'>
        <div className='product-card-img'>
            {/* <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" alt="" /> */}
            <img src={props.item.thumbnail} alt="" />
        </div>
        <div className='product-card-about'>
            <p className='product-card-about-title'>{props.item.title}</p>  
            <p>{props.item.price} $</p>
            <button className='product-card-about-addButton' onClick={() => addProduct(props.item)}>Add</button>
        </div>
    </div>
  )
}

export default Product;