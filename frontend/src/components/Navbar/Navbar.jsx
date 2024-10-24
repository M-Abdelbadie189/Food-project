import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

const{getTotalCartAmount,token,setToken} = useContext(StoreContext);
const navigate = useNavigate();
const logout = () => {
  localStorage.removeItem("token");
  setToken("");
  navigate("/")
  

}

  return (
    <div className="navbar">
      <Link to="/">
        <img src="./logo 2.png" alt="Logo" className="logo" />
      </Link>

      <ul className="Navbar-menu">
        <li
          onClick={() => {
            navigate("/");
            setMenu("Home");
          }}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/menu");
            setMenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => {
            navigate("/reservation");
            setMenu("Reservation");
          }}
          className={menu === "Reservation" ? "active" : ""}
        >
          Reservation
        </li>
        <li
          onClick={() => {
            navigate("/contact");
            setMenu("Contact Us");
          }}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src="basket_icon.png" alt="Basket" />
          </Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className="navbar-profile">
          <img src="./profile_icon.png" alt="" />
          <ul className="navbar-profile-dropdown">
            <li onClick={()=>navigate("/myorders")}><img src={"./bag_icon.png"} alt="" /><p>Order</p></li>
            <hr />
            <li onClick={logout}><img src="./logout_icon.png" alt="" /><p>Logout</p></li>

          </ul>
          </div>} 
        
        
      </div>
    </div>
  );
};

export default Navbar;