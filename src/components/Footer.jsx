import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo-wrapper mb-4">
                <a href="/" className="logo d-flex align-items-center">
                  <span className="sitename" data-translate="footer_name">Matheus Abib</span>
                  <span className="logo-dot">.</span>
                </a>
              </div>

              <div className="footer-bio mb-4">
                <p data-translate="footer_bio">{t('footer_bio')}</p>
              </div>

              <div className="footer-contact">
                <div className="contact-item d-flex align-items-center mb-3">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="email-info">
                    <a href="mailto:matheus.abib.ma@gmail.com">
                      matheus.abib.ma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center">
                  <div className="contact-icon">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="name-info">
                    <span data-translate="footer_fullname">{t('footer_fullname')}</span>
                  </div>
                </div>
              </div>

              <div className="social-links d-flex mt-4">
                <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://github.com/MatheusAbib" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section-header">
                <h4 data-translate="footer_quick_links_title">{t('footer_quick_links_title')}</h4>
                <div className="header-line"></div>
              </div>
              <ul>
                <li><a href="#sobre-mim-02"><span data-translate="menu_about">{t('menu_about')}</span></a></li>
                <li><a href="#jornada"><span data-translate="menu_methodologies">{t('menu_methodologies')}</span></a></li>
                <li><a href="#skills"><span data-translate="menu_skills">{t('menu_skills')}</span></a></li>
                <li><a href="#service-details"><span data-translate="menu_certificates">{t('menu_certificates')}</span></a></li>
                <li><a href="#portfolio"><span data-translate="menu_projects">{t('menu_projects')}</span></a></li>
                <li><a href="#form-section"><span data-translate="menu_contact">{t('menu_contact')}</span></a></li>
              </ul>
            </div>

            <div className="footer-services">
              <div className="footer-section-header">
                <h4 data-translate="footer_specialties_title">{t('footer_specialties_title')}</h4>
                <div className="header-line"></div>
              </div>
              <ul>
                <li>
                  <div className="service-icon"><i className="bi bi-code-slash"></i></div>
                  <span data-translate="footer_specialty_fullstack">{t('footer_specialty_fullstack')}</span>
                </li>
                <li>
                  <div className="service-icon"><i className="bi bi-palette2"></i></div>
                  <span data-translate="footer_specialty_uiux">{t('footer_specialty_uiux')}</span>
                </li>
                <li>
                  <div className="service-icon"><i className="bi bi-gear"></i></div>
                  <span data-translate="footer_specialty_software">{t('footer_specialty_software')}</span>
                </li>
                <li>
                  <div className="service-icon"><i className="bi bi-bar-chart-line"></i></div>
                  <span data-translate="footer_specialty_powerbi">{t('footer_specialty_powerbi')}</span>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <div className="footer-section-header">
                <h4 data-translate="footer_talk_title">{t('footer_talk_title')}</h4>
                <div className="header-line"></div>
              </div>

              <p className="newsletter-text" data-translate="footer_newsletter_text">
                {t('footer_newsletter_text')}
              </p>

              <div className="cta-card">
                <div className="cta-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>

                <h5 data-translate="footer_cta_title">{t('footer_cta_title')}</h5>
                <p data-translate="footer_cta_text">{t('footer_cta_text')}</p>

                <a href="#form-section" className="cta-button">
                  <span data-translate="footer_cta_button">{t('footer_cta_button')}</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright-text">
              <p>
                <span data-translate="footer_copyright">
                  © {currentYear} <strong className="highlight">Matheus Abib</strong>. {t('footer_copyright').replace(`© ${currentYear} Matheus Abib. `, '')}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;