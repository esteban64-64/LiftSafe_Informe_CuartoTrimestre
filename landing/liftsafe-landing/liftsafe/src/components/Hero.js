import React from 'react';
import './Hero.css';

const STATS = [
  { num: '+800', label: 'Equipos inspeccionados' },
  { num: '12+',  label: 'Años de experiencia'   },
  { num: '100%', label: 'Cumplimiento normativo' },
];

const NORMS = ['NTC 5926', 'RETIE 2013', 'ISO 9001'];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Background image difuminada */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            Plataforma de inspección técnica
          </div>

          <h1 className="hero__headline">
            Transformamos<br />
            la inspección de<br />
            <em className="hero__headline--accent">ascensores</em>
          </h1>

          <p className="hero__sub">
            En LiftSafe transformamos la industria de inspección de ascensores
            mediante tecnología innovadora y segura. Nuestra plataforma digital
            permite realizar inspecciones técnicas de manera eficiente, cumpliendo
            con todas las normativas vigentes.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">Solicitar información</a>
            <a href="#servicios" className="btn btn--ghost">Ver servicios</a>
          </div>
        </div>

        <div className="hero__data">
          {STATS.map(s => (
            <div className="hero__stat-card" key={s.num}>
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}

          <div className="hero__norms">
            <p className="hero__norms-label">Normas vigentes</p>
            {NORMS.map(n => (
              <div className="hero__norm-row" key={n}>
                <span className="hero__norm-code">{n}</span>
                <span className="hero__norm-check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#1565c0" strokeWidth="1.2"/>
                    <path d="M4.5 7l2 2 3-3.5" stroke="#2196f3" strokeWidth="1.3"
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Descubre más</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
