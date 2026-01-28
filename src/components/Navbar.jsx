import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    // Si estamos en home, scrollear
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si no, navegar a home y luego scrollear (esto es básico, idealmente se usa hash link)
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Quiénes Somos', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        padding: scrolled ? '15px 0' : '25px 0',
        transition: 'all 0.3s ease',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          // Estilos condicionales: Cápsula solo si NO es home
          background: !isHome ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          padding: !isHome ? '8px 20px' : '0',
          borderRadius: !isHome ? '50px' : '0',
          boxShadow: !isHome ? '0 4px 15px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease'
        }}>
          <img src="/logo.png" alt="Agencia Del Olimpo Logo" style={{ height: !isHome ? '40px' : '50px', width: 'auto', transition: 'height 0.3s ease' }} />
          <span style={{
            fontSize: !isHome ? '1.2rem' : '1.5rem',
            fontWeight: 800,
            color: 'var(--color-text)', // Color base
            lineHeight: 1,
            transition: 'all 0.3s ease'
          }}>
            Agencia <span style={{ color: 'var(--color-primary)' }}>Del Olimpo</span>
          </span>
        </a>

        {/* Desktop Links (Centered Absolute) */}
        <div className="desktop-links" style={{
          display: 'none',
          gap: '30px',
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} style={{
              fontWeight: 600,
              fontSize: '1rem',
              color: (!isHome && !scrolled) ? 'white' : 'var(--color-text)', // Blanco en internas sin scroll, negro en scroll o home
              cursor: 'pointer',
              textShadow: (!isHome && !scrolled) ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
              transition: 'color 0.3s ease'
            }} className="hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Button (Right) */}
        <div className="desktop-action" style={{ display: 'none' }}>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn btn-secondary" style={{ padding: '10px 25px', fontSize: '0.9rem' }}>
            Solicitar Presupuesto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }} className="mobile-toggle">
          {isOpen ? <X size={28} color="var(--color-text)" /> : <Menu size={28} color="var(--color-text)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'white',
              padding: '20px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              borderTop: '1px solid #eee'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', textAlign: 'center' }}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
              Solicitar Presupuesto
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-links { display: flex !important; }
          .desktop-action { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
