import React, { useContext, useState, useEffect } from 'react';
import 'boxicons';
import './Login.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from 'axios';

const Login = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext);  // جلب url و setToken من الـ context
  const [currState, setCurrState] = useState("Login"); // حالة تسجيل الدخول أو التسجيل
  const [data, setData] = useState({
    name: "",      
    email: "",      
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    
    // تحديد ما إذا كانت العملية تسجيل دخول أو تسجيل
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);  // إغلاق نافذة تسجيل الدخول عند النجاح
      } else {
        alert(response.data.message);  // عرض رسالة الخطأ
      }
    } catch (error) {
      console.error("Error during login/register:", error);
      alert("An error occurred. Please try again.");
    }
  }

  useEffect(() => {
    const container = document.querySelector(".container");
    const registerBtn = document.querySelector(".register-btn");
    const loginBtn = document.querySelector(".login-btn");

    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
        setCurrState("Sign Up");  // عند الضغط على زر التسجيل، يتم تغيير الحالة إلى التسجيل
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
        setCurrState("Login");  // عند الضغط على زر تسجيل الدخول، يتم تغيير الحالة إلى تسجيل الدخول
    });

    // تنظيف مستمعي الأحداث عند إزالة المكون
    return () => {
      registerBtn.removeEventListener("click", () => {
        container.classList.add("active");
      });
      loginBtn.removeEventListener("click", () => {
        container.classList.remove("active");
      });
    };
  }, []);

  return (
    <div className='body'>
      <div className='container'>
        <div className={`form-box ${currState === "Login" ? 'login' : 'register'}`}>
          <form onSubmit={onLogin}>
            <h1>{currState === "Login" ? "Login" : "Register"}</h1>

            {currState === "Sign Up" && (
              <div className='input-box'>
                <input 
                  type="text" 
                  name="name"
                  value={data.name}
                  onChange={onChangeHandler}
                  placeholder='Your name' 
                  required 
                />
                <box-icon type='solid' name='user'></box-icon>
              </div>
            )}

            <div className='input-box'>
              <input 
                type="email" 
                name="email" 
                value={data.email}
                onChange={onChangeHandler}
                placeholder='Your email' 
                required 
              />
              <box-icon name='envelope'></box-icon>
            </div>

            <div className='input-box'>
              <input 
                type="password" 
                name="password" 
                value={data.password}
                onChange={onChangeHandler}
                placeholder='Password' 
                required 
              />
              <box-icon type='solid' name='lock-alt'></box-icon>
            </div>

            <button type='submit' className="btn">
              {currState === "Sign Up" ? "Create account" : "Login"}
            </button>

            {currState === "Login" 
              ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
              : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
            }
          </form>
        </div>

        <div className="toggle-box">
          <div className='toggle-panel toggle-left'>
            <h1>Hello, Welcome!</h1>
            <p>Dont have an account?</p>
            <button className='btn register-btn'>Register</button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className='btn login-btn'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
