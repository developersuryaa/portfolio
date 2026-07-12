const lenis = new Lenis({
    duration: 1.5,      // Scroll kitni der tak slide hoga (itna kaafi hai)
    lerp: 0.1,          // Smoothness level (0.1 matlab bohot smooth)
    wheelMultiplier: 1, // Mouse speed
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);