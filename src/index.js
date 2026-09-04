import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/variables.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

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