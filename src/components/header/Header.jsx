import React, { useEffect, useRef, useState } from 'react'
import Brendyol from '../../assets/images/brendyol.png'
import './header.scss'
import { VscAccount } from 'react-icons/vsc'
import { TfiHeart } from 'react-icons/tfi'
import { BsBasket } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import MegaMenu from './MegaMenu'
import Account from './Account'


function Header() {
  const [categoryName, setCategoryName] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const products = useSelector(state => state.product);
  const timerRef = useRef();
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
    .then(res => setCategoryName(res.data))
  }, []);


  function handleMouseEnter() {
    timerRef.current = setTimeout(() => {
      setShowMegaMenu(true);
    }, 500);
  }
  
  function handleMouseLeave() {
    clearTimeout(timerRef.current);
    setShowMegaMenu(false)
  }
  
  const activeLink = 'activeLink'
  return (
    <div className='header'>
        <div className='header-section'>
            <div className='header-section-logo'>
                <Link to='/'><img className='header-section-logo-img' src={Brendyol} alt="" /></Link>
            </div>
            <div className='header-section-icons'>
                <Account />
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
        <div className='category-names' onMouseLeave={handleMouseLeave}>
          <ul className='category-names-ul' onMouseEnter={handleMouseEnter}>
            {
              categoryName && categoryName.map((category, i) => (
                <li key={i}>
                  <NavLink to={`category/${category.name}`} className={({isActive}) => (isActive ? activeLink : "") }>
                    {category.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          {showMegaMenu && <MegaMenu handleMouseLeave={handleMouseLeave} />}
        </div>
    </div>
  )
}

export default Header