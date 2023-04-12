import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { useEffect } from "react";
import { ApiData } from "../Redux/ApiSlice";
import { useNavigate } from "react-router-dom";

function Api() {
  const dispatch = useDispatch();
  const { isLoading, apiData } = useSelector((state) => state.ApiSlice);
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(ApiData());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius: "30px",
    backgroundSize: "cover",
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h1>Api Calling</h1>
        {apiData.map((item) => {
          const { id, title, price, description, images, category } = item;
          return (
            <div
              className="col-auto col-sm-6 col-md-4 col-lg-3 mb-3 mt-3"
              key={id}
              onClick={() => Navigate(`/${id}`)}
            >
              <div className="card h-100" style={Styled}>
                <div className="card-header rounded-5">
                  <img
                    src={images[0]}
                    alt="Product_image"
                    className="w-100 rounded-4 mt-2 mb-2"
                  />
                </div>
                <div className="card-body">
                  <h5>{title}</h5>
                  <p className="text-secondary mb-1">{category.name}</p>
                  <p className="text-truncate" title={description}>
                    {description}
                  </p>
                </div>
                <div className="card-footer text-center rounded-5">
                  <b className="p-2">₹ {price}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Api;
