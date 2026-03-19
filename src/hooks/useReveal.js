import { useEffect, useState, useRef } from 'react';

export const useReveal = (t = .1) => { 
  const ref = useRef(null); 
  const [v, setV] = useState(false); 
  useEffect(() => { 
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { 
        setV(true); 
        obs.disconnect(); 
      } 
    }, { threshold: t }); 
    if (ref.current) obs.observe(ref.current); 
    return () => obs.disconnect(); 
  }, [t]); 
  return [ref, v]; 
};
