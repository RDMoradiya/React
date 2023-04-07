import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { Link } from "react-router-dom";
import "./Product.css";
import Loader from "../components/Loader";

function Product() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "30px",
    backgroundSize: "cover",
  };

  const Style = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "20px",
    padding: "5px",
    margin: "0px",
  };

  return (
    <div className="container py-3">
      <h2>Products Page</h2>
      <hr />
      <div className="row d-flex justify-content-between">
        {ProductList.map((item) => {
          const { id, name, img } = item;
          return (
            <div
              className="card mb-md-2 col-sm-6 col-lg-4 col-xl-3 text-center "
              key={id}
              style={Styled}
            >
              <div className="card-body rounded-4 m-2">
                <img src={img} alt="" className="w-100" />
                <p>{name}</p>
              </div>
              <div className="card-footer text-center p-3">
                <button style={Style}>
                  <Link
                    to={`/product/${id}`}
                    className="text-decoration-none text-black p-2"
                  >
                    more details
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
