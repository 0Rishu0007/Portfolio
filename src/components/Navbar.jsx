import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileActive(!isMobileActive);
    document.body.classList.toggle('no-scroll', !isMobileActive);
  };

  const closeMobileMenu = () => {
    setIsMobileActive(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <nav
      id="navbar"
      className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}
      style={{ transform: isHidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          Portfolio<span className="accent">.</span>
        </a>
        <div className={`nav-links ${isMobileActive ? 'active' : ''}`}>
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#skills" onClick={closeMobileMenu}>Skills</a>
          <a href="#education" onClick={closeMobileMenu}>Education</a>
          <a href="#certifications" onClick={closeMobileMenu}>Certifications</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" className="btn btn-outline" onClick={closeMobileMenu}>Contact</a>
          <a href="/resume.pdf" download="Rishabh_Choudhary_Resume.pdf" className="btn btn-primary" onClick={closeMobileMenu}>Resume</a>

          {/* Socials & Theme Toggle */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '10px' }}>
            <a href="https://github.com/0Rishu0007/" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ display: 'flex' }}>
              <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#icon-github"></use></svg>
            </a>
            <a href="https://linkedin.com/in/rishabh-chy" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ display: 'flex' }}>
              <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#icon-linkedin"></use></svg>
            </a>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{
                background: 'var(--bg-light)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-color)',
                borderRadius: '5px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem'
              }}
            >
              <option value="system">System</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
        <button
          className={`mobile-menu-btn ${isMobileActive ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
