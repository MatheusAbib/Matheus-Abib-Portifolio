import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [mobileNavClosing, setMobileNavClosing] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [clickedItem, setClickedItem] = useState(null);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const { t, toggleLanguage, currentLanguage } = useTranslation();

const navItems = [
  { href: '#sobre-mim-02', textKey: 'menu_about', id: 'sobre-mim-02' },
  { href: '#jornada', textKey: 'menu_methodologies', id: 'jornada' },
  { href: '#skills', textKey: 'menu_skills', id: 'skills' },
  { href: '#service-details', className: 'certificado-details', textKey: 'menu_certificates', id: 'service-details' },
  { href: '#portfolio', textKey: 'menu_projects', id: 'portfolio' },
  { href: '#form-section', textKey: 'menu_contact', id: 'form-section' },
];

  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileNavActive]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      let current = '';
      const headerHeight = 100;
      const scrollPosition = window.scrollY + headerHeight;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.id;
            break;
          }
        }
      }
      
      if (!current) {
        const testimonialsElement = document.getElementById('testimonials');
        if (testimonialsElement) {
          const offsetTop = testimonialsElement.offsetTop;
          const offsetHeight = testimonialsElement.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = 'services-alt';
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCvDropdownOpen && !event.target.closest('.cv-dropdown')) {
        setIsCvDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isCvDropdownOpen]);

  const closeMobileNav = () => {
    setMobileNavClosing(true);
    setTimeout(() => {
      setMobileNavActive(false);
      setMobileNavClosing(false);
    }, 300);
  };

  const handleNavClick = (sectionId) => {
    setClickedItem(sectionId);
    setTimeout(() => setClickedItem(null), 300);
    
    if (mobileNavActive) {
      closeMobileNav();
    }
    
    setActiveSection(sectionId);
  };

  const toggleMobileNav = () => {
    if (mobileNavActive) {
      closeMobileNav();
    } else {
      setMobileNavActive(true);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('#header');
      const headerHeight = header ? header.offsetHeight : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        id="header" 
        className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
      >      
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <div 
            className="logo d-flex align-items-center" 
            onClick={() => {
              handleNavClick('hero');
              scrollToSection('hero');
            }}
            style={{cursor: 'pointer'}}
          >
            <h1 className="sitename">Matheus Abib</h1><span>.</span>
          </div>

          <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''} ${mobileNavClosing ? 'mobile-nav-closing' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
<a 
  href={item.href}
  onClick={(e) => {
    e.preventDefault();
    handleNavClick(item.id);
    scrollToSection(item.id);
  }}
  className={`d-flex align-items-center ${activeSection === item.id ? 'active' : ''} ${clickedItem === item.id ? 'clicked' : ''} ${item.className || ''}`}
>
  {activeSection === item.id && (
    <span className="active-dot me-2"></span>
  )}
  <span data-translate={item.textKey}>{t(item.textKey)}</span>
</a>
                </li>
              ))}
              <li className="d-block d-xl-none mt-3 pt-3 border-top">
                <button 
                  className="btn-translate w-100 d-flex justify-content-center align-items-center" 
                  onClick={() => {
                    toggleLanguage();
                    handleNavClick(activeSection);
                  }}
                >
                  <i className="bi bi-translate me-2"></i>
                  <span data-translate="btn_translate">{t('btn_translate')}</span>
                </button>
              </li>
            </ul>
            <i 
              className="mobile-nav-close bi bi-x d-xl-none"
              onClick={closeMobileNav}
              aria-label="Close navigation"
            ></i>
          </nav>

          <div className="d-none d-xl-flex align-items-center gap-2">
            <div className="cv-dropdown">
              <button 
                className="btn-cv"
                type="button" 
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
              >
                <i className="bi bi-download"></i>
                <span>CV</span>
                <i className="bi bi-chevron-down"></i>
              </button>
              {isCvDropdownOpen && (
                <ul className="dropdown-menu-cv show">
                  <li>
                    <a 
                      className="dropdown-item-cv" 
                      href="/assets/CV/matheus_abib_curriculo.pdf" 
                      target="_blank" 
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      <i className="bi bi-flag-br"></i>
                      <span data-translate="cv_portuguese">{t('cv_portuguese')}</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      className="dropdown-item-cv" 
                      href="/assets/CV/matheus_abib_resume.pdf" 
                      target="_blank" 
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      <i className="bi bi-flag-us"></i>
                      <span data-translate="cv_english">{t('cv_english')}</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <button 
              className="btn-translate" 
              id="translateBtnDesktop" 
              data-lang="pt"
              onClick={toggleLanguage}
            >
              <i className="bi bi-translate"></i>
              <span data-translate="btn_translate">{t('btn_translate')}</span>
            </button>
          </div>

          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
          ></i>
        </div>
      </header>

      {mobileNavActive && (
        <div 
          className="mobile-nav-overlay"
          onClick={closeMobileNav}
        ></div>
      )}
    </>
  );
};

export default Header;