import React, { useState } from 'react';
import './Reservation.css'; // Import your custom styles

const ReservationPage = () => {
  return (
    <div>
      <ImageSection />
      <ReservationDetails />
    </div>
  );
};

// Image Section Component
const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="overlay">
        <h2>Reservation</h2>
        <p>Or call us via Tomato hotline 19491 <br /> (12:00 PM - 12:00 AM)</p>
      </div>
    </section>
  );
};

const ReservationDetails = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      guests: '',
      date: '',
      time: '',
      branch: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); // Here you'd handle the form submission logic
    };
  
    return (
      <section className="reservation-details">
        <div className="container">
          <h3>Reservation Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Number of Guests</label>
                <select name="guests" value={formData.guests} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
              </div>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>Branch</label>
                <select name="branch" value={formData.branch} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="branch1">Branch 1</option>
                  <option value="branch2">Branch 2</option>
                </select>
              </div>
            </div>
  
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
  
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
export default ReservationPage;