import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Users, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesData = [
        {
            id: "marketing",
            title: "Marketing y BTL",
            icon: <Megaphone size={40} />,
            items: ["Acciones promocionales", "Trade Marketing", "Marketing directo", "Merchandising"],
            color: "var(--color-primary)"
        },
        {
            id: "eventos",
            title: "Eventos y Personal",
            icon: <Users size={40} />,
            items: ["Eventos corporativos y sociales", "Promotoras y azafatas", "Ferias y congresos", "Asistencia protocolar"],
            color: "var(--color-secondary)"
        },
        {
            id: "logistica",
            title: "Logística y Producción",
            icon: <Truck size={40} />,
            items: ["Logística integral", "Armado de stands", "Vinilos corporativos", "Relevamiento fotográfico"],
            color: "#333"
        }
    ];

    return (
        <section id="services" className="section" style={{ background: 'var(--color-bg-alt)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestros <span className="text-primary">Servicios</span></h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Soluciones integrales diseñadas para potenciar tu marca y optimizar cada interacción con tu público.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {servicesData.map((service, index) => (
                        <Link to={`/servicios/${service.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    background: 'white',
                                    padding: '40px 30px',
                                    borderRadius: 'var(--radius-md)',
                                    boxShadow: 'var(--shadow-sm)',
                                    borderTop: `4px solid ${service.color}`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    marginBottom: '20px',
                                    color: service.color,
                                    background: `${service.color}15`, // 15 is mostly transparent hex
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {service.icon}
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{service.title}</h3>

                                <ul style={{ flex: 1, marginBottom: '20px' }}>
                                    {service.items.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
                                            <CheckCircle size={16} color={service.color} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{
                                    marginTop: 'auto',
                                    color: service.color,
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.95rem'
                                }}>
                                    Ver Detalles <ArrowRight size={16} /> {/* Usar ArrowRight aquí requiere importarlo arriba */}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Services;
