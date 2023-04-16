import React from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AddProduct from "./components/pages/AddProduct";
import SignIn from "./components/pages/Login/SignIn";


const App = () => {
  return (
    <Layout >
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Layout>
  )
}

export default App;
