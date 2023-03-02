import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Basket from './pages/Basket'
import HomePage from "./components/HomePage"
import Category from './pages/category/Category'
import Details from "./pages/details/Details"
import Favorites from "./pages/Favorites/Favorites"
import ErrorPage from "./pages/ErrorPage"

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/categories" element={<Category />} /> */}
          <Route path="/category/:name" element={<Category />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
