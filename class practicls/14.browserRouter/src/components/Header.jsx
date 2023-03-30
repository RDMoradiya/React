import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Fruit Plaza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-Link text-decoration-none" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-Link px-3 text-decoration-none"
                href="/"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-Link text-decoration-none"
                href="/"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
