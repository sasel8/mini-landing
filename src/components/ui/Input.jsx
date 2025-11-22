import React from 'react';
import './input.scss';

function Input({ label, id, error, ...rest }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="input__field"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="input__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
