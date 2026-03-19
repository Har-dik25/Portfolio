import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cd'); const ring = document.querySelector('.cr');
    let rx = 0, ry = 0, mx = window.innerWidth / 2, my = window.innerHeight / 2;
    const onMouseMove = e => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    let id;
    const raf = () => { 
      rx += (mx - rx) * .12; 
      ry += (my - ry) * .12; 
      if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; } 
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; } 
      id = requestAnimationFrame(raf); 
    };
    raf();
    
    const elements = document.querySelectorAll('a,button,.pcard,.scard');
    const onEnter = () => ring?.classList.add('big');
    const onLeave = () => ring?.classList.remove('big');
    
    elements.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(id);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
  return <><div className="cd" /><div className="cr" /></>;
};

export default Cursor;
