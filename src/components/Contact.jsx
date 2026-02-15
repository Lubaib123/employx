import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">Get in Touch</span>
                    <h2>Ready to Start Your Journey?</h2>
                    <p>We are here to help you every step of the way.</p>
                </div>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>Contact Information</h3>
                        <p>Fill up the form and our team will get back to you within 24 hours.</p>

                        <div className="info-item">
                            <Phone className="icon" size={24} />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 123 456 7890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="icon" size={24} />
                            <div>
                                <h4>Email</h4>
                                <p>contact@employx.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="icon" size={24} />
                            <div>
                                <h4>Address</h4>
                                <p>123 Education Lane, Career City, State, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
