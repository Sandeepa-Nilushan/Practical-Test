import React, { useState, useEffect, useRef } from 'react';
import acmeLogo from '../assets/logos/acme.png';
import amaraLogo from '../assets/logos/amara.png';
import asgardiaLogo from '../assets/logos/asgardia.png';
import avenLogo from '../assets/logos/aven.png';
import lightaiLogo from '../assets/logos/lightai.png';
import livaLogo from '../assets/logos/liva.png';
import earth2Logo from '../assets/logos/earth2.png';
import hexLabLogo from '../assets/logos/hex-lab.png';
import hexaLogo from '../assets/logos/hexa.png';
import kyanLogo from '../assets/logos/kyan.png';
import muzicaLogo from '../assets/logos/muzica.png';
import uilogosLogo from '../assets/logos/uilogos.png';

import './ClientLogos.css'; // We will create this CSS file next

const ClientLogos = () => {
  const allLogos = [
    { src: acmeLogo, alt: 'Acme' },
    { src: amaraLogo, alt: 'Amara' },
    { src: asgardiaLogo, alt: 'Asgardia' },
    { src: avenLogo, alt: 'Aven' },
    { src: lightaiLogo, alt: 'Lightai' },
    { src: livaLogo, alt: 'Liva' },
    { src: earth2Logo, alt: 'Earth2' },
    { src: hexLabLogo, alt: 'Hex Lab' },
    { src: hexaLogo, alt: 'Hexa' },
    { src: kyanLogo, alt: 'Kyan' },
    { src: muzicaLogo, alt: 'Muzica' },
    { src: uilogosLogo, alt: 'UI Logos' },
  ];

  const logosPerView = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosContainerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
        // Force a reflow to apply the transition: none style before re-enabling
        // Assigning to a dummy variable to satisfy ESLint no-unused-expressions
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
  // This assumes all logos will render at roughly the same width due to the CSS rule
  const transformValue = `translateX(-${currentIndex * (logosContainerRef.current ? logosContainerRef.current.children[0].offsetWidth + 100 : 0)}px)`; // 20 accounts for 10px margin on each side

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
            // Determine if this logo is currently the middle one in the visible window
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
