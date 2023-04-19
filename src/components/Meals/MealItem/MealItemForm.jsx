import { useContext, useState } from "react";
import "./MealItemForm.css";
import { foodwrapper } from "../../../App";

export const localDataHandler = () => {
  const getData = localStorage.getItem("Details");
  if (getData) {
    return JSON.parse(getData);
  } else {
    return [];
  }
};

const MealItemForm = (props) => {
  const { setCart, cart } = useContext(foodwrapper);
  const [qty, setQty] = useState(1);

  const { id, name, price, description } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const data = [...cart, { id, qty, name, price, description }];
    setCart(data);
    localStorage.setItem("Details", JSON.stringify(data));
  };

  return (
    <form className="form">
      <div className="input">
        <label htmlFor={id}>Qty</label>
        <input
          type="number"
          label="Amount"
          min="1"
          id={id}
          value={qty}
          onChange={(event) => setQty(event.target.value)}
        />
      </div>
      <button onClick={submitHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
