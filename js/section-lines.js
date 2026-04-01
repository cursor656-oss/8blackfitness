document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const rows = gsap.utils.toArray(".line-row");

  if (rows.length >= 2) {
    gsap.fromTo(rows[0],
      { xPercent: -10 },
      {
        xPercent: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: "#lines",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      }
    );

    gsap.fromTo(rows[1],
      { xPercent: 10 },
      {
        xPercent: 0,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: "#lines",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      }
    );
  } else {
    const offsets = rows.map((_, i) => i % 2 === 0 ? 300 : -300);
    gsap.to(rows, {
      x: (i) => offsets[i],
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: "#lines",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2
      }
    });
  }
});