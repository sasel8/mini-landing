import React, { useState } from 'react';
import Input from '../components/ui/Input.jsx';
import Button from '../components/ui/Button.jsx';

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'İsim alanı boş bırakılamaz.';
    if (!values.email.trim()) {
      newErrors.email = 'E-posta alanı boş bırakılamaz.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin.';
    }
    if (!values.message.trim()) newErrors.message = 'Mesaj alanı boş bırakılamaz.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      setSubmitted(false);
      return;
    }
    // Yalancı submit
    setSubmitted(true);
  };

  return (
    <section aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section__title">
          İletişim
        </h2>
        <p className="section__subtitle">
          Soruların mı var? Formu doldur, sana en kısa sürede geri dönelim.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <Input
            id="name"
            name="name"
            label="İsim"
            placeholder="Adın Soyadın"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="E-posta"
            placeholder="ornek@mail.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--color-border)'
              }}
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p style={{ fontSize: '0.8rem', color: '#b91c1c' }} role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit">Gönder (yalancı submit)</Button>

          {submitted && (
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }} role="status">
              Form verileri doğrulandı. (Sunucuya gönderilmiyor, yalancı submit.)
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
