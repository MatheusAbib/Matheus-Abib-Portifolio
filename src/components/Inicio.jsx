import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SPECIALTIES = [
  'hero_tag_frontend',
  'hero_tag_backend',
  'hero_tag_agile',
  'hero_tag_uiux'
];

const RIBBON_COLORS = [
  'olive',
  'sage',
  'gold',
  'terracotta',
  'wine'
];

const clamp = (value, min, max) => {
  return Math.min(max, Math.max(min, value));
};

const easeInOut = (value) => {
  return value * value * (3 - 2 * value);
};

const createRibbonPath = (index, time, progress) => {
  const offset = index * 92;

  const wave1 = Math.sin(time * 0.72 + index * 0.38);
  const wave2 = Math.cos(time * 0.51 + index * 0.45);
  const wave3 = Math.sin(time * 0.86 + index * 0.32);

  const amplitude = 24 + progress * 54;

  const firstWave = wave1 * amplitude;
  const secondWave = wave2 * amplitude * 0.8;
  const thirdWave = wave3 * amplitude * 0.65;

  return `
    M -650 ${1180 + offset}
    C
      -190 ${870 + offset + firstWave},
      190 ${910 + offset - secondWave},
      480 ${650 + offset + thirdWave}
    C
      790 ${360 + offset + secondWave},
      1010 ${480 + offset - firstWave},
      1220 ${190 + offset + thirdWave}
    C
      1470 ${-100 + offset + firstWave},
      1700 ${-180 + offset - secondWave},
      2150 ${-470 + offset}
  `;
};

