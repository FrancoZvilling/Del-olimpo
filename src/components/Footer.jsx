import React from 'react';
import { Instagram, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'linear-gradient(to bottom, #1a1a1a, #000)', color: 'white', paddingTop: '80px', paddingBottom: '30px' }}>
            <div className="container">

                {/* Top Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '50px',
                    marginBottom: '60px',
                    borderBottom: '1px solid #333',
                    paddingBottom: '60px',
                    textAlign: 'center' // Global centering
                }}>

                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'white', // White container for logo visibility
                            padding: '10px 20px',
                            borderRadius: '8px'
                        }}>
                            <img src="/logo.png" alt="Agencia Del Olimpo Logo" style={{ height: '50px', width: 'auto' }} />
                            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'black' }}>Agencia <span className="text-primary">Del Olimpo</span></span>
                        </div>
                        <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem', maxWidth: '300px', margin: '0 auto' }}>
                            Transformamos ideas en experiencias. Somos tu socio estratégico en marketing promocional, logística y eventos en toda Argentina.
                        </p>
                        {/* Social icons removed from here as per request to move them to Contact column */}
                    </div>

                    {/* Quick Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'white' }}>Menú Rápido</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', alignItems: 'center' }}>
                            {['Inicio', 'Quiénes Somos', 'Servicios', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item === 'Inicio' ? 'home' : item === 'Quiénes Somos' ? 'about' : item.toLowerCase()}`}
                                        className="footer-link"
                                        style={{ justifyContent: 'center' }}
                                    >
                                        <ArrowRight size={14} color="var(--color-primary)" /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'white' }}>Contacto</h4>
                        {/* Simplified Contact: Just Icons */}
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '10px' }}>
                            <a href="https://wa.me/5492996559397" target="_blank" rel="noreferrer" className="footer-social-btn" title="WhatsApp">
                                <Phone size={18} />
                            </a>
                            <a href="https://instagram.com/delolimpo_agencia" target="_blank" rel="noreferrer" className="footer-social-btn" title="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="mailto:agenciadelolimpo@hotmail.com" className="footer-social-btn" title="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px',
                    fontSize: '0.9rem',
                    color: '#666',
                    textAlign: 'center'
                }}>
                    <p>&copy; {new Date().getFullYear()} Agencia Del Olimpo. Todos los derechos reservados.</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>Desarrollado por</span>
                        <a
                            href="https://wa.me/5493541315119"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                color: 'var(--color-primary)',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            Franco Zvilling
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
