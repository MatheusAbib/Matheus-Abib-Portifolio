import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const [showNotification, setShowNotification] = useState(false);
  const notificationTimeoutRef = useRef(null);

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
    } catch (error) {
      window.location.href = 'mailto:matheus.abib.ma@gmail.com';
    }
  };

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: 'bi bi-whatsapp',
      href: 'https://wa.me/11975072008',
      tooltip: '(11) 97507-2008'
    },
    {
      name: 'GitHub',
      icon: 'bi bi-github',
      href: 'https://github.com/MatheusAbib',
      tooltip: '/MatheusAbib'
    },
    {
      name: 'LinkedIn',
      icon: 'bi bi-linkedin',
      href: 'https://www.linkedin.com/in/matheusabib/',
      tooltip: '/in/matheusabib'
    }
  ];

  const specialties = [
    {
      icon: 'bi bi-code-slash',
      translationKey: 'footer_specialty_fullstack'
    },
    {
      icon: 'bi bi-palette2',
      translationKey: 'footer_specialty_uiux'
    },
    {
      icon: 'bi bi-gear',
      translationKey: 'footer_specialty_software'
    },
    {
      icon: 'bi bi-bar-chart-line',
      translationKey: 'footer_specialty_powerbi'
    }
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <a href="/" className="footer-logo">
                <span
                  className="sitename"
                  data-translate="footer_name"
                >
                  Matheus Abib
                </span>

                <span className="logo-dot">.</span>
              </a>

              <div className="footer-identity">
                <i
                  className="bi bi-person-circle"
                  aria-hidden="true"
                ></i>

                <span data-translate="footer_fullname">
                  {t('footer_fullname')}
                </span>
              </div>

              <p
                className="footer-bio"
                data-translate="footer_bio"
              >
                {t('footer_bio')}
              </p>

              <div className="footer-social">
                <span
                  className="footer-social-label"
                  data-translate="footer_social_title"
                >
                  {t('footer_social_title')}
                </span>

                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      data-tooltip={social.tooltip}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <i
                        className={social.icon}
                        aria-hidden="true"
                      ></i>
                    </a>
                  ))}

                  <button
                    type="button"
                    className="social-btn"
                    onClick={copyEmail}
                    data-tooltip="matheus.abib.ma@gmail.com"
                    aria-label="Copiar endereço de email"
                    title="Copiar email"
                  >
                    <i
                      className="bi bi-envelope"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="footer-services">
              <div className="footer-section-header">
                <h4 data-translate="footer_specialties_title">
                  {t('footer_specialties_title')}
                </h4>
              </div>

              <ul className="footer-specialties-list">
                {specialties.map((specialty) => (
                  <li key={specialty.translationKey}>
                    <span className="service-icon">
                      <i
                        className={specialty.icon}
                        aria-hidden="true"
                      ></i>
                    </span>

                    <span data-translate={specialty.translationKey}>
                      {t(specialty.translationKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-newsletter">
              <div className="footer-section-header">
                <h4 data-translate="footer_talk_title">
                  {t('footer_talk_title')}
                </h4>
              </div>

              <p
                className="newsletter-text"
                data-translate="footer_newsletter_text"
              >
                {t('footer_newsletter_text')}
              </p>

              <div className="cta-card">
                <div className="cta-icon">
                  <i
                    className="bi bi-chat-dots"
                    aria-hidden="true"
                  ></i>
                </div>

                <h5 data-translate="footer_cta_title">
                  {t('footer_cta_title')}
                </h5>

                <p data-translate="footer_cta_text">
                  {t('footer_cta_text')}
                </p>

                <a href="#form-section" className="cta-button">
                  <span data-translate="footer_cta_button">
                    {t('footer_cta_button')}
                  </span>

                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  ></i>
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
                  © {currentYear}{' '}
                  <strong className="highlight">
                    Matheus Abib
                  </strong>
                  .{' '}
                  {t('footer_copyright').replace(
                    `© ${currentYear} Matheus Abib. `,
                    ''
                  )}
                </span>
              </p>
            </div>

<button
  type="button"
  className="footer-back-top"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }}
>
  <span data-translate="footer_back_to_top">
    {t('footer_back_to_top')}
  </span>

  <i
    className="bi bi-arrow-up"
    aria-hidden="true"
  ></i>
</button>
          </div>
        </div>
      </div>

      {showNotification && (
        <div
          className="email-notification show"
          role="status"
          aria-live="polite"
        >
          <i
            className="bi bi-check-circle-fill"
            aria-hidden="true"
          ></i>

          <span data-translate="email_copied">
            {t('email_copied')}
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;