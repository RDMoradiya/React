import React from "react";
import './App.css'
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AddProduct from "./components/pages/AddProduct";
import SignIn from "./components/pages/Login/SignIn";
import Products from "./components/pages/Products";
import { Provider } from "react-redux";
import store from "./components/redux/Store";


const App = () => {
  return (
    <Provider store={store}>
      <Layout >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-list" element={<Products />} />
          <Route path="/edit-product/:name" element={<AddProduct />} />
        </Routes>
      </Layout>
    </Provider>
  )
}

export default App;
