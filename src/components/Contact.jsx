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
                                <div style={{ background: 'var(--color-bg-alt)', padding: '15px', borderRadius: '50%' }}>
                                    <Phone size={24} color="var(--color-secondary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Teléfono / WhatsApp</h4>
                                    <a href="https://wa.me/5492996559397" className="hover:text-primary transition-colors">299 655 9397</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: 'var(--color-bg-alt)', padding: '15px', borderRadius: '50%' }}>
                                    <Mail size={24} color="var(--color-secondary)" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                                    <a href="mailto:agenciadelolimpo@hotmail.com" className="hover:text-primary transition-colors">agenciadelolimpo@hotmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ background: 'var(--color-bg-alt)', padding: '15px', borderRadius: '50%' }}>
                                    <Instagram size={24} color="var(--color-secondary)" />
                                </div>
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
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Solicitar Presupuesto</h3>
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
                            <button type="submit" className="btn btn-secondary" style={{ marginTop: '10px', width: '100%' }}>
                                Enviar Mensaje <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
