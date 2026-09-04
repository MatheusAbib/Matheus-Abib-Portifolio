import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const Journey = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      number: "01",
      icon: "bi-headset",
      title_key: "exp_1_title",
      role_key: "exp_1_role",
      period_key: "exp_1_period",
      description_key: "exp_1_text",
      isActive: false
    },
    {
      number: "02",
      icon: "bi-code-square",
      title_key: "exp_2_title",
      role_key: "exp_2_role",
      period_key: "exp_2_period",
      description_key: "exp_2_text",
      isActive: true
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="section-glow"></div>
      <div className="section-waves-enhanced"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="journey" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="journey_title">{t('journey_title')}</h2>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="journey-list">
          <div className="journey-container">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="journey-item" 
                data-aos="fade-up" 
                data-aos-delay={300 + (index * 100)}
              >
                <div className="journey-card">
                  <span className="journey-number">{exp.number}</span>
                  <div className="journey-body">
                    <div className="journey-icon">
                      <i className={`bi ${exp.icon}`}></i>
                    </div>
                    <div className="journey-content">
                      <div className="journey-header">
                        <h3 data-translate={exp.title_key}>{t(exp.title_key)}</h3>
                        <div className="journey-period-wrapper">
                          <span className="journey-period" data-translate={exp.period_key}>{t(exp.period_key)}</span>
                          {exp.isActive && <span className="journey-active-dot"></span>}
                        </div>
                      </div>
                      <div className="journey-role">{t(exp.role_key)}</div>
                      <p data-translate={exp.description_key}>{t(exp.description_key)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;