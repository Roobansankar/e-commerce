import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <h2>Ekart</h2>
        </Link>

        <div className="d-flex align-items-center">
          <ul className="navbar-nav mb-lg-0 mx-4 fs-5">
            <li className="nav-item">
              <Link to="/">
                <button className="nav-button">Home</button>
              </Link>

              <Link
                className="text-black"
                to="/cart"
                style={{ marginLeft: "20px" }}
              >
                <button className="nav-button">
                  Cart <ShoppingCart className="cart-icon" />
                  <span className="cart-count">{cart.length}</span>
                </button>
              </Link>

              <button style={{ marginLeft: "20px" }} onClick={handleLogout}>
                {" "}
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
