import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaPlane, FaRobot, FaTruckMoving, FaTruck } from 'react-icons/fa';
import image1 from '../../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp';
import image2 from '../../assets/images/mathurin-napoly-matnapo-uiOUuEx1e5U-unsplash.webp';
import image3 from '../../assets/images/linkedin-sales-solutions-hrhjn6ZTgrM-unsplash.webp';
import image4 from '../../assets/images/sten-rademaker-UZUzvJEvKnI-unsplash.webp';
import './Services.css';

const BlackCircleArrow = () => (
  <span className="arrow-circle">
    <FaArrowRight />
  </span>
);

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile !== isMobile) {
        setCurrentSlide(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const services = [
    {
      image: image1,
      icon: <FaPlane />,
      title: 'Air Freight Services',
      description: 'At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.',
    },
    {
      image: image2,
      icon: <FaRobot />,
      title: 'Drone Services',
      description: 'These are unique and often they differ from one industry to the other. Our logistics expertise.',
    },
    {
      image: image3,
      icon: <FaTruckMoving />,
      title: 'Logistics Solutions',
      description: 'Comprehensive logistics management to optimize your supply chain and reduce costs.',
    },
    {
      image: image4,
      icon: <FaTruck />,
      title: 'Transport Services',
      description: 'Efficient and reliable transport solutions for all your goods and cargo.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = isMobile ? services.length - 1 : services.length - 2;
      return prev < maxSlide ? prev + 1 : 0;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = isMobile ? services.length - 1 : services.length - 2;
      return prev > 0 ? prev - 1 : maxSlide;
    });
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header Text */}
        <div className="services-header">
          <p className="services-subtitle">Real Solution, Real Fast !</p>
          <h2 className="services-title">Best Global Logistics Solutions.</h2>
        </div>

        {/* Services Carousel */}
        <div className="services-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-slider" 
              style={{ transform: `translateX(-${currentSlide * (isMobile ? 100 : 50)}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="card-container">
                    {/* Image Section */}
                    <div className="card-image-container">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="card-image"
                      />
                      <div className="icon-circle">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="card-content">
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-description">{service.description}</p>
                      <button className="read-more-button">
                        <BlackCircleArrow />
                        <span>Read More</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Text and Navigation Dots Container */}
        <div className="bottom-container">
          {/* Text and Icon below carousel */}
          <div className="bottom-text">
            <p className="inline-block mr-1">Logistic & Transport Solutions Saves Your Time. <strong>Finds Your Solutions</strong></p>
            <BlackCircleArrow />
          </div>

          {/* Navigation Dots */}
          <div className="navigation-dots">
            {services.map((_, index) => (
              index <= (isMobile ? services.length - 1 : services.length - 2) && (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`dot-button ${currentSlide === index ? 'active' : ''}`}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
