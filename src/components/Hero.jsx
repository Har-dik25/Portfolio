import React, { useState, useEffect } from 'react';
import Stars from './ui/Stars';
import Typewriter from './ui/Typewriter';
import { 
  CostumeKimono, 
  CostumeSamurai, 
  CostumeCyber, 
  CostumeScholar, 
  CostumeNinja, 
  CostumeCasual, 
  CostumeOni 
} from './ui/Costumes';

const COSTUMES = [
  { el: <CostumeKimono/>,  label: 'Classic Kimono',  color: '#1a1a1a' },
  { el: <CostumeSamurai/>, label: 'Samurai Armor',   color: '#8b1a1a' },
  { el: <CostumeCyber/>,   label: 'Cyberpunk',       color: '#00d4ff' },
  { el: <CostumeScholar/>, label: 'Scholar',         color: '#8b6000' },
  { el: <CostumeNinja/>,   label: 'Ninja',           color: '#0d0d0d' },
  { el: <CostumeCasual/>,  label: 'Streetwear',      color: '#1e2530' },
  { el: <CostumeOni/>,     label: 'Oni Warrior',     color: '#cc2222' },
];

const Hero = () => {
  const [ci, setCi] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setOut(true);
      setTimeout(() => { setCi(i => (i + 1) % COSTUMES.length); setOut(false); }, 500);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  /* Parallax */
  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector('.char-stage');
      if (el) el.style.transform = `translateX(-50%) translateY(${window.scrollY * .14}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = ['Software Engineer','ML Engineer','Data Scientist','Full-Stack Developer','Problem Solver'];
  const costume = COSTUMES[ci];

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <Stars />

      <h1 className="hbg ha1">Hi! I'm Hardik</h1>

      <div className={`char-stage ha2${out ? ' char-out' : ''}`}>
        <div className="char-glow" style={{ background: `radial-gradient(ellipse,${costume.color}44 0%,transparent 65%)` }} />
        {costume.el}
        <div className="char-lbl ha5">
          <span className="clbl-dot" style={{ background: costume.color }} />
          <span>{costume.label}</span>
        </div>
      </div>

      <div className="hleft ha3">
        <p className="hhello">Hey there 👋</p>
        <p className="hrole">I'm a <Typewriter words={roles} /></p>
        <p className="hsub">Building scalable systems &amp; intelligent ML pipelines that turn raw data into real-world impact.</p>
      </div>

      <div className="hbtns ha4">
        <button className="hbtn hbf" onClick={() => go('contact')}>Contact</button>
        <button className="hbtn hbo" onClick={() => go('about')}>Who i'm</button>
      </div>

      <div className="hscroll ha6">
        <div className="hmouse"><div className="hwheel"/></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
