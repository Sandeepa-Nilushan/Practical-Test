import React, { useState, useEffect } from 'react';
// Import icons
import { FaPhone, FaMapMarkerAlt, FaCog, FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaDribbble } from 'react-icons/fa'; // Assuming react-icons is installed

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

  // Scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="bg-gray-700 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Weekly Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-36">
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-2">Weekly Newsletter</h3>
            <p className="text-gray-400">There are many variations of passages of lorem ipsum available.</p>
          </div>
          <div className="md:col-span-2 lg:col-span-2 flex items-center space-x-2 w-full">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="flex-grow px-4 py-3 rounded focus:outline-none text-gray-800"
            />
            <button className="bg-yellow-500 text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Footer Links and Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
            <div className="w-12 border-b-2 border-dotted border-yellow-500 mb-4"></div>
            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-gray-400 flex items-center mb-2"><span className="mr-2"><FaPhone className="text-yellow-500" /></span> (+94) 11 434 7575</p>
            <p className="text-gray-400 flex items-center"><span className="mr-2"><FaMapMarkerAlt className="text-yellow-500" /></span> 42 Lily Ave, Colombo 00600</p>
          </div>

          {/* Latest News */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Latest News</h4>
            <div className="w-12 border-b-2 border-dotted border-yellow-500 mb-4"></div>
            <ul>
              <li className="mb-4 flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">&gt;</span>
                <p className="flex-grow text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <span className="ml-4 text-gray-500 text-sm flex-shrink-0">5 Minutes Ago</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500 mt-1">&gt;</span>
                <p className="flex-grow text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <span className="ml-4 text-gray-500 text-sm flex-shrink-0">5 Minutes Ago</span>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Customer Service</h4>
            <div className="w-12 border-b-2 border-dotted border-yellow-500 mb-4"></div>
            <ul>
              <li className="mb-2 flex items-center"><span className="mr-2 text-yellow-500"><FaCog /></span> Support Forums</li>
              <li className="mb-2 flex items-center"><span className="mr-2 text-yellow-500"><FaCog /></span> Communication</li>
              <li className="mb-2 flex items-center"><span className="mr-2 text-yellow-500"><FaCog /></span> FAQS</li>
              <li className="mb-2 flex items-center"><span className="mr-2 text-yellow-500"><FaCog /></span> Privacy Policy</li>
              <li className="mb-2 flex items-center"><span className="mr-2 text-yellow-500"><FaCog /></span> Rules & Condition</li>
              <li className="flex items-center"><span className="mr-2 text-yellow-500"><FaCog /></span> Contact Us</li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Customer Service</h4> {/* Title seems repeated, assuming it's meant to be Gallery or similar */}
            <div className="w-12 border-b-2 border-dotted border-yellow-500 mb-4"></div>
            <div className="grid grid-cols-3 gap-2">
              <img src={Image1} alt="Gallery Image 1" className="w-full h-auto rounded-sm" />
              <img src={Image2} alt="Gallery Image 2" className="w-full h-auto rounded-sm" />
              <img src={Image3} alt="Gallery Image 3" className="w-full h-auto rounded-sm" />
              <img src={Image4} alt="Gallery Image 4" className="w-full h-auto rounded-sm" />
              <img src={Image5} alt="Gallery Image 5" className="w-full h-auto rounded-sm" />
              <img src={Image6} alt="Gallery Image 6" className="w-full h-auto rounded-sm" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-8 text-gray-400 text-sm">
          <div>
            Copyright © 2021 All Rights Reserved. Site By <span className="text-yellow-500">Xiteb®</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-white">
            <a href="#" className="hover:text-yellow-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500 transition"><FaLinkedinIn /></a> {/* Assuming 'v' is LinkedIn */}
            <a href="#" className="hover:text-yellow-500 transition"><FaBehance /></a> {/* Assuming 'Be' is Behance */}
            <a href="#" className="hover:text-yellow-500 transition"><FaDribbble /></a> {/* Assuming '®' is Dribbble or similar */}
          </div>
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-sm cursor-pointer hover:bg-yellow-600 transition"
          >
            ↑
          </div>
        )}

      </div>
    </footer>
  );
};

export default Footer;
