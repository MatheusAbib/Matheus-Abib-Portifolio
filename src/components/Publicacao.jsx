import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const Publicacao = () => {
  const { t } = useTranslation();

  const pdfUrl =
    'https://matheusabib.github.io/ArtigoCientifico-Saude-Digital/docs/Artigo-Cientifico.pdf';

  const siteUrl =
    'https://matheusabib.github.io/ArtigoCientifico-Saude-Digital/';

  const cartaUrl =
    'https://matheusabib.github.io/ArtigoCientifico-Saude-Digital/docs/DECLARACAO_ACEITE.pdf';

  const revistaUrl =
    'https://perspectiva.fatecitapetininga.edu.br/';

  const tags = [
    'publicacao_tag_1',
    'publicacao_tag_2',
    'publicacao_tag_3',
    'publicacao_tag_4'
  ];

  const secondaryLinks = [
    {
      href: pdfUrl,
      icon: 'bi bi-file-earmark-pdf',
      translationKey: 'publicacao_btn_pdf'
    },
    {
      href: cartaUrl,
      icon: 'bi bi-envelope-check',
      translationKey: 'publicacao_btn_carta'
    },
    {
      href: revistaUrl,
      icon: 'bi bi-journal-bookmark',
      translationKey: 'publicacao_btn_revista'
    }
  ];

  return (
    <section id="publicacao" className="publicacao-section">
      <div className="container">
        <SectionLabel sectionId="publicacao" />

        <div className="section-title">
          <h2 data-translate="publicacao_title">
            {t('publicacao_title')}
          </h2>
        </div>

        <article
          className="publicacao-card"
          data-aos-delay="100"
        >
          <div className="publicacao-content">
            <div className="publicacao-text">
              <div className="publicacao-heading">
                <div className="publicacao-badge">
                  <i
                    className="bi bi-trophy-fill"
                    aria-hidden="true"
                  ></i>

                  <span data-translate="publicacao_badge">
                    {t('publicacao_badge')}
                  </span>
                </div>

                <h3
                  className="publicacao-card-title"
                  data-translate="publicacao_card_title"
                >
                  {t('publicacao_card_title')}
                </h3>

                <p
                  className="publicacao-card-desc"
                  data-translate="publicacao_card_desc"
                >
                  {t('publicacao_card_desc')}
                </p>
              </div>

              <div className="publicacao-actions">

                <div className="publicacao-secondary-actions">
                  {secondaryLinks.map((link) => (
                    <a
                      key={link.translationKey}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-btn pub-btn-secondary"
                    >
                      <i
                        className={link.icon}
                        aria-hidden="true"
                      ></i>

                      <span data-translate={link.translationKey}>
                        {t(link.translationKey)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="publicacao-meta">
                <div className="publicacao-meta-icon">
                  <i
                    className="bi bi-building"
                    aria-hidden="true"
                  ></i>
                </div>

                <span data-translate="publicacao_meta">
                  {t('publicacao_meta')}
                </span>
              </div>
            </div>

            <div className="publicacao-visual">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="publicacao-preview"
                aria-label={t('publicacao_btn_site')}
              >
                <div className="publicacao-preview-image">
                  <img
                    src="/assets/img/publicacao/artigo-cientifico.png"
                    alt={t('publicacao_card_title')}
                    loading="lazy"
                  />
                </div>

                <div className="publicacao-preview-footer">
                  <div className="publicacao-preview-label">
                    <i
                      className="bi bi-file-earmark-text"
                      aria-hidden="true"
                    ></i>

                    <span data-translate="publicacao_title">
                      {t('publicacao_title')}
                    </span>
                  </div>

                  <span className="publicacao-preview-link">
                    <i
                      className="bi bi-arrow-up-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Publicacao;