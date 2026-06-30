import React, { useState } from 'react';
import './Contact.css';

const EQUIPMENT_TYPES = ['Ascensor eléctrico', 'Ascensor hidráulico', 'Escalera eléctrica', 'Montacargas', 'Otro'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', equipment: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__bg" aria-hidden="true" />
      <div className="contact__inner">
        <div className="contact__info">
          <p className="section-eyebrow">Solicite información</p>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Hablemos sobre<br />su equipo
          </h2>
          <p className="section-sub" style={{ textAlign: 'left', maxWidth: 400 }}>
            Cuéntenos sobre su ascensor o elevador y le enviamos una cotización sin costo ni compromiso.
          </p>

          <div className="contact__details">
            <div className="contact-detail">
              <div className="contact-detail__icon"><PhoneIcon /></div>
              <div><div className="contact-detail__label">Llámenos</div><div className="contact-detail__value">+57 601 123 4567</div></div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail__icon"><EmailIcon /></div>
              <div><div className="contact-detail__label">Escríbanos</div><div className="contact-detail__value">info@liftsafe.com.co</div></div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail__icon"><MapIcon /></div>
              <div><div className="contact-detail__label">Sede principal</div><div className="contact-detail__value">Bogotá D.C., Colombia</div></div>
            </div>
          </div>

          <div className="contact__hours">
            <p className="contact__hours-label">Horario de atención</p>
            <p>Lunes a viernes: 7:00 am – 6:00 pm</p>
            <p>Sábados: 8:00 am – 12:00 pm</p>
            <p className="contact__emergency">Urgencias: 24/7</p>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="25" stroke="#2196f3" strokeWidth="2"/>
                <path d="M16 26l8 8 12-14" stroke="#2196f3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>¡Solicitud enviada!</h3>
              <p>Nos pondremos en contacto con usted en las próximas horas.</p>
              <button className="btn btn--primary" onClick={() => setSent(false)}>Nueva solicitud</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <Field label="Nombre completo *" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Empresa" name="company" value={form.company} onChange={handleChange} />
              </div>
              <div className="form-row">
                <Field label="Correo electrónico *" name="email" type="email" value={form.email} onChange={handleChange} required />
                <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Tipo de equipo</label>
                <select name="equipment" value={form.equipment} onChange={handleChange} className="form-select">
                  <option value="">Seleccione una opción</option>
                  {EQUIPMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Descripción o consulta</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={4}
                  placeholder="Cuéntenos sobre su equipo, cantidad, ubicación o necesidad específica..."
                />
              </div>
              <button type="submit" className="btn btn--primary contact__submit">
                Enviar solicitud
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
      />
    </div>
  );
}

function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2h3l1.5 4L6 7.5c1 2 2.5 3.5 4.5 4.5L12 10.5l4 1.5v3A1 1 0 0 1 15 16C7.268 16 2 10.732 2 3a1 1 0 0 1 1-1z" stroke="#2196f3" strokeWidth="1.4" strokeLinejoin="round"/></svg>;
}

function EmailIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="#2196f3" strokeWidth="1.4"/><path d="M2 6l7 5 7-5" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round"/></svg>;
}

function MapIcon() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C6.239 2 4 4.239 4 7c0 4.5 5 9 5 9s5-4.5 5-9c0-2.761-2.239-5-5-5z" stroke="#2196f3" strokeWidth="1.4"/><circle cx="9" cy="7" r="2" stroke="#2196f3" strokeWidth="1.4"/></svg>;
}
