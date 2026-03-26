import React from 'react';

export default function Projects() {

  const projects = [
    {
      title: "Startup Guru",
      overline: "Interactive Web Platform",
      description: [
        "Developed a full-stack web application that enables entrepreneurs with the right tools, Knowledge and guidance to kickstart their Startup Journey",
        "Engineered with Step-by-Step Startup Roadmap, community forum for peer support and Mentor Booking System.",
        "User focused and performance driven design with Clean UI and optimized performance for maximum engagement"
      ],
      tech: ["React", "Node.js", "Tailwind"],
      image: "/Startup_Guru.png",
      github: "https://github.com/0Rishu0007/startup_guru",
      live: "https://www.linkedin.com/posts/rishabh-chy_webdevelopment-tailwindcss-php-activity-7319060569255223297-XyaF/?utm_source=share&utm_medium=member_android&rcm=ACoAAEaNRaIBtLCQ06F187T5rpxY2nwvWR-5aik"
    },
    {
      title: "Sneeky Sneakers",
      overline: "Shoe Store",
      description: [
        "Modern E-Commerce Website for Sneaker Brand Featuring Clean layout, Product Catalog Responsive Design and Smooth Navigation.",
        "Integrated Google Analytics to track user behavior, page performance and Conversion metrics.",
        "Integrated MailChimp for automated email campaigns. Additionally Integrated AI supported Chat System"
      ],
      tech: ["Wix", "Google Analytics", "Mail Chimp"],
      image: "/Sneeky_Sneakers.png",
      github: "https://github.com/yourusername/sneeky-sneakers",
      live: "https://rishikeshrishabh02.wixsite.com/my-site-5"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <h2 className="section-title reveal">
        <span className="number">05.</span> Some Things I've Built
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card reveal ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="project-content">
              <p className="project-overline">{project.overline}</p>

              <h3 className="project-title">{project.title}</h3>

              <div className="project-description">
                {project.description.map((point, i) => (
                  <p key={i}>• {point}</p>
                ))}
              </div>

              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <svg><use href="#icon-github"></use></svg>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <svg><use href="#icon-external"></use></svg>
                </a>
              </div>
            </div>

            <div className="project-image">
              <div className="image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}