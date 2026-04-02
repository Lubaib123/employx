import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, GraduationCap, Book, Award, BookOpen } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background elements */}
            <div className="hero-bg-elements">
                <motion.div 
                    className="bg-element el-1"
                    animate={{ y: [0, -20, 0], opacity: [0.03, 0.06, 0.03] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <GraduationCap size={160} />
                </motion.div>
                <motion.div 
                    className="bg-element el-2"
                    animate={{ y: [0, 20, 0], opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                >
                    <Book size={120} />
                </motion.div>
                <motion.div 
                    className="bg-element el-3"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                >
                    <Award size={180} />
                </motion.div>
                <motion.div 
                    className="bg-element el-4"
                    animate={{ x: [0, 15, 0], opacity: [0.03, 0.06, 0.03] }}
                    transition={{ duration: 8, repeat: Infinity }}
                >
                    <BookOpen size={140} />
                </motion.div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                staggerChildren: 0.1,
                                duration: 0.6
                            }
                        }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="badge">Education Consultancy</motion.div>
                    
                    <motion.h1 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        style={{ lineHeight: '1.1' }}
                    >
                        Empowering Your <br />
                        <span className="highlight">Future</span> in <br />
                        Global Education
                    </motion.h1>
                    
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-subtitle">
                        Navigating the complexities of higher education and career development.
                        We provide top-tier consultancy and placement services for global success.
                    </motion.p>
                    
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-actions">
                        <button className="btn-primary">
                            Get Consultation <ArrowRight size={20} />
                        </button>
                        <button className="btn-secondary">
                            Explore Programs
                        </button>
                    </motion.div>
                    
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-trust">
                        <div className="trust-item">
                            <CheckCircle size={18} color="#1ECC4A" />
                            <span>University Placement</span>
                        </div>
                        <div className="trust-item">
                            <CheckCircle size={18} color="#1ECC4A" />
                            <span>Visa Assistance</span>
                        </div>
                    </motion.div>
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
