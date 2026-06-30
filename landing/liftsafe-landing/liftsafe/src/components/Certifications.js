import React from 'react';
import './Certifications.css';

const CERTS = [
  { code: 'NTC 5926', name: 'Ascensores eléctricos', body: 'ICONTEC' },
  { code: 'RETIE 2013', name: 'Reglamento Técnico de Instalaciones Eléctricas', body: 'Min. Minas' },
  { code: 'NTC 3829', name: 'Ascensores hidráulicos', body: 'ICONTEC' },
  { code: 'ISO 9001', name: 'Sistema de gestión de calidad', body: 'SGS Colombia' },
];

const STEPS = [
  { num: '01', title: 'Solicitud', desc: 'Recibimos su solicitud y asignamos un técnico especializado para su tipo de equipo.' },
  { num: '02', title: 'Inspección', desc: 'Visita técnica al equipo con revisión de todos los sistemas mecánicos, eléctricos y de seguridad.' },
  { num: '03', title: 'Informe', desc: 'Entregamos un informe técnico detallado con el estado del equipo y las observaciones encontradas.' },
  { num: '04', title: 'Certificado', desc: 'Si el equipo cumple la norma, emitimos el certificado de conformidad con validez legal.' },
];

export default function Certifications() {
  return (
    <section className="certs" id="certificaciones">
      <div className="certs__bg" aria-hidden="true" />
      <div className="certs__inner">
        <header className="section-header">
          <p className="section-eyebrow">Nuestras certificaciones</p>
          <h2 className="section-title">Respaldados por las normas<br />que protegen vidas</h2>
          <p className="section-sub">
            Todas nuestras inspecciones y certificaciones se realizan conforme a la normatividad técnica vigente en Colombia.
          </p>
        </header>

        <div className="certs__badges">
          {CERTS.map((c, i) => (
            <div className="cert-badge" key={i}>
              <div className="cert-badge__code">{c.code}</div>
              <div className="cert-badge__name">{c.name}</div>
              <div className="cert-badge__body">{c.body}</div>
            </div>
          ))}
        </div>

        <div className="certs__process">
          <h3 className="certs__process-title">¿Cómo funciona el proceso?</h3>
          <div className="certs__steps">
            {STEPS.map((s, i) => (
              <div className="step" key={i}>
                <div className="step__num">{s.num}</div>
                <div className="step__content">
                  <h4 className="step__title">{s.title}</h4>
                  <p className="step__desc">{s.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="step__connector" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
