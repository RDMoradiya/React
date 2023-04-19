import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { foodwrapper } from "../../App";

const Cart = (props) => {
  const { hideCartHandler, cart } = useContext(foodwrapper);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹ 149</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
