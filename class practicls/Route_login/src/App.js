import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from './components/Header'
import Gallery from "./Pages/Gallery";
import Home from './Pages/Home'
import Pagenotfind from "./Pages/Pagenotfind";
import Product from "./Pages/Product";
import ProductDetails from "./components/ProductDetails";
import GalleryProduct from "./Pages/GalleryProduct";
import Login from './Pages/Login'

export const loginwrapper = createContext()

const localDataHandler = () => {
  const getData = localStorage.getItem('userData')
  if (getData) {
    return true
  } else {
    return false

  }
}

const App = () => {

  const [isLogin, setIsLogin] = useState(localDataHandler())
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");


  const submitHandler = (e) => {
    e.preventDefault()
    const data = [{
      username: enteredUserName,
      password: enteredPassword
    }]
    localStorage.setItem('userData', JSON.stringify(data))
    setEnteredUserName('')
    setEnteredPassword('')
    setIsLogin(true)
  }

  return (
    <>
      <BrowserRouter>
        <loginwrapper.Provider value={{ isLogin, setIsLogin, enteredUserName, setEnteredUserName, enteredPassword, setEnteredPassword, submitHandler }}>
          <Header />
          <Routes>
            <Route path='*' element={<Pagenotfind />}></Route>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/gallery' element={<Gallery />}></Route> */}
            <Route path='/gallery' element={isLogin ? <Gallery /> : <Login />}></Route>
            {/* <Route path='/products' element={<Product />}></Route> */}
            <Route path='/products' element={isLogin ? <Product /> : <Login />}></Route>
            <Route path='/gallery/:iddrink' element={<GalleryProduct />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/login' element={isLogin ? <Gallery /> : <Login />}></Route>
          </Routes>
        </loginwrapper.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
