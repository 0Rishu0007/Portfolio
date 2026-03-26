import React from 'react';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <h2 className="section-title reveal"><span className="number">01.</span> About Me</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>Hello! My name is Rishabh Kumar Choudhary and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!</p>
          <p>Currently building projects to strengthen problem-solving skills and practical development experience. Actively seeking opportunities in software development where I can apply my skills, contribute to real-world projects, and grow as a developer.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Vite</li>
          </ul>
        </div>
        <div className="about-image-container reveal reveal-delay-2">
          <div className="about-image-wrapper">
            <img src="/profile.jpeg" alt="Rishabh" className="about-image-placeholder" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
