import React, { useState, createContext } from "react";
import CompA from "./components/CompA";

// 1 => create a useContext
export const UseContext = createContext()

const App = () => {

  const [userName, setUserName] = useState('RD MORADIYA')
  const [product, setProducts] = useState([1, 2, 3, 4, 5, 6, 7])

  return (

    // 2 => provide a context value which are send to other components
    <UseContext.Provider value={{ userName, setUserName, product, setProducts }}>

      <div className="container">
        <CompA />
      </div>

    </UseContext.Provider>

  );
};

export default App;
