function initHero() {

	// Text animations
  const lines = [
    "WILLKOMMEN bei 8BLACKFITNESS",
    "- For Everyone",
    "- Modernste Geräte",
    "- 24/7 Zugang",
    "- Top Atmosphäre"
  ];
 
  const CHAR_DELAY  = 60;
  const LINE_PAUSE  = 200;
  const END_PAUSE   = 10000;
  const ERASE_DELAY = 60;
 
  const screen = document.getElementById('screen');
  const heroSection = document.querySelector('.hero');
 
  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
 
  async function typeLine(el, text) {
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.appendChild(cursor);
    for (let i = 0; i <= text.length; i++) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      await sleep(CHAR_DELAY);
    }
  }
 
  async function eraseLine(el) {
    const text = el.textContent;
    const cursor = el.querySelector('.cursor');
    for (let i = text.length; i >= 0; i--) {
      el.textContent = text.slice(0, i);
      if (cursor) el.appendChild(cursor);
      await sleep(ERASE_DELAY);
    }
    el.innerHTML = '';
  }
 
  async function eraseAll(els) {
    for (let i = els.length - 1; i >= 0; i--) {
      await eraseLine(els[i]);
      await sleep(100);
    }
  }
 
  async function run() {
    while (true) {
      screen.innerHTML = '';
      const lineEls = [];
 
      for (let i = 0; i < lines.length; i++) {
        const div = document.createElement('div');
        div.className = 'line';
        screen.appendChild(div);
        lineEls.push(div);
        await typeLine(div, lines[i]);
        div.textContent = lines[i];
        await sleep(LINE_PAUSE);
      }
 
      await sleep(END_PAUSE);
      await eraseAll(lineEls);
      await sleep(1000);
    }
  }
 
  // Start typewriter only when hero is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          run();
        }, 5000); // Start 1 second after visible
        observer.disconnect(); // Run only once
      }
    });
  }, { threshold: 0.1 });
 
  if (heroSection) {
    observer.observe(heroSection);
  }

}
