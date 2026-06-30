import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="navbar__logo footer__logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L4 10v12l12 8 12-8V10L16 2z" fill="#1565c0" stroke="#2196f3" strokeWidth="1.2"/>
              <path d="M16 8l-1 8h2l-1-8z" fill="white"/>
              <path d="M12 18l4-3 4 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="footer__brand-name">Lift<span>Safe</span></span>
          </a>
          <p className="footer__tagline">
            Inspección, certificación y seguridad para ascensores y elevadores en Colombia.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <p className="footer__col-title">Servicios</p>
            <a href="#servicios">Inspección técnica</a>
            <a href="#servicios">Certificación</a>
            <a href="#servicios">Mantenimiento</a>
            <a href="#servicios">Modernización</a>
          </div>
          <div className="footer__col">
            <p className="footer__col-title">Empresa</p>
            <a href="#certificaciones">Certificaciones</a>
            <a href="#clientes">Clientes</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer__col">
            <p className="footer__col-title">Contacto</p>
            <span>+57 601 123 4567</span>
            <span>info@liftsafe.com.co</span>
            <span>Bogotá D.C., Colombia</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} LiftSafe. Todos los derechos reservados.</p>
        <p>Registro normativo bajo NTC 5926 · RETIE 2013</p>
      </div>
    </footer>
  );
}
