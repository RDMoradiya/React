import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Links } from "../components/Utilities/Links";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="text-white d-none d-md-block"
      style={{ height: "100vh", backgroundColor: "rgb(8, 61, 123)" }}
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
      <ListGroup>
        {Links.map((item) => {
          const { id, title, link } = item;
          return (
            <ListGroup.Item
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
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
