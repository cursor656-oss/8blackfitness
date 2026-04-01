  console.clear();
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      window.addEventListener("load", function () {
        var imgCont = document.querySelector(".images-image-container-8bf");
        var img = imgCont.querySelector("img");
        var hero = document.querySelector(".images-hero-8bf");
        var arrow = document.querySelector(".scroll-arrow-8bf");
        var wrapper = document.querySelector(".images-wrapper-8bf");
        var pricingWall = document.querySelector(".pricing-wall-8bf");

        var isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

        function hidePricing() {
          gsap.to(pricingWall, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: function () {
              pricingWall.style.visibility = "hidden";
            },
          });
        }

        function showPricing() {
          pricingWall.style.visibility = "visible";
          gsap.to(pricingWall, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".images-wrapper-8bf",
            start: "top top",
            end: "+=600",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onEnter: function () {
              wrapper.classList.add("active-8bf");
              showPricing();
            },
            onLeave: function () {
              wrapper.classList.remove("active-8bf");
              hidePricing();
            },
            onEnterBack: function () {
              wrapper.classList.add("active-8bf");
              showPricing();
            },
            onLeaveBack: function () {
              wrapper.classList.remove("active-8bf");
              hidePricing();
              showArrow();
            },
          },
        });

        tl.to(
          img,
          {
            scale: 2.8,
            opacity: 0,
            ease: "power1.in",
            duration: 0.6,
          },
          0,
        )
          .to(
            imgCont,
            {
              rotateX: 8,
              ease: "power1.in",
              duration: 0.6,
            },
            0,
          )
          .to(
            hero,
            {
              scale: 1.15,
              ease: "power1.out",
              duration: 0.8,
            },
            0.3,
          );

        var cards = gsap.utils.toArray(".price-card-8bf");
        gsap.set(cards, { opacity: 0, x: -30 });

        ScrollTrigger.create({
          trigger: ".images-wrapper-8bf",
          start: "top top",
          end: "+=300",
          scrub: false,
          onLeave: function () {
            gsap.to(cards, {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: "expo.out",
              stagger: 0.18,
              onStart: function () {
                hideArrow();
                pricingWall.style.pointerEvents = "auto";
                cards.forEach(function (c) {
                  c.style.pointerEvents = "auto";
                });
              },
            });
          },
          onEnterBack: function () {
            pricingWall.style.pointerEvents = "none";
            gsap.to(cards, {
              opacity: 0,
              x: -30,
              duration: 0.5,
              ease: "power2.in",
              stagger: 0.07,
              onComplete: function () {
                cards.forEach(function (c) {
                  c.style.pointerEvents = "none";
                });
              },
            });
          },
        });

        var arrowLoop = gsap.fromTo(
          arrow,
          { y: 12 },
          {
            y: -12,
            duration: 1.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          },
        );

        function hideArrow() {
          arrowLoop.pause();
          gsap.to(arrow, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: function () {
              arrow.style.pointerEvents = "none";
            },
          });
        }

        function showArrow() {
          arrow.style.pointerEvents = "auto";
          gsap.set(arrow, { y: 12 });
          gsap.to(arrow, {
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
            onComplete: function () {
              arrowLoop.restart();
            },
          });
        }

        arrow.addEventListener("click", function () {
          gsap.to(window, {
            scrollTo: tl.scrollTrigger.end,
            duration: 1.0,
            ease: "power2.inOut",
          });
        });

        if (!isTouch) {
          var maxTilt = 10;

          cards.forEach(function (card) {
            var shine = card.querySelector(".shine-8bf");

            card.addEventListener("mousemove", function (e) {
              var rect = card.getBoundingClientRect();
              var x = e.clientX - rect.left;
              var y = e.clientY - rect.top;
              var midX = rect.width / 2;
              var midY = rect.height / 2;

              var rotY = ((x - midX) / midX) * maxTilt;
              var rotX = -((y - midY) / midY) * maxTilt;
              card.style.transform =
                "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) scale(1.03)";
              card.classList.add("tilt-active-8bf");

              if (shine) {
                shine.style.setProperty("--x", x + "px");
                shine.style.setProperty("--y", y + "px");
              }
            });

            card.addEventListener("mouseleave", function () {
              card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              card.classList.remove("tilt-active-8bf");
            });
          });
        }
      });