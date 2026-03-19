import React, { useState, useEffect } from 'react';

const CountUp = ({ t, s, lbl, v }) => {
  const [n, setN] = useState(0);
  useEffect(() => { 
    if (!v) return; 
    let c = 0; 
    const step = t / 55; 
    const id = setInterval(() => { 
      c = Math.min(c + step, t); 
      setN(Math.floor(c)); 
      if (c >= t) clearInterval(id); 
    }, 22); 
    return () => clearInterval(id); 
  }, [v, t]);
  return <div className="stat-b"><span className="stat-n">{n}{s}</span><span className="stat-l">{lbl}</span></div>;
};

export default CountUp;
