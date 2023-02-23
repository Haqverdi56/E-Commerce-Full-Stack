import axios from "axios"
import { useEffect } from "react"
import Header from "./components/header/Header"
import Product from "./components/product/Product"

function App() {

  const productFetch = () => {
    axios.get('https://dummyjson.com/products')
    .then(res => console.log(res.data))
  }

  useEffect(() => {
    productFetch()
  }, [])
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}

export default App
