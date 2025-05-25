import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaShippingFast,
  FaPlane,
  FaRobot,
  FaTruckMoving,
  FaTruck,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import image1 from "../../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp";
import image2 from "../../assets/images/mathurin-napoly-matnapo-uiOUuEx1e5U-unsplash.webp";
import image3 from "../../assets/images/linkedin-sales-solutions-hrhjn6ZTgrM-unsplash.webp";
import image4 from "../../assets/images/sten-rademaker-UZUzvJEvKnI-unsplash.webp";

const BlackCircleArrow = ({ iconSize = "text-xs", containerClasses = "" }) => (
  <span
    className={`bg-black rounded-full inline-flex items-center justify-center ${containerClasses}`}
  >
    <FaArrowRight className={`${iconSize} text-white`} />
  </span>
);

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      image: image1,
      icon: <FaPlane />,
      title: "Air Freight Services",
      description:
        "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    },
    {
      image: image2,
      icon: <FaRobot />,
      title: "Drone Services",
      description:
        "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    },
    {
      image: image3,
      icon: <FaTruckMoving />,
      title: "Logistics Solutions",
      description:
        "Comprehensive logistics management to optimize your supply chain and reduce costs.",
    },
    {
      image: image4,
      icon: <FaTruck />,
      title: "Transport Services",
      description:
        "Efficient and reliable transport solutions for all your goods and cargo.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < services.length - 2 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : services.length - 2));
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* Header Text */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-green-600">
            Real Solution, Real Fast !
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Best Global Logistics Solutions.
          </h2>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex -mx-2 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-full px-2 lg:w-1/2">
                  <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 flex relative">
                    {/* Left Half - Image */}
                    <div className="relative z-0 w-1/2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-60"
                      />
                      <div className="absolute flex items-center justify-center w-20 h-20 bg-green-500 rounded-full shadow-lg -bottom-3 -right-3">
                        <span className="text-4xl text-white">
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    {/* Right Half - Content */}
                    <div className="w-1/2 p-6 flex flex-col justify-center relative z-10 bg-[#f9f9f9] overflow-hidden">
                      <h3 className="mb-2 text-xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">
                        {service.description}
                      </p>
                      <button className="flex items-center font-medium text-black cursor-pointer group">
                        <BlackCircleArrow
                          iconSize="text-xs"
                          containerClasses="w-4 h-4 mr-1 transition-transform duration-300 group-hover:translate-x-1"
                        />{" "}
                        <span className="ml-1 transition-all duration-300 group-hover:underline">
                          Read More
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text and Navigation Dots Container */}
        <div className="flex items-center justify-between mt-4">
          {/* Text and Icon below carousel */}
          <div className="flex items-center text-sm text-gray-700 transition-colors duration-300 cursor-pointer group hover:text-gray-900">
            <p className="inline-block mr-1">
              Logistic & Transport Solutions Saves Your Time.{" "}
              <strong>Finds Your Solutions</strong>
            </p>
            <BlackCircleArrow
              iconSize="text-xs"
              containerClasses="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>

          {/* Navigation Dots - Moved here */}
          <div className="flex space-x-2">
            {services.map(
              (_, index) =>
                index <= services.length - 2 && (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                      currentSlide === index
                        ? "bg-white border-green-500"
                        : "bg-gray-400 border-transparent hover:bg-gray-500"
                    }`}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
