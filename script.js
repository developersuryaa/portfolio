const lenis = new Lenis({
    duration: 1.5,      
    lerp: 0.1,          
    wheelMultiplier: 1, 
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);