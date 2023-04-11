import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiData } from "../Redux/ApiSlice";
import Loader from "./Loader";

const Api = () => {
  const Dispatch = useDispatch();
  const { isLoading, apiData } = useSelector((state) => state.ApiSlice);

  useEffect(() => {
    Dispatch(ApiData());
  }, [Dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mt-5">
      <h3>API Calling</h3>
      <div className="row">
        {apiData.map((item) => {
          const { title, id, description, price, images } = item;
          return (
            <div className="col-sm-6 col-lg-3 mb-3" key={id}>
              <div className="card h-100 p-3">
                <div className="card-header p-0 pb-3">
                  <img src={images} alt="" className="w-100" />
                </div>
                <h5 className="mt-2 mb-0">{title}</h5>
                <hr />
                <div className="card-body pt-0 ps-0">{description}</div>
                <div className="card-footer ps-0">
                  <b> ₹ {price}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
