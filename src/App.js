import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AddProduct from "./components/pages/AddProduct";
import Products from "./components/pages/Products";
import { Provider } from "react-redux";
import store from "./components/redux/Store";
import Privet from "./components/pages/Login/Privet";
import Login from "./components/pages/Login/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Privet>
                <Dashboard />
              </Privet>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Privet>
                <Dashboard />
              </Privet>
            }
          />
          <Route
            path="/add-product"
            element={
              <Privet>
                <AddProduct />
              </Privet>
            }
          />
          <Route
            path="/product-list"
            element={
              <Privet>
                <Products />
              </Privet>
            }
          />
          <Route
            path="/edit-product/:name"
            element={
              <Privet>
                <AddProduct />
              </Privet>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
