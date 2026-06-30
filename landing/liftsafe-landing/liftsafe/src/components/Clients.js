import React from 'react';
import './Clients.css';

const TESTIMONIALS = [
  {
    text: 'LiftSafe nos acompañó en la certificación de todos los ascensores de nuestro edificio corporativo. El proceso fue claro, rápido y sin sorpresas. Altamente recomendados.',
    author: 'Carlos M.',
    role: 'Gerente de instalaciones — Torre Empresarial Bogotá',
    initials: 'CM',
  },
  {
    text: 'Llevamos más de 5 años con ellos. Sus reportes técnicos son los más completos que he visto en el sector. Nos han evitado paradas no programadas en varias ocasiones.',
    author: 'Adriana R.',
    role: 'Directora de operaciones — Clínica San Cristóbal',
    initials: 'AR',
  },
  {
    text: 'El equipo de LiftSafe respondió en menos de 3 horas ante una falla crítica en nuestro montacargas. Su atención de urgencias es real, no solo una promesa.',
    author: 'Fernando T.',
    role: 'Jefe de mantenimiento — Centro Comercial Plaza Norte',
    initials: 'FT',
  },
];

const SECTORS = [
  { label: 'Hospitales y clínicas' },
  { label: 'Centros comerciales' },
  { label: 'Torres corporativas' },
  { label: 'Hoteles' },
  { label: 'Conjuntos residenciales' },
  { label: 'Aeropuertos' },
  { label: 'Entidades públicas' },
  { label: 'Industria y bodegas' },
];

export default function Clients() {
  return (
    <section className="clients" id="clientes">
      <div className="clients__inner">
        <header className="section-header">
          <p className="section-eyebrow">Quiénes confían en nosotros</p>
          <h2 className="section-title">Clientes que operan<br />con tranquilidad</h2>
          <p className="section-sub">
            Trabajamos con empresas de todos los sectores donde la seguridad vertical no es opcional.
          </p>
        </header>

        <div className="clients__sectors">
          {SECTORS.map((s, i) => (
            <span className="sector-tag" key={i}>{s.label}</span>
          ))}
        </div>

        <div className="clients__testimonials">
          {TESTIMONIALS.map((t, i) => (
            <article className="testimonial" key={i}>
              <svg className="testimonial__quote" width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12C0 8.667 0.667 5.833 2 3.5C3.333 1.167 5.333 0 8 0h2l-2 6H10V20H0zm16 0V12c0-3.333.667-6.167 2-8.5C19.333 1.167 21.333 0 24 0h2l-2 6h2v14H16z" fill="#1565c0" fillOpacity="0.6"/>
              </svg>
              <p className="testimonial__text">{t.text}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial__name">{t.author}</div>
                  <div className="testimonial__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
