import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeHandler } from "../Redux/UserSlice";

function User() {
  const { firstname, lastname } = useSelector((state) => state.UserSlice);
  const Dispatch = useDispatch();

  return (
    <div className="container mt-5 p-5 border border-2 border-primary">
      <h3 htmlFor="firstname" className="Form-label">
        First Name :- {firstname}
      </h3>
      <br />
      <h3 htmlFor="lastname" className="Form-label">
        Last Name :- {lastname}
      </h3>
      <button
        className="btn btn-secondary p-2 mt-2"
        onClick={() => Dispatch(ChangeHandler())}
      >
        Change
      </button>
    </div>
  );
}

export default User;
