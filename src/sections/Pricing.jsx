import React from 'react';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';

const plans = [
  {
    name: 'Starter',
    price: '₺0',
    features: ['Temel bileşenler', 'Tek proje', 'E-posta desteği']
  },
  {
    name: 'Pro',
    price: '₺99',
    features: ['Tüm bileşenler', 'Sınırsız proje', 'Öncelikli destek'],
    featured: true
  },
  {
    name: 'Team',
    price: '₺249',
    features: ['Takım yönetimi', 'Paylaşılan workspace', 'Gelişmiş raporlar']
  }
];

function Pricing() {
  return (
    <section aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title" className="section__title">
          Fiyatlandırma
        </h2>
        <p className="section__subtitle">
          Ürünün için basit ve anlaşılır planlar. İhtiyacına uygun olanı seç.
        </p>
        <div className="grid grid-cols-3-lg">
          {plans.map((plan) => (
            <Card key={plan.name} title={plan.name} featured={plan.featured}>
              <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>{plan.price}</p>
              <ul>
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button style={{ marginTop: '1rem', width: '100%' }}>Planı Seç</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
