// 1. Setup Plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 2. Initialize ScrollSmoother 
// const smoother = ScrollSmoother.create({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-content",

//     smooth: ScrollTrigger.isTouch ? 0.1 : 1.2, 
//     effects: true,
//     normalizeScroll: false, 
//     ignoreMobileResize: true, 
//     speed: 1,
// });

/* ----------------------------------------
   HERO TIMELINE
---------------------------------------- */
const tl = gsap.timeline({
   
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=100%",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
    }
});

const mm = gsap.matchMedia();

mm.add({
    // Create setup for both Desktop and Mobile in one block
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)"
}, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    // Media Animation
    tl.to(".hero__media", {
        width: isDesktop ? "100vw" : "95vw",
        height: isDesktop ? "100vh" : "35vh",
        x: isDesktop ? 70 : 0,
        borderRadius: 0,
        ease: "power2.inOut"
    }, 0);

    // Titles Fade (Shared across all screen sizes)
    tl.to([".top__title", ".left__title", ".right__title"], {
        opacity: 0,
        y: -40,
        stagger: 0.05, // Optional: adds a tiny delay between titles for better feel
        ease: "power2.out"
    }, 0);

    return () => { /* Cleanup if necessary */ };
});

/* ----------------------------------------
   STACKING CARDS LOGIC
---------------------------------------- */
// const cards = gsap.utils.toArray(".stack-card");

// cards.forEach((card, index) => {

//     ScrollTrigger.create({
//         trigger: card,
//         // Calculation: 100px base + (70px * index) for the offset stack
//         start: `top ${100 + (index * 70)}px`, 
//         endTrigger: ".stack-wrapper",
//         end: "bottom 600px", 
//         pin: true,
//         pinSpacing: false,
//         invalidateOnRefresh: true,
//     });

// });

// Refresh triggers to ensure SmoothScroll knows the positions
ScrollTrigger.refresh();