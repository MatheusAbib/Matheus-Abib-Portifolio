import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const Journey = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      number: '01',
      icon: 'bi-headset',
      title_key: 'exp_1_title',
      role_key: 'exp_1_role',
      period_key: 'exp_1_period',
      description_key: 'exp_1_text',
      isActive: false
    },
    {
      number: '02',
      icon: 'bi-code-square',
      title_key: 'exp_2_title',
      role_key: 'exp_2_role',
      period_key: 'exp_2_period',
      description_key: 'exp_2_text',
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
          <h2 data-translate="journey_title">
            {t('journey_title')}
          </h2>
        </div>

        <div className="journey-list">
          <div className="journey-container">
            {experiences.map((exp, index) => (
              <article
                key={exp.number}
                className={`journey-item ${exp.isActive ? 'journey-item-active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="journey-timeline" aria-hidden="true">
                  <div className="journey-timeline-marker">
                    <span>{exp.number}</span>
                  </div>
                </div>

                <div className="journey-card">
                  <div className="journey-body">
                    <div className="journey-card-header">
                      <div className="journey-icon">
                        <i className={`bi ${exp.icon}`} aria-hidden="true"></i>
                      </div>

                      <div className="journey-heading">
                        <h3 data-translate={exp.title_key}>
                          {t(exp.title_key)}
                        </h3>

                        <span
                          className="journey-role"
                          data-translate={exp.role_key}
                        >
                          {t(exp.role_key)}
                        </span>
                      </div>

                      <div className="journey-period-wrapper">

                        <span
                          className="journey-period"
                          data-translate={exp.period_key}
                        >
                          {t(exp.period_key)}
                        </span>
                      </div>
                    </div>

                    <div className="journey-card-divider"></div>

                    <div
                      className="journey-content"
                      data-translate={exp.description_key}
                      dangerouslySetInnerHTML={{
                        __html: t(exp.description_key)
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;