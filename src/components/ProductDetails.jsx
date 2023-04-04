import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const { state } = useLocation();
  const backbtn = useNavigate();

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    setProductDetails(state);
  }, [state]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h2>Products Details :- {id} </h2>
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
