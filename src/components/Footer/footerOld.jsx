import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaCog,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaRegHandPointRight,
} from "react-icons/fa";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import image1 from "../../assets/images/krakenimages-376KN_ISplE-unsplash 1.webp";
import image2 from "../../assets/images/paul-skorupskas-7KLa-xLbSXA-unsplash.webp";
import image3 from "../../assets/images/icons8-team-FcLyt7lW5wg-unsplash.webp";
import image4 from "../../assets/images/mathurin-napoly-matnapo-uiOUuEx1e5U-unsplash.webp";
import image5 from "../../assets/images/mathurin-napoly-matnapo-Ygyp2kXy2I0-unsplash.webp";
import image6 from "../../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");

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
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Calculate scroll progress
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolledHeight = window.scrollY;
    const progress = (scrolledHeight / totalHeight) * 100;
    setScrollProgress(progress);
    toggleVisibility();
  };

  // Scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle Subscribe button click
  const handleSubscribeClick = () => {
    if (emailInput.trim() !== "") {
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="py-6 text-gray-300 bg-gray-700 sm:py-8 md:py-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1440px]">
        {/* Weekly Newsletter */}
        <div className="grid items-center grid-cols-1 gap-4 mb-16 md:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 sm:mb-24 md:mb-36">
          <div className="flex items-center md:col-span-2 lg:col-span-2">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                Weekly Newsletter
              </h3>
              <p className="text-sm text-gray-400 sm:text-base">
                There are many variations of passages of lorem ipsum available.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full space-y-2 md:col-span-2 lg:col-span-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-3 py-2 text-sm text-gray-800 rounded sm:flex-grow sm:px-4 sm:py-3 focus:outline-none sm:text-base"
            />
            <button
              onClick={handleSubscribeClick}
              className="w-full px-4 py-2 text-sm font-semibold text-white transition bg-yellow-500 rounded sm:w-auto sm:px-6 sm:py-3 hover:bg-yellow-600 sm:text-base"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Footer Links and Gallery */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {/* About Us */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white sm:text-xl sm:mb-6">
              About Us
            </h4>
            <div className="w-16 mb-6 border-b-2 border-yellow-500 border-dashed sm:w-20 sm:mb-10"></div>
            <p className="mb-6 text-sm text-gray-400 sm:text-base sm:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="flex items-center mb-2 text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
              <span className="mr-2">
                <FaPhone className="text-gray-400" />
              </span>
              <span className="mx-2">|</span>
              <span>(+94) 11 434 7575</span>
            </p>
            <p className="flex items-center text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
              <span className="mr-2">
                <FaMapMarkerAlt className="text-gray-400" />
              </span>
              <span className="mx-2">|</span>
              <span>42 Lily Ave, Colombo 00600</span>
            </p>
          </div>

          {/* Latest News */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white sm:text-xl sm:mb-6">
              Latest News
            </h4>
            <div className="w-16 mb-6 border-b-2 border-yellow-500 border-dashed sm:w-20 sm:mb-10"></div>
            <ul>
              <li className="mb-4 sm:mb-6">
                <div className="flex items-start">
                  <span className="mt-1 mr-3 text-yellow-500 sm:mr-4">
                    &gt;
                  </span>
                  <div>
                    <p className="mb-1 text-sm text-gray-400 cursor-pointer sm:text-base sm:mb-2 hover:text-white">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                    <span className="text-xs text-gray-500 sm:text-sm">
                      5 Minutes Ago
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="mt-1 mr-3 text-yellow-500 sm:mr-4">
                    &gt;
                  </span>
                  <div>
                    <p className="mb-1 text-sm text-gray-400 cursor-pointer sm:text-base sm:mb-2 hover:text-white">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                    <span className="text-xs text-gray-500 sm:text-sm">
                      5 Minutes Ago
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white sm:text-xl sm:mb-6">
              Customer Service
            </h4>
            <div className="w-16 mb-6 border-b-2 border-yellow-500 border-dashed sm:w-20 sm:mb-10"></div>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">
                  <FaRegHandPointRight />
                </span>
                <span className="text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
                  Support Forums
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">
                  <FaRegHandPointRight />
                </span>
                <span className="text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
                  Communication
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">
                  <FaRegHandPointRight />
                </span>
                <span className="text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
                  FAQS
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">
                  <FaRegHandPointRight />
                </span>
                <span className="text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
                  Privacy Policy
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">
                  <FaRegHandPointRight />
                </span>
                <span className="text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
                  Rules & Condition
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">
                  <FaRegHandPointRight />
                </span>
                <span className="text-sm text-gray-400 cursor-pointer sm:text-base hover:text-white">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white sm:text-xl sm:mb-6">
              Gallery
            </h4>
            <div className="w-16 mb-6 border-b-2 border-yellow-500 border-dashed sm:w-20 sm:mb-10"></div>
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              <img
                src={image1}
                alt="Gallery Image 1"
                className="object-cover w-full h-16 transition-transform duration-200 rounded-sm sm:h-20 hover:scale-110"
              />
              <img
                src={image2}
                alt="Gallery Image 2"
                className="object-cover w-full h-16 transition-transform duration-200 rounded-sm sm:h-20 hover:scale-110"
              />
              <img
                src={image3}
                alt="Gallery Image 3"
                className="object-cover w-full h-16 transition-transform duration-200 rounded-sm sm:h-20 hover:scale-110"
              />
              <img
                src={image4}
                alt="Gallery Image 4"
                className="object-cover w-full h-16 transition-transform duration-200 rounded-sm sm:h-20 hover:scale-110"
              />
              <img
                src={image5}
                alt="Gallery Image 5"
                className="object-cover w-full h-16 transition-transform duration-200 rounded-sm sm:h-20 hover:scale-110"
              />
              <img
                src={image6}
                alt="Gallery Image 6"
                className="object-cover w-full h-16 transition-transform duration-200 rounded-sm sm:h-20 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between pt-6 text-xs text-gray-400 border-t border-gray-600 sm:flex-row sm:pt-8 sm:text-sm">
          <div className="mb-4 sm:mb-0">
            Copyright © 2025 All Rights Reserved. Site By{" "}
            <span className="text-yellow-500">Sandeepa®</span>
          </div>
          <div className="flex space-x-3 text-white sm:space-x-4">
            <a
              href="#"
              className="flex items-center justify-center text-white transition bg-gray-400 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-yellow-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-white transition bg-gray-400 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-yellow-500"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-white transition bg-gray-400 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-yellow-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-white transition bg-gray-400 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-yellow-500"
            >
              <FaBehance />
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-white transition bg-gray-400 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-yellow-500"
            >
              <FaDribbble />
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <div className="fixed flex items-center justify-center w-10 h-10 bottom-6 sm:bottom-10 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20 sm:w-12 sm:h-12">
            <CircularProgressbarWithChildren
              value={scrollProgress}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: `black`,
                trailColor: `#4B5563`,
                backgroundColor: "transparent",
              })}
            >
              <div
                onClick={scrollToTop}
                className="flex items-center justify-center w-8 h-8 p-2 text-2xl font-extrabold text-white transition bg-yellow-500 rounded-full cursor-pointer sm:text-3xl hover:bg-yellow-600 sm:w-10 sm:h-10"
              >
                ↑
              </div>
            </CircularProgressbarWithChildren>
          </div>
        )}

        {/* Popup Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50 sm:p-8 md:p-12">
            <div className="relative w-full max-w-sm p-4 mx-4 text-white bg-gray-700 rounded-lg shadow-lg sm:p-6 sm:mx-6 md:mx-8">
              <button
                onClick={closeModal}
                className="absolute text-xl text-gray-400 top-2 right-2 hover:text-white"
              >
                &times;
              </button>
              <h4 className="mb-3 text-xl font-bold text-center sm:text-2xl sm:mb-4">
                Subscription Successful!
              </h4>
              <p className="text-sm text-center sm:text-base">
                Welcome aboard! You'll now receive the latest news at{" "}
                {emailInput}.
              </p>
              <button
                onClick={closeModal}
                className="block px-4 py-2 mx-auto mt-4 text-sm text-black transition bg-yellow-500 rounded sm:mt-6 hover:bg-yellow-600 sm:text-base"
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
