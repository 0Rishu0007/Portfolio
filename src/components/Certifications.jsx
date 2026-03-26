import React from 'react';

export default function Certifications() {
  const certs = [
    {
      title: "Full Stack Web Devlopment",
      issuer: "Rising Tech Pro",
      date: "2024",
      image: "/web_dev.jpg"
    },
    {
      title: "UI & UX",
      issuer: "Cipher Schools",
      date: "2025",
      image: "/ui_ux.jpg"
    },
    {
      title: "Gen AI",
      issuer: "Udemy",
      date: "2026",
      image: "/gen_ai.jpg"
    },
    {
      title: "Introduction to Hardware System",
      issuer: "Coursera",
      date: "2025",
      image: "/coursera_hardware.jpg"
    }
  ];

  return (
    <section id="certifications" className="projects section-padding">
      <h2 className="section-title reveal"><span className="number">04.</span> Certifications</h2>
      <div className="projects-grid" style={{ gap: '50px' }}>
        {certs.map((cert, index) => (
          <div className="project-card reveal" key={index} style={{ gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}>
            <div className="project-image" style={{ gridColumn: '1 / -1', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              <div className="image-wrapper" style={{ aspectRatio: '1.414/1' }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="placeholder" style={{ display: 'none' }}><span className="icon">📜</span></div>
              </div>
            </div>
            <div className="project-content" style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '15px' }}>
              <p className="project-overline">{cert.date} • {cert.issuer}</p>
              <h3 className="project-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
