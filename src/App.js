import React, { createContext, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "../src/components/Cart/Cart";
import { localDataHandler } from "./components/Meals/MealItem/MealItemForm";

export const foodwrapper = createContext();

function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //for cart popup
  const [cart, setCart] = useState(localDataHandler()); //cart

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <foodwrapper.Provider value={{ showCartHandler, hideCartHandler, cart, setCart }}>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </foodwrapper.Provider>
  );
}

export default App;
