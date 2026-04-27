/**
 * Dynamic Carousel
 * Automatically generates slides from data-images attribute.
 * Features: fade transitions, prev/next buttons, dot nav, auto-play, keyboard, swipe
 */

(function () {
  'use strict';

  /* ── Config ──────────────────────────────────────── */
  const AUTO_PLAY  = true;   // set false to disable
  const AUTO_DELAY = 4000;   // ms between slides

  /* ── State ───────────────────────────────────────── */
  let current = 0;
  let timer = null;
  let touchStartX = 0;
  let TOTAL = 0;

  /* ── DOM refs ────────────────────────────────────── */
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const counterCur = document.getElementById('currentSlide');
  const counterTot = document.getElementById('totalSlides');

  /* ── Parse image list from data attribute ───────── */
  const imageList = carousel.dataset.images
    ? carousel.dataset.images.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  TOTAL = imageList.length;
  if (TOTAL === 0) return; // no images

  /* ── Generate slides dynamically ─────────────────── */
  let slidesHTML = '';
  let dotsHTML = '';

  imageList.forEach((filename, index) => {
    const isActive = index === 0 ? 'active' : '';
    const isSelected = index === 0 ? 'true' : 'false';

    slidesHTML += `
      <div class="carousel__slide ${isActive}">
        <img src="images/${filename}" alt="Mohammed Akram - Photo ${index + 1}"
             onerror="this.parentElement.classList.add('slide--missing')" />
        <div class="slide-fallback">📷 ${filename}</div>
      </div>`;

    dotsHTML += `<button class="dot ${isActive}" role="tab" aria-selected="${isSelected}" aria-label="Photo ${index + 1}" data-index="${index}"></button>`;
  });

  track.innerHTML = slidesHTML;
  dotsContainer.innerHTML = dotsHTML;

  /* ── Now get slide/dot refs after generation ─────── */
  const slides = document.querySelectorAll('.carousel__slide');
  const dots = document.querySelectorAll('.dot');

  /* Initialise total counter */
  if (counterTot) counterTot.textContent = TOTAL;

  /* ── Core: go to slide N ─────────────────────────── */
  function goTo(index) {
    // wrap around
    index = (index + TOTAL) % TOTAL;

    // deactivate current
    slides[current].classList.remove('active');
    if (dots[current]) {
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-selected', 'false');
    }

    // activate new
    current = index;
    slides[current].classList.add('active');
    if (dots[current]) {
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-selected', 'true');
    }

    // update counter
    if (counterCur) counterCur.textContent = current + 1;
  }

  /* ── Auto-play ───────────────────────────────────── */
  function startAuto() {
    if (!AUTO_PLAY) return;
    stopAuto();
    timer = setInterval(() => goTo(current + 1), AUTO_DELAY);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  function resetAuto() {
    stopAuto();
    startAuto();
  }

  /* ── Button handlers ─────────────────────────────── */
  if (prevBtn) {
    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  }

  /* ── Dot handlers ────────────────────────────────── */
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.index, 10));
      resetAuto();
    });
  });

  /* ── Keyboard navigation ─────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); resetAuto(); }
  });

  /* ── Touch / swipe support ───────────────────────── */
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {          // minimum swipe distance
      delta > 0 ? goTo(current + 1) : goTo(current - 1);
      resetAuto();
    }
  }, { passive: true });

  /* Pause auto-play on hover */
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  /* ── Start ───────────────────────────────────────── */
  startAuto();

})();
