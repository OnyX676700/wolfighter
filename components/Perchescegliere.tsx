import Image from 'next/image';

const blocchi = [
  {
    titolo: 'Perché scegliere Wolfighter Boxing?',
    foto: '/img/wetransfer_foto-evento_2026-03-30_0714/gara1.JPG',
    fotoAlt: 'Atleti sul ring durante una gara',
    punti: [
      {
        label: 'Passione e professionalità:',
        testo: 'Gli istruttori della Wolfighter Boxing sono appassionati e altamente qualificati, pronti a guidarti passo dopo passo nel tuo percorso di crescita.',
      },
      {
        label: 'Ambiente accogliente:',
        testo: 'La palestra è un luogo dove regna uno spirito di squadra e di rispetto reciproco, perfetto per chi vuole allenarsi in un ambiente amichevole e motivante.',
      },
      {
        label: 'Risultati garantiti:',
        testo: 'Con un allenamento costante e mirato, raggiungerai i tuoi obiettivi, migliorando la tua forma fisica, la tua autostima e le tue capacità di difesa personale.',
      },
      {
        label: 'Community attiva:',
        testo: 'La Wolfighter Boxing è più di una semplice palestra: è una vera e propria comunità di atleti che condividono la passione per gli sport da combattimento.',
      },
    ],
    fotoADestra: true,
  },
  {
    titolo: 'Cosa rende unica la Wolfighter Boxing?',
    foto: '/img/wetransfer_foto-evento_2026-03-30_0714/gara2.JPG',
    fotoAlt: 'Combattimento sul ring',
    punti: [
      {
        label: 'Esperienza pluriennale:',
        testo: 'Grazie ai suoi anni di attività, la Wolfighter Boxing ha costruito una solida reputazione e ha formato numerosi atleti di successo.',
      },
      {
        label: 'Offerta completa:',
        testo: 'La palestra offre un\'ampia gamma di servizi, dalle lezioni per principianti ai corsi avanzati, fino alla preparazione per gli incontri agonistici.',
      },
      {
        label: 'Eventi e stage:',
        testo: 'La Wolfighter Boxing organizza regolarmente eventi e stage con i migliori istruttori nazionali e internazionali, offrendo ai suoi atleti l\'opportunità di confrontarsi con nuovi stimoli e di ampliare le proprie conoscenze.',
      },
    ],
    fotoADestra: false,
  },
];

export default function PercheScegliere() {
  return (
    <section className="perche-section">
      {blocchi.map((b, i) => (
        <div key={i} className={`perche-blocco ${b.fotoADestra ? 'foto-destra' : 'foto-sinistra'}`}>

          <div className="perche-testo">
            <div className="perche-eyebrow">La palestra</div>
            <h2 className="perche-titolo">{b.titolo}</h2>
            <div className="perche-divider" />
            <ul className="perche-lista">
              {b.punti.map((p, j) => (
                <li key={j}>
                  <span className="bullet-dot" aria-hidden="true" />
                  <span>
                    <strong>{p.label}</strong> {p.testo}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="perche-foto-wrapper">
            <Image
              src={b.foto}
              alt={b.fotoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

        </div>
      ))}

      {/* SEZIONE INFORMAZIONI */}
      <div className="info-block">
        <div className="info-eyebrow">Chi siamo</div>
        <h2 className="info-titolo">Informazioni</h2>
        <p className="info-testo">
          La palestra Wolfighter Boxing, situata a Trapani, è il luogo ideale per gli amanti delle arti marziali.
          Offriamo corsi dedicati a Muay Thai, kick boxing, K1 e boxe, con istruttori altamente qualificati.
          Il nostro obiettivo è fornire un ambiente accogliente e professionale per il tuo benessere e la tua
          crescita nell&apos;arte marziale prescelta. Unisciti a noi per migliorare la tua disciplina, forma fisica e autostima.
        </p>
      </div>

    </section>
  );
}