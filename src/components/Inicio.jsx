import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SobreMim = () => {
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
            <span className="hero-prefix">{t('hero_prefix')}</span>
            <h1 className="hero-name">{t('hero_name')}</h1>
          </div>
          <p className="hero-role">{t('hero_role')}</p>
          <div className="hero-tags" data-aos="fade-up" data-aos-delay="300">
            <span>Front-end</span>
            <span>Back-end</span>
            <span>Métodos Ágeis</span>
            <span>UI/UX</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreMim;