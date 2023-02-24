import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Product from "./components/product/Product"
import { add } from "./redux/store/features/productSlice"
import Basket from './pages/Basket'
import HomePage from "./components/HomePage"

function App() {
  const [data, setData] = useState([])

  const productFetch = async () => {
    await axios.get('https://dummyjson.com/products')
    .then(res => {
      setData(res.data.products)  
    })
  } 
  // console.log(data);

  useEffect(() => {
    productFetch()
  }, [])
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
