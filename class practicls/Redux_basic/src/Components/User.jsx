import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHandler } from "../Redux/UserSlice";

function User() {
  const { firstname, lastname } = useSelector((state) => state.UserSlice);
  const Dispatch = useDispatch();

  return (
    <div className="container">
      <h3>
        <label htmlFor="firstname">Firstname :- {firstname}</label>
      </h3>
      <br />
      <h3>
        <label htmlFor="lastname">Lastname :- {lastname}</label>
      </h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          Dispatch(changeHandler());
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default User;