const Inicio = () => {
  const { t } = useTranslation();

  const [tvState, setTvState] = useState('off');
  const [typedWelcome, setTypedWelcome] = useState('');

  const timersRef = useRef([]);
  const typingTimerRef = useRef(null);
  const ribbonsRef = useRef(null);
  const animationRef = useRef(null);

  const welcomeMessage = t('hero_tv_welcome');

  const clearTvTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const startTv = (delay = 450) => {
    clearTvTimers();

    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    setTypedWelcome('');
    setTvState('off');

    timersRef.current = [
      setTimeout(() => setTvState('turning-on'), delay),
      setTimeout(() => setTvState('signal'), delay + 800),
      setTimeout(() => setTvState('welcome'), delay + 2350)
    ];
  };

  useEffect(() => {
    startTv();

    return () => {
      clearTvTimers();
    };
  }, []);

  useEffect(() => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }

    if (tvState !== 'welcome') {
      setTypedWelcome('');
      return;
    }

    const characters = Array.from(welcomeMessage);
    let index = 0;

    setTypedWelcome('');

    if (!characters.length) return;

    typingTimerRef.current = setInterval(() => {
      index += 1;

      setTypedWelcome(characters.slice(0, index).join(''));

      if (index >= characters.length) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    }, 85);

    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [tvState, welcomeMessage]);

  useEffect(() => {
    const container = ribbonsRef.current;

    if (!container) return;

    const hero = container.closest('.hero');
    const paths = Array.from(
      container.querySelectorAll('.hero-ribbon')
    );

    if (!hero || !paths.length) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    let currentProgress = 0;
    let targetProgress = 0;
    let currentTime = 0;
    let previousTime = 0;
    let previousScroll = window.scrollY;
    let scrollImpulse = 0;
    let currentImpulse = 0;

    const updateScrollProgress = () => {
      const bounds = hero.getBoundingClientRect();
      const scrollDistance = Math.max(hero.offsetHeight * 0.8, 1);

      targetProgress = clamp(
        -bounds.top / scrollDistance,
        0,
        1
      );
    };

    const updateAnimation = (timestamp = 0) => {
      const deltaTime = previousTime
        ? Math.min((timestamp - previousTime) / 16.67, 2)
        : 1;

      previousTime = timestamp;

      const bounds = hero.getBoundingClientRect();

      const visible =
        bounds.bottom > 0 &&
        bounds.top < window.innerHeight;

      if (visible) {
        const smoothness = Math.min(0.065 * deltaTime, 1);

        currentProgress +=
          (targetProgress - currentProgress) * smoothness;

        currentImpulse +=
          (scrollImpulse - currentImpulse) *
          Math.min(0.075 * deltaTime, 1);

        scrollImpulse *= Math.pow(0.88, deltaTime);

        const progress = easeInOut(currentProgress);

        if (reducedMotion.matches) {
          currentTime = 0;
          currentImpulse = 0;
        } else {
          currentTime +=
            (0.018 + Math.abs(currentImpulse) * 0.0003) *
            deltaTime;
        }

        const expansion = reducedMotion.matches
          ? progress
          : progress;

        const scaleX = 1 + expansion * 1.8;
        const scaleY = 1 + expansion * 1.15;

const translateX =
  -expansion * 12 +
  Math.sin(currentTime * 0.4) * 2;

const translateY =
  Math.cos(currentTime * 0.35) * 2;

        container.style.transform = `
          translate3d(${translateX}%, ${translateY}%, 0)
          scale(${scaleX}, ${scaleY})
        `;

        paths.forEach((path, index) => {
          const width =
            120 +
            expansion * 310 +
            Math.sin(currentTime * 0.6 + index * 0.5) * 7;

          path.setAttribute(
            'stroke-width',
            String(width)
          );

          path.setAttribute(
            'd',
            createRibbonPath(
              index,
              currentTime + currentImpulse * 0.015,
              expansion
            )
          );
        });
      }

      animationRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - previousScroll;

      previousScroll = currentScroll;

      scrollImpulse = clamp(
        scrollImpulse + delta * 0.12,
        -35,
        35
      );

      updateScrollProgress();
    };

    const handleMotionChange = () => {
      currentTime = 0;
      currentImpulse = 0;
      scrollImpulse = 0;
      previousTime = 0;
      updateScrollProgress();
    };

    updateScrollProgress();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    window.addEventListener('resize', updateScrollProgress);

    reducedMotion.addEventListener(
      'change',
      handleMotionChange
    );

    animationRef.current = requestAnimationFrame(
      updateAnimation
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);

      reducedMotion.removeEventListener(
        'change',
        handleMotionChange
      );

      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const header = document.getElementById('header');
    const headerHeight = header?.offsetHeight || 80;

    const position =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      28;

    window.scrollTo({
      top: Math.max(0, position),
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="hero">
      <div
        className="hero-grid-background"
        aria-hidden="true"
      ></div>

      <div
        className="hero-tv-ribbons"
        ref={ribbonsRef}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1600 1000"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {RIBBON_COLORS.map((color, index) => (
            <path
              key={color}
              className={`hero-ribbon hero-ribbon-${color}`}
              d={createRibbonPath(index, 0, 0)}
              strokeWidth="120"
            />
          ))}
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-identity">
              <span
                className="hero-prefix"
                data-translate="hero_prefix"
              >
                {t('hero_prefix')}
              </span>

              <h1
                className="hero-name"
                data-translate="hero_name"
              >
                {t('hero_name')}
              </h1>

              <p
                className="hero-role"
                data-translate="hero_role"
              >
                {t('hero_role')}
              </p>
            </div>

            <div className="hero-tags">
              {SPECIALTIES.map((key) => (
                <span className="hero-tag" key={key}>
                  <span className="hero-tag-dot"></span>

                  <span data-translate={key}>
                    {t(key)}
                  </span>
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <button
                type="button"
                className="hero-primary-button"
                onClick={() => scrollToSection('portfolio')}
              >
                <span data-translate="menu_projects">
                  {t('menu_projects')}
                </span>

                <i
                  className="bi bi-arrow-up-right"
                  aria-hidden="true"
                ></i>
              </button>

              <button
                type="button"
                className="hero-secondary-button"
                onClick={() => scrollToSection('form-section')}
              >
                <span data-translate="menu_contact">
                  {t('menu_contact')}
                </span>

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-tv-composition">
              <div className="hero-television">
                <div className="tv-body">
                  <div className="tv-screen-frame">
                    <div className={`tv-screen tv-screen--${tvState}`}>
                      <div className="tv-screen-glass"></div>
                      <div className="tv-scanlines"></div>
                      <div className="tv-noise"></div>

                      <div className="tv-startup-line"></div>

                      <div className="tv-color-bars">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="tv-welcome">
                        <div className="tv-crt-vignette"></div>
                        <div className="tv-crt-pixels"></div>
                        <div className="tv-crt-glow"></div>

                        <div className="tv-welcome-content">
                          <span
                            className="tv-welcome-text"
                            aria-label={welcomeMessage}
                          >
                            <span aria-hidden="true">
                              {typedWelcome}
                            </span>

                            <span
                              className="tv-welcome-cursor"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>

                      <div className="tv-screen-corner tv-screen-corner--tl"></div>
                      <div className="tv-screen-corner tv-screen-corner--tr"></div>
                      <div className="tv-screen-corner tv-screen-corner--bl"></div>
                      <div className="tv-screen-corner tv-screen-corner--br"></div>
                    </div>
                  </div>

                  <div className="tv-controls">
                    <div className="tv-brand">
                      <span className="tv-brand-symbol">
                        <i
                          className="bi bi-broadcast"
                          aria-hidden="true"
                        ></i>
                      </span>

                      <span className="tv-brand-text">
                        M.A.
                      </span>
                    </div>

                    <div className="tv-controls-right">
                      <span
                        className={`tv-status-light ${
                          tvState !== 'off' ? 'active' : ''
                        }`}
                      ></span>

                      <button
                        type="button"
                        className="tv-power-button"
                        onClick={() => startTv(200)}
                        aria-label={t('hero_tv_restart')}
                        title={t('hero_tv_restart')}
                      >
                        <i
                          className="bi bi-power"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="tv-stand">
                  <div className="tv-stand-neck"></div>
                  <div className="tv-stand-base"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-availability-badge">
            <span className="hero-availability-indicator"></span>

            <span data-translate="hero_available">
              {t('hero_available')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;