import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24M8 12h16M8 20h16" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#1976d2" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Inspección técnica',
    desc: 'Evaluamos el estado mecánico, eléctrico y estructural de cada ascensor con protocolos rigurosos y equipos calibrados.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#1976d2" strokeWidth="1.5"/>
        <path d="M10 16l4 4 8-8" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certificación normativa',
    desc: 'Emitimos certificados de cumplimiento bajo las normas NTC y RETIE vigentes para operación legal en Colombia.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 16a10 10 0 1 0 20 0" stroke="#1976d2" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 6v10l6 4" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Mantenimiento preventivo',
    desc: 'Planes de mantenimiento periódico para prolongar la vida útil del equipo y prevenir fallas antes de que ocurran.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 10v12l12 8 12-8V10L16 4z" stroke="#1976d2" strokeWidth="1.5"/>
        <path d="M16 14v8M12 18h8" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Modernización',
    desc: 'Actualizamos sistemas de control, cabinas y mecanismos de seguridad de equipos con tecnología desactualizada.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V12M16 28V8M24 28V16" stroke="#2196f3" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="8" cy="10" r="2" fill="#1976d2"/>
        <circle cx="16" cy="6" r="2" fill="#1976d2"/>
        <circle cx="24" cy="14" r="2" fill="#1976d2"/>
      </svg>
    ),
    title: 'Diagnóstico y reportes',
    desc: 'Entregamos informes técnicos detallados con hallazgos, recomendaciones y plan de acción para cada equipo.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C10 4 6 8 6 14c0 8 10 14 10 14s10-6 10-14c0-6-4-10-10-10z" stroke="#1976d2" strokeWidth="1.5"/>
        <circle cx="16" cy="14" r="4" stroke="#2196f3" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Atención de urgencias',
    desc: 'Respuesta prioritaria ante fallas críticas. Nuestros técnicos están disponibles para atender emergencias en el menor tiempo posible.',
  },
];

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__inner">
        <header className="section-header">
          <p className="section-eyebrow">Lo que hacemos</p>
          <h2 className="section-title">Servicios especializados<br />en ascensores</h2>
          <p className="section-sub">
            Cubrimos todo el ciclo de vida de su equipo elevador, desde la inspección inicial
            hasta la certificación y el mantenimiento continuo.
          </p>
        </header>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article className="service-card" key={i}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
