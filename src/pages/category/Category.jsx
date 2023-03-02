import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './category.scss'
import { add } from '../../redux/store/features/productSlice'
import { BsHeart } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { BsHeartFill } from 'react-icons/bs'
import Product from '../../components/product/Product'
import { Breadcrumbs } from '@mui/material'

const Category = () => {
  const [products, setProducts] = useState([]);
  const [heart, setHeart] = useState(true);
  
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${params.name}`)
      .then(res => setProducts(res.data.products))
  }, [params.name])

  // const addProduct = (item) => {
  //   dispatch(add(item));
  // }

  // const addFavorite = (item) => {
  //   setHeart(false);
  // }

  // const removeFavorite = (item) => {
  //   setHeart(true)
  // }

  return (
    <div className='categories-div'>
      {
        products && products.map(item => (
          <Product key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default Category;