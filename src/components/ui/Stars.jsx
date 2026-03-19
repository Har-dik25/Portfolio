import React, { useEffect, useRef } from 'react';

const Stars = () => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); let W, H, id;
    let mx = -999, my = -999;
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    resize(); window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    const N = 75;
    const pts = Array.from({ length: N }, () => ({ x: Math.random() * 1920, y: Math.random() * 1080, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.4 + .3, o: Math.random() * .28 + .06 }));
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < 130) { const f = .0006 * (130 - d); p.vx += dx * f; p.vy += dy * f; }
        const s = Math.hypot(p.vx, p.vy); if (s > .9) { p.vx = p.vx / s * .9; p.vy = p.vy / s * .9; }
        p.x = (p.x + p.vx + W) % W; p.y = (p.y + p.vy + H) % H;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`; ctx.fill();
        for (let j = i + 1; j < N; j++) {
          const q = pts[j], d2 = Math.hypot(p.x - q.x, p.y - q.y);
          if (d2 < 115) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.strokeStyle = `rgba(255,255,255,${.06 * (1 - d2 / 115)})`; ctx.lineWidth = .4; ctx.stroke(); }
        }
      });
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="stars-cvs" />;
};

export default Stars;
