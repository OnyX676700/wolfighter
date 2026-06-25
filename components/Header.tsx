'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'Corsi', href: '/corsi' },
  { name: 'Contatti e Orari', href: '/contatti' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div
        className={`nav-overlay ${isMenuOpen ? 'visibile' : ''}`}
        id="navOverlay"
        onClick={closeMenu}
        aria-hidden="true"
      />

      <button
        className={`torna-su ${showScrollTop ? 'visibile' : ''}`}
        id="tornaSu"
        aria-label="Torna su"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa-solid fa-angle-up" aria-hidden="true" />
      </button>

      <header id="header" className={isScrolled ? 'scrolled' : ''}>
        <div className="header-logo">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/img/scritta.png"
              alt="Wolfighter Boxing"
              width={180}
              height={60}
              style={{ width: "auto", height: 60 }}
              priority
            />
          </Link>
        </div>

        <nav
          id="navMenu"
          className={isMenuOpen ? 'aperta' : ''}
          aria-label="Navigazione principale"
        >
          {menuLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          className={`hamburger ${isMenuOpen ? 'aperto' : ''}`}
          id="hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="navMenu"
          aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </header>
    </>
  );
}