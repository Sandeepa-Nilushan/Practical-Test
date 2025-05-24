import React, { useState } from 'react';
import './Slider.css';
import sliderImage1 from '../assets/images/austin-distel-rxpThOwuVgE-unsplash.webp';
import sliderImage2 from '../assets/images/microsoft-365-MFK0JpFU13U-unsplash.webp';

const slides = [
  {
    id: 1,
    image: sliderImage1,
    heading: 'Best Shipping',
    highlight: 'Partner',
  },
  {
    id: 2,
    image: sliderImage2,
    heading: 'Global Logistic',
    highlight: 'Network',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 100; // Adjust this value as needed
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="slider-container">
      <div className="slider-wrapper">
        <div className="left-column">
          <div className="text-box">
            <div className="text-content-wrapper">
              <p className="logistic-label">LOGISTIC</p>
              <h1 className="slider-heading">
                {currentSlide.heading} <br />
                <span className="highlight">{currentSlide.highlight}</span>
              </h1>
              <p className="slider-description">
                Amet, tempus egestas facilisis volutpat viverra molestie lobortis
                posuere maecenas. molestie lobortis posuere maecenas. Eget sapien,
                gravida nequi.
              </p>
              <button className="discover-button" onClick={scrollToServices}>DISCOVER MORE</button>
            </div>

            <div className="arrows">
              <span>{`${currentIndex + 1} / ${slides.length}`}</span>
              <span onClick={prevSlide}>&larr;</span>
              <span onClick={nextSlide}>&rarr;</span>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="slider-image-container">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="slider-image"
                style={{
                  transform: `translateX(${-currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
