import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const PROJECTS = [
  {
    id: 0,
    title: 'E-Commerce - Livraria Online',
    title_key: 'project_livros',
    description_key: 'project_livros_desc',
    category: 'Site',
    filter: 'web',
    stack: 'fullstack',
    image: '/assets/img/portfolio/Livraria-Online.png',
    github: 'https://github.com/MatheusAbib/e-commerce-livraria',
    live: 'https://livrariaonline-gold.vercel.app/',
    tags: ['Angular', 'TypeScript', 'Java', 'SpringBoot', 'MySQL'],
    priority: 1,
    featured: true
  },
  {
    id: 1,
    title: 'Desfumo - Controle de Consumo ao Tabagismo',
    title_key: 'project_desfumo',
    description_key: 'project_desfumo_desc',
    category: 'Site',
    filter: 'web',
    stack: 'fullstack',
    image: '/assets/img/portfolio/Desfumo.png',
    github: 'https://github.com/MatheusAbib/Tabagismo-Saude-Publica',
    live: 'https://desfumo.vercel.app/',
    tags: ['Flutter', 'Dart', 'Node.js', 'Express', 'MySQL'],
    priority: 1,
    featured: true
  },
  {
    id: 2,
    title: 'Organizador de Arquivos',
    title_key: 'project_arquivos',
    description_key: 'project_arquivos_desc',
    category: 'Ferramenta',
    filter: 'motion',
    stack: 'fullstack',
    image: '/assets/img/portfolio/Organizador-Arquivos.png',
    github: 'https://github.com/MatheusAbib/Organizador-de-Arquivos',
    live: 'https://organizadordearquivos.vercel.app/',
    tags: ['React', 'Typescript', 'Node.Js', 'Express', 'MySQL'],
    priority: 1,
    featured: true
  },

    {
    id: 3,
    title: 'Jornal de Receitas',
    title_key: 'project_receitas',
    description_key: 'project_receitas_desc',
    category: 'Site',
    filter: 'web',
    stack: 'fullstack',
    image: '/assets/img/portfolio/Jornal-de-Receitas.png',
    github: 'https://github.com/MatheusAbib/Jornal-de-Receitas',
    live: 'https://jornaldereceitas.vercel.app/',
    tags: ['React', 'Java', 'SpringBoot', 'JavaScript', 'MySQL'],
    priority: 1
  },

    {
    id: 4,
    title: 'Imperatore - Sistema de Gestão',
    title_key: 'project_imperator',
    description_key: 'project_imperator_desc',
    category: 'Ferramenta',
    filter: 'motion',
    stack: 'fullstack',
    image: '/assets/img/portfolio/imperatore.png',
    github: 'https://github.com/MatheusAbib/Imperatore-Sistema-de-Gestao-saas',
    live: 'https://imperatore-zeta.vercel.app/',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
    priority: 0,
    featured: true
  },


  {
    id: 5,
    title: 'Dashboard de Vendas',
    title_key: 'project_dashboard',
    description_key: 'project_dashboard_desc',
    category: 'Ferramenta',
    filter: 'motion',
    stack: 'fullstack',
    image: '/assets/img/portfolio/Dashboard.png',
    github: 'https://github.com/MatheusAbib/Dashboard-Vendas',
    live: 'https://dashboard-vendas-node.netlify.app/',
    tags: ['Node.Js', 'Express', 'MySQL', 'Charts'],
    priority: 1
  },
  {
    id: 9,
    title: 'Yummy Lamen - Restaurante de Lamen',
    title_key: 'project_lamen',
    description_key: 'project_lamen_desc',
    category: 'Site',
    filter: 'web',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/Yummy-Lamen.png',
    github: 'https://github.com/MatheusAbib/Restaurante-de-Lamen',
    live: 'https://yummylamen.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    priority: 2
  },
  {
    id: 6,
    title: 'Gataria - Adoção Responsável',
    title_key: 'project_gataria',
    description_key: 'project_gataria_desc',
    category: 'Site',
    filter: 'web',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/Gataria.png',
    github: 'https://github.com/MatheusAbib/Gataria-adocao-responsavel',
    live: 'https://gatariaadocao.vercel.app/',
    tags: ['React', 'JavaScript', 'CSS', 'GSAP'],
    priority: 1
  },
  {
    id: 7,
    title: 'Floricultura Dama da Noite',
    title_key: 'project_floricultura',
    description_key: 'project_floricultura_desc',
    category: 'Site',
    filter: 'web',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/Floricultura-Web.png',
    github: 'https://github.com/MatheusAbib/Floricultura-Dama-da-Noite',
    live: 'https://matheusabib.github.io/Floricultura-Dama-da-Noite/',
    tags: ['React', 'HTML', 'SCSS', 'JavaScript'],
    priority: 2
  },
  {
    id: 8,
    title: 'Bloco de Notas',
    title_key: 'project_notas',
    description_key: 'project_notas_desc',
    category: 'Ferramenta',
    filter: 'motion',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/Bloco-de-Notas.png',
    github: 'https://github.com/MatheusAbib/Bloco-de-Notas',
    live: 'https://matheusabib.github.io/Bloco-de-Notas/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    priority: 2
  },
  {
    id: 10,
    title: 'UNO',
    title_key: 'project_uno',
    description_key: 'project_uno_desc',
    category: 'Diversão',
    filter: 'brand',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/UNO.png',
    github: 'https://github.com/MatheusAbib/UNO',
    live: 'https://matheusabib.github.io/UNO/',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    priority: 2
  },
  {
    id: 12,
    title: 'Tocador de Música',
    title_key: 'project_musica',
    description_key: 'project_musica_desc',
    category: 'Diversão',
    filter: 'brand',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/Tocador-de-Musica.png',
    github: 'https://github.com/MatheusAbib/Tocador-de-Musica',
    live: 'https://vintagemusicplayery2k.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    priority: 2
  },
  {
    id: 13,
    title: 'Figma & Power BI',
    title_key: 'project_links',
    description_key: 'project_links_desc',
    category: 'Links',
    filter: 'links',
    stack: 'frontend-only',
    image: '/assets/img/portfolio/Projetos_Figma_Powerbi.png',
    github: 'https://github.com/MatheusAbib/Projetos-Figma-Powerbi',
    live: 'https://matheusabib.github.io/Projetos-Figma-Powerbi/',
    tags: ['Figma', 'Power BI', 'UI/UX', 'Data Analytics'],
    priority: 3
  }
];

