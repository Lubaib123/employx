import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge">New Era of Recruitment</div>
                    <h1>
                        Connect. <span className="highlight">Career.</span> <br />
                        Success.
                    </h1>
                    <p className="hero-subtitle">
                        We help students connect with colleges and secure their dream jobs.
                        Your path to a successful career starts here.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary">
                            Find Jobs <ArrowRight size={20} />
                        </button>
                        <button className="btn-secondary">
                            For Colleges
                        </button>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <CheckCircle size={16} color="var(--color-accent)" />
                            <span>Verified Colleges</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={16} color="var(--color-accent)" />
                            <span>Direct Placement</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Placeholder for Hero Image - CSS handles the visuals */}
                    <div className="image-placeholder">
                        <div className="floating-card card-1">
                            <span>500+</span>
                            <p>Students Placed</p>
                        </div>
                        <div className="floating-card card-2">
                            <span>Top</span>
                            <p>Partner Colleges</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
