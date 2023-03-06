import React, { useEffect, useState } from 'react'
import './category.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product'
import AccordionCategory from '../../components/AccordionCategory'
import Filter from './Filter'
import SkeletonLoader from '../../components/Skeleton'

const Category = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [skeleton, setSkeleton] = useState(true)
  const params = useParams();
  
  const fetchProducts = async () => {
    await axios.get(`https://dummyjson.com/products?limit=90`)
    .then(res => {
      setProducts(res.data.products)
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
   products.filter((product) => selectedCategories.includes(product.category)) 
   : products;

  console.log(filteredProducts);
  return (
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
              <Product key={item.id} item={item} />
            )) : <SkeletonLoader />
          }
      </div>
    </div>
  )
}

export default Category;