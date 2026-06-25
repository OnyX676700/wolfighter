'use client';

import Link from 'next/link';
import { useState } from 'react';

// Dati orari Muay Thai / Pugilato
const orariMuayThai = [
  { ora: '07:30', lun: 'OPEN', mar: '',       mer: 'OPEN', gio: '',       ven: 'OPEN',      sab: '' },
  { ora: '10:00', lun: 'MMA',  mar: '',       mer: 'MMA',  gio: '',       ven: 'MMA',       sab: '' },
  { ora: '11:00', lun: 'OPEN', mar: '',       mer: 'OPEN', gio: '',       ven: 'OPEN',      sab: '' },
  { ora: '14:00', lun: '',     mar: 'OPEN',   mer: '',     gio: 'OPEN',   ven: '',          sab: '' },
  { ora: '15:00', lun: '',     mar: '',       mer: '',     gio: '',       ven: '',          sab: 'OPEN' },
  { ora: '16:00', lun: 'MMA',  mar: '',       mer: 'MMA',  gio: '',       ven: 'MMA',       sab: '' },
  { ora: '17:00', lun: 'BIMBI',mar: 'BIMBI', mer: 'BIMBI',gio: 'BIMBI', ven: 'BIMBI',     sab: '' },
  { ora: '18:00', lun: '13–18 ANNI', mar: 'OPEN', mer: '13–18 ANNI', gio: 'OPEN', ven: '13–18 ANNI', sab: '' },
  { ora: '19:00', lun: 'OPEN', mar: 'OPEN',   mer: 'OPEN', gio: 'OPEN',   ven: 'OPEN',      sab: '' },
  { ora: '20:00', lun: 'OPEN', mar: 'FEMMINILE', mer: 'OPEN', gio: 'FEMMINILE', ven: 'OPEN', sab: '' },
  { ora: '21:00', lun: 'FEMMINILE', mar: 'MMA', mer: 'FEMMINILE', gio: 'MMA', ven: 'FEMMINILE', sab: '' },
];

// Dati orari Funzionale
const orariFunc = [
  { ora: '07:30', lun: '',           mar: 'Funzionale', mer: '',           gio: 'Funzionale', ven: '' },
  { ora: '09:00', lun: 'Funzionale', mar: '',           mer: 'Funzionale', gio: '',           ven: 'Funzionale' },
  { ora: '10:00', lun: 'Funzionale', mar: '',           mer: 'Funzionale', gio: '',           ven: 'Funzionale' },
  { ora: '13:15', lun: 'Funzionale', mar: '',           mer: 'Funzionale', gio: '',           ven: 'Funzionale' },
  { ora: '14:00', lun: '',           mar: 'Funzionale', mer: '',           gio: 'Funzionale', ven: '' },
  { ora: '15:00', lun: 'Funzionale', mar: '',           mer: 'Funzionale', gio: '',           ven: '' },
];

type FormData = { nome: string; cognome: string; email: string; messaggio: string };

