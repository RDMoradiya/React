import React from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AddProduct from "./components/pages/AddProduct";


const App = () => {
  return (
    <Layout >
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Layout>
  )
}

export default App;
