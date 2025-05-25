import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Welcome.css';
import image1 from '../../assets/images/microsoft-365-kTFmwxkF5bQ-unsplash.webp';
import image2 from '../../assets/images/mathurin-napoly-matnapo-Ygyp2kXy2I0-unsplash.webp';

function Welcome() {
  const { ref, inView } = useInView({ triggerOnce: true });

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

          <img src={image1} alt="Main" className="main-img" />

          <img src={image2} alt="Overlay" className="overlay-img" />

          <div className="clients-badge" ref={ref}>
            <h2>
              {inView ? (
                <CountUp
                  end={15350}
                  duration={2}
                  separator=","
                  suffix="+"
                />
              ) : (
                "0+"
              )}
            </h2>
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

