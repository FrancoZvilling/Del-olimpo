import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        // loadSlim is essential for particles to work without bringing the heavy full engine
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1 // Detrás del contenido, encima del gradiente base
            }}
            options={{
                fullScreen: { enable: false }, // Crucial para que se quede dentro del Hero section y no en toda la pantalla
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab", // Agarra las líneas con el mouse (Efecto "Red / Agencia")
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        grab: {
                            distance: 140, // Distancia para conectar al mouse
                            links: {
                                opacity: 1
                            }
                        }
                    },
                },
                particles: {
                    color: {
                        value: ["#8F6D2D", "#FFBE4A", "#ffffff"], // Colores de la marca: Bronce, Dorado, Blanco
                    },
                    links: {
                        color: "#FFBE4A", // Dorado suave para las conexiones
                        distance: 180, // Aumentamos la distancia para que haya más conexiones visibles
                        enable: true,
                        opacity: 0.8, // Muy visible ahora
                        width: 2, // Líneas más gruesas
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce", // Que reboten en los bordes para mantener la densidad
                        },
                        random: false,
                        speed: 1.5, // Movimiento lento y elegante
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 70, // Un poco más de partículas
                    },
                    opacity: {
                        value: 0.9, // Objetos casi opacos
                    },
                    shape: {
                        type: ["circle", "triangle", "polygon"], // Mezcla A y B: Red de líneas (links) + Objetos flotantes (shapes)
                        options: {
                            polygon: {
                                sides: 5
                            }
                        }
                    },
                    size: {
                        value: { min: 4, max: 9 }, // Tamaños mucho más grandes
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleBackground;
