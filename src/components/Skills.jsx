import React from 'react';

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "C++", "Python", "HTML", "PHP", "JavaScript"]
    },
    {
      title: "Frameworks / Modules",
      skills: ["Node.js", "React.js", "Bootstrap", "Tailwind"]
    },
    {
      title: "Speaks",
      skills: ["English (Proficient)", "Hindi (Native)", "Maithili (Native)"]
    },
    {
      title: "Others",
      skills: ["Prompt Engineering", "UI & UX", "Excel", "Canva"]
    },
    {
      title: "Soft Skills",
      skills: ["Keen Learning", "Team Collaboration", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="about section-padding">
      <h2 className="section-title reveal"><span className="number">02.</span> Skills</h2>
      <div className="reveal" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px',
        marginTop: '30px' 
      }}>
        {categories.map((category, index) => (
          <div key={index} className="skill-box" style={{
            background: 'var(--bg-light)',
            padding: '25px',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <h3 style={{
              color: 'var(--text-main)',
              fontSize: '1.2rem',
              marginBottom: '20px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ color: 'var(--accent)' }}>▹</span> 
              {category.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {category.skills.map((skill, idx) => (
                <li key={idx} style={{
                  background: 'rgba(100, 255, 218, 0.05)',
                  color: 'var(--text-secondary)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid var(--border-color)'
                }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
