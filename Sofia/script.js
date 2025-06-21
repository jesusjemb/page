import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger);

  const scrub = 0.5;
  
  // Seleccionar todas las secciones con la clase reveal-section
  document.querySelectorAll('.reveal-section').forEach((section, index) => {
    const span = section.querySelector('p > span');
    
    gsap.set(span, {
      '--progress': 0,
      backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
      color: 'transparent'
    });

    gsap.to(span, {
      '--progress': 1,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
        start: 'top 80%',    // Ajustado para la nueva altura
        end: 'top 20%'       // Fin más temprano
      }
    });

    gsap.to(span, {
      color: 'white',
      scrollTrigger: {
        trigger: section,
        scrub,
        start: 'top top-=75%',
        end: 'bottom bottom'
      }
    });
  });
}
