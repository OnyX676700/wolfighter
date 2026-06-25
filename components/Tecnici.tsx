'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Tecnico {
  nome: string;
  ruolo: string;
  foto: string;
  iniziali: string;
  objectPosition?: string;
  bullets: string[];
}

const tecnici: Tecnico[] = [
  {
    nome: 'Emanuele Di Fatta',
    ruolo: 'Istruttore di muay thai, kick boxing e pugilato',
    foto: '/img/Manu/emanuele.jpg',
    iniziali: 'ED',
    objectPosition: 'center top',
    bullets: [
      'Laureato in scienze delle attività motorie e sportive',
      'Istruttore Kick Boxing Federkombat',
      'Cintura nera 2° dan Kick Boxing Federkombat',
      '10° Khan Muay Thai Federkombat',
      'Tecnico 1° livello federazione pugilistica italiana',
    ],
  },
  {
    nome: 'Roberto Vinci',
    ruolo: 'Personal Trainer',
    foto: '/img/roberto.jpg',
    iniziali: 'RV',
    objectPosition: 'center 30%',  
    bullets: [
      'Laureato in scienze motorie e sportive',
      'Tecnico 1° livello pesistica olimpionica',
      'Istruttore functional training',
    ],
  },
  {
    nome: 'Giovanni Capuano',
    ruolo: 'Istruttore di muay thai, kick boxing e pugilato',
    foto: '/img/giovanni.jpeg',
    iniziali: 'GC',
    objectPosition: 'center top',
    bullets: [
      'Istruttore Kick Boxing Federkombat',
      'Cintura nera 1° dan Kick Boxing Federkombat',
      '10° Khan Muay Thai Federkombat',
      'Tecnico 1° livello federazione pugilistica italiana',
    ],
  },
  {
    nome: 'Noemi Romano',
    ruolo: 'Istruttrice di muay thai e kick boxing',
    foto: '/img/wetransfer_foto-evento_2026-03-30_0714/noemi.jpg',
    iniziali: 'NR',
    objectPosition: 'center top',
    bullets: [
      'Laurea triennale in Scienze delle attività motorie e sportive (L-22)',
      'Laurea magistrale in Scienze e tecniche delle attività motorie preventive e adattate (LM-67)',
      'Allenatrice e cintura nera Federkombat',
      'Campionessa italiana WMC',
    ],
  },
  {
    nome: 'Manuel Blunda',
    ruolo: 'Istruttore MMA',
    foto: '/img/manuel.jpeg',
    iniziali: 'MB',
    objectPosition: 'center 20%', 
    bullets: [
      'Istruttore tecnico di 1° livello Kickboxing Federkombat',
      'Cintura nera 1° Dan kickboxing Federkombat',
      'Campione italiano MMA Federkombat',
    ],
  },
];

function TecnicoCard({ t }: { t: Tecnico }) {
  const [fotoCaricata, setFotoCaricata] = useState(false);
  const [fotoErrore, setFotoErrore] = useState(false);

  return (
    <div className="tecnico-card">
      <div className="tecnico-foto">
        {(!fotoCaricata || fotoErrore) && (
          <div className="tecnico-iniziali" aria-hidden="true">{t.iniziali}</div>
        )}
        {!fotoErrore && (
          <Image
            src={t.foto}
            alt={t.nome}
            fill
            sizes="(max-width: 768px) 260px, 300px"
            style={{
              objectFit: 'cover',
              objectPosition: t.objectPosition ?? 'center center',
              zIndex: 1,
            }}
            onLoad={() => setFotoCaricata(true)}
            onError={() => setFotoErrore(true)}
          />
        )}
      </div>
      <div className="tecnico-body">
        <div className="tecnico-ruolo">{t.ruolo}</div>
        <h3 className="tecnico-nome">{t.nome}</h3>
        <div className="tecnico-divider" />
        <ul className="tecnico-bullets">
          {t.bullets.map((b, i) => (
            <li key={i}>
              <span className="bullet-dot" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Tecnici() {
  return (
    <section className="tecnici-section">
      <h2 className="tecnici-title">I nostri tecnici</h2>
      <div className="tecnici-scroll-wrapper">
        <div className="tecnici-track">
          {tecnici.map((t) => (
            <TecnicoCard key={t.nome} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}