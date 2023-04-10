import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeHandler } from "../Redux/UserSlice";

function User() {
  const { firstname, lastname } = useSelector((state) => state.UserSlice);
  const Dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="container mt-5 p-5 border border-2 border-danger rounded-5">
      <label htmlFor="firstname" className="Form-label mb-2">
        First Name :- {firstname}
      </label>
      <input
        type="text"
        className="form-control border border-primary"
        placeholder="Enter Firstname"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <br />
      <label htmlFor="lastname" className="Form-label mb-2">
        Last Name :- {lastname}
      </label>
      <input
        type="text"
        className="form-control border border-primary"
        placeholder="Enter Lastname"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <button
        className="btn btn-success px-3 mt-2"
        onClick={() => Dispatch(ChangeHandler({ firstName, lastName }))}
      >
        Change
      </button>
    </div>
  );
}

export default User;
