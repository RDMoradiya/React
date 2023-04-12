import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { ApiDataa } from "../Redux/ApiSlice2";

function Api2() {
  const dispatch = useDispatch();

  const { isLoading1, ApiData2 } = useSelector((state) => state.ApiSlice2);

  useEffect(() => {
    dispatch(ApiDataa());
  }, [dispatch]);

  if (isLoading1) {
    return <Loader />;
  }

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "30px",
    backgroundSize: "cover",
    height: "100%",
  };

  return (
    <div className="container">
      <div className="row">
        <h1>API-2 CALLING :-</h1>
        {ApiData2.map((item) => {
          const { id, title, price, images, description } = item;
          return (
            <div className="col-auto col-sm-6 col-md-4 col-lg-3 mb-3" key={id}>
              <div className="card h-100" style={Styled}>
                <div className="card-header">
                  <img
                    src={images}
                    alt=""
                    className="w-100 rounded-5 mt-2 mb-2"
                  />
                </div>
                <div className="card-body">
                  <h3>{title}</h3>
                  <p className="text-truncate" title={description}>
                    {description}
                  </p>
                </div>
                <div className="card-footer text-center">
                  {" "}
                  <b>₹ {price}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Api2;
