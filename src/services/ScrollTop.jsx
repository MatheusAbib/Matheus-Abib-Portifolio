import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const projetosSection = document.getElementById('service-details');
      
      if (projetosSection) {
        const projetosTop = projetosSection.offsetTop;
        const scrollPosition = window.pageYOffset;
        const projetosVisible = scrollPosition >= projetosTop - 200;
        
        setIsVisible(projetosVisible);
      }
    };

    const handleMobileMenuChange = () => {
      const isMenuOpen = document.body.classList.contains('mobile-nav-active');
      setIsMobileMenuOpen(isMenuOpen);
    };

    const observer = new MutationObserver(handleMobileMenuChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible || isMobileMenuOpen) return null;

  return (
    <a 
      href="#" 
      id="scroll-top" 
      className="scroll-top d-flex align-items-center justify-content-center active"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;