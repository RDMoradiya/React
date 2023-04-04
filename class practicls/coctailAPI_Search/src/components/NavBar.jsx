import React, { useContext } from "react";
import "./NavBar.css";
import { Cocktailwrapper } from "../App";

function NavBar() {
  const { drinkName, setDrinkName } = useContext(Cocktailwrapper);

  return (
    <>
      <div className="container p-3 d-flex justify-content-between align-items-center">
        <div>
          <h1>
            <a href="/">
              Fruit <span>Juicy</span>
            </a>
          </h1>
        </div>
        <div>
          <input
            placeholder="Search Fruit Juice here..."
            className="input"
            value={drinkName}
            onChange={(e) => setDrinkName(e.target.value)}
          />
          <div className="icon">
            <title>Search</title>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
