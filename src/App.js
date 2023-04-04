import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Gallery from "./Pages/Gallery";
import Home from './Pages/Home'
import Pagenotfind from "./Pages/Pagenotfind";
import Product from "./Pages/Product";
import ProductDetails from "./components/ProductDetails";
import GalleryProduct from "./Pages/GalleryProduct";


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<Pagenotfind />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path='/gallery/:iddrink' element={<GalleryProduct />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
