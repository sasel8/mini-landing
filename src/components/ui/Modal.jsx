import React from 'react';
import Button from './Button.jsx';
import './modal.scss';

function Modal({ isOpen, title, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal__content">
        <header className="modal__header">
          <h2 id="modal-title">{title}</h2>
          <Button variant="outline" onClick={onClose} aria-label="Kapat">
            ✕
          </Button>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
