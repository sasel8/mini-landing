import React, { useEffect, useState } from 'react';
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import Pricing from './sections/Pricing.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import Button from './components/ui/Button.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="app">
      <header>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span style={{ fontWeight: 700 }}>MiniLanding</span>
          <Button variant="outline" onClick={toggleTheme} aria-label="Tema değiştir">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} MiniLanding. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
