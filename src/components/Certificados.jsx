import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const Certificates = () => {
  const { t } = useTranslation();

  const [expandedItems, setExpandedItems] = useState({});
  const [currentCertificate, setCurrentCertificate] = useState(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [modalImageError, setModalImageError] = useState(false);

  const certificates = [
    {
      id: 'react',
      title_key: 'certificate_react_title',
      institution: 'Cursa',
      description_key: 'certificate_react_desc',
      skills: ['React', 'API Rest', 'JavaScript'],
      date: '2026',
      image: 'assets/img/services/react.png',
      icon: 'bi bi-filetype-js'
    },
    {
      id: 'java',
      title_key: 'certificate_java_title',
      institution: 'Rocketseat',
      description_key: 'certificate_java_desc',
      skills: ['Java', 'Spring Boot', 'API Rest', 'Database', 'Lombok'],
      date: '2025',
      image: 'assets/img/services/Java.png',
      icon: 'bi bi-cup-hot'
    },
    {
      id: 'webdev',
      title_key: 'certificate_webdev_title',
      institution: 'Coursera - Johns Hopkins University',
      description_key: 'certificate_webdev_desc',
      skills: ['CSS', 'HTML', 'JavaScript', 'Bootstrap', 'AJAX'],
      date: '2024',
      image: 'assets/img/services/Web-Development.jpg',
      icon: 'bi bi-code-slash'
    },
    {
      id: 'powerbi',
      title_key: 'certificate_powerbi_title',
      institution: 'Data Science Academy',
      description_key: 'certificate_powerbi_desc',
      skills: [
        'Microsoft Power BI',
        'Microsoft Excel',
        'Dashboards',
        'Data Analysis',
        'Spreadsheet Management'
      ],
      date: '2024',
      image: 'assets/img/services/Power-BI.jpg',
      icon: 'bi bi-bar-chart-line'
    },
    {
      id: 'database',
      title_key: 'certificate_database_title',
      institution: 'IFSul - Plataforma Mundi',
      description_key: 'certificate_database_desc',
      skills: [
        'Database',
        'SQL',
        'Spreadsheet Management',
        'Data Analysis'
      ],
      date: '2024',
      image: 'assets/img/services/Banco-de-Dados.jpg',
      icon: 'bi bi-database'
    },
    {
      id: 'logic',
      title_key: 'certificate_logic_title',
      institution: 'DIO - Digital Innovation One',
      description_key: 'certificate_logic_desc',
      skills: ['JavaScript', 'Git', 'GitHub', 'Logic'],
      date: '2024',
      image: 'assets/img/services/Logica-de-Programacao.jpg',
      icon: 'bi bi-diagram-3'
    },
    {
      id: 'ia',
      title_key: 'certificate_ia_title',
      institution: 'Alura + Google',
      description_key: 'certificate_ia_desc',
      skills: [
        'Python',
        'Machine Learning',
        'Deep Learning',
        'Redes Neurais',
        'Data Analysis'
      ],
      date: '2024',
      image: 'assets/img/services/IA.jpg',
      icon: 'bi bi-cpu'
    }
  ];

  const isModalOpen = currentCertificate !== null;

  const toggleAccordion = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openModal = (certificate) => {
    setCurrentCertificate(certificate);
    setModalImageLoaded(false);
    setModalImageError(false);
  };

  const closeModal = () => {
    setCurrentCertificate(null);
    setModalImageLoaded(false);
    setModalImageError(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-veil" aria-hidden="true"></div>

      <div className="container">
        <SectionLabel sectionId="certificates" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="menu_certificates">
            {t('menu_certificates')}
          </h2>
        </div>

        <div className="certificates-accordion">
          {certificates.map((cert, index) => {
            const isExpanded = Boolean(expandedItems[cert.id]);
            const contentId = `certificate-content-${cert.id}`;

            return (
              <article
                key={cert.id}
                className={`cert-accordion-item ${
                  isExpanded ? 'expanded' : ''
                }`}
              >
                <button
                  type="button"
                  className="cert-accordion-header"
                  onClick={() => toggleAccordion(cert.id)}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                >
                  <div className="cert-accordion-header-left">
                    <div className="cert-accordion-icon">
                      <i className={cert.icon} aria-hidden="true"></i>
                    </div>

                    <div className="cert-accordion-info">
                      <span
                        className="cert-accordion-title"
                        data-translate={cert.title_key}
                      >
                        {t(cert.title_key)}
                      </span>

                      <span className="cert-accordion-institution">
                        {cert.institution}
                      </span>
                    </div>
                  </div>

                  <div className="cert-accordion-header-right">
                    <span className="cert-accordion-date">
                      {cert.date}
                    </span>

                    <span className="cert-accordion-toggle">
                      <i
                        className={`bi bi-chevron-${
                          isExpanded ? 'up' : 'down'
                        }`}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </button>

                <div
                  id={contentId}
                  className="cert-accordion-body"
                  hidden={!isExpanded}
                >
                  <div className="cert-accordion-content">
                    <div className="cert-accordion-skills">
                      <span
                        className="skills-label"
                        data-translate="certificate_skills_developed"
                      >
                        {t('certificate_skills_developed')}
                      </span>

                      <div className="skills-list">
                        {cert.skills.map((skill) => (
                          <span
                            key={`${cert.id}-${skill}`}
                            className="skill-pill"
                            data-skill={skill}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="cert-accordion-footer">
                      <span className="cert-accordion-index">
                        {String(index + 1).padStart(2, '0')}
                        {' / '}
                        {String(certificates.length).padStart(2, '0')}
                      </span>

                      <button
                        type="button"
                        className="cert-accordion-view-btn"
                        onClick={() => openModal(cert)}
                      >
                        <i
                          className="bi bi-eye"
                          aria-hidden="true"
                        ></i>

                        <span data-translate="cert_view">
                          {t('cert_view')}
                        </span>

                        <i
                          className="bi bi-arrow-up-right"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="cert-modal-overlay active"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="cert-modal active"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <div className="cert-modal-header">
              <div className="cert-modal-heading">
                <span className="cert-modal-eyebrow">
                  {currentCertificate.institution}
                </span>

                <h3 id="cert-modal-title">
                  {t(currentCertificate.title_key)}
                </h3>
              </div>

              <button
                type="button"
                className="cert-modal-close"
                onClick={closeModal}
                aria-label="Fechar certificado"
                autoFocus
              >
                <i
                  className="bi bi-x-lg"
                  aria-hidden="true"
                ></i>
              </button>
            </div>

            <div className="cert-modal-content">
              {!modalImageLoaded && !modalImageError && (
                <div className="modal-loader">
                  <div className="loader-spinner"></div>
                </div>
              )}

              {modalImageError && (
                <div className="cert-modal-error">
                  <i
                    className="bi bi-image"
                    aria-hidden="true"
                  ></i>

                  <span>
                    Não foi possível carregar a imagem do certificado.
                  </span>
                </div>
              )}

              <img
                src={currentCertificate.image}
                alt={t(currentCertificate.title_key)}
                onLoad={() => setModalImageLoaded(true)}
                onError={() => setModalImageError(true)}
                className={
                  modalImageLoaded && !modalImageError
                    ? 'loaded'
                    : 'loading'
                }
                style={{
                  display: modalImageError ? 'none' : undefined
                }}
              />
            </div>

            <div className="cert-modal-footer">
              <span>{currentCertificate.date}</span>

              <a
                href={currentCertificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal-open-original"
              >
                <i
                  className="bi bi-box-arrow-up-right"
                  aria-hidden="true"
                ></i>

                <span>
                  Abrir imagem original
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;