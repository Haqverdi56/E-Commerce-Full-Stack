import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './category.scss'
import { add } from '../../redux/store/features/productSlice'
import { useParams } from 'react-router-dom'

const Category = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${params.name}`)
      .then(res => setProducts(res.data.products))
  }, [params.name])

  const addProduct = (item) => {
    dispatch(add(item));
  }
  return (
    <div className='categories-div'>
      { 
        products && products.map(item => (
        <div className='category-card' key={item.id}>
          <div className='category-card-img'>
              <img src={item?.thumbnail} alt="" />
          </div>
          <div className='category-card-about'>
              <p className='category-card-about-title'>{item?.title}</p>  
              <p>{item?.price} $</p>
              <button className='category-card-about-addButton' onClick={() => addProduct(item)}>Add</button>
          </div>
      </div>
        ))
      }
    </div>
  )
}

export default Category;