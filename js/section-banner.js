// GSAP Banner Section Animation
(function () {
  gsap.registerPlugin(ScrollTrigger);

  // Optimierung für schwache Geräte: Begrenzung der Callbacks und automatische Aktualisierung
  ScrollTrigger.config({
    limitCallbacks: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  });

  // Überprüfung der Existenz von Elementen vor der Verwendung in GSAP
  var checkElement = function (selector) {
    var element = document.querySelector(selector);
    if (!element) {
      console.warn('⚠️ Element nicht gefunden: ' + selector);
      return null;
    }
    return element;
  };

  // Überprüfung des Banner-Elements
  if (!checkElement(".banner")) {
    console.error("❌ Kritisch: .banner Element nicht gefunden!");
    return;
  }

  var _isLP = (navigator.hardwareConcurrency != null && navigator.hardwareConcurrency <= 2) || (navigator.deviceMemory != null && navigator.deviceMemory <= 2);
  gsap.set("#headingBig", { scale: _isLP ? 1.3 : 2.2, opacity: 0, transformOrigin: "top left" });

  gsap.set("#bannerBigimg", { yPercent: 25, opacity: 0 });
  gsap.set("#headingSmall", { x: -160, opacity: 0 });
  gsap.set("#headingText", { x: -100, opacity: 0 });

  var bannerTl = gsap.timeline({
    defaults: { ease: "power3.out" },
    paused: true,
    scrollTrigger: checkElement(".banner") ? {
      trigger: ".banner",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play reverse play reverse"
    } : undefined
  });
  bannerTl
    .to("#headingBig",
      { scale: 1, opacity: 1, duration: _isLP ? 1.0 : 2.2 }, 0)
    .to("#bannerBigimg",
      { yPercent: 0, opacity: 1, duration: 2.4 }, 0.3)
    .to("#headingSmall",
      { x: 0, opacity: 1, duration: 1.8 }, 0.7)
    .to("#headingText",
      { x: 0, opacity: 1, duration: 1.8 }, 1.0);
})();
