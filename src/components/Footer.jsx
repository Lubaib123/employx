import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, GraduationCap, Book, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Background elements */}
            <div className="footer-bg-elements">
                <div className="footer-bg-el f-el-1"><GraduationCap size={120} /></div>
                <div className="footer-bg-el f-el-2"><Book size={100} /></div>
                <div className="footer-bg-el f-el-3"><Award size={140} /></div>
            </div>

            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                            <img src="/logo.png" alt="Employx Icon" style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ 
                                fontFamily: 'Poppins, sans-serif', 
                                fontSize: '24px', 
                                fontWeight: '700', 
                                color: '#FFFFFF',
                                letterSpacing: '-0.02em'
                            }}>Employx</span>
                        </div>
                        <p>
                            Empowering your education journey and career success on a global scale.
                        </p>
                        <div className="social-icons">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Placement</a></li>
                            <li><a href="#services">Visa Support</a></li>
                            <li><a href="#services">Counseling</a></li>
                            <li><a href="#services">Mentorship</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Employx. Powered by Future.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
