import React from "react";
import { useEffect } from "react";
import { getAllProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Utilities/Loader";
import { deleteproduct } from "../redux/ProductSlice";

function Products() {
  const dispatch = useDispatch();
  const { loading, productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container py-5 px-4">
      <div className="row">
        <table className="table table-primary">
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((item, index) => {
              const { _id, qty, price, name, category } = item;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{category} </td>
                  <td>{price}</td>
                  <td>{qty}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteproduct(_id))}
                    >
                      Delete
                    </button>
                    <button className="btn btn-warning mx-3">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
