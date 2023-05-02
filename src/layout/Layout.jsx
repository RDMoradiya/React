import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";
import "../style.css";

function Layout({ children }) {
  const { menuOpen } = useSelector((state) => state.menu);

  return (
    <div className="container-fluid row m-0 p-0">
      <div className="col-md-2 p-0 d-none d-md-block">
        <Sidebar />
      </div>
      <div
        className={`col-md-2 p-0 mobile-menu d-block d-md-none ${
          menuOpen ? "show-menu" : ""
        }`}
      >
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
