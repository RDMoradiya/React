/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect } from "react";
import './App.css'
import Cocktail from "./components/Cocktail";
import NavBar from './components/NavBar'
import Loader from './components/Loader'

export const Cocktailwrapper = createContext()

const App = () => {

  const [cocktailList, setCocktailList] = useState([])  // for mapping API
  const [isLoading, setIsLoading] = useState(true)      // for loading
  const [drinkName, setDrinkName] = useState('')        //for search action

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
      .then((resp) => resp.json())
      .then((result) => {
        setCocktailList(result.drinks)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [drinkName])

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (

    <Cocktailwrapper.Provider value={{ cocktailList, setCocktailList, isLoading, setIsLoading, drinkName, setDrinkName }} >
      <div className="container-fluid box">
        <NavBar />
        <Cocktail />
      </div>
    </Cocktailwrapper.Provider>

  );
};

export default App;
