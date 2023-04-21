import { useContext } from "react";
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

  const { id, name, price, description } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    const data = [...cart, { id, name, price, description }];
    setCart(data);
    console.log(data);
    localStorage.setItem("Details", JSON.stringify(data));
  };

  return (
    <form className="form">
      <button onClick={submitHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
