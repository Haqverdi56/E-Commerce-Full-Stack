import SkeletonLoader from '../../components/Skeleton'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product'
import LandingCarousel from '../../components/carousels/LandingCarousel'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import './homepage.scss'

function HomePage() {
  const [data, setData] = useState([])
  const [laptops, setLaptops] = useState([])
  const [skeleton, setSkeleton] = useState(true)

  const productFetch = async () => {
    await axios.get('https://dummyjson.com/products?limit=10')
    .then(res => {
      setData(res.data.products)  
      setSkeleton(false)
    })
  }
  const laptopFetch = async () => {
    await axios.get('https://dummyjson.com/products?limit=10&skip=5')
    .then(res => {
      setLaptops(res.data.products)  
      setSkeleton(false)
    })
  }

  useEffect(() => {
    productFetch();
    laptopFetch()
  }, [])
  
  return (
    <div className='homepage'>
      <LandingCarousel />
      <div className="products">
        <h3 className='products-slide-title'>Popular Products</h3>
        {
          !skeleton ?
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {data && data.map((item, i) => (
            <SwiperSlide key={i}>
              <Product item={item} />
            </SwiperSlide>
          ))}
          </Swiper>
          :
          <SkeletonLoader />
        }
      </div>
      <div className="products">
      <h3 className='products-slide-title'>Bestsellers</h3>
        {
          !skeleton ?
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}>
            {laptops && laptops.map((item, i) => (
            <SwiperSlide key={i}>
              <Product item={item} />
            </SwiperSlide>
          ))}
          </Swiper>
          : <SkeletonLoader />
        }
      </div>
    </div>
  )
}

export default HomePage