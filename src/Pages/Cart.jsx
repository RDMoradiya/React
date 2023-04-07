import React, { useContext } from "react";
import { loginwrapper } from "../App";

function Cart() {
  const { cart, RemoveCartData } = useContext(loginwrapper);

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "30px",
    backgroundSize: "cover",
    height: "100%",
  };

  const Style = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "20px",
    padding: "5px",
    margin: "0px",
  };

  return (
    <div className="container mt-5">
      <h3>Cart Products :-</h3>
      <hr />
      <div className="row">
        {cart.map((item) => {
          const { id, image, name, info, strIngredient1, strIngredient2 } =
            item;
          return (
            <div
              className="col-auto col-sm-12 col-md-6  d-flex  p-4 mb-4 align-item-center cartdata"
              style={Styled}
              key={id}
            >
              <div>
                <img
                  className="border border-dark border-2 p-2"
                  src={image}
                  alt=""
                  style={{ width: "160px", borderRadius: "20px" }}
                />
              </div>
              <div className="w-50 ps-3 d-flex flex-column">
                <h4>Name :- {name}</h4>
                <p className="m-0 text-truncate" title={info}>
                  {info}
                </p>
                <ul>
                  {strIngredient1 && <li>{strIngredient1}</li>}
                  {strIngredient2 && <li>{strIngredient2}</li>}
                </ul>
                <button
                  className="w-50"
                  style={Style}
                  onClick={() => RemoveCartData(name)}
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
