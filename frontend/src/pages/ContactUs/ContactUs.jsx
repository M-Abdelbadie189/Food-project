import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const branches = [
    "Tomato Mohandeseen: 14 Abd El-Hameed Lotfy St., From El Batal Abd El Aziz St., Giza",
    "Tomato Shooting Club: 19 Shooting Club Street, Beside Khodeir Stationary, Dokki, Giza",
    "Tomato El Haram: Al Haram, Al Korn Al Akhdar, El Talbia, Giza",
    "Tomato Hadayek El Ahram: 415 Elgish Rd, Hadayek El Ahram, El Haram, Giza",
    "Tomato Heliopolis: 9 El Ticharhy St, Off El Khalifa El Maamoun St., Roxy, Heliopolis, Cairo",
    "Tomato City Stars: City Stars Mall, 6th Floor, Omar Ibn El-Khattab",
    "Tomato Genena Mall: Genena Mall, El Batrowy St., 4th Floor Abbas El Akkad, Nasr City",
    "Tomato El Shorouk City: Galaxy Mall, 3rd Elshroak road, El Shorouk City, Cairo",
    "Tomato 6th Of October: Family mall First 6th of October, Giza",
    "Tomato El Sheikh Zayed: El Sheikh Zayed, 6th of October, Giza In Front Of Hadayek El Mohandeseen Compound, Gate 7",
    "Tomato El Ahly Club: Saleh Salem Street, Inside El Ahly Sports Club - El Gezira",
    "Tomato El Ahly Club 2 - El Sheikh Zayed: Ahly club 2m El Sheikh Zayed, Giza",
    "Tomato Assiut: Nile Plaza Towers - Ahmed Ali Al-Oka, Assiut",
  ];

  return (
    <div className="contact-page1">
      <div className="image-section1">
        <div className="overlay1">
          <h2>Contact Us</h2>
          <p>Or call us via Tomato hotline 19491</p>
          <p>12:00 PM - 12:00 AM</p>
        </div>
      </div>

      <div className="contact-details1">
        <h3>Contact Details</h3>
        <form>
          <div className="form-row1">
            <div className="form-group1">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group1">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group1">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Your Phone" />
            </div>
          </div>
          <div className="form-group1">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>

      <div className="branches-list1">
        <h4>Our Branches</h4>
        <div className="branch-container1">
          {branches.map((branch, index) => (
            <p key={index}>{branch}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;