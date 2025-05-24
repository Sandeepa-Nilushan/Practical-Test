import React, { useState } from 'react';
import './QuoteModal.css';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ocean-freight',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-left-column">
          <div className="modal-text-box">
            <div className="modal-text-content-wrapper">
              <p className="modal-label">GET A QUOTE</p>
              <h1 className="modal-heading">
                Request Your <span className="highlight">Quote</span>
              </h1>
              <p className="modal-description">
                Fill out the form and our team will get back to you within 24 hours with a customized quote for your logistics needs.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-right-column">
          <div className="modal-form-container">
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Type</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="ocean-freight">Ocean Freight</option>
                  <option value="air-freight">Air Freight</option>
                  <option value="land-transport">Land Transport</option>
                  <option value="warehousing">Warehousing</option>
                  <option value="supply-chain">Supply Chain Solutions</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements"
                  rows="4"
                />
              </div>

              <button type="submit" className="submit-button">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>

        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default QuoteModal; 