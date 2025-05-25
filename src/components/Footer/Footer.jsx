import React, { useState, useEffect } from 'react';
// Import icons
import { FaPhone, FaMapMarkerAlt, FaCog, FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaDribbble, FaRegHandPointRight } from 'react-icons/fa'; // Assuming react-icons is installed
// Import react-circular-progressbar components and styles
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Footer.css';

// Import images
import image1 from '../../assets/images/krakenimages-376KN_ISplE-unsplash 1.webp';
import image2 from '../../assets/images/paul-skorupskas-7KLa-xLbSXA-unsplash.webp';
import image3 from '../../assets/images/icons8-team-FcLyt7lW5wg-unsplash.webp';
import image4 from '../../assets/images/mathurin-napoly-matnapo-uiOUuEx1e5U-unsplash.webp';
import image5 from '../../assets/images/mathurin-napoly-matnapo-Ygyp2kXy2I0-unsplash.webp';
import image6 from '../../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp';

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('home');
  const [isVisible, setIsVisible] = useState(false); // State for scroll button visibility
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  // Show/hide scroll button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show button after scrolling down 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Calculate scroll progress
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledHeight = window.scrollY;
    const progress = (scrolledHeight / totalHeight) * 100;
    setScrollProgress(progress);
    toggleVisibility(); // Also use scroll to trigger visibility
  };

  // Scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle Subscribe button click
  const handleSubscribeClick = () => {
    if (emailInput.trim() !== '') {
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {/* Weekly Newsletter */}
        <div className="newsletter-grid">
          <div className="newsletter-content">
            <div>
              <h3 className="newsletter-title">Weekly Newsletter</h3>
              <p className="newsletter-description">There are many variations of passages of lorem ipsum available.</p>
            </div>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="newsletter-input"
            />
            <button
              onClick={handleSubscribeClick}
              className="newsletter-button"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Footer Links and Gallery */}
        <div className="footer-grid">
          {/* About Us */}
          <div>
            <h4 className="footer-section-title">About Us</h4>
            <div className="section-divider"></div>
            <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="contact-item">
              <span className="icon"><FaPhone /></span>
              <span className="separator">|</span>
              <span>(+94) 11 434 7575</span>
            </p>
            <p className="contact-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <span className="separator">|</span>
              <span>42 Lily Ave, Colombo 00600</span>
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h4 className="footer-section-title">Latest News</h4>
            <div className="section-divider"></div>
            <ul>
              <li className="news-item">
                <div className="news-content">
                  <span className="news-arrow">&gt;</span>
                  <div>
                    <p className="news-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <span className="news-time">5 Minutes Ago</span>
                  </div>
                </div>
              </li>
              <li className="news-item">
                <div className="news-content">
                  <span className="news-arrow">&gt;</span>
                  <div>
                    <p className="news-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <span className="news-time">5 Minutes Ago</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="footer-section-title">Customer Service</h4>
            <div className="section-divider"></div>
            <ul className="service-list">
              <li className="service-item">
                <span className="service-icon"><FaRegHandPointRight /></span>
                <span className="service-link">Support Forums</span>
              </li>
              <li className="service-item">
                <span className="service-icon"><FaRegHandPointRight /></span>
                <span className="service-link">Communication</span>
              </li>
              <li className="service-item">
                <span className="service-icon"><FaRegHandPointRight /></span>
                <span className="service-link">FAQS</span>
              </li>
              <li className="service-item">
                <span className="service-icon"><FaRegHandPointRight /></span>
                <span className="service-link">Privacy Policy</span>
              </li>
              <li className="service-item">
                <span className="service-icon"><FaRegHandPointRight /></span>
                <span className="service-link">Rules & Condition</span>
              </li>
              <li className="service-item">
                <span className="service-icon"><FaRegHandPointRight /></span>
                <span className="service-link">Contact Us</span>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="footer-section-title">Gallery</h4>
            <div className="section-divider"></div>
            <div className="gallery-grid">
              <img src={image1} alt="Gallery Image 1" className="gallery-image" />
              <img src={image2} alt="Gallery Image 2" className="gallery-image" />
              <img src={image3} alt="Gallery Image 3" className="gallery-image" />
              <img src={image4} alt="Gallery Image 4" className="gallery-image" />
              <img src={image5} alt="Gallery Image 5" className="gallery-image" />
              <img src={image6} alt="Gallery Image 6" className="gallery-image" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="copyright">
            Copyright © 2025 All Rights Reserved. Site By <span className="copyright-highlight">Sandeepa®</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
            <a href="#" className="social-link"><FaBehance /></a>
            <a href="#" className="social-link"><FaDribbble /></a>
          </div>
        </div>

        {/* Popup Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                onClick={closeModal}
                className="modal-close"
              >
                &times;
              </button>
              <h4 className="modal-title">Subscription Successful!</h4>
              <p className="modal-message">Welcome aboard! You'll now receive the latest news at {emailInput}.</p>
              <button
                onClick={closeModal}
                className="modal-button"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scroll to Top Button - Moved outside container */}
      {isVisible && (
        <div className="scroll-button-container">
          <CircularProgressbarWithChildren
            value={scrollProgress}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: `black`,
              trailColor: `#4B5563`,
              backgroundColor: 'transparent',
            })}
          >
            <div
              onClick={scrollToTop}
              className="scroll-button"
            >
              ↑
            </div>
          </CircularProgressbarWithChildren>
        </div>
      )}
    </footer>
  );
};

export default Footer;
