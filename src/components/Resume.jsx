import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="contact section-padding reveal">
      <p className="overline">Want to keep a copy?</p>
      <h2 className="title">My Resume</h2>
      <p className="description">You can download my full resume to learn more about my education, experience, skills, and background.</p>
      <a href="/Rishabh_cv.pdf" download="Rishabh_cv.pdf" className="btn btn-primary btn-large">Download Resume</a>
    </section>
  );
}
