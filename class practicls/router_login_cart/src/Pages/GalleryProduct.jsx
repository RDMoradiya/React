import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loginwrapper } from "../App";
import Loader from "../components/Loader";
import "./GalleryProduct.css";

function GalleryProduct() {
  const { iddrink } = useParams();
  const navigate = useNavigate();

  const { AddListHandler, showAlert } = useContext(loginwrapper);

  const [apidetails, setApiDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strInstructionsIT,
    strInstructionsDE,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = apidetails;

  const CocktailApifetch = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${iddrink}`)
      .then((resp) => resp.json())
      .then((data) => {
        setApiDetails(data.drinks[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    CocktailApifetch();
  });
  if (isLoading) {
    return <Loader />;
  }

  const Styled = {
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "30px",
    backgroundSize: "cover",
    height: "100%",
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Products Details :- {iddrink} </h2>
        <button
          className="p-2"
          style={Styled}
          onClick={() => navigate("/gallery")}
        >
          back
        </button>
      </div>
      <hr />
      {showAlert && (
        <div className="alert alert-primary" role="alert">
          Added To Your Cart !!!
        </div>
      )}
      <div className="row p-4 align-items-center" style={Styled}>
        <div className="col-md-5 col-auto">
          <div className="card-header text-center">
            <img
              src={strDrinkThumb}
              alt=""
              style={{ borderRadius: "30px" }}
              className="img"
            />
          </div>
        </div>
        <div
          className="col-md-7 col-auto p-4 pe-3 details"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            borderRadius: "30px",
          }}
        >
          <div className="card-body">
            <h1 className="pb-2" style={{ fontSize: "40px" }}>
              Drink Name :- {strDrink}
            </h1>
            <p>{strInstructions}</p>
            <p>{strInstructionsDE}</p>
            <p>{strInstructionsIT}</p>
            <ul>
              {strIngredient1 && <li>{strIngredient1}</li>}
              {strIngredient2 && <li>{strIngredient2}</li>}
              {strIngredient3 && <li>{strIngredient3}</li>}
            </ul>
          </div>
          <button
            className="btn btn-light border-1 border-dark"
            style={Styled}
            onClick={() =>
              AddListHandler({
                id: new Date().getTime().toString(),
                image: strDrinkThumb,
                name: strDrink,
                info: strInstructions,
                strIngredient1,
                strIngredient2,
              })
            }
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryProduct;
