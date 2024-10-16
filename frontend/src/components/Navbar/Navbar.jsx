import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = (setShowLogin) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src="./logo 2.png" alt="Logo" className='logo' />

      <ul className='Navbar-menu'>
        <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-Menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className='navbar-right'>
        <img src="search_icon.png" alt="Search" />
        <div className="navbar-search-icon">
          <img src="basket_icon.png" alt="Basket" />
          <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
