import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                            style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                            Quiénes <span className="text-primary">Somos</span>
                        </motion.h2>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                            style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Agencia Del Olimpo ofrece soluciones integrales para optimizar la inversión y los tiempos de cada cliente. Nos enfocamos en diseñar estrategias integradas de marketing directo, generando experiencias memorables y reforzando la presencia de marca en acciones presenciales, ferias y eventos de todo tipo.
                            <br /><br />
                            <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>Nos adaptamos tanto a campañas de gran escala como a envíos puntuales, garantizando control, cumplimiento y trazabilidad.</span>
                        </motion.p>

                        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <motion.div
                                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                                style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', padding: '15px', borderRadius: 'var(--radius-md)', transition: 'box-shadow 0.3s' }}>
                                <div style={{ background: 'var(--color-secondary)', padding: '10px', borderRadius: '50%' }}>
                                    <Zap size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Enfoque Dinámico</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#666' }}>Creatividad, personalización y optimización de recursos en cada proyecto.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                style={{
                                    display: 'flex',
                                    gap: '20px',
                                    alignItems: 'flex-start',
                                    background: 'white',
                                    padding: '20px',
                                    borderRadius: 'var(--radius-md)',
                                    boxShadow: '0 0 25px rgba(255, 190, 74, 0.5)', // Sombra dorada fija destacada
                                    borderLeft: '5px solid var(--color-primary)',
                                    cursor: 'pointer'
                                }}>
                                <div style={{ background: 'var(--color-primary)', padding: '12px', borderRadius: '50%', flexShrink: 0 }}>
                                    <MapPin size={28} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--color-primary)' }}>Cobertura Nacional</h3>
                                    <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
                                        Llegamos a cada rincón de Argentina. <span style={{ fontWeight: 600 }}>Contamos con Recursos Humanos (RRHH) propios en todo el país</span>, asegurando una ejecución ágil y controlada sin intermediarios.
                                    </p>
                                </div>
                            </motion.div>
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
                        {/* Floating Card Continua */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
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
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
