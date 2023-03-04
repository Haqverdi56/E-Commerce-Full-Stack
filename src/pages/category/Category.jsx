import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './category.scss'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import Product from '../../components/product/Product'
import AccordionCategory from '../../components/AccordionCategory'

const Category = () => {
  const [products, setProducts] = useState([]);
  const [heart, setHeart] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  // Accordion
  const [categoryName, setCategoryName] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  const fetchProducts = async () => {
    await axios.get(`https://dummyjson.com/products/category/${params.name}`)
    .then(res => setProducts(res.data.products))
  }
  useEffect(() => {
    fetchProducts()
  }, [params.name]);

  
  // Accordion
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(res => setCategoryName(res.data))
  }, []);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
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

  console.log(filteredProducts);
  return (
    <div className='category-container'>
      <div className='filter-section'>
        <AccordionCategory 
        categoryName={categoryName}
        handleCategoryChange={handleCategoryChange}
        />
        <button onClick={priceSortExpensive} className='priceSortButton'>Ən bahadan ucuza</button>
        <button onClick={priceSortCheap} className='priceSortButton'>Ən ucuzdan bahaya</button>
      </div>
      <div className='categories-div'>
        {
          products && products.map(item => (
            <Product key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Category;