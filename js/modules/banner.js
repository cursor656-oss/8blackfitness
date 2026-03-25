gsap.registerPlugin(ScrollTrigger);

// ── Banner ────────────────────────────────────────────
const bannerTl = gsap.timeline({
  defaults: { ease: "power3.out" },
  paused: true,
  scrollTrigger: {
    trigger: ".banner",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse"
  }
});
bannerTl
  .fromTo("#headingBig",
    { scale: 2.2, opacity: 0, transformOrigin: "top left" },
    { scale: 1, opacity: 1, duration: 2.2 }, 0)
  .fromTo("#bannerBigimg",
    { yPercent: 25, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 2.4 }, 0.3)
  .fromTo("#headingSmall",
    { x: -160, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.8 }, 0.7)
  .fromTo("#headingText",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.8 }, 1.0);


function sectionTl(triggerEl) {
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

// ── Company ──────────────────────────────────────────
sectionTl(".company-section")
  .fromTo(".company-section .title",
    { opacity: 0, y: -80 },
    { opacity: 1, y: 0, duration: 1.8 }, 0)
  .fromTo("#compDescription",
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.8 }, 0.3)
  .fromTo(".compy-box",
    { opacity: 0, scale: 0.75, transformOrigin: "top right" },
    { opacity: 1, scale: 1, duration: 2.0 }, 0.2);

// ── Designers ────────────────────────────────────────
sectionTl(".designer-section")
  .fromTo(".designer-section .title",
    { opacity: 0, y: -80 },
    { opacity: 1, y: 0, duration: 1.8 }, 0)
  .fromTo("#designDescription",
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.8 }, 0.3)
  .fromTo(".box-border",
    { opacity: 0, scale: 0.6, rotate: 15 },
    { opacity: 1, scale: 1, rotate: 0, duration: 2.0 }, 0.1)
  .fromTo(".team1, .team3",
    { opacity: 0, rotate: 40, scale: 0.5, transformOrigin: "top" },
    { opacity: 1, rotate: 0, scale: 1, duration: 2.0 }, 0.4)
  .fromTo(".team2",
    { opacity: 0, rotate: -40, scale: 0.5, transformOrigin: "top" },
    { opacity: 1, rotate: 0, scale: 1, duration: 2.0 }, 0.6);

// ── Projects ─────────────────────────────────────────
sectionTl(".projects-section")
  .fromTo(".projects-section .title",
    { opacity: 0, y: -80 },
    { opacity: 1, y: 0, duration: 1.8 }, 0)
  .fromTo(".pbox-left",
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, duration: 2.0 }, 0.2)
  .fromTo(".pbox-right",
    { opacity: 0, x: 200 },
    { opacity: 1, x: 0, duration: 2.0 }, 0.2)
  .fromTo(".project-content",
    { opacity: 0, x: -100, y: -100 },
    { opacity: 1, x: 0, y: 0, duration: 2.0 }, 0.5);

// ── Testimonials ──────────────────────────────────────
sectionTl(".testimonial-section")
  .fromTo(".testimonial-section .title",
    { opacity: 0, y: -80 },
    { opacity: 1, y: 0, duration: 1.8 }, 0)
  .fromTo(".left-row",
    { opacity: 0, x: -180 },
    { opacity: 1, x: 0, duration: 2.0 }, 0.3)
  .fromTo(".right-row",
    { opacity: 0, x: 180 },
    { opacity: 1, x: 0, duration: 2.0 }, 0.5);

// ── Contact ───────────────────────────────────────────
sectionTl(".contact-us")
  .fromTo(".contact-box, .contact-border",
    { opacity: 0, scale: 0.75, transformOrigin: "top right" },
    { opacity: 1, scale: 1, duration: 2.0 }, 0)
  .fromTo(".contact-us h4",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.6 }, 0.3)
  .fromTo(".contact-us .nav-item",
    { opacity: 0, x: -60 },
    { opacity: 1, x: 0, duration: 1.4, stagger: 0.15 }, 0.5)
  .fromTo(".contact-info h3",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.6 }, 0.4)
  .fromTo(".contact-info p",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.4 }, 0.7)
  .fromTo(".contact-info .common-btn",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1.2 }, 0.9);
