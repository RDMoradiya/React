import { useContext, useState } from "react";
import classes from "./CartItem.module.css";
import { foodwrapper } from "../../App";

const CartItem = (props) => {
  const { cart, setCart } = useContext(foodwrapper);

  const [count, setCount] = useState(1);

  const data = count * props.price;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const deletHandler = () => {
    const Delet = cart.filter((item) => item.id !== props.id);
    setCart(Delet);
    localStorage.setItem("Details", JSON.stringify(Delet));
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>
            ₹ {props.price} <span style={{ color: "black" }}>x</span>
          </span>
          <span className={classes.amount}>{count}</span>
          <span>= </span>
          <span className={classes.amount}>{data}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={decrement}>
          −
        </button>
        <button className={classes.button} onClick={increment}>
          +
        </button>
        <button className={classes.delet} onClick={deletHandler}>
          X
        </button>
      </div>
    </li>
  );
};

export default CartItem;
