import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData, editApiData } from "../redux/ApiSlice";

function ApiList() {
  const { apiData, isLoading } = useSelector((state) => state.api);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  const deletHandler = (id) => {
    const data = apiData.filter((item) => item.id !== id);
    dispatch(getApiData(data));
  };

  const editHandler = (item) => {
    console.log(item);
    dispatch(editApiData(item));
  };

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => {
            const { id, email, username, password, phone } = item;
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{username}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{phone}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletHandler(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => editHandler(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ApiList;
