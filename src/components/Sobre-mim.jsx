import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const SobreMim = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const dropdownRef = useRef(null);
  const notificationTimeoutRef = useRef(null);

  const features = [
    {
      icon: 'bi-code-square',
      title: 'feature_1_title',
      text: 'feature_1_text'
    },
    {
      icon: 'bi-kanban',
      title: 'feature_2_title',
      text: 'feature_2_text'
    },
    {
      icon: 'bi-graph-up',
      title: 'feature_3_title',
      text: 'feature_3_text'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('matheus.abib.ma@gmail.com');

      setShowNotification(true);

      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }

      notificationTimeoutRef.current = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } catch {
      window.location.href = 'mailto:matheus.abib.ma@gmail.com';
    }
  };

  return (
    <section id="sobre-mim" className="sobre-mim section">
      <div className="container">
        
        <SectionLabel sectionId="sobre-mim" />
             <div className="section-title" data-aos="fade-up">
            <h2
              className="sobre-mim-title"
              data-translate="about_title"
            >
              {t('about_title')}
            </h2>
            </div>
        <div className="sobre-mim-grid">
          
          <div className="sobre-mim-left">


            <div className="sobre-mim-features">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="feature-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="feature-header">
                    <div className="feature-icon">
                      <i className={`bi ${feature.icon}`} aria-hidden="true" />
                    </div>

                    <h3 data-translate={feature.title}>
                      {t(feature.title)}
                    </h3>
                  </div>

                  <div className="feature-text">
                    <p
                      data-translate={feature.text}
                      dangerouslySetInnerHTML={{
                        __html: t(feature.text)
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="sobre-mim-content">
            <div className="sobre-mim-text-card" data-aos="fade-up">
              <div className="sobre-mim-texto">
                <p
                  className="desktop-text"
                  data-translate="hero_desc_1"
                  dangerouslySetInnerHTML={{
                    __html: t('hero_desc_1')
                  }}
                />

                <p
                  className="desktop-text"
                  data-translate="hero_desc_2"
                  dangerouslySetInnerHTML={{
                    __html: t('hero_desc_2')
                  }}
                />

                <p
                  className="desktop-text"
                  data-translate="hero_desc_3"
                  dangerouslySetInnerHTML={{
                    __html: t('hero_desc_3')
                  }}
                />

                <p
                  className="desktop-text"
                  data-translate="hero_desc_4"
                  dangerouslySetInnerHTML={{
                    __html: t('hero_desc_4')
                  }}
                />

                <p className="mobile-text" data-translate="hero_desc_mobile_1">
                  {t('hero_desc_mobile_1')}
                </p>

                <p className="mobile-text" data-translate="hero_desc_mobile_2">
                  {t('hero_desc_mobile_2')}
                </p>

                <p className="mobile-text" data-translate="hero_desc_mobile_3">
                  {t('hero_desc_mobile_3')}
                </p>

                <p className="mobile-text" data-translate="hero_desc_mobile_4">
                  {t('hero_desc_mobile_4')}
                </p>
              </div>
            </div>

            <div className="sobre-mim-footer" data-aos="fade-up" data-aos-delay="100">
              <div className="sobre-mim-actions-left">
                <div className="dropdown" ref={dropdownRef}>
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={() => setIsDropdownOpen((current) => !current)}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <i className="bi bi-download" aria-hidden="true" />
                    <span data-translate="cv_button">
                      {t('cv_button')}
                    </span>
                    <i className="bi bi-chevron-down" aria-hidden="true" />
                  </button>

                  {isDropdownOpen && (
                    <ul className="dropdown-menu show">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/assets/CV/matheus_abib_curriculo.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <i className="bi bi-flag" aria-hidden="true" />
                          <span data-translate="cv_portuguese">
                            {t('cv_portuguese')}
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="dropdown-item"
                          href="/assets/CV/matheus_abib_resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <i className="bi bi-globe2" aria-hidden="true" />
                          <span data-translate="cv_english">
                            {t('cv_english')}
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="sobre-mim-social">
                <a
                  href="https://github.com/MatheusAbib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  data-tooltip="/MatheusAbib"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github" aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/matheusabib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  data-tooltip="/in/matheusabib"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin" aria-hidden="true" />
                </a>

                <a
                  href="https://wa.me/11975072008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  data-tooltip="(11) 97507-2008"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  className="social-icon-btn"
                  onClick={copyEmail}
                  data-tooltip="matheus.abib.ma@gmail.com"
                  aria-label="Copiar e-mail"
                >
                  <i className="bi bi-envelope" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="email-notification show" role="status">
          <i className="bi bi-check-circle-fill" aria-hidden="true" />
          <span data-translate="email_copied">
            {t('email_copied')}
          </span>
        </div>
      )}
    </section>
  );
};

export default SobreMim;