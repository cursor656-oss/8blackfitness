function initBanner() {

        gsap.registerPlugin(ScrollTrigger);
        
        const headingTop = document.querySelector('.banner13_heading-top');
        const headingBottom = document.querySelector('.banner13_heading-bottom');

        if (headingTop && headingBottom) {
           
            gsap.set(headingTop, { xPercent: 10 });
            gsap.set(headingBottom, { xPercent: -10 });

           
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".banner",
                    start: "top bottom",       // когда верх секции касаются низа экрана
                    end: "bottom top",         // когда низ секции касается верха экрана
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    markers: false,
                    toggleActions: "play reverse play reverse",
                }
            });

            
            tl.fromTo(headingTop, 
                { xPercent: 10 },
                { xPercent: -10, duration: 1, ease: "none" },
                0
            );
            // Animate headingBottom from xPercent: -10 to xPercent: 10
            tl.fromTo(headingBottom, 
                { xPercent: -10 },
                { xPercent: 10, duration: 1, ease: "none" },
                0
            );

           
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {

                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.set(headingTop, { xPercent: 0 });
                gsap.set(headingBottom, { xPercent: 0 });
                // Optionally also remove the inline will-change
                headingTop.style.willChange = 'auto';
                headingBottom.style.willChange = 'auto';
            }
        } else {
            console.warn('Banner heading elements not found');
        }

        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });

}