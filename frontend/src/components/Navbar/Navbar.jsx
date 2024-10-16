import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src="./logo 2.png" alt="Logo" className="logo" />
      </Link>

      <ul className="Navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        <img src="search_icon.png" alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src="basket_icon.png" alt="Basket" />
          </Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
