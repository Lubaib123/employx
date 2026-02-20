import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <img src="/logo.png" alt="EMPLOYX" className="logo-img" />
                </div>

                <nav className="desktop-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <button className="btn-primary">Get Started</button>
                </nav>

                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mobile-nav"
                    >
                        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        <button className="btn-primary" onClick={() => setIsMenuOpen(false)}>Get Started</button>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;
