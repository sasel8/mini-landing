import React from 'react';
import './button.scss';

function Button({ variant = 'primary', children, ...rest }) {
  return (
    <button className={`btn btn--${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
