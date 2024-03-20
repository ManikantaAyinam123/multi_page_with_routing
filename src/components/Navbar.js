import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border border-bottom">
        <div className="container-fluid ">
          <a className="navbar-brand me-0" href="/">
            <img
              src="./assets/images/nav_logo.jpg"
              alt="Bootstrap"
              width="40"
              height="40"
            />
          </a>
          <h2 className="ms-0">
            Men's<span className="fw-bold">fashion</span>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <p className="nav-link text-dark fw-bold" activeClassAtyle="" onClick={() => navigate("/")}>
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-dark fw-bold" onClick={() => navigate("/catagories")}>
                  Categories
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-dark fw-bold" onClick={() => navigate("/cart")}>
                  Cart
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-dark fw-bold" onClick={() => navigate("/account")}>
                  Account
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
