import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const [openItemIndex, setOpenItemIndex] = useState(null);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);

    const handleItemClick = (index) => {
        setOpenItemIndex(openItemIndex === index ? null : index);
    };

    // Define the whyChooseUsItems data
    const whyChooseUsItems = [
        {
            header: 'Global Network Coverage',
            content: 'With operations spanning across 150+ countries and strategic partnerships worldwide, we ensure your cargo reaches any destination efficiently. Our extensive network includes major ports, airports, and land routes, providing comprehensive coverage for all your shipping needs.'
        },
        {
            header: 'Advanced Tracking Technology',
            content: 'Our state-of-the-art tracking system provides real-time visibility of your shipments. Access detailed status updates, estimated delivery times, and location tracking through our user-friendly platform, ensuring complete transparency throughout the shipping process.'
        },
        {
            header: 'Customized Logistics Solutions',
            content: 'We understand that every business has unique requirements. Our team of experts works closely with you to develop tailored logistics solutions that optimize your supply chain, reduce costs, and improve delivery efficiency according to your specific needs.'
        },
        {
            header: '24/7 Customer Support',
            content: 'Our dedicated support team is available round the clock to assist you with any queries or concerns. Whether it\'s shipment tracking, documentation, or emergency assistance, we ensure prompt and reliable support whenever you need it.'
        },
    ];

    // Define the testimonials data
    const testimonials = [
        {
            text: 'Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.',
            name: 'JOHN DEO',
            position: 'Managing Director',
        },
        {
            text: 'TransMax has revolutionized our supply chain operations. Their innovative logistics solutions and dedicated team have significantly reduced our delivery times and operational costs. The real-time tracking system and proactive communication have made them an invaluable partner in our global expansion.',
            name: 'SARAH CHEN',
            position: 'Operations Director, TechGlobal Inc.',
        },
        {
            text: 'Working with TransMax has been a game-changer for our business. Their comprehensive logistics network and attention to detail ensure our products reach customers worldwide efficiently. The team\'s expertise in customs clearance and documentation has streamlined our international shipping process.',
            name: 'MICHAEL RODRIGUEZ',
            position: 'Supply Chain Manager, Global Retail Co.',
        },
    ];

    const handlePrevTestimonial = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentTestimonialIndex(
                (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
            );
        }, 500); // Match CSS transition duration
    };

    const handleNextTestimonial = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentTestimonialIndex(
                (prevIndex) => (prevIndex + 1) % testimonials.length
            );
        }, 500); // Match CSS transition duration
    };

    // Auto slide functionality
    useEffect(() => {
        setFadeIn(true); // Start with fade-in on initial mount
        const interval = setInterval(() => {
            setFadeIn(false); // Start fade-out before changing testimonial
            setTimeout(() => {
                setCurrentTestimonialIndex(
                    (prevIndex) => (prevIndex + 1) % testimonials.length
                );
            }, 500); // Allow time for fade-out before changing content
        }, 30000); // Change testimonial every 30 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [testimonials.length]); // Re-run effect if the number of testimonials changes

    useEffect(() => {
        // This effect runs after currentTestimonialIndex is updated
        setFadeIn(true); // Trigger fade-in for the new content
    }, [currentTestimonialIndex]);

    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (
        <section className={styles['testimonials-why-choose-us']}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {/* Trusted Clients Section */}
                    <div className={styles['col-md-6']}>
                        <h2>TRUSTED CLIENTS</h2>
                        <p className={styles.subheader}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                        {/* Testimonial Slider */}
                        <div className={styles['testimonial-card']}>
                            <div className={styles['quote-area']}>
                                <span className={styles['quote-symbol']}>"</span>
                            </div>
                            <div
                                key={currentTestimonialIndex}
                                className={styles['testimonial-content']}
                                style={{ opacity: fadeIn ? 1 : 0 }}
                            >
                                <p>{currentTestimonial.text}</p>
                            </div>
                            <div className={styles['speech-tail']}></div>
                        </div>


                        {/* Content below testimonial block */}
                        <div className={styles['testimonial-footer']}>
                            {/* Slider Navigation */}
                            <div className={styles['slider-nav']}>
                                <button onClick={handlePrevTestimonial}>&lt;</button>
                                <button onClick={handleNextTestimonial}>&gt;</button>
                            </div>
                            <div className={styles['client-info']}>
                                <h4>{currentTestimonial.name}</h4>
                                <p>{currentTestimonial.position}</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Us Section */}
                    <div className={styles['col-md-6']}>
                        <h2>WHY CHOOSE US</h2>
                        <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                        {/* Accordion/Expandable Items */}
                        <div className={styles['why-choose-us-items']}>
                            {whyChooseUsItems.map((item, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles['item-header']} onClick={() => handleItemClick(index)}>
                                        <p>{item.header}</p>
                                        <button>{openItemIndex === index ? '-' : '+'}</button>
                                    </div>
                                    {openItemIndex === index && (
                                        <div className={styles['item-content']}>
                                            <p>{item.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
