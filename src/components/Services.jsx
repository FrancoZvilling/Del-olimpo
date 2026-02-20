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
            color: "var(--color-primary)",
            shadowGlow: "rgba(255, 190, 74, 0.4)", // --color-primary
            iconBg: "rgba(255, 190, 74, 0.15)"
        },
        {
            id: "eventos",
            title: "Eventos y Personal",
            icon: <Users size={40} />,
            items: ["Eventos corporativos y sociales", "Promotoras y azafatas", "Ferias y congresos", "Asistencia protocolar"],
            color: "var(--color-secondary)",
            shadowGlow: "rgba(143, 109, 45, 0.4)", // --color-secondary
            iconBg: "rgba(143, 109, 45, 0.15)"
        },
        {
            id: "logistica",
            title: "Logística y Producción",
            icon: <Truck size={40} />,
            items: ["Logística integral", "Armado de stands", "Vinilos corporativos", "Relevamiento fotográfico"],
            color: "#333",
            shadowGlow: "rgba(51, 51, 51, 0.4)", // #333333
            iconBg: "rgba(51, 51, 51, 0.15)"
        }
    ];

    return (
        <section id="services" className="section" style={{ background: 'var(--color-bg-alt)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Nuestros <span className="text-primary">Servicios</span></h2>
                    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '25px', fontWeight: 600 }}>
                            Pensamos, organizamos y ejecutamos
                        </h3>
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.8 }}
                            style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                            {[
                                "Entendemos tu necesidad",
                                "Planificamos la estrategia",
                                "Ejecutamos en territorio",
                                "Acompañamos y resolvemos"
                            ].map((step, i) => (
                                <motion.div key={i}
                                    variants={{ hidden: { opacity: 0, scale: 0.8, y: 20 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '50px',
                                        boxShadow: 'var(--shadow-sm)',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: 'var(--color-text)'
                                    }}>
                                    <span style={{
                                        background: 'var(--color-primary)',
                                        color: 'white',
                                        width: '26px',
                                        height: '26px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {i + 1}
                                    </span>
                                    {step}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {servicesData.map((service, index) => (
                        <Link to={`/servicios/${service.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                            <motion.div
                                initial="rest"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    rest: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } },
                                    hover: { y: -10, boxShadow: `0 15px 35px ${service.shadowGlow}` }
                                }}
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
                                <motion.div
                                    variants={{
                                        rest: { rotate: 0, scale: 1 },
                                        hover: { rotate: [0, -10, 10, -5, 5, 0], scale: 1.1, transition: { duration: 0.5 } }
                                    }}
                                    style={{
                                        marginBottom: '20px',
                                        color: service.color,
                                        background: service.iconBg,
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    {service.icon}
                                </motion.div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{service.title}</h3>

                                <motion.ul
                                    variants={{
                                        rest: { opacity: 1 },
                                        hover: { transition: { staggerChildren: 0.1 } } // Stagger items on card hover
                                    }}
                                    style={{ flex: 1, marginBottom: '20px' }}>
                                    {service.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            variants={{
                                                rest: { opacity: 0.8, x: 0 },
                                                hover: { opacity: 1, x: 5, transition: { type: "spring", stiffness: 300 } },
                                                visible: { opacity: 0.8, x: 0 } // Default state when just viewed
                                            }}
                                            style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
                                            <CheckCircle size={16} color={service.color} />
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <div style={{
                                    marginTop: 'auto',
                                    color: service.color,
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '0.95rem'
                                }}>
                                    Ver Detalles <ArrowRight size={16} />
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
