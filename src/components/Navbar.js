import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const location = useLocation();
  const [actnav, setActNav] = useState("home");

  useEffect(() => {
    // Extract the current path from the location object
    const currentPath = location.pathname;

    // Determine the active navigation item based on the current path
    let activeNavItem = "home";
    if (currentPath === "/") {
      activeNavItem = "home";
    } else if (currentPath === "/categories") {
      activeNavItem = "categories";
    } else if (currentPath === "/cart") {
      activeNavItem = "cart";
    } else if (currentPath === "/account") {
      activeNavItem = "account";
    }

    // Update the active navigation item state
    setActNav(activeNavItem);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border border-bottom shadow">
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
                <NavLink
                  key="home"
                  className={`nav-link  fs-5 fw-bold me-2 ${
                    actnav === "home" ? "text-warning" : "text-dark"
                  }`}
                  exact
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  key="categories"
                  className={`nav-link fw-bold  fs-5 me-2 ${
                    actnav === "categories" ? "text-warning" : "text-dark"
                  }`}
                  exact
                  to={"/categories"}
                >
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  key="cart"
                  className={`nav-link fw-bold fs-5 me-2  ${
                    actnav === "cart" ? "text-warning" : "text-dark"
                  }`}
                  exact
                  to={"/cart"}
                >
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  key="account"
                  className={`nav-link fw-bold fs-5 me-2 ${
                    actnav === "account" ? "text-warning" : "text-dark"
                  }`}
                  exact
                  to={"/account"}
                >
                  Account
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
