import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getApiData } from "../Redux/ApiSlice";
import Loader from "./Loader";

function ApiSingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, getSingleApiData } = useSelector(
    (state) => state.ApiSlice
  );

  useEffect(() => {
    dispatch(getApiData(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: "30px",
    backgroundSize: "cover",
  };

  const { title, price, description, images, category } = getSingleApiData;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center topDetail">
          <h2>Products Details :- {id} </h2>
          <button className="p-2" style={Styled} onClick={() => navigate("/")}>
            back
          </button>
        </div>
      </div>
      <hr />
      <div className="row p-4">
        <div className="col-4 p-4" style={Styled}>
          <img
            src={images[0]}
            alt="Product_image"
            className="w-100 rounded-5"
          />
        </div>
        <div className="col-8 ">
          <div style={Styled} className="p-4 ps-5 h-100">
            <h1 className="mb-3">
              Name :-
              <span className="text-secondary"> {title}</span>
            </h1>
            <h3 className="mb-3">
              Category :-
              <span className="text-secondary"> {category.name}</span>
            </h3>
            <p className="mb-3" style={{ fontSize: "18px" }}>
              <b> creationAt :- </b>
              <span className="text-secondary"> {category.creationAt}</span>
            </p>
            <p className="mb-3" style={{ fontSize: "18px" }}>
              <b> updatedAt :- </b>
              <span className="text-secondary"> {category.updatedAt}</span>
            </p>
            <p className="mb-3" style={{ fontSize: "18px" }}>
              <b> Description :- </b>
              <span className="text-secondary"> {description}</span>
            </p>
            <h3 className="mb-3">Price :- ₹ {price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiSingleProduct;
