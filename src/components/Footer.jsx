import React, { useState, useEffect } from 'react';
// Import icons
import { FaPhone, FaMapMarkerAlt, FaCog, FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaDribbble, FaRegHandPointRight } from 'react-icons/fa'; // Assuming react-icons is installed
// Import react-circular-progressbar components and styles
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Import images
import Image1 from '../assets/images/krakenimages-376KN_ISplE-unsplash 1.webp';
import Image2 from '../assets/images/paul-skorupskas-7KLa-xLbSXA-unsplash.webp';
import Image3 from '../assets/images/icons8-team-FcLyt7lW5wg-unsplash.webp';
import Image4 from '../assets/images/mathurin-napoly-matnapo-uiOUuEx1e5U-unsplash.webp';
import Image5 from '../assets/images/mathurin-napoly-matnapo-Ygyp2kXy2I0-unsplash.webp';
import Image6 from '../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp';

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
    <footer className="bg-gray-700 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Weekly Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-36">
          <div className="md:col-span-2 lg:col-span-2 flex items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Weekly Newsletter</h3>
              <p className="text-gray-400">There are many variations of passages of lorem ipsum available.</p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 flex items-center space-x-2 w-full">
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="flex-grow px-4 py-3 rounded focus:outline-none text-gray-800"
            />
            <button
              onClick={handleSubscribeClick}
              className="bg-yellow-500 text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Footer Links and Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">About Us</h4>
            <div className="w-20 border-b-2 border-dashed border-yellow-500 mb-10"></div>
            <p className="text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-gray-400 flex items-center mb-2 cursor-pointer hover:text-white">
              <span className="mr-2"><FaPhone className="text-gray-400" /></span>
              <span className="mx-2">|</span>
              <span>(+94) 11 434 7575</span>
            </p>
            <p className="text-gray-400 flex items-center cursor-pointer hover:text-white">
              <span className="mr-2"><FaMapMarkerAlt className="text-gray-400" /></span>
              <span className="mx-2">|</span>
              <span>42 Lily Ave, Colombo 00600</span>
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Latest News</h4>
            <div className="w-20 border-b-2 border-dashed border-yellow-500 mb-10"></div>
            <ul>
              <li className="mb-6">
                <div className="flex items-start">
                  <span className="mr-4 text-yellow-500 mt-1">&gt;</span>
                  <div>
                    <p className="text-gray-400 mb-2 cursor-pointer hover:text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <span className="text-gray-500 text-sm">5 Minutes Ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="mr-4 text-yellow-500 mt-1">&gt;</span>
                  <div>
                    <p className="text-gray-400 mb-2 cursor-pointer hover:text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <span className="text-gray-500 text-sm">5 Minutes Ago</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Customer Service</h4>
            <div className="w-20 border-b-2 border-dashed border-yellow-500 mb-10"></div>
            <ul>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-gray-400"><FaRegHandPointRight /></span> <span className="text-gray-400 cursor-pointer hover:text-white">Support Forums</span>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-gray-400"><FaRegHandPointRight /></span> <span className="text-gray-400 cursor-pointer hover:text-white">Communication</span>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-gray-400"><FaRegHandPointRight /></span> <span className="text-gray-400 cursor-pointer hover:text-white">FAQS</span>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-gray-400"><FaRegHandPointRight /></span> <span className="text-gray-400 cursor-pointer hover:text-white">Privacy Policy</span>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2 text-gray-400"><FaRegHandPointRight /></span> <span className=" text-gray-400 cursor-pointer hover:text-white">Rules & Condition</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400"><FaRegHandPointRight /></span> <span className=" text-gray-400 cursor-pointer hover:text-white">Contact Us</span>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Gallery</h4>
            <div className="w-20 border-b-2 border-dashed border-yellow-500 mb-10"></div>
            <div className="grid grid-cols-3 gap-1">
              <img src={Image1} alt="Gallery Image 1" className="w-full h-20 object-cover rounded-sm transition-transform duration-200 hover:scale-110" />
              <img src={Image2} alt="Gallery Image 2" className="w-full h-20 object-cover rounded-sm transition-transform duration-200 hover:scale-110" />
              <img src={Image3} alt="Gallery Image 3" className="w-full h-20 object-cover rounded-sm transition-transform duration-200 hover:scale-110" />
              <img src={Image4} alt="Gallery Image 4" className="w-full h-20 object-cover rounded-sm transition-transform duration-200 hover:scale-110" />
              <img src={Image5} alt="Gallery Image 5" className="w-full h-20 object-cover rounded-sm transition-transform duration-200 hover:scale-110" />
              <img src={Image6} alt="Gallery Image 6" className="w-full h-20 object-cover rounded-sm transition-transform duration-200 hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-8 text-gray-400 text-sm">
          <div>
            Copyright © 2025 All Rights Reserved. Site By <span className="text-yellow-500">Sandeepa®</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-white">
            <a href="#" className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:bg-yellow-500 transition text-white"><FaFacebookF /></a>
            <a href="#" className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:bg-yellow-500 transition text-white"><FaTwitter /></a>
            <a href="#" className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:bg-yellow-500 transition text-white"><FaLinkedinIn /></a> {/* Assuming 'v' is LinkedIn */}
            <a href="#" className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:bg-yellow-500 transition text-white"><FaBehance /></a> {/* Assuming 'Be' is Behance */}
            <a href="#" className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:bg-yellow-500 transition text-white"><FaDribbble /></a> {/* Assuming '®' is Dribbble or similar */}
          </div>
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <div className="fixed bottom-10 right-8 w-12 h-12 flex items-center justify-center">
            <CircularProgressbarWithChildren
              value={scrollProgress}
              strokeWidth={10}
              styles={buildStyles({
                // Path color
                pathColor: `black`,
                // Trail color
                trailColor: `#4B5563`,
                // No background
                backgroundColor: 'transparent',
              })}
            >
              {/* Content inside the progressbar */}
              <div
                onClick={scrollToTop}
                className="bg-yellow-500 text-white text-3xl font-extrabold p-2 rounded-full cursor-pointer hover:bg-yellow-600 transition flex items-center justify-center w-10 h-10"
              >
                ↑
              </div>
            </CircularProgressbarWithChildren>
          </div>
        )}

        {/* Popup Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white max-w-sm w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
              >
                &times;
              </button>
              <h4 className="text-2xl font-bold mb-4 text-center">Subscription Successful!</h4>
              <p className="text-center">Welcome aboard! You'll now receive the latest news at {emailInput}.</p>
              <button
                onClick={closeModal}
                className="mt-6 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition block mx-auto"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
};

export default Footer;
