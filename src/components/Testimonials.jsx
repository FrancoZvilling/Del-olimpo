import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        brand: "TechSolutions Arg",
        rep: "Martín Rodriguez, Gerente de Marketing",
        text: "La verdad que lo de Agencia Del Olimpo superó las expectativas. Armaron el stand para la expo en tiempo récord y las promotoras unas genias, súper predispuestas. Se nota cuando hay laburo serio atrás.",
        rating: 5
    },
    {
        brand: "Grupo Fénix",
        rep: "Gustavo A., Director Operativo",
        text: "Veníamos renegando con otros proveedores para los eventos de fin de año y con ellos fue otra historia. Cumplieron con todo lo pactado y los chicos de RRHH son unos fenómenos reclutando perfil.",
        rating: 5
    },
    {
        brand: "Consumo Masivo S.A.",
        rep: "Sofia L., Jefa de Producto",
        text: "Hicimos un trade marketing en supermercados de todo el país y la cobertura que tienen es real. Me llegaban los reportes al toque y las ventas repuntaron un montón. Súper recomendables.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="section" style={{ background: '#f9f9f9', position: 'relative', overflow: 'hidden' }}>
            {/* Decoration */}
            <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'var(--color-primary)', borderRadius: '50%', opacity: 0.05 }}></div>
            <div style={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, background: 'var(--color-secondary)', borderRadius: '50%', opacity: 0.05 }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Marcas que <span className="text-secondary">Confiaron</span> en Nosotros</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            El respaldo de nuestros clientes es nuestra mejor carta de presentación.
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="rest"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                rest: { opacity: 0, y: 30, borderColor: '#eee' },
                                visible: { opacity: 1, y: 0, borderColor: '#eee', transition: { delay: index * 0.1, duration: 0.5 } },
                                hover: {
                                    y: -8,
                                    borderColor: 'var(--color-primary)',
                                    boxShadow: '0 15px 30px rgba(255, 190, 74, 0.2)',
                                    transition: { duration: 0.3 }
                                }
                            }}
                            style={{
                                background: 'white',
                                padding: '30px',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-sm)',
                                border: '2px solid transparent', // Cambiado a 2px para que el cambio de color de borde se vea mejor sin saltar
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.15 }}
                            >
                                <Quote size={40} color="var(--color-primary)" />
                            </motion.div>

                            <motion.div
                                variants={{
                                    rest: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: (index * 0.1) + 0.3 } }
                                }}
                                style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            rest: { opacity: 0, y: -15, scale: 0.5, rotate: -30 },
                                            visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 12 } }
                                        }}
                                        style={{ display: 'inline-flex' }}
                                    >
                                        <Star size={18} fill="#FFD700" color="#FFD700" />
                                    </motion.span>
                                ))}
                            </motion.div>

                            <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic' }}>
                                "{item.text}"
                            </p>

                            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '15px' }}>
                                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text)', fontSize: '1.1rem' }}>{item.brand}</h4>
                                <p style={{ fontSize: '0.85rem', color: '#888' }}>{item.rep}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
