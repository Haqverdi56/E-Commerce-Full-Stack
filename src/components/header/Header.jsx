import React, { useEffect, useState } from 'react'
import Brendyol from '../../assets/images/brendyol.png'
import './header.scss'
import { VscAccount } from 'react-icons/vsc'
import { TfiHeart } from 'react-icons/tfi'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { sendCategoryName } from '../../redux/store/features/categorySlice'


function Header() {
  const [categoryName, setCategoryName] = useState([]);
  const products = useSelector(state => state.product);

  
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(res => setCategoryName(res.data))
  }, [])
  
  return (
    <div className='header'>
        <div className='header-section'>
            <div className='header-section-logo'>
                <Link to='/'><img className='header-section-logo-img' src={Brendyol} alt="" /></Link>
            </div>
            <div className='header-section-icons'>
                <Link className='icons' to='account'><VscAccount/></Link>
                <Link className='icons' to='favorites'><TfiHeart/></Link>
                <Link className='icons' to='basket'>
                  <BsBasket/>
                  {
                    products?.length ? <span className='basket-count'>{products?.length}</span>
                    : null
                  }
                  
                </Link>
            </div>
        </div>
        <div className='category-names'>
          <ul className='category-names-ul'>
            {
              categoryName && categoryName.map((category, i) => (
                <li key={i}>
                  <Link to={`category/${category}`}>{category}</Link>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default Header