const FILTERS = [
  { key: '*', label: 'filter_all' },
  { key: 'web', label: 'filter_websites' },
  { key: 'motion', label: 'filter_tools' },
  { key: 'brand', label: 'filter_fun' },
  { key: 'links', label: 'filter_links' }
];

const CATEGORY_KEYS = {
  Site: 'category_site',
  Ferramenta: 'category_ferramenta',
  Diversão: 'category_diversao',
  Links: 'category_links',
  Sistema: 'category_system'
};

const getRelativePosition = (index, activeIndex, length) => {
  if (length <= 1) return 0;

  let difference = index - activeIndex;

  if (difference > length / 2) {
    difference -= length;
  }

  if (difference < -length / 2) {
    difference += length;
  }

  return difference;
};

const Portfolio = () => {
  const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState('*');
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [carouselHeight, setCarouselHeight] = useState(0);
  const activeSlideRef = useRef(null);

  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const filteredProjects =
    activeFilter === '*'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filter === activeFilter);

  const totalProjects = filteredProjects.length;
  useEffect(() => {
  const activeSlide = activeSlideRef.current;

  if (!activeSlide) return;

  const updateHeight = () => {
    const height = activeSlide.offsetHeight;

    if (height > 0) {
      setCarouselHeight(Math.ceil(height) + 8);
    }
  };

  updateHeight();

  const observer = new ResizeObserver(updateHeight);

  observer.observe(activeSlide);

  return () => {
    observer.disconnect();
  };
}, [activeIndex, activeFilter]);

  const goToProject = (index) => {
    if (!totalProjects) return;

    setActiveIndex(
      ((index % totalProjects) + totalProjects) % totalProjects
    );
  };

  const goToPrevious = () => goToProject(activeIndex - 1);
  const goToNext = () => goToProject(activeIndex + 1);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    setActiveIndex(0);
  };

  const handleImageLoad = (projectId) => {
    setLoadedImages((previous) => ({
      ...previous,
      [projectId]: true
    }));
  };

  const openProject = (project) => {
    if (!project.live) return;

    window.open(project.live, '_blank', 'noopener,noreferrer');
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchStartYRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (
      touchStartXRef.current === null ||
      touchStartYRef.current === null
    ) {
      return;
    }

    const differenceX =
      event.changedTouches[0].clientX - touchStartXRef.current;

    const differenceY =
      event.changedTouches[0].clientY - touchStartYRef.current;

    if (
      Math.abs(differenceX) > 55 &&
      Math.abs(differenceX) > Math.abs(differenceY) * 1.3
    ) {
      if (differenceX < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  };

  const getRelativePosition = (index, active, length) => {
    if (length <= 1) return 0;

    let difference = index - active;

    if (difference > length / 2) difference -= length;
    if (difference < -length / 2) difference += length;

    return difference;
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <SectionLabel sectionId="portfolio" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="portfolio_title">
            {t('portfolio_title')}
          </h2>
        </div>

        <div className="portfolio-controls">
          <div className="portfolio-controls-left">
            <div className="portfolio-filters" role="group">
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  className={`portfolio-filter ${
                    activeFilter === filter.key ? 'filter-active' : ''
                  }`}
                  onClick={() => handleFilterClick(filter.key)}
                  aria-pressed={activeFilter === filter.key}
                >
                  {t(filter.label)}
                </button>
              ))}
            </div>

            <span className="projects-count">
              {totalProjects} {t('projects_count')}
            </span>
          </div>

          <a
            href="https://github.com/MatheusAbib"
            target="_blank"
            rel="noopener noreferrer"
            className="github-badge"
          >
            <i className="bi bi-github"></i>
            <span>{t('see_more_github')}</span>
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>

      <div className="portfolio-showcase">
        <div className="portfolio-showcase-heading">
          <div className="portfolio-showcase-heading-left">
