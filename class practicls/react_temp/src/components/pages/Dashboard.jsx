import React from "react";

const Style = {
  boxShadow: "5px 5px 10px rgb(8, 61, 123)",
};

function Dashboard() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card border-3" style={Style}>
            <div className="card-body text-center">
              <h1>10</h1>
              <h3>Total Products</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3" style={Style}>
            <div className="card-body text-center">
              <h1>20</h1>
              <h3>Total Users</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3" style={Style}>
            <div className="card-body text-center">
              <h1>30</h1>
              <h3>Orders</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
