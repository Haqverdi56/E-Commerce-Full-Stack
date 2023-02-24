import React from 'react'
import Brendyol from '../../assets/images/brendyol.png'
import './header.scss'
import { VscAccount } from 'react-icons/vsc'
import { TfiHeart } from 'react-icons/tfi'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
        <div className='header-section'>
            <div className='header-section-logo'>
                <Link to='/'><img className='header-section-logo-img' src={Brendyol} alt="" /></Link>
            </div>
            <div className='header-section-icons'>
                <VscAccount className='icons' />
                <TfiHeart className='icons' />
                <Link to='basket'><BsBasket/></Link>
            </div>
        </div>
        <div className='category-names'>
          <ul className='category-names-ul'>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Accessories</li>
          </ul>
        </div>
    </div>
  )
}

export default Header