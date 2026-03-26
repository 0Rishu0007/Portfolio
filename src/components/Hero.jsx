import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero section-padding">
      <div className="hero-content reveal">
        <h2 className="subtitle">Hi, My Name is</h2>
        <h1 className="title">Rishabh Chy </h1>
        <h2 className="role">I build things for the web.</h2>
        <p className="description">
          I am Software Engineer Specializing in building exceptional digital experiences. Currently I am focused on building Modern Websites that will raise the industry bars for the next generation.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Check out my work</a>
          <a href="#contact" className="btn btn-outline glow">Get in touch</a>
        </div>
      </div>
      <div className="hero-visual reveal reveal-delay">
        <div className="blob-container">
          <div className="blob shape-1"></div>
          <div className="blob shape-2"></div>
          <div className="blob shape-3"></div>
          <div className="glass-card main-card">
            <div className="card-inner">
              <span className="code-comment">// Crafting digital experiences</span>
              <span className="code-line"><span className="code-keyword">const</span> <span className="code-var">Full-Stack Web Developer</span> = {'{'}</span>
              <span className="code-line indent">name: <span className="code-string">"Rishabh Kumar Choudhary"</span>,</span>
              <span className="code-line indent">passion: <span className="code-string">"Coding & Problem Solving"</span>,</span>
              <span className="code-line indent">status: <span className="code-string">"Available"</span></span>
              <span className="code-line">{'}'};</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
