import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const statsData = [
  { number: 890, label: 'Delivered packages' },
  { number: 137, label: 'Countries covered' },
  { number: 740, label: 'Tons of\n Goods' }, // <-- break manually
  { number: 600, label: 'Satisfied Clients' },
];


const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="stats-section">
      <div className="stats-container" ref={ref}>
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`stat-item ${inView ? 'animate' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="background-number">
              <CountUp
                end={inView ? stat.number : 0}
                duration={2}
                preserveValue
              />
            </div>
            <div className="foreground-content">
              <div className="stat-number">
                <CountUp end={inView ? stat.number : 0} duration={2} />
              </div>
              <div className="stat-label">
                {stat.label.split('\n').map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
