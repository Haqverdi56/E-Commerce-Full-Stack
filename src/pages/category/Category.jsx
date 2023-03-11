import React, { useEffect, useState } from 'react'
import './category.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product'
import AccordionCategory from '../../components/AccordionCategory'
import Filter from './Filter'
import SkeletonLoader from '../../components/Skeleton'
import { Pagination } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [skeleton, setSkeleton] = useState(true)
  // const [page, setPage] = useState(1)
  const params = useParams();
  const notify = () => toast.success('Product added to cart');
  
  const fetchProducts = async () => {
    await axios.get(`http://localhost:5000/api/products?limit=90`)
    .then(res => {
      setProducts(res.data)
      setSkeleton(false)
    })
  }
  useEffect(() => {
    fetchProducts()
  }, [params.name]);

  

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };
  
  const filteredProducts = selectedCategories.length > 0 ?
   products.filter((product) => selectedCategories.includes(product.category[0].name)) 
   : products;

  const changePagination = (e) => {
    console.log(e.target.textContent)
  }
  const clickToast = () => {
    notify()
  }
  return (
    <>
    <div className='category-container'>
      <div className='filter-section'>
        <AccordionCategory 
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleCategoryChange={handleCategoryChange}
        />
        <Filter  setProducts={setProducts} products={products}/>
      </div>
      <div className='categories-div'>
          {
            !skeleton ? filteredProducts.map(item => (
              <Product key={item._id} item={item} clickToast={clickToast} />
              )) : <SkeletonLoader />
            }
      </div>
      <Toaster 
          position="top-right"
          reverseOrder={true}
          gutter={8}
          toastOptions={{
            className: '',
            duration: 2000,
            success: {
              theme: {
                primary: 'green',
                secondary: 'black',
            },
          },
        }}/>
    </div>
      {/* <Pagination onChange={changePagination} count={filteredProducts.length} variant="outlined" /> */}
    </>
  )
}

export default Category;