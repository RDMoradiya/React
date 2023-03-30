import React from "react";
import { ProductList } from "../components/ProductList";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="container py-3">
      <h2>Products Page</h2>
      <hr />
      <div className="row d-flex justify-content-between">
        {ProductList.map((item) => {
          const { id, name, img } = item;
          return (
            <div
              className="card mb-md-2 col-lg-3 col-xl-2 text-center "
              key={id}
            >
              <div className="card-body">
                <img src={img} alt="" className="w-100" />
                <h5>{name}</h5>
              </div>
              <div className="card-footer text-center p-3">
                <button className="btn btn-primary">
                  <Link
                    to={`/product/${id}`}
                    className="text-decoration-none text-white"
                  >
                    more details ...
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
