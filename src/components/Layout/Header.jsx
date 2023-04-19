import React, { useContext } from "react";
import mealsImage from "../assets/meals.jpg";
import "./Header.css";
import { foodwrapper } from "../../App";

const Header = (props) => {
  const { showCartHandler, cart } = useContext(foodwrapper);
  return (
    <>
      <header className="header">
        <h1>Meals Plazza</h1>

        {/* cart button */}
        <button className="button" onClick={showCartHandler}>
          <span className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span>Cart</span>
          <span className="badge">{cart.length}</span>
        </button>
      </header>

      {/* image */}
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
