import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuoteModal from "../Quote_Modal/QuoteModal";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("home");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 min-h-[80px]">
        <div className="container mx-auto px-4 md:px-8 h-[80px] flex items-center justify-between max-w-[1400px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold tracking-wide text-black md:text-2xl"
          >
            <span className="mr-2 text-yellow-500">◆</span> Cargo{" "}
            <span className="ml-1 text-yellow-500">TON</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 transition rounded-lg md:hidden hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span
                className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="items-center hidden ml-auto space-x-12 md:flex">
            <nav className="flex space-x-6 font-medium text-gray-700">
              {/* HOME */}
              <Link
                to="/"
                className={`hover:text-yellow-500 transition flex items-center ${
                  activeLink === "home"
                    ? "border-l-2 border-yellow-500 pl-2"
                    : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                HOME
              </Link>

              {/* PAGES */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("pages")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${
                    activeLink === "pages"
                      ? "border-l-2 border-yellow-500 pl-2"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("pages")}
                >
                  PAGES <span className="ml-2 text-xs">▼</span>
                </a>
                {openDropdown === "pages" && (
                  <div className="absolute top-[calc(100%+1px)] left-0 w-48 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-50">
                    <div className="absolute left-0 right-0 h-1 -top-1"></div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Contact Us
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Testimonials
                    </a>
                  </div>
                )}
              </div>

              {/* TRACKING */}
              <a
                href="#"
                className={`hover:text-yellow-500 transition flex items-center ${
                  activeLink === "tracking"
                    ? "border-l-2 border-yellow-500 pl-2"
                    : ""
                }`}
                onClick={() => handleLinkClick("tracking")}
              >
                TRACKING
              </a>

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${
                    activeLink === "services"
                      ? "border-l-2 border-yellow-500 pl-2"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("services")}
                >
                  SERVICES <span className="ml-2 text-xs">▼</span>
                </a>
                {openDropdown === "services" && (
                  <div className="absolute top-[calc(100%+1px)] left-0 w-48 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-50">
                    <div className="absolute left-0 right-0 h-1 -top-1"></div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Ocean Freight
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Air Freight
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Land Transport
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Warehousing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Supply Chain Solutions
                    </a>
                  </div>
                )}
              </div>

              {/* BLOG */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("blog")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`hover:text-yellow-500 transition flex items-center cursor-pointer ${
                    activeLink === "blog"
                      ? "border-l-2 border-yellow-500 pl-2"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("blog")}
                >
                  BLOG <span className="ml-2 text-xs">▼</span>
                </a>
                {openDropdown === "blog" && (
                  <div className="absolute top-[calc(100%+1px)] left-0 w-48 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-50">
                    <div className="absolute left-0 right-0 h-1 -top-1"></div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Latest Articles
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Industry News
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Case Studies
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex items-center px-4 py-2 space-x-2 font-semibold text-black transition bg-yellow-500 rounded-sm md:px-6 hover:bg-yellow-600"
              >
                <span className="hidden lg:inline">GET A QUOTE</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <Link
                to="/signin"
                className="flex items-center px-4 py-2 space-x-2 font-semibold text-white transition bg-black rounded-sm md:px-6 hover:bg-gray-800"
              >
                <span className="hidden lg:inline">SIGN IN</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute z-50 p-2 transition rounded-lg top-6 right-6 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="px-6 pt-24">
            <nav className="flex flex-col space-y-6 font-medium text-gray-700">
              <Link
                to="/"
                className={`hover:text-yellow-500 transition ${
                  activeLink === "home" ? "text-yellow-500" : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                HOME
              </Link>

              {/* Mobile Dropdowns */}
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === "pages" ? null : "pages")
                    }
                    className="flex items-center justify-between w-full transition hover:text-yellow-500"
                  >
                    PAGES <span className="text-xs">▼</span>
                  </button>
                  {openDropdown === "pages" && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Contact Us
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Careers
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Testimonials
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className={`block hover:text-yellow-500 transition ${
                    activeLink === "tracking" ? "text-yellow-500" : ""
                  }`}
                  onClick={() => handleLinkClick("tracking")}
                >
                  TRACKING
                </a>

                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "services" ? null : "services"
                      )
                    }
                    className="flex items-center justify-between w-full transition hover:text-yellow-500"
                  >
                    SERVICES <span className="text-xs">▼</span>
                  </button>
                  {openDropdown === "services" && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Ocean Freight
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Air Freight
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Land Transport
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Warehousing
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Supply Chain Solutions
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === "blog" ? null : "blog")
                    }
                    className="flex items-center justify-between w-full transition hover:text-yellow-500"
                  >
                    BLOG <span className="text-xs">▼</span>
                  </button>
                  {openDropdown === "blog" && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Latest Articles
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Industry News
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-yellow-500"
                      >
                        Case Studies
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {/* Mobile Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 font-semibold text-black transition bg-yellow-500 rounded-sm hover:bg-yellow-600"
              >
                GET A QUOTE
              </button>
              <Link
                to="/signin"
                className="block w-full px-6 py-3 font-semibold text-center text-white transition bg-black rounded-sm hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </header>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Header;
