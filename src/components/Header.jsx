import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const NAV_ITEMS = [
  { id: 'sobre-mim', textKey: 'menu_about' },
  { id: 'journey', textKey: 'menu_methodologies' },
  { id: 'skills', textKey: 'menu_skills' },
  { id: 'certificates', textKey: 'menu_certificates' },
  { id: 'publicacao', textKey: 'menu_publicacao' },
  { id: 'portfolio', textKey: 'menu_projects' },
  { id: 'form-section', textKey: 'menu_contact' }
];

const CV_ITEMS = [
  {
    key: 'cv_portuguese',
    href: '/assets/CV/matheus_abib_curriculo.pdf',
    language: 'PT',
    icon: 'bi bi-file-earmark-person'
  },
  {
    key: 'cv_english',
    href: '/assets/CV/matheus_abib_resume.pdf',
    language: 'EN',
    icon: 'bi bi-file-earmark-person'
  }
];

const Header = () => {
  const { t, toggleLanguage, currentLanguage } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);

  const headerRef = useRef(null);
  const cvDropdownRef = useRef(null);

  const closeMenus = () => {
    setMobileNavActive(false);
    setIsCvDropdownOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const headerHeight = headerRef.current?.offsetHeight || 80;
    const offset = headerHeight + 28;

    const targetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    });
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();

    setActiveSection(id);
    closeMenus();
    scrollToSection(id);
  };

  const handleLogoClick = () => {
    closeMenus();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLanguageChange = () => {
    toggleLanguage();
    setIsCvDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const offset = (headerRef.current?.offsetHeight || 80) + 100;
      const position = window.scrollY + offset;

      let current = '';

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= position) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      'mobile-nav-active',
      mobileNavActive
    );

    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileNavActive]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        cvDropdownRef.current &&
        !cvDropdownRef.current.contains(event.target)
      ) {
        setIsCvDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenus();
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const renderNavItems = () =>
    NAV_ITEMS.map((item) => (
      <li key={item.id} className="nav-item">
        <a
          href={`#${item.id}`}
          className={`nav-link ${
            activeSection === item.id ? 'active' : ''
          }`}
          onClick={(event) => handleNavClick(event, item.id)}
          aria-current={
            activeSection === item.id ? 'location' : undefined
          }
        >
          <span data-translate={item.textKey}>
            {t(item.textKey)}
          </span>
        </a>
      </li>
    ));

  const renderCvItems = () =>
    CV_ITEMS.map((item) => (
      <li key={item.key}>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="dropdown-item-cv"
          onClick={() => setIsCvDropdownOpen(false)}
        >
          <span className="cv-item-icon">
            <i className={item.icon} aria-hidden="true"></i>
          </span>

          <span className="cv-item-content">
            <span data-translate={item.key}>
              {t(item.key)}
            </span>

            <small>{item.language}</small>
          </span>

          <i
            className="bi bi-arrow-up-right cv-item-arrow"
            aria-hidden="true"
          ></i>
        </a>
      </li>
    ));

  return (
    <>
      <header
        id="header"
        ref={headerRef}
        className={`header ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="header-shell">
          <button
            type="button"
            className="header-logo"
            onClick={handleLogoClick}
            aria-label={t('header_back_to_top')}
          >
            <span className="header-logo-name">
              Matheus Abib
            </span>

          </button>

          <nav
            id="navmenu"
            className="navmenu"
            aria-label={t('header_navigation')}
          >
            <ul className="nav-list">
              {renderNavItems()}
            </ul>
          </nav>

          <div className="header-actions">
            <div
              ref={cvDropdownRef}
              className={`cv-dropdown ${
                isCvDropdownOpen ? 'open' : ''
              }`}
            >
              <button
                type="button"
                className="btn-cv"
                onClick={() =>
                  setIsCvDropdownOpen((previous) => !previous)
                }
                aria-expanded={isCvDropdownOpen}
                aria-haspopup="true"
                aria-label={t('header_cv')}
              >
                <i
                  className="bi bi-file-earmark-arrow-down"
                  aria-hidden="true"
                ></i>

                <span data-translate="header_cv">
                  {t('header_cv')}
                </span>

                <i
                  className={`bi bi-chevron-down cv-chevron ${
                    isCvDropdownOpen ? 'rotated' : ''
                  }`}
                  aria-hidden="true"
                ></i>
              </button>

              {isCvDropdownOpen && (
                <ul className="dropdown-menu-cv">
                  {renderCvItems()}
                </ul>
              )}
            </div>

            <button
              type="button"
              className="btn-translate"
              onClick={handleLanguageChange}
              aria-label={t('btn_translate')}
              title={t('btn_translate')}
              data-language={currentLanguage}
            >
              <i
                className="bi bi-translate"
                aria-hidden="true"
              ></i>

              <span data-translate="btn_translate">
                {t('btn_translate')}
              </span>
            </button>

            <button
              type="button"
              className={`mobile-nav-toggle ${
                mobileNavActive ? 'active' : ''
              }`}
              onClick={() =>
                setMobileNavActive((previous) => !previous)
              }
              aria-label={
                mobileNavActive
                  ? t('header_close_menu')
                  : t('header_open_menu')
              }
              aria-expanded={mobileNavActive}
              aria-controls="mobile-navigation"
            >
              <i
                className={`bi ${
                  mobileNavActive ? 'bi-x-lg' : 'bi-list'
                }`}
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </header>

      {mobileNavActive && (
        <>
          <div
            className="mobile-nav-overlay"
            onClick={closeMenus}
            aria-hidden="true"
          ></div>

          <nav
            id="mobile-navigation"
            className="mobile-nav-panel"
            aria-label={t('header_navigation')}
          >
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">
                {t('header_navigation')}
              </span>

              <button
                type="button"
                className="mobile-nav-close-btn"
                onClick={closeMenus}
                aria-label={t('header_close_menu')}
              >
                <i
                  className="bi bi-x-lg"
                  aria-hidden="true"
                ></i>
              </button>
            </div>

            <ul className="mobile-nav-list">
              {renderNavItems()}
            </ul>

            <div className="mobile-nav-footer">
              <span className="mobile-nav-footer-label">
                {t('header_documents')}
              </span>

              <div className="mobile-cv-links">
                {CV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-cv-link"
                    onClick={closeMenus}
                  >
                    <i
                      className={item.icon}
                      aria-hidden="true"
                    ></i>

                    <span data-translate={item.key}>
                      {t(item.key)}
                    </span>

                    <i
                      className="bi bi-arrow-up-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;