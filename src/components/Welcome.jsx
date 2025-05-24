import React from 'react';
import './Welcome.css';
import mainImage from '../assets/images/microsoft-365-kTFmwxkF5bQ-unsplash.webp';
import overlayImage from '../assets/images/mathurin-napoly-matnapo-Ygyp2kXy2I0-unsplash.webp';

function Welcome() {
  const scrollToNews = () => {
    const newsSection = document.getElementById('news');
    if (newsSection) {
      const headerOffset = 100; // Adjust this value as needed
      const elementPosition = newsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* Left: Images */}
        <div className="welcome-images">
          <div className="shape triangle"></div>
          <div className="shape parallelogram"></div>

          <img src={mainImage} alt="Main" className="main-img" />

          <img src={overlayImage} alt="Overlay" className="overlay-img" />

          <div className="clients-badge">
            <h2>15,350+</h2>
            <p>Clients Worldwide</p>
          </div>
        </div>

        {/* Right: Text */}
        <div className="welcome-text">
          <div className="shape text-parallelogram"></div> {/* Now behind */}

          <h1>TransMax Logistics<br />Around <span className="highlight">the World</span></h1>
          <p>
            Transmax is the world's driving worldwide coordinations supplier — we uphold industry
            and exchange the worldwide trade of merchandise through land transport.
          </p>
          <p>
            Our worth added administrations guarantee the progression of products proceeds
            consistently and supply chains stay lean and streamlined for progress.
          </p>
          <button onClick={scrollToNews}>MORE ABOUT US</button>
        </div>

      </div>
    </section>
  );
}

export default Welcome;

