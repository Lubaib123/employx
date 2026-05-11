import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const ClientsList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'clients'), orderBy('order', 'asc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const temp = [];
            snapshot.forEach((doc) => {
                temp.push({ id: doc.id, ...doc.data() });
            });
            setClients(temp);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching clients:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading || clients.length === 0) {
        return null; // Don't show the section if loading or empty
    }

    return (
        <section className="clients-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">Trusted Partners</span>
                    <h2>Our <span className="highlight-text">Clients</span></h2>
                    <p>Join the growing network of institutions and companies that trust us with their careers.</p>
                </div>
                <div className="clients-scroll-container">
                    <div className="clients-track">
                        <div className="clients-group">
                            {clients.map((client) => (
                                <div key={`g1-${client.id}`} className="client-logo-wrapper">
                                    <img
                                        src={client.logoUrl}
                                        alt={client.name}
                                        className="client-logo-img"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate group for seamless infinite scrolling */}
                        <div className="clients-group" aria-hidden="true">
                            {clients.map((client) => (
                                <div key={`g2-${client.id}`} className="client-logo-wrapper">
                                    <img
                                        src={client.logoUrl}
                                        alt={client.name}
                                        className="client-logo-img"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsList;
