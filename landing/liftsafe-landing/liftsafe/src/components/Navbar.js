import React, { useState, useEffect } from 'react';
import './Navbar.css';
<img src="/logo.png" alt="LiftSafe Logo" />

const NAV_LINKS = [
  { label: 'Servicios',       href: '#servicios'       },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Clientes',        href: '#clientes'        },
  { label: 'Contacto',        href: '#contacto'        },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <a href="#inicio" className="navbar__logo">
          <img src="/logo.png" alt="LiftSafe" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="navbar__link"
               onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Solicitar cotización
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
