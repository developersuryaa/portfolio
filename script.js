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

// let line = document.querySelectorAll(".line");


// line.forEach(function(val) {
//   val.addEventListener("mouseenter", function() {
//     val.childNodes[3].style.opacity = 1;
//   })
//   val.addEventListener("mouseleave", function() {
//     val.childNodes[3].style.opacity = 0;
//   })
//   val.addEventListener("mousemove", function(dets) {
//     val.childNodes[3].style.left = dets.x+"px";
//   })
// })
