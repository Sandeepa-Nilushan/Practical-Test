import React, { useState, useEffect, useRef } from 'react';
import acme from '../../assets/logos/acme.png';
import amara from '../../assets/logos/amara.png';
import asgardia from '../../assets/logos/asgardia.png';
import aven from '../../assets/logos/aven.png';
import lightai from '../../assets/logos/lightai.png';
import liva from '../../assets/logos/liva.png';
import earth2 from '../../assets/logos/earth2.png';
import hexlab from '../../assets/logos/hex-lab.png';
import hexa from '../../assets/logos/hexa.png';
import kyan from '../../assets/logos/kyan.png';
import muzica from '../../assets/logos/muzica.png';
import uilogos from '../../assets/logos/uilogos.png';

import './ClientLogos.css'; // We will create this CSS file next

const ClientLogos = () => {
  const allLogos = [
    { src: acme, alt: 'Acme' },
    { src: amara, alt: 'Amara' },
    { src: asgardia, alt: 'Asgardia' },
    { src: aven, alt: 'Aven' },
    { src: lightai, alt: 'Lightai' },
    { src: liva, alt: 'Liva' },
    { src: earth2, alt: 'Earth2' },
    { src: hexlab, alt: 'Hex Lab' },
    { src: hexa, alt: 'Hexa' },
    { src: kyan, alt: 'Kyan' },
    { src: muzica, alt: 'Muzica' },
    { src: uilogos, alt: 'UI Logos' },
  ];

  const [logosPerView, setLogosPerView] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosContainerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Update logosPerView based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setLogosPerView(5);
      } else if (window.innerWidth > 767) {
        setLogosPerView(3);
      } else if (window.innerWidth > 479) {
        setLogosPerView(1);
      } else {
        setLogosPerView(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate logos to create seamless loop effect
  const extendedLogos = [...allLogos, ...allLogos.slice(0, logosPerView)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!logosContainerRef.current) return;

    const handleTransitionEnd = () => {
      if (currentIndex >= allLogos.length) {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }
    };

    logosContainerRef.current.addEventListener('transitionend', handleTransitionEnd);

    if (!isTransitioning) {
      const _ = logosContainerRef.current.offsetWidth;
      setIsTransitioning(true);
    }

    return () => {
      if (logosContainerRef.current) {
        logosContainerRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentIndex, allLogos.length, isTransitioning]);

  // Calculate the index of the middle logo in the currently visible set
  const middleLogoIndex = Math.floor(logosPerView / 2);

  // The transform value now moves by the calculated width of one logo including margin
  const transformValue = `translateX(-${currentIndex * (logosContainerRef.current ? logosContainerRef.current.children[0].offsetWidth + 100 : 0)}px)`;

  return (
    <section className="client-logos-section">
      
      <div className="logos-carousel-container">
        <div
          className="logos-container"
          ref={logosContainerRef}
          style={{
            transform: transformValue,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {extendedLogos.map((logo, index) => {
            const logoPositionInView = index - currentIndex;
            const isMiddle = logoPositionInView === middleLogoIndex;

            return (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`client-logo ${isMiddle ? 'middle' : ''}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
