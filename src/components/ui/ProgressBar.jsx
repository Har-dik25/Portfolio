import React, { useEffect } from 'react';

const ProgressBar = () => {
  useEffect(() => {
    const bar = document.querySelector('.spb');
    const onScroll = () => { const h = document.documentElement; if (bar) bar.style.width = `${h.scrollTop / (h.scrollHeight - h.clientHeight) * 100}%`; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="spb" />;
};

export default ProgressBar;
