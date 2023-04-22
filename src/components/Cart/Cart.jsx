import { useState, useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { foodwrapper } from "../../App";
import CartItem from "./CartItem";

const Cart = () => {
  const { hideCartHandler, cart } = useContext(foodwrapper);

  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price;
    });

    setTotalCount(total);
  }, [cart]);

  // const orderHandler = () => {
  //   setCart([]);
  //   localStorage.removeItem("Details");
  // };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹ {totalCount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideCartHandler}>
          Close
        </button>
        <button className={classes.button}>
          {/* <button className={classes.button} onClick={orderHandler}> */}
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
