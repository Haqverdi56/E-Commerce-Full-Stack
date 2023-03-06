import React, { useEffect, useState } from 'react'
import './category.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product'
import AccordionCategory from '../../components/AccordionCategory'
import Filter from './Filter'

const Category = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  
  const fetchProducts = async () => {
    await axios.get(`https://dummyjson.com/products?limit=90`)
    .then(res => setProducts(res.data.products))
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
    console.log(e.target)
  };
  
  const priceSortExpensive = () => {
    const sortPrice = [...products].sort((a,b) => b.price - a.price)
    setProducts(sortPrice);
  } 
  const priceSortCheap = () => {
    const sortPrice = [...products].sort((a,b) => a.price - b.price)
    setProducts(sortPrice);
  } 
  const filteredProducts = selectedCategories.length > 0 ?
   products.filter((product) => selectedCategories.includes(product.category)) 
   : products;

  // console.log(filteredProducts);
  return (
    <div className='category-container'>
      <div className='filter-section'>
        <AccordionCategory 
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        handleCategoryChange={handleCategoryChange}
        />
        <Filter priceSortCheap={priceSortCheap} priceSortExpensive={priceSortExpensive} />
      </div>
      <div className='categories-div'>
          {
            filteredProducts && filteredProducts.map(item => (
              <Product key={item.id} item={item} />
            ))
          }
      </div>
    </div>
  )
}

export default Category;