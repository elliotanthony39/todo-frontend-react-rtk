import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand disabled">Tasks</a>
          <div>
            <ul className="navbar-nav d-flex justify-content-between flex-row">
              <li className="nav-item">
                <Link to="/" className="nav-link ms-1">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link ms-1">
                  Create Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ms-1">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
