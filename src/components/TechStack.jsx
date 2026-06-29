import React from 'react';
import SectionLabel from './SectionLabel';

const TechStack = () => {
const frontend = [
  { icon: "fab fa-html5", name: "HTML", color: "#E34F26" },
  { icon: "fab fa-css3-alt", name: "CSS", color: "#1572B6" },
  { icon: "fab fa-js-square", name: "JavaScript", color: "#F7DF1E" },
  { icon: "devicon-typescript-plain", name: "TypeScript", color: "#3178C6" }
];

const frameworks = [
  { icon: "fab fa-react", name: "React", color: "#61DAFB" },
  { icon: "fab fa-angular", name: "Angular", color: "#DD0031" },
  { name: "Spring Boot", isIconify: true, iconifyIcon: "logos:spring-icon" },
  { name: "Express", isIconify: true, iconifyIcon: "simple-icons:express" },
  { name: "Flutter", isIconify: true, iconifyIcon: "logos:flutter" },
  { name: "Dart", isIconify: true, iconifyIcon: "logos:dart" }
];

const backend = [
  { icon: "fab fa-node", name: "Node.js", color: "#4CA54C" },
  { name: "MySQL", isIconify: true, iconifyIcon: "logos:mysql" }
];

const tools = [
  { icon: "fab fa-git-alt", name: "Git", color: "#F05032" },
  { icon: "fab fa-github", name: "GitHub", color: "#ffffff" },
  { icon: "fab fa-figma", name: "Figma", color: "#F24E1E" },
  { icon: "bi-kanban", name: "Trello", color: "#0079BF" },
  { icon: "bi-graph-up", name: "Power BI", color: "#F2C811" }
];


  return (
    <section id="testimonials" className="testimonials section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="skills" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="tech_title">Hard Skills</h2>
        </div>
      </div>
      
      <div className="container">
        <div className="tech-row">
          <div className="tech-category">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <i className="bi bi-window"></i>
              </div>
              <h3 className="category-title" data-translate="frontend_title">Front-end</h3>
            </div>
            <div className="tech-grid">
              {frontend.map((tech, index) => (
                <div key={`front-${index}`} className="tech-card">
                  <div className="tech-icon-wrapper">
                    {tech.isIconify ? (
                      <iconify-icon icon={tech.iconifyIcon} width="48" height="48"></iconify-icon>
                    ) : (
                      <i className={tech.icon} style={{ color: tech.color }}></i>
                    )}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <i className="bi bi-server"></i>
              </div>
              <h3 className="category-title" data-translate="backend_title">Back-end</h3>
            </div>
            <div className="tech-grid">
              {backend.map((tech, index) => (
                <div key={`back-${index}`} className="tech-card">
                  <div className="tech-icon-wrapper">
                    {tech.isIconify ? (
                      <iconify-icon icon={tech.iconifyIcon} width="48" height="48"></iconify-icon>
                    ) : (
                      <i className={tech.icon} style={{ color: tech.color }}></i>
                    )}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tech-row">
          <div className="tech-category">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </div>
              <h3 className="category-title" data-translate="frameworks_title">Frameworks</h3>
            </div>
            <div className="tech-grid">
              {frameworks.map((tech, index) => (
                <div key={`fw-${index}`} className="tech-card">
                  <div className="tech-icon-wrapper">
                    {tech.isIconify ? (
                      <iconify-icon icon={tech.iconifyIcon} width="48" height="48"></iconify-icon>
                    ) : (
                      <i className={tech.icon} style={{ color: tech.color }}></i>
                    )}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-category">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <i className="bi bi-tools"></i>
              </div>
              <h3 className="category-title" data-translate="tools_title">Ferramentas</h3>
            </div>
            <div className="tech-grid">
              {tools.map((tech, index) => (
                <div key={`tool-${index}`} className="tech-card">
                  <div className="tech-icon-wrapper">
                    <i className={tech.icon} style={{ color: tech.color }}></i>
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;