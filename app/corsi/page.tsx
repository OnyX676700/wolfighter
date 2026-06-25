import Link from 'next/link';
import Image from 'next/image';

const corsi = [
  {
    titolo: 'Muay Thai',
    tag: 'L\'arte delle otto membra',
    descrizione: 'La Muay Thai è molto più di uno sport da combattimento. È un allenamento cardio intenso che aiuta a bruciare calorie, tonificare i muscoli e migliorare la salute cardiovascolare. Inoltre, insegna a gestire la paura, aumenta la concentrazione e favorisce un benessere mentale profondo.',
    foto: '/img/wetransfer_foto-evento_2026-03-30_0714/muay-thai.png',
    icona: '🥊',
  },
  {
    titolo: 'Kick Boxing',
    tag: 'Ritmo, esplosività e coordinazione',
    descrizione: 'La kick boxing è un\'attività fisica intensa che migliora la salute cardiovascolare, rafforza i muscoli e aumenta la flessibilità. È un ottimo modo per scaricare la tensione e ridurre lo stress. Inoltre, insegna a difendersi e aumenta la consapevolezza del proprio corpo.',
    foto: '/img/wetransfer_foto-evento_2026-03-30_0714/kickboxing.png',
    icona: '🦵',
  },
  {
    titolo: 'Pugilato',
    tag: 'La Noble Art',
    descrizione: 'Il pugilato, oltre ad essere uno sport affascinante e ricco di storia, offre numerosi benefici per la salute fisica e mentale: brucia calorie, migliora la circolazione sanguigna e rafforza il cuore. Inoltre, aiuta a ridurre lo stress e l\'ansia, aumentando l\'autostima.',
    foto: '/img/boxe.png',
    icona: '🏆',
  },
  {
    titolo: 'MMA',
    tag: 'Combattimento a 360°',
    descrizione: 'La MMA, o Mixed Martial Arts, è uno sport da combattimento che combina tecniche di diverse arti marziali, come il pugilato, il jiu-jitsu e la lotta libera. Migliora forza fisica, resistenza e coordinazione, promuovendo disciplina, concentrazione e fiducia in sé stessi.',
    foto: '/img/wetransfer_foto-evento_2026-03-30_0714/mma.png',
    icona: '⚔️',
  },
  {
    titolo: 'Lezioni Private',
    tag: 'Muay Thai, Kick Boxing e Pugilato',
    descrizione: 'Offriamo lezioni private con l\'istruttore Emanuele Di Fatta. Con anni di esperienza e una passione per gli sport da combattimento, ti guiderà attraverso allenamenti personalizzati per migliorare le tue abilità e raggiungere i tuoi obiettivi. Adatte a tutti i livelli.',
    foto: '/img/Manu/lezioni-private.jpg',
    icona: '🎯',
  },
  {
    titolo: 'Kids',
    tag: 'Sport e valori per i tuoi figli',
    descrizione: 'Nei nostri corsi di Muay Thai, Kickboxing e Pugilato, i bambini impareranno il rispetto, la disciplina e svilupperanno un corpo sano e una mente forte. Un ambiente sicuro e motivante pensato per i più piccoli.',
    foto: '/img/Foto atleti/kids.jpg',
    icona: '⭐',
  },
  {
    titolo: 'Woman Power',
    tag: 'L\'allenamento perfetto per le donne',
    descrizione: 'Muay Thai, Kickboxing e Pugilato: scopri come migliorare la tua forma fisica, aumentare la tua autostima e imparare a difenderti in modo efficace. Un percorso pensato specificamente per le donne, in un ambiente accogliente e motivante.',
    foto: '/img/woman-power.jpg',
    icona: '💪',
  },
  {
    titolo: 'Functional Training',
    tag: 'Forza funzionale e condizionamento',
    descrizione: 'Il functional training si concentra sullo sviluppo di movimenti complessi e funzionali. Anziché isolare singoli muscoli, mira a migliorare la forza, la stabilità, la coordinazione e la resistenza del corpo nel suo insieme, complementare agli sport da combattimento.',
    foto: '/img/training.jpg',
    icona: '🏋️',
  },
  {
    titolo: 'Body Building',
    tag: 'Massa muscolare e definizione',
    descrizione: 'Il bodybuilding è una disciplina che ha come obiettivo lo sviluppo della massa muscolare e la definizione del corpo attraverso allenamento specifico con i pesi. Richiede dedizione, costanza e una profonda conoscenza del corpo umano.',
    foto: '/img/roberto.jpg',
    icona: '💪',
  },
];

export default function CorsiPage() {
  return (
    <>
      {/* HERO */}
      <section className="corsi-hero">
        <div className="corsi-hero-overlay" aria-hidden="true" />
        <div className="corsi-hero-content">
          <div className="corsi-hero-eyebrow">
            <i className="fa-solid fa-dumbbell" aria-hidden="true" />
            <span>Wolfighter Boxing — Trapani</span>
          </div>
          <h1 className="corsi-hero-title">I nostri<br /> corsi</h1>
          <p className="corsi-hero-text">
            Programmi di allenamento pensati per ogni livello. Che tu sia un principiante
            o un atleta esperto, troverai il percorso giusto per te.
          </p>
          <Link href="/contatti" className="corsi-hero-cta">
            Prenota un appuntamento <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="corsi-intro">
        <p className="corsi-intro-text">
          La Wolfighter Boxing è sinonimo di <strong>professionalità e qualità</strong>.
          I nostri corsi, tenuti da istruttori esperti e qualificati, sono pensati per offrirti
          un allenamento completo e sicuro, con un&apos;attenzione particolare alla tecnica e alla sicurezza.
        </p>
      </section>

      {/* GRIGLIA CORSI */}
      <section className="corsi-grid-section">
        <div className="corsi-grid">
          {corsi.map((corso, i) => (
            <article key={i} className="corso-card">
              <div className="corso-foto">
                <Image
                  src={corso.foto}
                  alt={corso.titolo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="corso-foto-overlay" aria-hidden="true" />
                <span className="corso-numero">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="corso-body">
                <span className="corso-tag">✦ {corso.tag}</span>
                <h2 className="corso-titolo">{corso.titolo}</h2>
                <div className="corso-divider" />
                <p className="corso-desc">{corso.descrizione}</p>
                <Link href="/contatti" className="corso-cta">
                  Inizia ora <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="corsi-cta-finale">
        <div className="corsi-cta-inner">
          <div className="corsi-cta-eyebrow">Pronto a iniziare?</div>
          <h2 className="corsi-cta-titolo">Libera il lupo<br />che è in te</h2>
          <p className="corsi-cta-text">
            Contattaci per informazioni sui corsi, sugli orari o per prenotare la tua prima lezione gratuita.
          </p>
          <Link href="/contatti" className="corsi-cta-btn">
            Contattaci <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}