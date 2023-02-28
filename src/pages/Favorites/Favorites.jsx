import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../../components/product/Product'
import { deleteFav } from '../../redux/store/features/favoritesSlice'
import './favorites.scss'

const Favorites = () => {
  const favProducts = useSelector(state => state.favorite)
  const dispatch = useDispatch()

  const deleteFavorite = (id) => {
    dispatch(deleteFav(id))
  }
  return (
    <div className='favorite-div'>
      {
        favProducts && favProducts.map(favorite => (
          <div className='product-card' key={favorite.id}>
              <div className='product-card-img'>
                  <Link to={`/details/${favorite.id}`}><img src={favorite?.thumbnail} alt="" /></Link>
                  {
                     <BsHeartFill className='heart-icon' onClick={() => deleteFavorite(favorite.id)} />
                  }
              </div>
              <div className='product-card-about'>
                  <p className='product-card-about-title'>{favorite?.title}</p>  
                  <p>{(favorite?.price)?.toFixed(2)} $</p>
                  <button className='product-card-about-addButton' onClick={() => addProduct(favorite)}>Add</button>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Favorites;