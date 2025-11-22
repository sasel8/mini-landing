import React from 'react';
import Button from '../components/ui/Button.jsx';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container grid grid-cols-2-md">
        <div>
          <h1 id="hero-title">Ürünün için modern, hızlı bir landing page</h1>
          <p>
            Kısa ve ikna edici bir metin. Kullanıcıya ürününün hangi problemi çözdüğünü 1–2 cümlede anlat.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            <Button>Hemen Başla</Button>
            <Button variant="outline">Canlı Demo Gör</Button>
          </div>
        </div>
        <div aria-hidden="true">
          <div
            style={{
              borderRadius: '1.5rem',
              border: '1px solid var(--color-border)',
              height: '220px',
              marginTop: '1.5rem'
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
