import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.');
            return;
        }

        // 1. Client-side instant block (localStorage)
        const recentSubmissions = JSON.parse(localStorage.getItem('submission_ts') || '[]');
        const now = Date.now();
        const oneDayAgo = now - 24 * 60 * 60 * 1000;
        
        // Filter out old timestamps
        const validSubmissions = recentSubmissions.filter(ts => ts > oneDayAgo);
        
        if (validSubmissions.length >= 3) {
            setError('Too many messages sent. Please try again tomorrow.');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // 2. Get User IP for secondary validation
            let userIp = 'unknown';
            try {
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();
                userIp = ipData.ip;
            } catch (ipErr) {
                console.warn('Could not fetch IP, proceeding with basic validation');
            }

            // 3. Optional: You could query Firestore here to check the IP count, 
            // but for most spam, localStorage + IP storage is enough to track and block.
            
            await addDoc(collection(db, 'leads'), {
                ...formData,
                ip: userIp,
                timestamp: serverTimestamp(),
                status: 'new'
            });

            // 4. Update localStorage
            validSubmissions.push(now);
            localStorage.setItem('submission_ts', JSON.stringify(validSubmissions));

            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err) {
            console.error('Error adding document: ', err);
            setError('There was an error submitting your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                <p>Building No: 354, Fifteen square, 1st Floor, Kondotty Malappuram, Kerala 673638</p>
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
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
                            {isSuccess && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="success-message"
                                    style={{ 
                                        backgroundColor: '#ecfdf5', 
                                        color: '#065f46', 
                                        padding: '1rem', 
                                        borderRadius: '12px',
                                        marginBottom: '1.5rem',
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '0.75rem',
                                        border: '1px solid #10b981',
                                        fontWeight: '600'
                                    }}
                                >
                                    <CheckCircle size={20} className="text-emerald-500" /> 
                                    <span>Thank you! Your message has been sent successfully.</span>
                                </motion.div>
                            )}

                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
