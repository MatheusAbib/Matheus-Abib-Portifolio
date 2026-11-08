import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const HardSkills = () => {
  const { t } = useTranslation();

  const frontend = [
    { icon: 'fab fa-html5', name: 'HTML', color: '#E34F26' },
    { icon: 'fab fa-css3-alt', name: 'CSS', color: '#2983c4' },
    { icon: 'devicon-sass-original', name: 'SCSS', color: '#CC6699' },
    { icon: 'fab fa-js-square', name: 'JavaScript', color: '#F7DF1E' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript', color: '#4085cf' }
  ];

  const frameworks = [
    { icon: 'fab fa-react', name: 'React', color: '#61DAFB' },
    { icon: 'fab fa-angular', name: 'Angular', color: '#DD0031' },
    {
      name: 'Spring Boot',
      isIconify: true,
      iconifyIcon: 'logos:spring-icon'
    },
    {
      name: 'Express',
      isIconify: true,
      iconifyIcon: 'simple-icons:express'
    },
    {
      name: 'Flutter',
      isIconify: true,
      iconifyIcon: 'simple-icons:flutter'
    },
    {
      name: 'Dart',
      isIconify: true,
      iconifyIcon: 'logos:dart'
    }
  ];

  const backend = [
    { icon: 'fab fa-node', name: 'Node.js', color: '#4CA54C' },
    {
      name: 'MySQL',
      isIconify: true,
      iconifyIcon: 'simple-icons:mysql',
      color: '#ffffff'
    }
  ];

  const tools = [
    { icon: 'fab fa-git-alt', name: 'Git', color: '#F05032' },
    { icon: 'fab fa-figma', name: 'Figma', color: '#F24E1E' },
    { icon: 'bi bi-kanban', name: 'Trello', color: '#3390c5' },
    { icon: 'bi bi-graph-up', name: 'Power BI', color: '#F2C811' },
    {
      icon: 'bi bi-robot',
      name: 'Inteligência Artificial',
      translateKey: 'tool_ai',
      color: '#c1ceda'
    }
  ];

  const categories = [
    {
      key: 'frontend',
      label: 'Front-end',
      icon: 'bi bi-window',
      techs: frontend
    },
    {
      key: 'backend',
      label: 'Back-end',
      icon: 'bi bi-server',
      techs: backend
    },
    {
      key: 'frameworks',
      label: 'Frameworks',
      icon: 'bi bi-grid-3x3-gap-fill',
      techs: frameworks
    },
    {
      key: 'tools',
      label: 'Ferramentas',
      icon: 'bi bi-tools',
      techs: tools
    }
  ];

  const renderSkillIcon = (tech) => {
    if (tech.isIconify) {
      return (
        <iconify-icon
          icon={tech.iconifyIcon}
          width="32"
          height="32"
          style={{
            color: tech.color || 'inherit'
          }}
        ></iconify-icon>
      );
    }

    if (tech.icon && tech.icon.endsWith('.svg')) {
      return (
        <img
          src={tech.icon}
          alt=""
          className="skill-icon-img"
        />
      );
    }

    return (
      <i
        className={tech.icon}
        style={{ color: tech.color }}
        aria-hidden="true"
      ></i>
    );
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionLabel sectionId="skills" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="tech_title">
            {t('tech_title')}
          </h2>
        </div>

        <div className="skills-grid">
          {categories.map((category, categoryIndex) => (
            <article
              key={category.key}
              className={`skill-category skill-category-${category.key}`}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="category-head">
                <div className="category-icon">
                  <i
                    className={category.icon}
                    aria-hidden="true"
                  ></i>
                </div>

                <div className="category-info">
                  <h3
                    className="category-name"
                    data-translate={`${category.key}_title`}
                  >
                    {t(`${category.key}_title`)}
                  </h3>
                </div>

                <span
                  className="category-badge"
                  aria-label={`${category.techs.length} tecnologias`}
                >
                  {String(category.techs.length).padStart(2, '0')}
                </span>
              </div>

              <div className="skill-items">
                {category.techs.map((tech) => {
                  const skillName = tech.translateKey
                    ? t(tech.translateKey)
                    : tech.name;

                  return (
                    <div
                      key={`${category.key}-${tech.name}`}
                      className="skill-item"
                      data-tooltip={skillName}
                      title={skillName}
                    >
                      <div className="skill-icon">
                        {renderSkillIcon(tech)}
                      </div>

                      <span
                        className="skill-name"
                        data-translate={tech.translateKey || undefined}
                      >
                        {skillName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardSkills;