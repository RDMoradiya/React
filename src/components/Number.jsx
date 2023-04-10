import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/NumberSlice";

function Number() {
  const { number } = useSelector((state) => state.NumberSlice);
  const Dispatch = useDispatch();

  return (
    <div className="container mt-5 border border-2 border-success p-5">
      <h1>Number :- {number}</h1>
      <button
        className="btn btn-primary m-2 px-5"
        onClick={() => Dispatch(increment())}
      >
        +
      </button>
      <button
        className="btn btn-warning m-2 px-5"
        onClick={() => Dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}

export default Number;
