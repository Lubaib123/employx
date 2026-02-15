import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Zap, Users } from 'lucide-react';

const services = [
    {
        icon: <GraduationCap size={32} />,
        title: "For Students",
        description: "Get guidance from experts and find the best colleges that align with your career goals."
    },
    {
        icon: <Briefcase size={32} />,
        title: "Career Support",
        description: "We don't just find you a college; we help you secure a job after graduation."
    },
    {
        icon: <Users size={32} />,
        title: "Expert Mentorship",
        description: "Connect with seasoned professionals who can guide you through your career path."
    },
    {
        icon: <Zap size={32} />,
        title: "Fast Track",
        description: "Streamlined admission and placement processes to save you time and effort."
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">Our Services</span>
                    <h2>Why Choose <span className="highlight-text">Employx?</span></h2>
                    <p>We provide comprehensive support for your educational and professional journey.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-wrapper">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
