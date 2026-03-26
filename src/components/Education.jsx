import React from 'react';

export default function Education() {
  return (
    <section id="education" className="experience section-padding">
      <h2 className="section-title reveal"><span className="number">03.</span> Education</h2>
      <div className="timeline">

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2023 - 2027</span>
            <h3 className="timeline-title">Bachelor of Technology</h3>
            <h4 className="timeline-company">Lovely Professional University</h4>
            <ul>
              <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering.</li>
              <li>CGPA: 7.8</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2021 - 2022</span>
            <h3 className="timeline-title">Intermediate</h3>
            <h4 className="timeline-company">DAV Public School Darbhanga</h4>
            <ul>
              <li>Percentage: 80%</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2019 - 2020</span>
            <h3 className="timeline-title">Matriculation</h3>
            <h4 className="timeline-company">DAV Public School Darbhanga</h4>
            <ul>
              <li>Percentage: 92%</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}