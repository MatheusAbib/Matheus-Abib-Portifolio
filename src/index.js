import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/variables.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

const disableAOSOnMobile = () => {
  if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.id = 'aos-mobile-off';
    style.innerHTML = `
      [data-aos] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);
  }
};

disableAOSOnMobile();

const root = ReactDOM.createRoot(document.getElementById('root'));

const hidePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 700);
  }
};

if (document.readyState === 'complete') {
  hidePreloader();
} else {
  window.addEventListener('load', hidePreloader);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);