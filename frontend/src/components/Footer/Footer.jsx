import React from 'react'
import'./Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
         <div className="footer-content-left">
            <img src='./logo.png' alt=''/>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</p>
            <div className="footer-social-icons">
                <img src='./facebook_icon.png' alt=''/>
                <img src='twitter_icon.png' alt=''/>
                <img src='./linkedin_icon.png' alt=''/>
            </div>
         </div>
         <div className="footer-content-right">
            <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>Aboud us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
         </div>
         <div className="footer-content-center">
            <h2>Get IN Touch</h2>
            <ul>

                <li>+1-212-444-1230</li>
                <li>tomato@gmail.com</li>
            </ul>

         </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Rrserved . </p>
     
    </div>
  )
}

export default Footer
