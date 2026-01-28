import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Quiénes <span className="text-primary">Somos</span></h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Agencia Del Olimpo ofrece soluciones integrales para optimizar la inversión y los tiempos de cada cliente. Nos enfocamos en diseñar estrategias integradas de marketing directo, generando experiencias memorables y reforzando la presencia de marca en acciones presenciales, ferias y eventos de todo tipo.
                        </p>

                        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--color-primary)', padding: '10px', borderRadius: '50%' }}>
                                    <Zap size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Enfoque Dinámico</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#666' }}>Creatividad, personalización y optimización de recursos en cada proyecto.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                                    <Target size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Cobertura Nacional</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#666' }}>Llegamos a cada rincón de Argentina con nuestras soluciones logísticas y de personal.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '100%',
                            boxShadow: 'var(--shadow-lg)',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img
                                src="/team.png"
                                alt="Equipo Agencia Del Olimpo"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }}></div>
                        </div>
                        {/* Floating Card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-30px',
                            background: 'white',
                            padding: '20px',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-hover)',
                            maxWidth: '200px'
                        }}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--color-secondary)' }}>+500</p>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>Eventos realizados con éxito en todo el país.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
