import React, { useState } from 'react';
import './accordion.scss';

function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="accordion__item">
            <button
              className="accordion__trigger"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
            >
              <span>{item.question}</span>
              <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
              <div
                id={`panel-${item.id}`}
                className="accordion__panel"
                role="region"
                aria-label={item.question}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
