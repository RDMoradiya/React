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
// import PrivateRouter from "./Pages/PrivateRouter";
import Cart from './Pages/Cart'

export const loginwrapper = createContext()

const localDataHandler = () => {
  const getData = localStorage.getItem('userData')
  if (getData) {
    return true
  } else {
    return false
  }
}

const CartlocalDataHandler = () => {
  const cartData = localStorage.getItem('cartData')
  if (cartData) {
    return JSON.parse(cartData)
  } else {
    return []
  }
}

const App = () => {

  const [isLogin, setIsLogin] = useState(localDataHandler())
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [cart, setCart] = useState(CartlocalDataHandler())
  const [showAlert, setShowAlert] = useState(false)
  const [showProductAlert, setShowProductAlert] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    const data = [{
      username: enteredUserName,
      password: enteredPassword
    }]
    localStorage.setItem('userData', JSON.stringify(data))
    setIsLogin(true)
    setEnteredUserName('')
    setEnteredPassword('')
  }

  const LogoutHandler = () => {
    localStorage.removeItem("userData");
    setIsLogin(false);
    localStorage.removeItem('cartData')
    setCart([])
  };

  const removeAlert = () => {
    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }
  const removeProductAlert = () => {
    setTimeout(() => {
      setShowProductAlert(false)
    }, 2000)
  }

  const AddListHandler = (details) => {
    setCart([...cart, details])
    setShowAlert(true)
    removeAlert()
    localStorage.setItem('cartData', JSON.stringify([...cart, details]))
  }

  const RemoveCartData = (dataName) => {
    const cartdata = cart.filter((item) => item.name !== dataName)
    setCart(cartdata)
    localStorage.setItem('cartData', JSON.stringify(cartdata))
  }

  return (
    <>
      <loginwrapper.Provider value={{ isLogin, setIsLogin, enteredUserName, setEnteredUserName, enteredPassword, setEnteredPassword, submitHandler, LogoutHandler, AddListHandler, cart, setCart, showAlert, setShowAlert, RemoveCartData, showProductAlert, setShowProductAlert, removeProductAlert }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='*' element={<Pagenotfind />}></Route>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/' element={<PrivateRouter><Home /></PrivateRouter>}></Route> */}
            {/* <Route path='/gallery' element={<Gallery />}></Route> */}
            <Route path='/gallery' element={isLogin ? <Gallery /> : <Login />}></Route>
            {/* <Route path='/products' element={<Product />}></Route> */}
            <Route path='/products' element={isLogin ? <Product /> : <Login />}></Route>
            <Route path='/gallery/:iddrink' element={<GalleryProduct />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/login' element={isLogin ? <Gallery /> : <Login />}></Route>
          </Routes>
        </BrowserRouter>
      </loginwrapper.Provider>
    </>
  )
}

export default App;
