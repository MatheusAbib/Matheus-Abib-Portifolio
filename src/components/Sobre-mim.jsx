import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const SobreMim = () => {
  const { t, toggleLanguage } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('matheus.abib.ma@gmail.com');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <section id="sobre-mim" className="sobre-mim section">
      <div className="container">
        <SectionLabel sectionId="sobre-mim" />

        <div className="sobre-mim-grid">
          <div className="sobre-mim-left">
            <h2 className="sobre-mim-title" data-translate="about_title">
              {t('about_title')}
            </h2>
            <div className="sobre-mim-features">
              <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
                <div className="feature-header">
                  <div className="feature-icon">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <h3 data-translate="feature_1_title">{t('feature_1_title')}</h3>
                </div>
                <div className="feature-text">
                  <p data-translate="feature_1_text" dangerouslySetInnerHTML={{ __html: t('feature_1_text') }} />
                </div>
              </div>
              <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-header">
                  <div className="feature-icon">
                    <i className="bi bi-kanban"></i>
                  </div>
                  <h3 data-translate="feature_2_title">{t('feature_2_title')}</h3>
                </div>
                <div className="feature-text">
                  <p data-translate="feature_2_text" dangerouslySetInnerHTML={{ __html: t('feature_2_text') }} />
                </div>
              </div>
              <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-header">
                  <div className="feature-icon">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <h3 data-translate="feature_3_title">{t('feature_3_title')}</h3>
                </div>
                <div className="feature-text">
                  <p data-translate="feature_3_text" dangerouslySetInnerHTML={{ __html: t('feature_3_text') }} />
                </div>
              </div>
            </div>
          </div>

          <div className="sobre-mim-content">
            <div className="sobre-mim-texto">
              <p className="desktop-text" data-translate="hero_desc_1" dangerouslySetInnerHTML={{ __html: t('hero_desc_1') }} />
              <p className="desktop-text" data-translate="hero_desc_2" dangerouslySetInnerHTML={{ __html: t('hero_desc_2') }} />
              <p className="desktop-text" data-translate="hero_desc_3" dangerouslySetInnerHTML={{ __html: t('hero_desc_3') }} />
              <p className="desktop-text" data-translate="hero_desc_4" dangerouslySetInnerHTML={{ __html: t('hero_desc_4') }} />
              
              <p className="mobile-text" data-translate="hero_desc_mobile_1">{t('hero_desc_mobile_1')}</p>
              <p className="mobile-text" data-translate="hero_desc_mobile_2">{t('hero_desc_mobile_2')}</p>
              <p className="mobile-text" data-translate="hero_desc_mobile_3">{t('hero_desc_mobile_3')}</p>
              <p className="mobile-text" data-translate="hero_desc_mobile_4">{t('hero_desc_mobile_4')}</p>
            </div>

            <div className="sobre-mim-footer">
              <div className="sobre-mim-actions-left">
                <div className="dropdown">
                  <button className="btn-primary" type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <i className="bi bi-download"></i>
                    <span data-translate="cv_button">{t('cv_button')}</span>
                    <i className="bi bi-chevron-down"></i>
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu show">
                      <li>
                        <a className="dropdown-item" href="/assets/CV/matheus_abib_curriculo.pdf" target="_blank" onClick={() => setIsDropdownOpen(false)}>
                          <i className="bi bi-flag-br"></i>
                          <span data-translate="cv_portuguese">{t('cv_portuguese')}</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/assets/CV/matheus_abib_resume.pdf" target="_blank" onClick={() => setIsDropdownOpen(false)}>
                          <i className="bi bi-flag-us"></i>
                          <span data-translate="cv_english">{t('cv_english')}</span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
                <button className="btn-secondary" onClick={toggleLanguage}>
                  <i className="bi bi-translate"></i>
                  <span>PT/EN</span>
                </button>
              </div>
                <div className="sobre-mim-social">
                  <a 
                    href="https://github.com/MatheusAbib" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    data-tooltip="/MatheusAbib"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/matheusabib/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    data-tooltip="/in/matheusabib"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a 
                    href="https://wa.me/11975072008" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    data-tooltip="(11) 97507-2008"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a 
                    className="social-icon-btn" 
                    onClick={(e) => {
                      e.preventDefault();
                      copyEmail();
                    }}
                    style={{ cursor: 'pointer' }}
                    data-tooltip="matheus.abib.ma@gmail.com"
                  >
                    <i className="bi bi-google"></i>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
        {showNotification && (
          <div className={`email-notification ${showNotification ? 'show' : ''}`}>
            <i className="bi bi-check-circle-fill"></i>
            <span data-translate="email_copied">{t('email_copied')}</span>
          </div>
        )}
    </section>
  );
};

export default SobreMim;