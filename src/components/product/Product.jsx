import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './product.scss'
import { add } from '../../redux/store/features/basketSlice';
import { addFav } from '../../redux/store/features/favoritesSlice'
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

function Product(props) {
  const [heart, setHeart] = useState(true);
  const dispatch = useDispatch();
  const notify = () => toast.success('Product added to cart');

  const addProduct = (item) => {
    dispatch(add(item));
    notify()
  }
  
  const addFavorite = (itemFav) => {
    setHeart(false);
    dispatch(addFav(itemFav))
  };

  const removeFavorite = (item) => {
    setHeart(true)
  };


  return (
    <div className='product-card'>
        <div className='product-card-img'>
            <Link to={`/details/${props.item._id}`}><img src={props.item?.thumbnail} alt="" /></Link>
            {
              heart ? <BsHeart className='heart-icon' onClick={() => addFavorite(props.item)} /> 
              : <BsHeartFill className='heart-icon' onClick={() => removeFavorite(props.item)} />
            }
        </div>
        <div className='product-card-about'>
            <p className='product-card-about-title'>{props.item?.title}</p>  
            <p>{(props.item?.price)?.toFixed(2)} $</p>
            <button className='product-card-about-addButton' onClick={() => addProduct(props?.item)}>
              <FiShoppingCart />
              <p>Add</p>
              <Toaster 
              position="top-right"
              reverseOrder={true}
              gutter={8}
              toastOptions={{
                // Define default options
                className: '',
                duration: 2000,
            
                // Default options for specific types
                success: {
                  // duration: 1000,
                  theme: {
                    primary: 'green',
                    secondary: 'black',
                  },
                },
              }}/>
            </button>
        </div>
    </div>
  )
}

export default Product;