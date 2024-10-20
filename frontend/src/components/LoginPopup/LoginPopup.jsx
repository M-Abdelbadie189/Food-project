import React, { useContext, useEffect, useState } from 'react'; 
import './LoginPopup.css';
//  import data from '../../../../backend/node_modules/@mongodb-js/saslprep/dist/code-points-data-browser.d';
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from 'axios';
const LoginPopup = ({ setShowLogin }) => { 

 const{url,setToken} = useContext(StoreContext);

 const [currState,setCurrState] = useState("login");
 const [data,setData]=useState({
   name:"",      
   email:"",      
   password:""
 })

 const onChangeHandler = (event) => {
   const name = event.target.name;
   const value = event.target.value;
   setData(data => ({ ...data, [name]: value }))
 }

 const onLogin = async (event) => {
   event.preventDefault();
   let newUrl=url;
   if(currState==="login")

    {
      newUrl+="/api/user/login";
   }

   else{
    newUrl+="/api/user/register";
   }

   const response = await axios.post(newUrl,data);

   if(response.data.success){
    setToken(response.data.data);
    localStorage.setItem("token",response.data.data);
    setShowLogin(false)
   }

   else{
    alert(response.data.message);
   }

 }

 useEffect(() => {
  console.log(data);
 },[data])



  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src='cross_icon.png' alt='Close' />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />} 
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' >{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
