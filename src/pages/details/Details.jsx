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
    <div>
      <Product item={dataItem} />
    </div>
  )
}

export default Details