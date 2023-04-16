import React from "react";
import { NavLink } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark p-2"
      style={{ background: "rgb(8 61 123)" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarTogglerDemo01"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active text-white">
            <NavLink className="text-white" href="/">
              <span className="px-2"> Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" href="/">
              <span className="px-2">Features</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link text-white" href="/">
              <span className="px-2">Pricing</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link text-white" href="/">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="px-2">Cart</span>
            </NavLink>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0 d-flex ps-3 pe-3">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success text-white ms-2"
            type="submit"
          >
            <span>Search</span>
          </button>
        </form> */}
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
