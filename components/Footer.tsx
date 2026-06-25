import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-brand">
          <Image src="/img/scritta.png" alt="Wolfighter Boxing" width={180} height={48} />
          <p>Libera il lupo che è in te. Boxe, Kickboxing e Muay Thai a Trapani per ogni livello.</p>
        </div>

        <div className="footer-links">
          <h4>Link utili</h4>
          <ul>
            <li>
              <Link href="/">
                <i className="fa-solid fa-angle-right" aria-hidden="true" /> Home
              </Link>
            </li>
            <li>
              <Link href="/corsi">
                <i className="fa-solid fa-angle-right" aria-hidden="true" /> Corsi
              </Link>
            </li>
            <li>
              <Link href="/contatti">
                <i className="fa-solid fa-angle-right" aria-hidden="true" /> Contatti e Orari
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Seguici</h4>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/emanuele_di_fatta/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/emanuele.fatta" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" aria-hidden="true" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=3337754798&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span>&copy; {currentYear} Wolfighter Boxing — P.IVA 00000000000</span>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookie">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}