import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/NumberSlice";

function Number() {
  const { number } = useSelector((state) => state.NumberSlice);
  const Dispatch = useDispatch();
  return (
    <div className="container m-5  d-flex">
      <h1 className="me-5">Number : {number}</h1>
      <button
        className="btn btn-primary ps-5 pe-5"
        onClick={() => Dispatch(increment())}
      >
        +
      </button>
      <button
        className="btn btn-warning ms-2 ps-5 pe-5"
        onClick={() => Dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}

export default Number;
