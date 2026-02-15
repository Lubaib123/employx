import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Team meeting" />
                    <div className="experience-badge">
                        <span className="years">10+</span>
                        <span className="text">Years in<br />Education</span>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="badge">About Us</span>
                    <h2>Empowering Your <br />Career Journey</h2>
                    <p>
                        At Employx, we believe that every student deserves the opportunity to shine.
                        We bridge the gap between academic institutions and the corporate world,
                        ensuring that talent meets opportunity.
                    </p>
                    <p>
                        Our dedicated team works tirelessly to partner with top colleges and
                        companies to create a seamless ecosystem for career growth.
                    </p>
                    <button className="btn-secondary">Learn More</button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
