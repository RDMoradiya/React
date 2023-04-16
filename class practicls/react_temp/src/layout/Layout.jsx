import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container-fluid row m-0 p-0">
      <div className="col-md-2 p-0">
        <Sidebar />
      </div>
      <div className="col-md-10 p-0 m-0">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
