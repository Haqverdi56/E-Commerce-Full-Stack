import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './product.scss'
import { add } from '../../redux/store/features/productSlice';
import { addFav } from '../../redux/store/features/favoritesSlice'
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'

function Product(props) {
  const [heart, setHeart] = useState(true)
  const dispatch = useDispatch()

  const addProduct = (item) => {
    dispatch(add(item));
  }

  const addFavorite = (itemFav) => {
    setHeart(false);
    dispatch(addFav(itemFav))
  }

  const removeFavorite = (item) => {
    setHeart(true)
  }

  return (
    <div className='product-card'>
        <div className='product-card-img'>
            <Link to={`/details/${props.item.id}`}><img src={props.item?.thumbnail} alt="" /></Link>
            {
              heart ? <BsHeart className='heart-icon' onClick={() => addFavorite(props.item)} /> 
              : <BsHeartFill className='heart-icon' onClick={() => removeFavorite(props.item)} />
            }
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