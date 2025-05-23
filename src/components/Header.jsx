import React, { useState } from 'react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('home'); // State to track active link

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-black tracking-wide">
          {/* Placeholder for icon */}
          <span className="text-yellow-500 mr-2">◆</span> Cargo <span className="text-yellow-500 ml-1">TON</span>
        </div>

        {/* Nav Links and Buttons */}
        <div className="hidden md:flex items-center ml-auto space-x-12">
          <nav className="flex space-x-6 text-gray-700 font-medium">
            {/* HOME */}
            <a
              href="#"
              className={`hover:text-yellow-500 transition flex items-center ${activeLink === 'home' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              HOME
            </a>

            {/* PAGES */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('pages')} onMouseLeave={handleMouseLeave}>
              <a
                href="#"
                className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${activeLink === 'pages' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                onClick={() => handleLinkClick('pages')}
              >
                PAGES <span className="ml-1 text-xs">▼</span>
              </a>
              {openDropdown === 'pages' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-20">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact Us</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Careers</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonials</a>
                </div>
              )}
            </div>

            {/* TRACKING */}
            <a
              href="#"
              className={`hover:text-yellow-500 transition flex items-center ${activeLink === 'tracking' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
              onClick={() => handleLinkClick('tracking')}
            >
              TRACKING
            </a>

            {/* SERVICES */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <a
                href="#"
                className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${activeLink === 'services' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                onClick={() => handleLinkClick('services')}
              >
                SERVICES <span className="ml-1 text-xs">▼</span>
              </a>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-20">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ocean Freight</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Air Freight</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Land Transport</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Warehousing</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Supply Chain Solutions</a>
                </div>
              )}
            </div>

            {/* BLOG */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <a
                href="#"
                className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${activeLink === 'blog' ? 'border-l-2 border-yellow-500 pl-2' : ''}`}
                onClick={() => handleLinkClick('blog')}
              >
                BLOG <span className="ml-1 text-xs">▼</span>
              </a>
              {openDropdown === 'blog' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-20">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Latest Articles</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Industry News</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Case Studies</a>
                </div>
              )}
            </div>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-sm font-semibold hover:bg-yellow-600 transition">
              GET A QUOTE
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-sm font-semibold hover:bg-gray-800 transition">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
