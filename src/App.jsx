import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import { Icons } from './components/Icons.jsx';
import Chatbot from './components/Chatbot.jsx';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'system') {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => scrollObserver.observe(el));

    return () => {
      revealElements.forEach(el => scrollObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Icons />
      <Chatbot />
    </>
  );
}

export default App;
