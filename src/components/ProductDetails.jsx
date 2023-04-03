/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Loader from "./Loader";
// import { ProductList } from "./ProductList";

function ProductDetails() {
  const brandId = useParams();
  const { id } = brandId;

  const { state } = useLocation();
  const backbtn = useNavigate();

  const [productDetails, setProductDetails] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const findProduct = ProductList.find((item) => item.id === Number(id));
    // setProductDetails(findProduct);
    // setIsLoading(false);
    setProductDetails(state);
  }, [state]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>Products Details :- </h2>
        <button
          className="btn btn-primary"
          onClick={() => backbtn(`/products`)}
        >
          Back
        </button>
      </div>
      <hr />
      <div className="row">
        <div className="card col-8">
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

          <div className="card-footer">
            <p>
              <b>Price :- {productDetails.price}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
