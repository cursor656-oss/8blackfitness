// GSAP Section Animations (company, designer, projects, testimonials, contact)
(function () {
  function sectionTl(triggerEl) {
    var checkElement = function (selector) {
      var element = document.querySelector(selector);
      if (!element) {
        console.warn('⚠️ Element nicht gefunden: ' + selector);
        return null;
      }
      return element;
    };

    // Überprüfung der Existenz des Trigger-Elements
    if (!checkElement(triggerEl)) {
      console.warn('Timeline kann nicht für nicht existierendes Element erstellt werden: ' + triggerEl);
      return gsap.timeline(); // Leere Timeline zurückgeben
    }
    
    // Anfangszustände setzen für Performance
    var title = checkElement(triggerEl + ' .title');
    var desc  = checkElement(triggerEl + ' [id$="Description"]');
    var box   = checkElement(
      triggerEl + ' .compy-box, ' + triggerEl + ' .box-border, ' + triggerEl + ' .team1, ' +
      triggerEl + ' .team2, ' + triggerEl + ' .team3, ' + triggerEl + ' .pbox-left, ' +
      triggerEl + ' .pbox-right, ' + triggerEl + ' .project-content, ' + triggerEl + ' .left-row, ' +
      triggerEl + ' .right-row, ' + triggerEl + ' .contact-box, ' + triggerEl + ' .contact-border, ' +
      triggerEl + ' h4, ' + triggerEl + ' .nav-item, ' + triggerEl + ' .contact-info h3, ' +
      triggerEl + ' .contact-info p, ' + triggerEl + ' .contact-info .common-btn'
    );
    
    if (title) gsap.set(title, { opacity: 0, y: -80 });
    if (desc)  gsap.set(desc,  { opacity: 0, y: 60 });
    if (box)   gsap.set(box,   { opacity: 0, scale: 0.75, rotate: 0, x: 0, transformOrigin: "top right" });
    
    return gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse"
      }
    });
  }

  function initSections() {
    sectionTl(".company-section")
      .to(".company-section .title",
        { opacity: 1, y: 0, duration: 1.8 }, 0)
      .to("#compDescription",
        { opacity: 1, y: 0, duration: 1.8 }, 0.3)
      .to(".compy-box",
        { opacity: 1, scale: 1, duration: 2.0 }, 0.2);

    sectionTl(".designer-section")
      .to(".designer-section .title",
        { opacity: 1, y: 0, duration: 1.8 }, 0)
      .to("#designDescription",
        { opacity: 1, y: 0, duration: 1.8 }, 0.3)
      .to(".box-border",
        { opacity: 1, scale: 1, rotate: 0, duration: 2.0 }, 0.1)
      .to(".team1, .team3",
        { opacity: 1, rotate: 0, scale: 1, duration: 2.0 }, 0.4)
      .to(".team2",
        { opacity: 1, rotate: 0, scale: 1, duration: 2.0 }, 0.6);

    sectionTl(".projects-section")
      .to(".projects-section .title",
        { opacity: 1, y: 0, duration: 1.8 }, 0)
      .to(".pbox-left",
        { opacity: 1, x: 0, duration: 2.0 }, 0.2)
      .to(".pbox-right",
        { opacity: 1, x: 0, duration: 2.0 }, 0.2)
      .to(".project-content",
        { opacity: 1, x: 0, y: 0, duration: 2.0 }, 0.5);

    sectionTl(".testimonial-section")
      .to(".testimonial-section .title",
        { opacity: 1, y: 0, duration: 1.8 }, 0)
      .to(".left-row",
        { opacity: 1, x: 0, duration: 2.0 }, 0.3)
      .to(".right-row",
        { opacity: 1, x: 0, duration: 2.0 }, 0.5);

    sectionTl(".contact-us")
      .to(".contact-box, .contact-border",
        { opacity: 1, scale: 1, duration: 2.0 }, 0)
      .to(".contact-us h4",
        { opacity: 1, y: 0, duration: 1.6 }, 0.3)
      .to(".contact-us .nav-item",
        { opacity: 1, x: 0, duration: 1.4, stagger: 0.15 }, 0.5)
      .to(".contact-info h3",
        { opacity: 1, y: 0, duration: 1.6 }, 0.4)
      .to(".contact-info p",
        { opacity: 1, y: 0, duration: 1.4 }, 0.7)
      .to(".contact-info .common-btn",
        { opacity: 1, y: 0, duration: 1.2 }, 0.9);
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(initSections, { timeout: 2000 });
  } else {
    setTimeout(initSections, 300);
  }
})();
