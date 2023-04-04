import React from "react";
import "./FormList.css";

const FormList = (props) => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="datacard">
        <table className="table caption-top">
          <caption className="text-uppercase fs-2">
            List of users :- {props.user.length}
          </caption>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Username</th>
              <th scope="col">Email ID</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {props.user.map((item, index) => {
              const { username, email, password } = item;
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormList;
