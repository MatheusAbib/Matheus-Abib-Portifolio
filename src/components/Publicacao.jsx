import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const Publicacao = () => {
  const { t } = useTranslation();

const pdfUrl = 'https://matheusabib.github.io/ArtigoCientifico-Saude-Digital/docs/Artigo-Cientifico.pdf';
const siteUrl = 'https://matheusabib.github.io/ArtigoCientifico-Saude-Digital/';
const cartaUrl = 'https://matheusabib.github.io/ArtigoCientifico-Saude-Digital/docs/DECLARACAO_ACEITE.pdf';
const revistaUrl = 'https://perspectiva.fatecitapetininga.edu.br/';

  return (
    <section id="publicacao" className="publicacao-section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="publicacao" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="publicacao_title">{t('publicacao_title')}</h2>
        </div>
      </div>

      <div className="container">
        <div className="publicacao-timeline" data-aos="fade-up" data-aos-delay="100">
          <div className="timeline-marker">
            <span className="timeline-dot"></span>
            <span className="timeline-line"></span>
          </div>

          <div className="timeline-content">
            <div className="timeline-text">
              <div className="publicacao-badge">
                <i className="bi bi-trophy-fill"></i>
                <span data-translate="publicacao_badge">{t('publicacao_badge')}</span>
              </div>

              <h3 className="publicacao-card-title" data-translate="publicacao_card_title">
                {t('publicacao_card_title')}
              </h3>

              <p className="publicacao-card-desc" data-translate="publicacao_card_desc">
                {t('publicacao_card_desc')}
              </p>

              <div className="publicacao-tags">
                <span className="pub-tag" data-translate="publicacao_tag_1">{t('publicacao_tag_1')}</span>
                <span className="pub-tag" data-translate="publicacao_tag_2">{t('publicacao_tag_2')}</span>
                <span className="pub-tag" data-translate="publicacao_tag_3">{t('publicacao_tag_3')}</span>
                <span className="pub-tag" data-translate="publicacao_tag_4">{t('publicacao_tag_4')}</span>
              </div>
                    <div className="publicacao-actions">
                    <a
                        href={siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-btn pub-btn-primary"
                    >
                        <i className="bi bi-box-arrow-up-right"></i>
                        <span data-translate="publicacao_btn_site">{t('publicacao_btn_site')}</span>
                    </a>
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-btn pub-btn-secondary"
                    >
                        <i className="bi bi-file-earmark-pdf"></i>
                        <span data-translate="publicacao_btn_pdf">{t('publicacao_btn_pdf')}</span>
                    </a>
                    <a
                        href={cartaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-btn pub-btn-secondary"
                    >
                        <i className="bi bi-envelope-check"></i>
                        <span data-translate="publicacao_btn_carta">{t('publicacao_btn_carta')}</span>
                    </a>
                    <a
                        href={revistaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-btn pub-btn-secondary"
                    >
                        <i className="bi bi-journal-bookmark"></i>
                        <span data-translate="publicacao_btn_revista">{t('publicacao_btn_revista')}</span>
                    </a>
                    </div>

              <div className="publicacao-meta">
                <i className="bi bi-building"></i>
                <span data-translate="publicacao_meta">{t('publicacao_meta')}</span>
              </div>
            </div>

            <div className="timeline-preview">
                <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="publicacao-preview"
                aria-label={t('publicacao_btn_site')}
                >
                <img src="/assets/img/publicacao/artigo-cientifico.png" alt="Preview do artigo" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publicacao;