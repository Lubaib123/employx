import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Team meeting" />
                    <motion.div 
                        className="experience-badge"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <span className="years">10+</span>
                        <span className="text">Years Expertise<br />Education</span>
                    </motion.div>
                </motion.div>

                <div className="about-content">
                    <motion.span 
                        className="badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >About Us</motion.span>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >Empowering Your <br />Career <span className="highlight">Journey</span></motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        At Employx, we believe that every student deserves the opportunity to shine.
                        We bridge the gap between academic institutions and the global education world,
                        ensuring that talent meets the right opportunity.
                    </motion.p>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Our mission is to democratize education by providing expert guidance, direct university placements, and comprehensive career roadmaps for students worldwide.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <button className="btn-secondary">Explore Our Network</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
