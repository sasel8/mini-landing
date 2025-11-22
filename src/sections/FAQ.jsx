import React from 'react';
import Accordion from '../components/ui/Accordion.jsx';

const faqItems = [
  {
    id: '1',
    question: 'Bu landing sayfası hangi teknolojilerle yapıldı?',
    answer: 'Vite, React, SCSS ve basit JS etkileşimleri kullanıldı.'
  },
  {
    id: '2',
    question: 'Responsive mi?',
    answer: 'Evet, 3 breakpoint ile mobil, tablet ve desktop için optimize edildi.'
  },
  {
    id: '3',
    question: 'Canlı demo var mı?',
    answer: 'Proje Vercel veya Netlify üzerinde deploy edilerek canlıya alınabilir.'
  }
];

function FAQ() {
  return (
    <section aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="section__title">
          Sık Sorulan Sorular
        </h2>
        <p className="section__subtitle">
          Kullanıcıların en çok merak ettiği sorulara hızlı yanıtlar.
        </p>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}

export default FAQ;
