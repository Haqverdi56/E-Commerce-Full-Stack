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
import { useEffect, useState } from "react"
import PrivateRoutes from "./utils/PrivateRoustes"

function App() {
  const [userData, setUserData] = useState(null)

  let user;
  useEffect(() => {
    const cookies = document.cookie.split('; ');
  
    cookies?.forEach(cooki => {
      const [name, value] = cooki.split('=');

      if (name === 'user') {
        user = JSON.parse(value);
        setUserData(user)
      } else {
        setUserData(null)
      }
    })
  }, [document.cookie]);
  
  return (
    <div className="App">
      <Header user={userData}/>
      {user? <p>Welcome {userData.email?.split('@')[0]}</p> : null}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage userData={userData} />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/details/:id" element={<Details userData={userData} />} />
          <Route element={<PrivateRoutes/>}>
            <Route path='/favorites' element={<Favorites/>}/>
          </Route>
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
