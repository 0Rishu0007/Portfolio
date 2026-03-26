import React from 'react';

export default function Footer() {
  return (
    <footer className="section-padding reveal" style={{ borderTop: '1px solid var(--border-color)', marginTop: '50px' }}>

      {/* Contact Form Section - Full space and center aligned */}
      {/* <div style={{ maxWidth: '700px', margin: '0 auto', paddingBottom: '70px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', color: 'var(--text-main)' }}>Send a Message</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1rem' }}>Have a question or want to work together? Let's get in touch.</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'left' }} onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{ flex: '1 1 200px', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-light)', color: 'var(--text-main)', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{ flex: '1 1 200px', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-light)', color: 'var(--text-main)', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
              required
            />
          </div> */}
          {/* <textarea
            placeholder="Your Message..."
            rows="6"
            style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-light)', color: 'var(--text-main)', fontFamily: 'var(--font-sans)', resize: 'vertical', fontSize: '1rem' }}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'center', padding: '16px 45px', fontSize: '1.1rem', marginTop: '10px' }}>Send Message</button>
        </form>
      </div> */}

      {/* Footer Bottom Section */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '40px',
        gap: '40px'
      }}>

        {/* Empty flex box for perfect centering on large screens */}
        <div style={{ flex: '1 1 250px' }} className="d-none-mobile"></div>

        {/* Center Content */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div className="social-links" style={{ display: 'flex', gap: '25px' }}>
            <a href="https://github.com/0Rishu0007/" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}><svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><use href="#icon-github"></use></svg></a>
            <a href="https://linkedin.com/in/rishabh-chy" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}><svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><use href="#icon-linkedin"></use></svg></a>
            {/* <a href="#" aria-label="Twitter" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}><svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2"><use href="#icon-twitter"></use></svg></a> */}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.90rem', margin: 0, textAlign: 'center', fontFamily: 'var(--font-mono)' }}>Designed & Built by Rishabh Choudhary</p>
        </div>

        {/* Quick Links section right aligned */}
        <div style={{ flex: '1 1 250px', display: 'flex', justifyContent: 'flex-end', paddingRight: '15px' }}>
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '15px', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>Home</a></li>
              <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>About</a></li>
              <li><a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>Projects</a></li>
              <li><a href="/resume.pdf" download="resume.pdf" style={{ color: 'var(--accent)', textDecoration: 'none', marginTop: '5px', display: 'inline-block' }}>Download Resume</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
