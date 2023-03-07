import axios from 'axios'
import './details.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SwiperCarousel from '../../components/carousels/SwiperCarousel'
import { add } from '../../redux/store/features/basketSlice'
import { useDispatch } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Details = () => {
  const [dataItem, setDataItem] = useState({});
  const [value, setValue] = React.useState(2);
  const params = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${params.id}`)
    .then(res => setDataItem(res.data))
  }, [])
  console.log(dataItem);

  const addProduct = (item) => {
    dispatch(add(item));
  }

  return (
    <div>
      <div className='details-card'>
          <div className='details-card-img'>
            <SwiperCarousel dataItem={dataItem} />
          </div>
          <div className='details-card-about'>
              <div>
                <h4 className='details-card-about-title'>{dataItem?.title}</h4>  
                <p className='details-card-about-price'>{(dataItem?.price)?.toFixed(2)} $</p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <div>
                <button className='details-card-about-addButton' onClick={() => addProduct(dataItem)}>
                  <FiShoppingCart/>
                  Add
                </button>
              </div>
          </div>
      </div>
      <div className='details-product-about'>
        <h3>Comments</h3>
      </div>
    </div>
  )
}

export default Details