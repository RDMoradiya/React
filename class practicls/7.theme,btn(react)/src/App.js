import React from "react";
import './App.css'
import Button from './components/Button'
import ImageList from "./components/image/ImageList";
import MainApi from "./components/APICalling/MainApi"


const App = () => {
  return (
    <>
      <Button />
      <ImageList />
      <MainApi />
    </>
  )
}

export default App;
