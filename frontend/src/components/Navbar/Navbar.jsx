import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src="./logo 2.png" alt="Logo" className='logo' />

      <ul className='Navbar-menu'>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>

      <div className='navbar-right'>
        <img src="search_icon.png" alt="Search" />
        <div className="navbar-search-icon">
          <img src="basket_icon.png" alt="Basket" />
          <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
