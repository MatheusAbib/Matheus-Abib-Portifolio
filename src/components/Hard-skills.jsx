import React from 'react';
import SectionLabel from '../services/SectionLabel';

const HardSkills = () => {
  const frontend = [
    { icon: "fab fa-html5", name: "HTML", color: "#E34F26", level: 100 },
    { icon: "fab fa-css3-alt", name: "CSS", color: "#2983c4ff", level: 100 },
    { icon: "devicon-sass-original", name: "SCSS", color: "#CC6699", level: 80 },
    { icon: "fab fa-js-square", name: "JavaScript", color: "#F7DF1E", level: 80 },
    { icon: "devicon-typescript-plain", name: "TypeScript", color: "#4085cfff", level: 70 }
  ];

  const frameworks = [
    { icon: "fab fa-react", name: "React", color: "#61DAFB", level: 90 },
    { icon: "fab fa-angular", name: "Angular", color: "#DD0031", level: 80 },
    { name: "Spring Boot", isIconify: true, iconifyIcon: "logos:spring-icon", level: 100 },
    { name: "Express", isIconify: true, iconifyIcon: "simple-icons:express", level: 75 },
    { name: "Flutter", isIconify: true, iconifyIcon: "logos:flutter", level: 75 },
    { name: "Dart", isIconify: true, iconifyIcon: "logos:dart", level: 75 }
  ];

  const backend = [
    { icon: "fab fa-node", name: "Node.js", color: "#4CA54C", level: 85 },
    { name: "MySQL", isIconify: true, iconifyIcon: "simple-icons:mysql", color: "#ffffff", level: 85 }
  ];

  const tools = [
    { icon: "fab fa-git-alt", name: "Git", color: "#F05032", level: 90 },
    { icon: "fab fa-figma", name: "Figma", color: "#F24E1E", level: 100 },
    { icon: "bi-kanban", name: "Trello", color: "#3390c5ff", level: 100 },
    { icon: "bi-graph-up", name: "Power BI", color: "#F2C811", level: 85 }
  ];

  const categories = [
    { key: 'frontend', label: 'Front-end', icon: 'bi-window', techs: frontend },
    { key: 'backend', label: 'Back-end', icon: 'bi-server', techs: backend },
    { key: 'frameworks', label: 'Frameworks', icon: 'bi-grid-3x3-gap-fill', techs: frameworks },
    { key: 'tools', label: 'Ferramentas', icon: 'bi-tools', techs: tools }
  ];

  return (
    <section id="skills" className="skills-section">
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
        <div className="skills-grid" data-aos="fade-up">
          {categories.map((cat) => (
            <div key={cat.key} className="skill-category">
              <div className="category-head">
                <div className="category-icon">
                  <i className={cat.icon}></i>
                </div>
                <h3 className="category-name" data-translate={cat.key + '_title'}>
                  {cat.label}
                </h3>
                <span className="category-badge">{cat.techs.length}</span>
              </div>
              <div className="skill-items">
                {cat.techs.map((tech, index) => (
                  <div key={`${cat.key}-${index}`} className="skill-item" data-tooltip={tech.name}>
                    <div className="skill-icon">
                      {tech.isIconify ? (
                        <iconify-icon 
                          icon={tech.iconifyIcon} 
                          width="32" 
                          height="32"
                          style={{ fontSize: '32px' }}
                        ></iconify-icon>
                      ) : (
                        <i className={tech.icon} style={{ color: tech.color }}></i>
                      )}
                    </div>
                    <span className="skill-name">{tech.name}</span>
                    <div className="skill-level">
                      <div className="skill-level-track">
                        <div 
                          className="skill-level-fill" 
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-level-value">{tech.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardSkills;