import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';
import Layout from '../components/Layout';

const servicesData = {
    marketing: {
        title: "Marketing y BTL",
        subtitle: "Conectamos tu marca con las emociones de tu público",
        description: "Diseñamos estrategias de impacto que van más allá de lo convencional. Desde activaciones en punto de venta hasta campañas de marketing directo, nos aseguramos de que tu mensaje llegue alto y claro.",
        color: "#FFBE4A", // Primary
        subServices: [
            { title: "Activaciones BTL", desc: "Intervenciones creativas en espacios públicos y privados para generar alto impacto.", imgColor: "#FFE0B2" },
            { title: "Trade Marketing", desc: "Gestión estratégica en el punto de venta para maximizar la visibilidad y rotación.", imgColor: "#FFCC80" },
            { title: "Marketing Directo", desc: "Comunicación personalizada para fidelizar y captar nuevos clientes potenciales.", imgColor: "#FFB74D" },
            { title: "Merchandising", desc: "Diseño y producción de materiales promocionales que destacan.", imgColor: "#FFA726" }
        ]
    },
    eventos: {
        title: "Eventos y Personal",
        subtitle: "Creamos experiencias memorables para cada ocasión",
        description: (
            <>
                Nos especializamos en la coordinación operativa de eventos, trabajando junto a equipos internos, proveedores y marcas para que todo suceda como está planificado. <br />
                <strong style={{ color: 'var(--color-primary)' }}>Estamos presentes antes, durante y después del evento.</strong>
            </>
        ),
        color: "#8F6D2D", // Secondary
        subServices: [
            {
                title: "Coordinación Integral",
                items: ["Coordinación general del evento"],
                imgColor: "#D7CCC8"
            },
            {
                title: "Proveedores y Equipos",
                items: ["Gestión de proveedores y equipos"],
                imgColor: "#BCAAA4"
            },
            {
                title: "Supervisión y Timing",
                items: ["Supervisión en tiempo real", "Control de tiempos y armado"],
                imgColor: "#A1887F"
            },
            {
                title: "Respuesta Inmediata",
                items: ["Resolución en terreno"],
                imgColor: "#8D6E63"
            }
        ]
    },
    logistica: {
        title: "Logística y Producción",
        subtitle: "Soluciones operativas eficientes en todo el país",
        description: "La base de una gran acción es una ejecución impecable. Nos ocupamos de la logística, el montaje y la producción para que vos solo te preocupes por los resultados.",
        color: "#333333", // Dark
        subServices: [
            {
                title: "Logística para acciones promocionales",
                items: [
                    "Armado y desarmado de eventos",
                    "Distribución de material POP",
                    "Coordinación de personal",
                    "Timing y ejecución en punto de venta"
                ],
                imgColor: "#E0E0E0"
            },
            {
                title: "Logística de transporte y distribución",
                items: [
                    "Retiro y entrega de mercadería",
                    "Distribución a sucursales / puntos de venta",
                    "Coordinación de envíos",
                    "Seguimiento y control operativo"
                ],
                imgColor: "#BDBDBD"
            }
        ]
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData[id];

    if (!service) {
        return (
            <Layout>
                <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh' }}>
                    <h2>Servicio no encontrado</h2>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Volver al Inicio</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Header / Hero del Servicio */}
            <div style={{
                background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(135deg, ${service.color}, #000)`,
                color: 'white',
                padding: '120px 20px 80px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>{service.title}</h1>
                        <p style={{ fontSize: '1.4rem', color: '#ddd', maxWidth: '700px', margin: '0 auto' }}>{service.subtitle}</p>
                    </motion.div>
                </div>
            </div>

            {/* Descripción General */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '40px' }}>
                        {service.description}
                    </p>
                </div>

                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2rem' }}>¿Qué incluye este servicio?</h2>

                    <div className="services-grid">
                        {service.subServices.map((sub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'white',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid #eee'
                                }}
                            >
                                {/* Placeholder Image Area */}
                                <div style={{
                                    height: '180px',
                                    background: sub.imgColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(0,0,0,0.2)'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Imagen: {sub.title}</span>
                                </div>

                                <div style={{ padding: '25px' }}>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: service.color }}>{sub.title}</h3>
                                    {sub.desc && <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{sub.desc}</p>}
                                    {sub.items && (
                                        <ul style={{ color: '#666', fontSize: '0.95rem', paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.5' }}>
                                            {sub.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#f9f9f9', padding: '80px 20px', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>¿Listo para potenciar tu marca?</h2>
                    <p style={{ marginBottom: '30px', color: '#666' }}>Solicitá un presupuesto personalizado para tu próxima acción de {service.title}.</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <Link to="/#contact" className="btn btn-secondary">
                            Solicitar Presupuesto
                        </Link>
                        <Link to="/" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ArrowLeft size={18} /> Volver al Inicio
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
