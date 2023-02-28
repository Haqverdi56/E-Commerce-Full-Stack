import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product'
import './details.scss'

const Details = () => {
  const [dataItem, setDataItem] = useState(1)
  const params = useParams();
  
  axios.get(`https://dummyjson.com/products/${params.id}`)
  .then(res => setDataItem(res.data))

  return (
    <div className='details-card'>
          <div className='details-card-img'>
              <img src={dataItem?.thumbnail} alt="" />
        </div>
        <div className='details-card-about'>
              <p className='details-card-about-title'>{dataItem?.title}</p>  
            <p>{(dataItem?.price)?.toFixed(2)} $</p>
            {/* <button className='product-card-about-addButton' onClick={() => addProduct(dataItem)}>Add</button> */}
        </div>
    </div>
  )
}

export default Details