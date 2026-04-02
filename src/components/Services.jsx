import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Zap, Users } from 'lucide-react';

const services = [
    {
        icon: <GraduationCap size={48} />,
        title: "Global Placement",
        description: "Direct access to top-tier universities worldwide with guaranteed career support.",
        image: "/assets/university_placement_bg.png"
    },
    {
        icon: <Briefcase size={36} />,
        title: "Career GPS",
        description: "Personalized roadmaps to your dream job.",
        image: "/assets/career_gps_bg.png"
    },
    {
        icon: <Zap size={36} />,
        title: "Visa Elite",
        description: "Expedited processing with 99% success rate.",
        image: "/assets/visa_elite_bg.png"
    },
    {
        icon: <Users size={48} />,
        title: "Expert Network",
        description: "One-on-one mentorship from industry leaders and alumni of premier institutions.",
        image: "/assets/expert_network_bg.png"
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
                            style={{ 
                                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                color: 'white'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-wrapper" style={{ color: 'white' }}>{service.icon}</div>
                            <h3 style={{ color: 'white' }}>{service.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
