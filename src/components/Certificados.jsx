import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const Certificates = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const certificates = [
    {
      id: 'webdev',
      title_key: 'certificate_webdev_title',
      institution: 'Coursera - Johns Hopkins University',
      description_key: 'certificate_webdev_desc',
      skills: ['CSS', 'HTML', 'JavaScript', 'Bootstrap', 'AJAX'],
      date: '2024',
      image: 'assets/img/services/Web-Development.jpg'
    },
    {
      id: 'powerbi',
      title_key: 'certificate_powerbi_title',
      institution: 'Data Science Academy',
      description_key: 'certificate_powerbi_desc',
      skills: ['Microsoft Power BI', 'Microsoft Excel', 'Dashboards', 'Data Analysis', 'Spreadsheet Management'],
      date: '2024',
      image: 'assets/img/services/Power-BI.jpg'
    },
    {
      id: 'database',
      title_key: 'certificate_database_title',
      institution: 'IFSul - Plataforma Mundi',
      description_key: 'certificate_database_desc',
      skills: ['Database', 'SQL', 'Spreadsheet Management', 'Data Analysis'],
      date: '2024',
      image: 'assets/img/services/Banco-de-Dados.jpg'
    },
    {
      id: 'logic',
      title_key: 'certificate_logic_title',
      institution: 'DIO - Digital Innovation One',
      description_key: 'certificate_logic_desc',
      skills: ['JavaScript', 'Git', 'GitHub', 'Logic'],
      date: '2024',
      image: 'assets/img/services/Logica-de-Programacao.jpg'
    },
    {
      id: 'ia',
      title_key: 'certificate_ia_title',
      institution: 'Alura + Google',
      description_key: 'certificate_ia_desc',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'Redes Neurais', 'Data Analysis'],
      date: '2024',
      image: 'assets/img/services/IA.jpg'
    },
    {
      id: 'java',
      title_key: 'certificate_java_title',
      institution: 'Rocketseat',
      description_key: 'certificate_java_desc',
      skills: ['Java', 'Spring Boot', 'API Rest', 'Database', 'Lombok'],
      date: '2025',
      image: 'assets/img/services/Java.png'
    },
    {
      id: 'react',
      title_key: 'certificate_react_title',
      institution: 'Cursa',
      description_key: 'certificate_react_desc',
      skills: ['React', 'API Rest', 'JavaScript'],
      date: '2026',
      image: 'assets/img/services/react.png'
    },
  ];

  const toggleAccordion = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openModal = (img) => {
    setCurrentImage(img);
    setModalImageLoaded(false);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    setModalImageLoaded(false);
    document.body.style.overflow = '';
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleModalImageLoad = () => {
    setModalImageLoaded(true);
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="certificates" />
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="menu_certificates">Certificados</h2>
        </div>
      </div>

      <div className="container">
        <div className="certificates-accordion" data-aos="fade-up">
          {certificates.map((cert, index) => {
            const isExpanded = expandedItems[cert.id] !== undefined ? expandedItems[cert.id] : index === 0;
            
            return (
              <div key={cert.id} className={`cert-accordion-item ${isExpanded ? 'expanded' : ''}`}>
                <button
                  className="cert-accordion-header"
                  onClick={() => toggleAccordion(cert.id)}
                >
                  <div className="cert-accordion-header-left">
                    <span className="cert-accordion-date">{cert.date}</span>
                    <span className="cert-accordion-title" data-translate={cert.title_key}>
                      {t(cert.title_key)}
                    </span>
                  </div>
                  <div className="cert-accordion-header-right">
                    <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                  </div>
                </button>
                
                <div className="cert-accordion-body">
                  <div className="cert-accordion-content">
                    <div className="cert-accordion-institution-wrapper">
                      <p className="cert-accordion-institution">{cert.institution}</p>
                      <button 
                        className="cert-accordion-view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(cert.image);
                        }}
                      >
                        <i className="bi bi-eye"></i>
                        <span>{t('cert_view')}</span>
                      </button>
                    </div>
                    
                    <div className="cert-accordion-skills">
                      <span className="skills-label">{t('certificate_skills_developed')}</span>
                      <div className="skills-list">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="skill-pill" data-skill={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`cert-modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}></div>
      <div className={`cert-modal ${isModalOpen ? 'active' : ''}`}>
        <div className="cert-modal-header">
          <h3>Certificado</h3>
          <button className="cert-modal-close" onClick={closeModal}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="cert-modal-content">
          {currentImage && (
            <>
              {!modalImageLoaded && (
                <div className="modal-loader">
                  <div className="loader-spinner"></div>
                </div>
              )}
              <img 
                src={currentImage} 
                alt="Certificado" 
                onLoad={handleModalImageLoad}
                className={modalImageLoaded ? 'loaded' : 'loading'}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;