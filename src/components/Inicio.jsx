import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero-background-image"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content-left" data-aos="fade-up">
        <div className="hero-top" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-greeting">{t('hero_title')}</div>
        </div>

        <div className="hero-info" data-aos="fade-up" data-aos-delay="200">
          <div className="hero-name-wrapper">
            <span className="hero-prefix" data-aos="fade-right" data-aos-delay="300">
              {t('hero_prefix')}
            </span>
            <h1 className="hero-name" data-aos="fade-left" data-aos-delay="500">
              {t('hero_name')}
            </h1>
          </div>
          <p className="hero-role">{t('hero_role')}</p>
          <div className="hero-tags" data-aos="fade-up" data-aos-delay="300">
            <span data-translate="hero_tag_frontend">{t('hero_tag_frontend')}</span>
            <span data-translate="hero_tag_backend">{t('hero_tag_backend')}</span>
            <span data-translate="hero_tag_agile">{t('hero_tag_agile')}</span>
            <span data-translate="hero_tag_uiux">{t('hero_tag_uiux')}</span>
          </div>
        </div>
<div className="hero-availability-badge">
  <i className="bi bi-check-circle-fill"></i>
  <span data-translate="hero_available">{t('hero_available')}</span>
</div>
      </div>
    </section>
  );
};
export default Inicio;