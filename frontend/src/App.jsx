import React , { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import Login from "./components/Login/Login";
import Menu from './pages/Menu/Menu';
import ReservationPage from "./pages/Reservation/Reservation";
import ContactUs from './pages/ContactUs/ContactUs';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        {/* <Login/> */}
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/myorders" element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;