<span className="portfolio-showcase-eyebrow">
  {t('portfolio_showcase_eyebrow')}
</span>

            <div className="portfolio-showcase-count">
              <span className="portfolio-current-number">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>

              <span className="portfolio-count-separator">/</span>

              <span className="portfolio-total-number">
                {String(totalProjects).padStart(2, '0')}
              </span>
            </div>
          </div>


        </div>

        <div
  className="portfolio-carousel"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  onKeyDown={handleKeyDown}
  tabIndex={0}
  role="region"
  aria-roledescription="carrossel"
  aria-label={t('portfolio_title')}
>
  <div
    className="portfolio-carousel-track"
    style={carouselHeight > 0 ? { height: carouselHeight } : undefined}
  >
    {filteredProjects.map((project, index) => {
      const relativePosition = getRelativePosition(
        index,
        activeIndex,
        totalProjects
      );

      const isActive = relativePosition === 0;
      const isPrevious = relativePosition === -1;
      const isNext = relativePosition === 1;
      const isVisible = isActive || isPrevious || isNext;

      const positionClass = isActive
        ? 'is-active'
        : isPrevious
          ? 'is-previous'
          : isNext
            ? 'is-next'
            : relativePosition < 0
              ? 'is-hidden-left'
              : 'is-hidden-right';

      return (
        <article
          key={project.id}
          ref={isActive ? activeSlideRef : null}
          className={`portfolio-slide ${positionClass}`}
          aria-hidden={!isActive}
          onClick={() => {
            if (isActive) {
              openProject(project);
            } else if (isVisible) {
              goToProject(index);
            }
          }}
        >
          <div className="portfolio-slide-inner">
            <div className="portfolio-project-visual">
              <div className="portfolio-project-image">
                {!loadedImages[project.id] && (
                  <div className="image-loader">
                    <div className="loader-spinner"></div>
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    loadedImages[project.id]
                      ? 'loaded'
                      : 'loading'
                  }
                  loading={isVisible ? 'eager' : 'lazy'}
                  onLoad={() => handleImageLoad(project.id)}
                />
              </div>

              {project.featured && (
                <span className="portfolio-featured-label">
                  <i className="bi bi-star-fill"></i>
                  Destaque
                </span>
              )}
            </div>

            <div className="portfolio-project-details">
              <div className="portfolio-project-meta">
                <span className="portfolio-project-category">
                  <span className="portfolio-category-dot"></span>
                  {t(
                    CATEGORY_KEYS[project.category] ||
                      'category_site'
                  )}
                </span>

                <span className="portfolio-project-stack">
                  <i className="bi bi-code-slash"></i>
                  {project.stack === 'fullstack'
                    ? 'Full Stack'
                    : 'Front-end'}
                </span>
              </div>

              <h3 className="portfolio-project-title">
                {t(project.title_key)}
              </h3>

              <p className="portfolio-project-description">
                {t(project.description_key)}
              </p>

              <div className="portfolio-project-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="portfolio-tech-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="portfolio-project-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-project-button portfolio-project-button-primary"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <span>Ver projeto</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-project-button portfolio-project-button-secondary"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      );
    })}
  </div>

  <div className="portfolio-navigation portfolio-navigation-sides">
    <button
      type="button"
      className="portfolio-nav-button portfolio-nav-prev"
      onClick={goToPrevious}
      disabled={totalProjects <= 1}
      aria-label="Projeto anterior"
    >
      <i className="bi bi-arrow-left"></i>
    </button>

    <button
      type="button"
      className="portfolio-nav-button portfolio-nav-next"
      onClick={goToNext}
      disabled={totalProjects <= 1}
      aria-label="Próximo projeto"
    >
      <i className="bi bi-arrow-right"></i>
    </button>
  </div>
</div>
        <div className="portfolio-carousel-footer">
          <div className="portfolio-pagination">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`portfolio-pagination-dot ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                onClick={() => goToProject(index)}
                aria-label={`Ir para ${project.title}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;