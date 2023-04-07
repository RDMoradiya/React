/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import { ProductList } from "./ProductList";
import { loginwrapper } from "../App";

function ProductDetails() {
  const {
    cart,
    setCart,
    setShowProductAlert,
    showProductAlert,
    removeProductAlert,
  } = useContext(loginwrapper);

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "30px",
    backgroundSize: "cover",
    height: "100%",
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findProduct = ProductList.find((item) => item.id === Number(id));
    setProductDetails(findProduct);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  const { name } = productDetails;

  const AddListHandler = (details) => {
    setCart([...cart, details]);
    setShowProductAlert(true);
    removeProductAlert();
    localStorage.setItem("cartData", JSON.stringify([...cart, details]));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Products Details :- </h2>
        <button
          className="p-2"
          style={Styled}
          onClick={() => navigate("/products")}
        >
          back
        </button>
      </div>

      <hr />
      {showProductAlert && (
        <div className="alert alert-primary" role="alert">
          Added To Your Cart !!!
        </div>
      )}
      <div className="row">
        <div className="card col-8" style={Styled}>
          <div className="card-header text-center">
            <img
              src={productDetails.img}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className="card-body">
            <p>{productDetails.desp}</p>
          </div>

          <div className="card-footer d-flex justify-content-between align-items-center">
            <p className="mb-0">
              <b>Price :- {productDetails.price}</b>
            </p>
            <button
              className="btn btn-light border-1 border-dark"
              style={Styled}
              onClick={() =>
                AddListHandler({
                  id: new Date().getTime().toString(),
                  image: productDetails.img,
                  price: productDetails.price,
                  name: name,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
