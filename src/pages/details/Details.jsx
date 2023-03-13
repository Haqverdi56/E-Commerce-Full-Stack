import axios from 'axios'
import './details.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SwiperCarousel from '../../components/carousels/SwiperCarousel'
import { add } from '../../redux/store/features/basketSlice'
import { useDispatch } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import Rating from '@mui/material/Rating';
import Modal from '../../components/Modal'

const Details = () => {
  const [dataItem, setDataItem] = useState({});
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${params.id}`)
    .then(res => setDataItem(res.data))
  }, [])
  // console.log(dataItem);

  const addProduct = (item) => {
    dispatch(add(item));
  }

  return (
    <div className='detail-page'>
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
                  onClick={(e) => setOpen(true)}
                />
                <Modal open={open} setOpen={setOpen} />
              </div>
              <div>
                <button className='details-card-about-addButton' onClick={() => addProduct(dataItem)}>
                  <FiShoppingCart/>
                  Add
                </button>
              </div>
          </div>
      </div>
      <div className='product-comment'>
        <div className='product-comment-section'>
          <div className='rate-div'>
            <p>5</p>
            <div>
              <Rating name="read-only" value={5} readOnly size="large"/>
            </div>
          </div>
          <div className='user-comments'>
            <p className='user-name'>Ecommerce User</p>
            <p className='comment'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur inventore beatae doloribus explicabo totam? Facere culpa asperiores mollitia odio ratione iusto, cum adipisci quasi quia nam, excepturi possimus hic ipsum!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details