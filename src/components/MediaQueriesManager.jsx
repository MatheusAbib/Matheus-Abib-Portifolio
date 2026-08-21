import React, { useEffect, useRef } from 'react';

const MediaQueriesManager = () => {
  const stylesRef = useRef(null);

  useEffect(() => {
    if (!stylesRef.current) {
      stylesRef.current = document.createElement('style');
      stylesRef.current.id = 'media-queries-global';
      document.head.appendChild(stylesRef.current);
    }

    applyAllMediaQueries();
  }, []);

  const applyAllMediaQueries = () => {
    const css = `
    @media (min-width: 768px) {
      .g-5, .gy-5 {
        --bs-gutter-y: 2rem;
      }
      .g-5, .gx-5 {
        --bs-gutter-x: 2rem;
      }
    }

      
    @media (max-width: 767.98px) {
      #header.header .logo h1 {
        font-size: 24px;
      }
      #header.header .logo span {
        font-size: 24px;
      }
      .how-we-work::before,
      .how-we-work::after {
        display: none;
      }
    }

    @media (max-height: 480px) {
      .portfolio-scroll-container {
        max-height: 60vh;
        min-height: 200px;
      }
      .navmenu.mobile-nav-active {
        width: 280px;
        padding: 80px 20px 30px;
      }
      .navmenu.mobile-nav-active ul li a {
        padding: 14px 16px;
        font-size: 1rem;
      }
      .mobile-nav-toggle {
        width: 36px;
        height: 36px;
        font-size: 24px;
      }
    }

    @media (max-width: 1199px) {
      .mobile-nav-toggle {
        display: flex;
      }
      .navmenu ul {
        display: none;
      }
      .navmenu.mobile-nav-active ul {
        display: flex;
      }
    }

    @media (hover: none) and (pointer: coarse) {
      .portfolio-scroll-container {
        overscroll-behavior: auto;
      }
      [class*="hover"] {
        transform: none !important;
        transition: none !important;
      }
      .certificate-tab-btn:hover,
      .certificate-card:hover,
      .skill-tag:hover,
      .service-item:hover,
      .portfolio-card:hover,
      .softskill-card:hover,
      .tech-item:hover,
      .btn:hover,
      .social-icon:hover {
        transform: none !important;
        box-shadow: none !important;
        background: none !important;
      }
      .certificate-card:hover::after {
        display: none;
      }
      .certificate-tab-btn.active:hover {
        background: linear-gradient(135deg, 
          var(--accent-color),
          color-mix(in srgb, var(--accent-color), #667eea));
      }
      .skill-tag:hover {
        background: inherit;
      }
      [data-aos] {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
      
    @media (max-width: 576px) {
      .contact-form-modern {
        padding: 2rem 1rem;
      }
      .form-header h2 {
        font-size: 1.6rem;
      }
      .form-header p {
        font-size: 1rem;
      }
      .form-input {
        padding: 0.9rem 0.7rem 0.9rem 3rem;
        font-size: 0.75rem;
        border-radius: 8px;
      }
      .form-submit {
        padding: 0.8rem 2rem;
        min-width: 200px;
        font-size: 0.85rem;
        margin-bottom: 15px;
      }
      .contact-info-tags {
        display: none;
      }
      .form-footer p {
        display: none;
      }
      .form-grid {
        gap: 1rem;
      }
      .contact-tag {
        width: 100%;
        max-width: 250px;
        justify-content: center;
      }
      .custom-box {
        width: 100% !important;
        margin: 0 auto !important;
        justify-content: center !important;
      }
      .hero .feature-boxes {
        margin-bottom: 2rem;
      }
      .hero .content .translate-and-download {
        flex-direction: row-reverse;
        justify-content: flex-end;
        margin-bottom: 1.35rem;
      }
      .hero-highlight {
        padding: 2rem 1.2rem;
        border-radius: 12px;
      }
      .hero-highlight .hero-title {
        font-size: 1.55rem;
      }
      .hero-highlight .hero-description {
        font-size: 0.95rem;
        line-height: 1.7;
        margin-right: 0;
      }
      .hero-highlight .translate-and-download {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }

    @media (max-width: 765px) {
      .dropdown-menu {
        margin-top: -27px !important;
        margin-left: 50% !important;
        transform: none !important;
      }
    }

    @media (min-width: 992px) and (hover: hover) and (pointer: fine) {
      .dropdown-curriculo.dropend .dropdown-menu {
        top: 0;
        left: 100%;
        right: auto;
        margin-top: 0;
        margin-left: 10px;
        transform: none !important;
      }
      .dropdown-curriculo.dropend .dropdown-menu {
        position: absolute;
        inset: 0 auto auto 0;
      }
    }
      
    @media (min-width: 769px) and (max-width: 991px) {
      .custom-box {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
      }
    }
      
    @media (max-width: 767px) and (min-width: 530px) {
      .custom-box {
        margin-top: 0;
        justify-content: center !important;
        display: flex;
      }
      .team-card {
        max-width: 100%;
      }
      #hero .col-md-7,
      #hero .col-md-5 {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
      
    @media (max-width: 767px) {
      .service-details .service-testimonial .testimonial-card .client-info img {
        margin: 0 auto 20px;
      }
      .testimonials .testimonial-content {
        padding: 30px 20px 20px;
      }
      .testimonials .testimonial-content p {
        font-size: 15px;
      }
      .testimonials .testimonial-content .quote-icon {
        font-size: 36px;
        left: 20px;
      }
      .testimonials .testimonial-profile {
        padding: 15px 20px;
      }
      .testimonials .profile-info img {
        width: 45px;
        height: 45px;
      }
      .service-details .service-cta {
        padding: 40px 20px;
      }
      .service-details .service-cta h3 {
        font-size: 26px;
      }
      .service-details .client-info {
        flex-direction: column;
        margin-bottom: 30px;
      }
      .service-details .service-tabs .tab-content {
        padding: 30px 20px;
      }
      .hero-social {
        gap: 9px;
        margin-right: 0;
      }
      .social-icon {
        width: 36px;
        height: 36px;
        font-size: 16px;
      }
      .d-flex.align-items-center.justify-content-between {
        flex-direction: row;
      }
      .services-alt .services-list .service-item {
        padding: 2rem 0;
      }
      .services-alt .services-list .service-icon {
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
      }
      .services-alt .services-list .service-icon i {
        font-size: 2rem;
      }
      .services-alt .services-list .service-content h4 {
        font-size: 1.25rem;
      }
      .services-alt .services-list .service-content p {
        font-size: 0.9rem;
      }
      .portfolio .portfolio-filters li {
        font-size: 14px;
        padding: 6px 15px;
      }
      .portfolio .portfolio-card .portfolio-content {
        padding: 20px;
      }
      .portfolio .portfolio-card .portfolio-content h3 {
        font-size: 14px;
      }

      .portfolio-scroll-container::-webkit-scrollbar {
        display: none;
      }
      .custom-box {
        width: 100% !important;
        margin: 0 auto !important;
      }
      .service-details .service-main-content .section-header h2 {
        font-size: 28px;
      }
      .service-details .service-tabs .nav-tabs {
        flex-wrap: nowrap;
        white-space: nowrap;
        overflow-x: auto;
      }
      .service-details .service-tabs .nav-tabs::-webkit-scrollbar {
        height: 5px;
      }
      .service-details .service-tabs .nav-tabs::-webkit-scrollbar-thumb {
        background: color-mix(in srgb, var(--default-color), transparent 80%);
        border-radius: 10px;
      }
    }
      
    @media (max-width: 991px) {
      .service-details .service-main-content {
        margin-top: 30px;
      }
      .service-details .service-tabs {
        margin-top: 50px;
      }
      .service-details .service-testimonial,
      .service-details .service-cta {
        margin-top: 50px;
      }
    }

    @media (min-width: 992px) and (hover: hover) and (pointer: fine) {
      .certificate-tab-btn:hover {
        transform: translateY(-5px);
      }
      .certificate-card:hover .certificate-image img {
        transform: scale(1.02);
      }
      .skill-tag:hover {
        transform: translateY(-2px);
        transition: all 0.2s ease;
      }
    }
      
    @media (max-width: 1200px) {
      .btn-translate {
        width: 100%;
        justify-content: center;
        margin-top: 15px;
      }
      #header.header .logo {
        order: 1;
      }
      .custom-box {
        width: 82%;
        margin-left: 18%;
      }
      .hero-highlight {
        padding: 2.5rem 1.5rem;
      }
    }

    body.mobile-nav-active .d-none.d-xl-flex {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    `;
    
    if (stylesRef.current) {
      stylesRef.current.textContent = css;
    }
  };

  return null;
};

export default MediaQueriesManager;
