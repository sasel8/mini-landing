import React from 'react';
import Card from '../components/ui/Card.jsx';

const features = [
  {
    title: 'Hızlı Kurulum',
    description: 'Vite + React ile saniyeler içinde çalışan bir proje.'
  },
  {
    title: 'Modern UI',
    description: 'SCSS, grid/flex ve light/dark tema desteği.'
  },
  {
    title: 'Erişilebilirlik',
    description: 'Klavyeyle gezilebilir, aria-* ile desteklenmiş bileşenler.'
  }
];

function Features() {
  return (
    <section aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="section__title">
          Özellikler
        </h2>
        <p className="section__subtitle">Landing sayfanın sunduğu temel avantajlar.</p>
        <div className="grid grid-cols-3-lg">
          {features.map((f) => (
            <Card key={f.title} title={f.title}>
              <p>{f.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