export default function ContattiPage() {
  const [form, setForm] = useState<FormData>({ nome: '', cognome: '', email: '', messaggio: '' });
  const [inviato, setInviato] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Qui puoi collegare un servizio email (es. EmailJS, Resend, ecc.)
    setInviato(true);
  };

  const giorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const giorniFunc = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];

  return (
    <>
      {/* ── HERO ── */}
      <section className="contatti-hero">
        <div className="contatti-hero-overlay" aria-hidden="true" />
        <div className="contatti-hero-content">
          <h1 className="contatti-hero-title">CONTATTI E ORARI</h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="contatti-intro">
        <p>
          Vieni a trovarci alla Wolfighter Boxing.<br />
          Allenamenti di gruppo esplosivi, atmosfera unica.<br />
          Non solo una palestra, un luogo dove crescere.
        </p>
      </section>

      {/* ── CONTATTI + FORM ── */}
      <section className="contatti-main">
        {/* Colonna sinistra — info */}
        <div className="contatti-info">
          <div className="contatti-info-block">
            <h2>Email</h2>
            <a href="mailto:asd.wolfighter@gmail.com">asd.wolfighter@gmail.com</a>
          </div>
          <div className="contatti-info-block">
            <h2>Telefono</h2>
            <a href="tel:+393337754798">+39 333 775 4798</a>
          </div>
          <div className="contatti-info-block">
            <h2>Social</h2>
            <div className="contatti-social">
              <a href="https://www.facebook.com/wolfighterboxing" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/wolfighter_boxing" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://wa.me/393337754798" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>

        {/* Colonna destra — form */}
        <div className="contatti-form-wrapper">
          {inviato ? (
            <div className="contatti-form-success">
              <i className="fa-solid fa-circle-check" />
              <p>Messaggio inviato! Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <div className="contatti-form">
              <div className="contatti-form-row">
                <div className="contatti-form-group">
                  <label htmlFor="nome">Nome *</label>
                  <input id="nome" name="nome" type="text" placeholder="Nome" value={form.nome} onChange={handleChange} required />
                </div>
                <div className="contatti-form-group">
                  <label htmlFor="cognome">Cognome</label>
                  <input id="cognome" name="cognome" type="text" placeholder="Cognome" value={form.cognome} onChange={handleChange} />
                </div>
              </div>
              <div className="contatti-form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="La tua email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="contatti-form-group">
                <label htmlFor="messaggio">Messaggio *</label>
                <textarea id="messaggio" name="messaggio" rows={6} placeholder="Scrivi il tuo messaggio..." value={form.messaggio} onChange={handleChange} required />
              </div>
              <button className="contatti-form-btn" onClick={handleSubmit}>Invia</button>
            </div>
          )}
        </div>
      </section>

      {/* ── MAPPA ── */}
      <section className="contatti-mappa">
        <p className="contatti-mappa-testo">
          Chiedi maggiori informazioni o prenota ora il tuo primo allenamento.
        </p>
        <p className="contatti-mappa-indirizzo">Ci trovi a Trapani, Via Libica 2</p>
        <div className="contatti-mappa-embed">
          <iframe
            title="Wolfighter Boxing Trapani"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d12.5347!3d38.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319fbbf6e2b6a37%3A0x1!2sASD+Wolfighter+Boxing+Trapani%2C+Via+Libica%2C+91100+Trapani+TP!5e0!3m2!1sit!2sit!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── ORARI MUAY THAI / PUGILATO ── */}
      <section className="contatti-orari">
        <h2 className="contatti-orari-titolo">Orari muay thai – pugilato</h2>
        <div className="contatti-table-wrapper">
          <table className="contatti-table">
            <thead>
              <tr>
                <th>Orari</th>
                {giorni.map(g => <th key={g}>{g}</th>)}
              </tr>
            </thead>
            <tbody>
              {orariMuayThai.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'row-even' : ''}>
                  <td className="ora">{row.ora}</td>
                  <td>{row.lun}</td>
                  <td>{row.mar}</td>
                  <td>{row.mer}</td>
                  <td>{row.gio}</td>
                  <td>{row.ven}</td>
                  <td>{row.sab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── ORARI FUNZIONALE ── */}
      <section className="contatti-orari">
        <h2 className="contatti-orari-titolo">Orari funzionale</h2>
        <div className="contatti-table-wrapper">
          <table className="contatti-table">
            <thead>
              <tr>
                <th>Orari</th>
                {giorniFunc.map(g => <th key={g}>{g}</th>)}
              </tr>
            </thead>
            <tbody>
              {orariFunc.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'row-even' : ''}>
                  <td className="ora">{row.ora}</td>
                  <td>{row.lun}</td>
                  <td>{row.mar}</td>
                  <td>{row.mer}</td>
                  <td>{row.gio}</td>
                  <td>{row.ven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── BODY BUILDING ── */}
      <section className="contatti-bodybuilding">
        <h2>Body Building</h2>
        <ul>
          <li><strong>Lunedì, mercoledì e venerdì</strong>: dalle 10:00 alle 20:00</li>
          <li><strong>Martedì e giovedì</strong>: dalle 14:00 alle 20:00</li>
          <li><strong>Sabato</strong>: dalle 10:00 alle 12:00</li>
        </ul>
        <div className="contatti-bb-footer">
          <span>Orari 2025-2026</span>
          <Link href="/contatti" className="contatti-bb-btn">Contattaci</Link>
        </div>
      </section>
    </>
  );
}