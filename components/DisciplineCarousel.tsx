'use client';

import { useState, useEffect, useCallback } from 'react';

interface Slide {
  title: string;
  tagline: string;
  image: string;
  backgroundPosition?: string;
}

interface DisciplineCarouselProps {
  slides?: Slide[];
}

export default function DisciplineCarousel({ slides = [] }: DisciplineCarouselProps) {
  const [current, setCurrent] = useState(0);

  const spostaDisc = useCallback(
    (direzione: number) => {
      if (slides.length === 0) return;
      setCurrent((prev) => (prev + direzione + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      spostaDisc(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [spostaDisc, slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className="discipline-boxe">
      <h2 className="fade-in">LE NOSTRE DISCIPLINE</h2>

      <div className="disc-carousel-wrapper">
        <button
          className="carousel-btn prev"
          onClick={() => spostaDisc(-1)}
          aria-label="Disciplina precedente"
        >
          <i className="fa-solid fa-angle-left" aria-hidden="true" />
        </button>
        <button
          className="carousel-btn next"
          onClick={() => spostaDisc(1)}
          aria-label="Disciplina successiva"
        >
          <i className="fa-solid fa-angle-right" aria-hidden="true" />
        </button>

        <div className="disc-track-container" aria-live="polite" aria-atomic="true">
          <div
            className="disc-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="disc-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.backgroundPosition ?? 'center',
                }}
                role="img"
                aria-label={slide.title}
              >
                <div className="disc-overlay" aria-hidden="true" />
                <div className="disc-content">
                  <h3>{slide.title}</h3>
                  <span className="carousel-tag">{slide.tagline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="disc-dots" role="tablist" aria-label="Seleziona slide">
        {slides.map((slide, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === current}
            aria-label={`Vai alla slide: ${slide.title}`}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}