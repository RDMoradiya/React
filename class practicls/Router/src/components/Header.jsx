import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="container navbare">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div>
          <h1>
            <a href="/">
              Fruit <span>Juicy</span>
            </a>
          </h1>
        </div>
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
