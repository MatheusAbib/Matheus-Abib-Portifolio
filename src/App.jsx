import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from './pages/Home';

import ScrollTop from './services/ScrollTop'; 
import { TranslationProvider } from './hooks/useTranslation';
import { LenisProvider } from './hooks/useLenis';
import './styles/main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target && target.hash && target.hash !== '#') {
        e.preventDefault();
        const id = target.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          const headerHeight = document.querySelector('#header')?.offsetHeight || 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          window.history.pushState(null, '', target.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 768;
      if (isMobileNow) {
        AOS.refreshHard();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <TranslationProvider>
      <LenisProvider> 
        <div className="App">
          <Home />
          <ScrollTop />
        </div>
      </LenisProvider>
    </TranslationProvider>
  );
}

export default App;