function initBase() {

    // SPLASH SCREEN
    window.addEventListener('load', () => {
      const splash = document.getElementById('splash-screen');
      if (!splash) return;

      setTimeout(() => {
        splash.classList.add('hide');
        document.body.style.overflow = 'auto';
      }, 3500);
    });

    // Menu
    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    const drawerClose = document.getElementById('drawerClose');

    menuBtn?.addEventListener('click', () => drawer.classList.add('open'));
    drawerClose?.addEventListener('click', () => drawer.classList.remove('open'));
    drawer?.addEventListener('click', (e) => {
      if (e.target === drawer) drawer.classList.remove('open');
    });

    // Header scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .stagger').forEach(el => observer.observe(el));

    // Fancybox
    if (typeof Fancybox !== 'undefined') {
      Fancybox.bind('[data-fancybox="gallery"]', {
        infinite: false,
        Thumbs: { autoStart: true }
      });
    }

}