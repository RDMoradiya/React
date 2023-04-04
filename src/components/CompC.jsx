import React, { useContext } from "react";
import { UseContext } from "../App";

function CompC() {
  const { userName } = useContext(UseContext);
  return (
    <div>
      <h1>Welcome {userName}</h1>
    </div>
  );
}

export default CompC;
