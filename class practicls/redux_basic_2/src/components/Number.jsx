import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/NumberSlice";

function Number() {
  const { number } = useSelector((state) => state.NumberSlice);
  const Dispatch = useDispatch();
  const [numberValue, setNumberValue] = useState("");

  return (
    <div className="container mt-5 border border-2 border-success p-5 rounded-5">
      <h1>Number :- {number}</h1>
      <input
        type="number"
        placeholder="Enter Number"
        value={numberValue}
        onChange={(e) => setNumberValue(e.target.value)}
      />
      <button
        className="btn btn-primary m-2 px-5"
        onClick={() => Dispatch(increment(numberValue))}
      >
        +
      </button>
      <button
        className="btn btn-warning m-2 px-5"
        onClick={() => Dispatch(decrement(numberValue))}
      >
        -
      </button>
    </div>
  );
}

export default Number;
