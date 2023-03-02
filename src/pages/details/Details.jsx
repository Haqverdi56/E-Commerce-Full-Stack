import axios from 'axios'
import './details.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SwiperCarousel from '../../components/SwiperCarousel'
import { add } from '../../redux/store/features/productSlice'
import { useDispatch } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'

const Details = () => {
  const [dataItem, setDataItem] = useState({});
  const [dataItemCount, setDataItemCount] = useState(1)
  const params = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`)
    .then(res => setDataItem(res.data))
  }, [])
  

  const addProduct = (item) => {
    dispatch(add(item));
  }

  return (
    <div className='details-card'>
        <div className='details-card-img'>
          <SwiperCarousel dataItem={dataItem} />
        </div>
        <div className='details-card-about'>
            <div>
              <h4 className='details-card-about-title'>{dataItem?.title}</h4>  
              <p className='details-card-about-price'>{(dataItem?.price)?.toFixed(2)} $</p>
            </div>
            <div>
              <button className='details-card-about-addButton' onClick={() => addProduct(dataItem)}>
                <FiShoppingCart/>
                Add
              </button>
            </div>
        </div>
    </div>
  )
}

export default Details