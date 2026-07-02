import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from './SectionLabel';

const Certificates = () => {
  const { t } = useTranslation();
  const [activeCert, setActiveCert] = useState('webdev');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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
      id: 'react',
      title_key: 'certificate_react_title',
      institution: 'Cursa',
      description_key: 'certificate_react_desc',
      skills: ['React', 'API Rest', 'JavaScript'],
      date: '2026',
      image: 'assets/img/services/react.png'
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
    }
  ];

  const currentCert = certificates.find(cert => cert.id === activeCert);

  const openImageSidebar = (img) => {
    setCurrentImage(img);
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageSidebar = () => {
    setIsSidebarOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="service-details" className="service-details section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="service-details" />
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="menu_certificates">Certificados</h2>
        </div>
      </div>

<div className="container">
  <div className="certificates-sidebar-layout" data-aos="fade-up">
    <div className="certificates-sidebar-list" data-aos="fade-right" data-aos-delay="100">
      <button
        className={`certificate-sidebar-item ${activeCert === 'webdev' ? 'active' : ''}`}
        onClick={() => setActiveCert('webdev')}
      >
        <span className="cert-dot"></span>
        <span data-translate="certificate_webdev_title">Desenvolvimento Web</span>
      </button>
      <button
        className={`certificate-sidebar-item ${activeCert === 'powerbi' ? 'active' : ''}`}
        onClick={() => setActiveCert('powerbi')}
      >
        <span className="cert-dot"></span>
        <span data-translate="certificate_powerbi_title">Microsoft Power BI</span>
      </button>
      <button
        className={`certificate-sidebar-item ${activeCert === 'database' ? 'active' : ''}`}
        onClick={() => setActiveCert('database')}
      >
        <span className="cert-dot"></span>
        <span data-translate="certificate_database_title">Banco de Dados SQL</span>
      </button>
      <button
        className={`certificate-sidebar-item ${activeCert === 'logic' ? 'active' : ''}`}
        onClick={() => setActiveCert('logic')}
      >
        <span className="cert-dot"></span>
        <span data-translate="certificate_logic_title">Lógica de Programação</span>
      </button>
      <button
        className={`certificate-sidebar-item ${activeCert === 'react' ? 'active' : ''}`}
        onClick={() => setActiveCert('react')}
      >
        <span className="cert-dot"></span>
        <span data-translate="certificate_react_title">React com JavaScript</span>
      </button>
      <button
      className={`certificate-sidebar-item ${activeCert === 'ia' ? 'active' : ''}`}
      onClick={() => setActiveCert('ia')}
    >
      <span className="cert-dot"></span>
      <span data-translate="certificate_ia_title">Inteligência Artificial</span>
    </button>
      <button
        className={`certificate-sidebar-item ${activeCert === 'java' ? 'active' : ''}`}
        onClick={() => setActiveCert('java')}
      >
        <span className="cert-dot"></span>
        <span data-translate="certificate_java_title">Java & Spring Boot</span>
      </button>
    </div>

    <div className="certificates-sidebar-content" data-aos="fade-left" data-aos-delay="200">
      <div className="cert-info">
        <div className="cert-info-header">
          <div className="cert-header-top">
            <span className="cert-date">{currentCert.date}</span>
            <button className="cert-view-btn" onClick={() => openImageSidebar(currentCert.image)}>
              <i className="bi bi-eye"></i>
              {t('cert_view')}
            </button>
          </div>
          <h3 className="cert-info-title" data-translate={currentCert.title_key}>
            {t(currentCert.title_key)}
          </h3>
        </div>
        <p className="cert-info-institution">{currentCert.institution}</p>
        <div className="cert-info-skills">
          <span className="skills-label">Habilidades desenvolvidas</span>
<div className="skills-list">
  {currentCert.skills.map((skill, idx) => (
    <span key={idx} className="skill-pill" data-skill={skill}>
      {skill}
    </span>
  ))}
</div>
        </div>
        <p className="cert-info-description" data-translate={currentCert.description_key}>
          {t(currentCert.description_key)}
        </p>
      </div>
    </div>
  </div>
</div>
      <div className={`image-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeImageSidebar}></div>
      <div className={`image-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="image-sidebar-header">
          <h3>Certificado</h3>
          <button className="image-sidebar-close" onClick={closeImageSidebar}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="image-sidebar-content">
          {currentImage && (
            <img src={currentImage} alt="Certificado" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;