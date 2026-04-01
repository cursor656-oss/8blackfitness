  const TOTAL = 4;
  let current = 0;
  let lbCurrent = 0;

  const slides = document.getElementById('slides');
  const dotsEl = document.getElementById('dots');
  const counter = document.getElementById('counter');
  const lightbox = document.getElementById('lightbox');
  const lbSlides = document.getElementById('lbSlides');
  const lbDotsEl = document.getElementById('lbDots');

  // Build dots
  for (let i = 0; i < TOTAL; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', (e) => { e.stopPropagation(); goTo(i); });
    dotsEl.appendChild(d);

    const ld = document.createElement('div');
    ld.className = 'lb-dot' + (i === 0 ? ' active' : '');
    ld.addEventListener('click', () => lbGoTo(i));
    lbDotsEl.appendChild(ld);
  }

  function goTo(i) {
    current = (i + TOTAL) % TOTAL;
    slides.style.transform = 'translateX(-' + (current * 100) + '%)';
    document.querySelectorAll('.dot').forEach((d, idx) => {
      d.className = 'dot' + (idx === current ? ' active' : '');
    });
    counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');
  }

  function lbGoTo(i) {
    lbCurrent = (i + TOTAL) % TOTAL;
    lbSlides.style.transform = 'translateX(-' + (lbCurrent * 100) + '%)';
    document.querySelectorAll('.lb-dot').forEach((d, idx) => {
      d.className = 'lb-dot' + (idx === lbCurrent ? ' active' : '');
    });
  }

  document.getElementById('prevBtn').addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });
  document.getElementById('nextBtn').addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });
  document.getElementById('lbPrev').addEventListener('click', () => lbGoTo(lbCurrent - 1));
  document.getElementById('lbNext').addEventListener('click', () => lbGoTo(lbCurrent + 1));

  document.getElementById('sliderWrap').addEventListener('click', () => {
    lbCurrent = current;
    lbGoTo(lbCurrent);
    lightbox.classList.add('open');
  });

  document.getElementById('lbClose').addEventListener('click', () => lightbox.classList.remove('open'));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') lbGoTo(lbCurrent - 1);
    if (e.key === 'ArrowRight') lbGoTo(lbCurrent + 1);
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });