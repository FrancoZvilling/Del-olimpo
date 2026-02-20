import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, #FFBE4A 0%, #FFFFFF 100%)', // Fallback or base
            overflow: 'hidden'
        }}>
            {/* Background with overlay if needed. For now simple gradient or eventually an image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 100%)', // Gradiente mucho más sutil para dar protagonismo a las partículas
                zIndex: 2 // El gradiente va encima de las partículas (z-index 1) para un efecto pulido
            }}></div>

            {/* Componente Animado Integrado (Combina Red + Formas Geom.) */}
            <ParticleBackground />

            <div className="container" style={{ position: 'relative', zIndex: 3, display: 'grid', gridTemplateColumns: '1fr', gap: '40px', paddingTop: '80px' }}>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'rgba(255, 190, 74, 0.2)',
                            color: '#8F6D2D',
                            borderRadius: '50px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            marginBottom: '20px'
                        }}
                    >
                        Marketing Promocional · Logística · Eventos
                    </motion.span>

                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--color-text)', marginBottom: '20px', lineHeight: 1.1 }}>
                        Agencia <span style={{ color: 'var(--color-primary)' }}>Del Olimpo</span>
                    </h1>

                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-text-muted)', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }} className="hero-text">
                        Conectamos tu marca con el público objetivo mediante soluciones creativas y personalizadas. Convertimos ideas en experiencias memorables.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-secondary">
                            Empezar Ahora <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-primary">
                            Nuestros Servicios
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Blob */}
            <div style={{
                position: 'absolute',
                right: '-10%',
                bottom: '-10%',
                width: '50%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(255,190,74,0.4) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 1
            }}></div>

            <style>{`
                @media (max-width: 768px) {
                    .hero-content {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-buttons {
                        justify-content: center;
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
