import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Comencemos a <br /><span className="text-primary">Trabajar Juntos</span></h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '40px' }}>
                            ¿Tenés un proyecto en mente? Contanos tus ideas y te ayudaremos a hacerlas realidad con la mejor estrategia.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(143, 109, 45, 0)", "0 0 20px rgba(143, 109, 45, 0.6)", "0 0 0 rgba(143, 109, 45, 0)"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                    style={{ background: 'var(--color-bg-alt)', padding: '15px', borderRadius: '50%' }}>
                                    <Phone size={24} color="var(--color-secondary)" />
                                </motion.div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Teléfono / WhatsApp</h4>
                                    <a href="https://wa.me/5492996559397" className="hover:text-primary transition-colors">299 655 9397</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(143, 109, 45, 0)", "0 0 20px rgba(143, 109, 45, 0.6)", "0 0 0 rgba(143, 109, 45, 0)"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} // Retraso para que respiren desfasados
                                    style={{ background: 'var(--color-bg-alt)', padding: '15px', borderRadius: '50%' }}>
                                    <Mail size={24} color="var(--color-secondary)" />
                                </motion.div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                                    <a href="mailto:agenciadelolimpo@hotmail.com" className="hover:text-primary transition-colors">agenciadelolimpo@hotmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(143, 109, 45, 0)", "0 0 20px rgba(143, 109, 45, 0.6)", "0 0 0 rgba(143, 109, 45, 0)"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }} // Tercer desfase
                                    style={{ background: 'var(--color-bg-alt)', padding: '15px', borderRadius: '50%' }}>
                                    <Instagram size={24} color="var(--color-secondary)" />
                                </motion.div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Instagram</h4>
                                    <a href="https://instagram.com/delolimpo_agencia" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@delolimpo_agencia</a>
                                </div>
                            </div>

                            <div style={{ marginTop: '20px', padding: '20px', background: '#f9f9f9', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-primary)' }}>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                    <strong>Nota Administrativa:</strong> Realizamos facturación A/B/C (Monotributo/Responsable Inscripto según corresponda) para empresas.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Hablemos de tu proyecto</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Nombre Completo</label>
                                <input type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email</label>
                                <input type="email" placeholder="ejemplo@correo.com" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Servicio de Interés</label>
                                <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', background: 'white' }}>
                                    <option>Marketing y BTL</option>
                                    <option>Eventos y Personal</option>
                                    <option>Logística</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Mensaje</label>
                                <textarea rows="4" placeholder="Contanos más sobre tu proyecto..." style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
                            </div>
                            <div style={{ position: 'relative', marginTop: '10px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                {/* Polvo dorado / Tinkerbell */}
                                {[...Array(12)].map((_, i) => {
                                    const angle = (Math.PI * 2 * i) / 12; // Repartidos en círculo alrededor del centro
                                    const distance = 30 + Math.random() * 40; // Distancia de expansión
                                    const xOffset = Math.cos(angle) * distance;
                                    const yOffset = Math.sin(angle) * distance;

                                    return (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                x: [0, xOffset, xOffset + (Math.random() * 10 - 5)],
                                                y: [0, yOffset, yOffset - 15],
                                                opacity: [0, 1, 0],
                                                scale: [0, Math.random() * 1.5 + 0.5, 0]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatDelay: 0.5, // 2s de ciclo total (1.5 act + 0.5 static)
                                                delay: Math.random() * 0.5, // Leve desfase inicial entre las chispas
                                                ease: "easeOut"
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: '6px',
                                                height: '6px',
                                                background: '#FFD700', // Dorado fuerte
                                                borderRadius: '50%',
                                                boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.8)',
                                                pointerEvents: 'none',
                                                zIndex: 0,
                                            }}
                                        />
                                    );
                                })}

                                <motion.button
                                    type="submit"
                                    className="btn btn-secondary"
                                    animate={{
                                        x: [0, -3, 3, -3, 3, 0, 0, 0, 0, 0], // Vibra al principio, luego estático (sincronizado a 2s totales aprox)
                                        rotate: [0, -1, 1, -1, 1, 0, 0, 0, 0, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(143, 109, 45, 0.4)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ width: '100%', border: 'none', position: 'relative', zIndex: 1, boxShadow: '0 4px 10px rgba(143, 109, 45, 0.2)' }}>
                                    Enviar Mensaje <Send size={18} />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
