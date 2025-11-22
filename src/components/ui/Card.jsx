import React from 'react';
import './card.scss';

function Card({ title, children, featured = false }) {
  return (
    <article className={`card ${featured ? 'card--featured' : ''}`}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__body">{children}</div>
    </article>
  );
}

export default Card;
