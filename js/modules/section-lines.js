function initLines() {

	// Line animations
      const rowTop = document.getElementById('rowTop');
      const rowBottom = document.getElementById('rowBottom');
      //const lineSection = document.querySelector('.line');

      // window.addEventListener('scroll', () => {
        //const scrollY = window.scrollY;
      //   const rect = document.querySelector('.line').getBoundingClientRect();
      //   const scrollY = -rect.top;

      //   rowTop.style.transform = `translateX(${-scrollY * 0.6}px)`;

      //   rowBottom.style.transform = `translateX(${scrollY * 0.6}px)`;
      // });

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const rect = document.querySelector('.line').getBoundingClientRect();
            const scrollY = -rect.top;
            rowTop.style.transform = `translateX(${-scrollY * 0.6}px)`;
            rowBottom.style.transform = `translateX(${scrollY * 0.6}px)`;
            ticking = false;
          });
          ticking = true;
        }
      });
}