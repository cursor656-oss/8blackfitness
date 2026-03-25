document.addEventListener('DOMContentLoaded', function() {
    

    //if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        //gsap.registerPlugin(ScrollTrigger);
    //}
    

    if (typeof initHero !== 'undefined') initHero();
    //if (typeof initExclusive !== 'undefined') initExclusive();
    //if (typeof initBanner !== 'undefined') initBanner();
    //if (typeof initLines !== 'undefined') initLines();
    if (typeof initBase !== 'undefined') initBase();
    
    // Fancybox
    //if (typeof Fancybox !== 'undefined') {
    //    Fancybox.bind('[data-fancybox]', {});
    //}

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        // Show/hide button on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
