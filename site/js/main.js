document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.95)";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
            navbar.style.padding = "0.5rem 0";
        } else {
            navbar.style.background = "rgba(7, 7, 7, 0.8)";
            navbar.style.boxShadow = "none";
            navbar.style.padding = "1.2rem 2rem";
        }
    });

    // GSAP Fade Up Animation
    const fadeUpElements = document.querySelectorAll(".gsap-fade-up");

    fadeUpElements.forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // Animation starts when top of element hits 85% of viewport
                toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        });
    });

    // Parallax suave para o vídeo hero de fundo
    const heroBg = document.querySelector(".hero-video-container");
    if(heroBg) {
        gsap.to(heroBg, {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: "30%",
            ease: "none"
        });
    }

    // Desaparecimento suave do texto principal
    gsap.to(".hero-content", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "50% top",
            scrub: true
        },
        opacity: 0,
        y: -50
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
