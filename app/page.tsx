import Link from 'next/link';
import DisciplineCarousel from '@/components/DisciplineCarousel';
import Tecnici from '@/components/Tecnici';
import PercheScegliere from '@/components/Perchescegliere';

const disciplineCourses = [
  {
    title: 'Muay Thai',
    tagline: '✦ Impara l’arte del combattimento thailandese, famosa per la sua efficacia e completezza, affinando tecniche di pugni, gomiti, ginocchia e calci.',
    image: '/img/wetransfer_foto-evento_2026-03-30_0714/muay-thai.png',
    backgroundPosition: 'center 20%',
  },
  {
    title: 'Kickboxing',
    tagline: '✦  Sviluppa la tua potenza e precisione con la kick boxing, un mix esplosivo di pugni, calci e tecniche di ginocchio.',
    image: '/img/wetransfer_foto-evento_2026-03-30_0714/kickboxing.png',
  },
  {
    title: 'Pugilato',
    tagline: '✦ Affina la tua tecnica e la tua resistenza con il “noble art”, migliorando la tua velocità, la tua coordinazione e la tua capacità di difesa.',
    image: '/img/boxe.png',
    backgroundPosition: 'center 20%',
  },
  {
    title: 'MMA',
    tagline: '✦  É uno sport da combattimento a contatto pieno che combina tecniche di diverse arti marziali e discipline da ring, rendendolo uno dei sistemi più completi e spettacolari al mondo.',
    image: '/img/wetransfer_foto-evento_2026-03-30_0714/mma.png',
  },
];

export default function HomePage() {
  return (
    <>
      {/* SEZIONE HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow-row">
            <i className="fa-solid fa-hand-fist" aria-hidden="true" />
            <span className="hero-eyebrow">Palestra di Boxe — Trapani</span>
          </div>
          <h1 className="hero-title">
            Wolfighter<br />Boxing
          </h1>
          <p className="hero-text">
            <strong>Libera il lupo che è in te.</strong>{' '}
            Più di un allenamento, una trasformazione.
            Sfida i tuoi limiti attraverso l&apos;intensità di Boxe, Kickboxing e Muay Thai.
            Forgia il tuo corpo, allena la tua mente e unisciti al branco.
          </p>
          <Link href="/corsi" className="hero-cta">
            Scopri i corsi <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
        <div
          className="hero-image"
          style={{ backgroundImage: "url('/img/felpa.jpg')" }}
          role="img"
          aria-label="Atleta Wolfighter Boxing in allenamento"
        />
      </section>

      {/* SEZIONE CAROUSEL */}
      <DisciplineCarousel slides={disciplineCourses} />

      {/* SEZIONE TECNICI */}
      <Tecnici />

      {/* SEZIONE PERCHE' SCEGLIERE*/}
      <PercheScegliere />

      {/* SEZIONE OLTRE IL RING */}
      <section className="oltre-ring">
        <div className="oltre-inner">

          {/* Colonna Sinistra */}
          <div className="oltre-left fade-in">
            <div className="oltre-eyebrow">La palestra</div>
            <h2 className="oltre-titolo">
              Oltre<br />al <span>Ring</span>
            </h2>
            <p className="oltre-desc">
              Un percorso completo che va oltre il combattimento. Forza, disciplina e salute — tutto sotto lo stesso tetto.
            </p>
            <Link href="/corsi" className="oltre-cta">
              Scopri i corsi <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>

          {/* Colonna Destra */}
          <div className="oltre-right">

            <div className="oltre-item fade-in">
              <div className="oltre-num">01</div>
              <div className="oltre-content">
                <div className="oltre-item-header">
                  <div className="oltre-icon" aria-hidden="true">
                    <i className="fa-solid fa-dumbbell" />
                  </div>
                  <div className="oltre-item-title">Sala Pesi</div>
                </div>
                <p className="oltre-item-text">
                  Attrezzatura professionale per lavorare su forza, resistenza e massa muscolare. Complementare agli allenamenti tecnici, essenziale per chi vuole risultati veri.
                </p>
                <span className="oltre-tag">✦ Attrezzatura professionale</span>
              </div>
            </div>

            <div className="oltre-item fade-in">
              <div className="oltre-num">02</div>
              <div className="oltre-content">
                <div className="oltre-item-header">
                  <div className="oltre-icon" aria-hidden="true">
                    <i className="fa-solid fa-brain" />
                  </div>
                  <div className="oltre-item-title">Mentalità d&apos;acciaio</div>
                </div>
                <p className="oltre-item-text">
                  Qui si viene per superare i propri limiti. Allenerai la concentrazione, la resistenza mentale e la fiducia in te stesso — dentro e fuori dal ring.
                </p>
                <span className="oltre-tag">✦ Coaching individuale</span>
              </div>
            </div>

            <div className="oltre-item fade-in">
              <div className="oltre-num">03</div>
              <div className="oltre-content">
                <div className="oltre-item-header">
                  <div className="oltre-icon" aria-hidden="true">
                    <i className="fa-solid fa-heart-pulse" />
                  </div>
                  <div className="oltre-item-title">Trasformazione fisica</div>
                </div>
                <p className="oltre-item-text">
                  Cardio ad alta intensità, coordinazione e condizionamento atletico. Un percorso progettato per cambiare il tuo corpo e ottimizzare le tue performance.
                </p>
                <span className="oltre-tag">✦ Tutti i livelli</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}