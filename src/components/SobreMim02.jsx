import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from './SectionLabel';

const SobreMim02 = () => {
  const { t, toggleLanguage } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="sobre-mim-02" className="sobre-mim-02 section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="sobre-mim-02" />

        <div className="sobre-mim-02-left">
          <h2 className="sobre-mim-02-title" data-translate="about_title">{t('about_title')}</h2>

          <div className="sobre-mim-02-texto">
            <p data-translate="hero_desc_1" dangerouslySetInnerHTML={{ __html: t('hero_desc_1') }} />
            <p data-translate="hero_desc_2" dangerouslySetInnerHTML={{ __html: t('hero_desc_2') }} />
            <p data-translate="hero_desc_3" dangerouslySetInnerHTML={{ __html: t('hero_desc_3') }} />
            <p data-translate="hero_desc_4" dangerouslySetInnerHTML={{ __html: t('hero_desc_4') }} />
            
          </div>

          <div className="sobre-mim-02-contacts">
            <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="contact-link-mini">
              <i className="bi bi-whatsapp"></i>
              <span>(11) 97507-2008</span>
            </a>
            <a className="contact-link-mini">
              <i className="bi bi-envelope-fill"></i>
              <span>matheus.abib.ma@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="contact-link-mini">
              <i className="bi bi-linkedin"></i>
              <span>/in/matheusabib</span>
            </a>
            <a href="https://github.com/MatheusAbib" target="_blank" rel="noopener noreferrer" className="contact-link-mini">
              <i className="bi bi-github"></i>
              <span>/MatheusAbib</span>
            </a>
          </div>

          <div className="hero-actions">
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
        </div>

        <div className="feature-grid-02">
          <div className="feature-card-02" data-aos="fade-up" data-aos-delay="0">
            <div className="feature-icon-02">
              <i className="bi bi-code-square"></i>
            </div>
            <h3 data-translate="feature_1_title">{t('feature_1_title')}</h3>
            <p data-translate="feature_1_text">{t('feature_1_text')}</p>
          </div>
          <div className="feature-card-02" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon-02">
              <i className="bi bi-kanban"></i>
            </div>
            <h3 data-translate="feature_2_title">{t('feature_2_title')}</h3>
            <p data-translate="feature_2_text">{t('feature_2_text')}</p>
          </div>
          <div className="feature-card-02" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon-02">
              <i className="bi bi-graph-up"></i>
            </div>
            <h3 data-translate="feature_3_title">{t('feature_3_title')}</h3>
            <p data-translate="feature_3_text">{t('feature_3_text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim02;