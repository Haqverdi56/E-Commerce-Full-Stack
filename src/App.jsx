import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Basket from './pages/Basket'
import HomePage from "./pages/homepage/HomePage"
import Category from './pages/category/Category'
import Details from "./pages/details/Details"
import Favorites from "./pages/Favorites/Favorites"
import ErrorPage from "./pages/ErrorPage"
import LoginPage from "./pages/loginpage/LoginPage"
import ConfirmPage from "./pages/loginpage/ConfirmPage"
import Signup from "./pages/signup/Signup"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
