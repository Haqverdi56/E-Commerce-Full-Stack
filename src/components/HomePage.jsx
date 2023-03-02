import { Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './product/Product'

function HomePage() {
  const [data, setData] = useState([])
  const [skeleton, setSkeleton] = useState(true)

  const productFetch = async () => {
    await axios.get('https://dummyjson.com/products')
    .then(res => {
      setData(res.data.products)  
      setSkeleton(false)
    })
  }

  useEffect(() => {
    productFetch()
  }, [])
  
  return (
    <div className="products">
      {
        !skeleton ?
        data && data.map((item, i) => (
          <Product key={i} item={item} />
        )) :
        <div style={{display:'flex', gap:'2rem'}}>
        <div>
          <Skeleton style={{margin: '-20px 0'}} animation="wave" width={250} height={310} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
        </div>
        <div>
          <Skeleton style={{margin: '-20px 0'}} animation="wave" width={250} height={310} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
        </div>
        <div>
          <Skeleton style={{margin: '-20px 0'}} animation="wave" width={250} height={310} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
        </div>
        <div>
          <Skeleton style={{margin: '-20px 0'}} animation="wave" width={250} height={310} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
        </div>
        <div>
          <Skeleton style={{margin: '-20px 0'}} animation="wave" width={250} height={310} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
          <Skeleton variant='text' animation="wave" width={250} height={35} />
        </div>
      </div>
      }
    </div>
  )
}

export default HomePage