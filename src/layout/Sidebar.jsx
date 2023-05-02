import React from "react";
import { Links } from "../components/Utilities/Links";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { closeMenu } from "../components/redux/menuSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="text-white"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgb(8, 61, 123)",
        height: "100%",
      }}
    >
      <div className="w-100 text-center pt-3 pb-3 d-flex align-items-center justify-content-center">
        <a href="/" className="text-white">
          <i
            className="fa-solid fa-shop text-end"
            style={{ fontSize: "25px" }}
          ></i>
        </a>
        <a href="/" className="text-decoration-none text-white">
          <span
            className="ms-1"
            style={{
              letterSpacing: "1px",
              lineHeight: "20px",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Shopper <br /> Zone
          </span>
        </a>
      </div>
      <div className="side_button d-block d-md-none">
        <button onClick={() => dispatch(closeMenu())} className="sbutton">
          <i className="fa-solid fa-circle-xmark text-white"></i>
        </button>
      </div>

      <ul className="list-group">
        {Links.map((item) => {
          const { id, title, link } = item;
          return (
            <li
              key={id}
              className="mainside m-0 p-0 border-0 text-white"
              style={{ background: "rgb(8, 61, 123)" }}
            >
              <NavLink
                to={link}
                className="sides p-2 ps-3 w-100 text-decoration-none"
              >
                <span>{title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
