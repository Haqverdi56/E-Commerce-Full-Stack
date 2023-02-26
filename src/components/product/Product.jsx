import React from 'react'
import { useDispatch } from 'react-redux';
import './product.scss'
import { add } from '../../redux/store/features/productSlice';
import { Link } from 'react-router-dom';

function Product(props) {
  const dispatch = useDispatch()

  const addProduct = (item) => {
    dispatch(add(item));
  }

  return (
    <div className='product-card'>
        <div className='product-card-img'>
            <Link to={`/details/${props.item.id}`}><img src={props.item?.thumbnail} alt="" /></Link>
        </div>
        <div className='product-card-about'>
            <p className='product-card-about-title'>{props.item?.title}</p>  
            <p>{(props.item?.price)?.toFixed(2)} $</p>
            <button className='product-card-about-addButton' onClick={() => addProduct(props?.item)}>Add</button>
        </div>
    </div>
  )
}

export default Product;