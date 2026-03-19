import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import './index.css';

/* ─────────────────────────────────────────────────────────────
   THE ANIME CHARACTER SVG  — cycles through 7 color styles
   Larger, more detailed, exactly like the video screenshots
───────────────────────────────────────────────────────────── */
const AnimeChar = ({ style }) => (
  <svg viewBox="0 0 260 520" xmlns="http://www.w3.org/2000/svg" className="char-svg" style={style}>
    {/* ── Hair ── */}
    <path d="M75 105 C55 75 58 38 70 22 C80 8 92 14 98 28 C102 12 108 4 120 2 C132 0 138 14 140 26 C145 8 153 1 165 4 C180 9 183 38 175 68 C188 50 202 52 198 82 C194 94 184 94 178 83 C183 98 172 106 162 96 C168 108 148 118 142 104 C136 116 116 112 121 99 C109 112 96 104 100 90 C87 95 76 86 75 105Z" fill="#1c1c1c"/>
    {/* ── Head ── */}
    <ellipse cx="130" cy="110" rx="50" ry="58" fill="#2c2c2c"/>
    {/* ── Ear left/right ── */}
    <ellipse cx="80"  cy="112" rx="8" ry="11" fill="#2c2c2c"/>
    <ellipse cx="180" cy="112" rx="8" ry="11" fill="#2c2c2c"/>
    {/* ── Neck ── */}
    <rect x="115" y="162" width="30" height="28" rx="4" fill="#2a2a2a"/>
    {/* ── Collar / suit ── */}
    <path d="M60 186 L130 192 L200 186 L216 212 L178 232 L148 208 L130 222 L112 208 L82 232 L44 212Z" fill="#1e1e1e"/>
    {/* ── Suit jacket body ── */}
    <path d="M44 212 L32 430 L88 440 L116 345 L130 368 L144 345 L172 440 L228 430 L216 212 L178 232 L148 208 L130 222 L112 208 L82 232Z" fill="#232323"/>
    {/* ── Suit lapels ── */}
    <path d="M130 192 L102 242 L122 302 L130 282Z" fill="#2a2a2a"/>
    <path d="M130 192 L158 242 L138 302 L130 282Z" fill="#2a2a2a"/>
    {/* ── Shirt/tie under ── */}
    <path d="M122 222 L130 222 L138 222 L134 260 L130 272 L126 260Z" fill="#333"/>
    <path d="M130 240 L124 255 L130 268 L136 255Z" fill="#1a1a1a"/>
    {/* ── Left arm ── */}
    <path d="M44 212 L12 368 L38 378 L72 262Z" fill="#232323"/>
    {/* ── Right arm ── */}
    <path d="M216 212 L248 368 L222 378 L188 262Z" fill="#232323"/>
    {/* ── Left hand ── */}
    <ellipse cx="24" cy="382" rx="14" ry="18" fill="#2a2a2a"/>
    {/* ── Right hand ── */}
    <ellipse cx="236" cy="382" rx="14" ry="18" fill="#2a2a2a"/>
    {/* ── Trouser legs ── */}
    <path d="M88 440 L76 518 L110 520 L130 448 L150 520 L184 518 L172 440Z" fill="#1e1e1e"/>
    {/* ── Suit badge/star ── */}
    <circle cx="130" cy="392" r="20" fill="#1a1a1a" stroke="#383838" strokeWidth="1.5"/>
    <path d="M130 376 L134 386 L145 386 L136 393 L139 404 L130 398 L121 404 L124 393 L115 386 L126 386Z" fill="#404040"/>
    {/* ── Glasses frames ── */}
    <circle cx="108" cy="116" r="21" fill="none" stroke="#4a4a4a" strokeWidth="2.8"/>
    <circle cx="152" cy="116" r="21" fill="none" stroke="#4a4a4a" strokeWidth="2.8"/>
    <line x1="129" y1="116" x2="131" y2="116" stroke="#4a4a4a" strokeWidth="2.5"/>
    <path d="M87 116 C81 110 75 106 68 104" stroke="#4a4a4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M173 116 C179 110 185 106 192 104" stroke="#4a4a4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* ── Eyes ── */}
    <ellipse cx="108" cy="118" rx="11" ry="13" fill="#111"/>
    <ellipse cx="152" cy="118" rx="11" ry="13" fill="#111"/>
    <ellipse cx="110" cy="115" rx="4"  ry="5"  fill="#2a2a2a"/>
    <ellipse cx="154" cy="115" rx="4"  ry="5"  fill="#2a2a2a"/>
    {/* ── Eyebrows ── */}
    <path d="M91 96 L106 93"  stroke="#3a3a3a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M154 93 L169 96" stroke="#3a3a3a" strokeWidth="2" strokeLinecap="round"/>
    {/* ── Mouth ── */}
    <path d="M118 142 Q130 149 142 142" stroke="#3a3a3a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    {/* ── Nose ── */}
    <path d="M126 128 Q130 136 134 128" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────── */
const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  /* 7 filter states — one per "costume" cycle */
  const filters = [
    'none',
    'sepia(1) hue-rotate(330deg) saturate(3.5) brightness(0.65)',   // red/samurai
    'sepia(0.9) hue-rotate(10deg) saturate(2.5) brightness(0.75)',  // warm brown
    'grayscale(0.5) contrast(1.4) brightness(0.7)',                 // dark mono
    'sepia(0.6) hue-rotate(180deg) saturate(2) brightness(0.7)',    // blue night
    'sepia(0.7) hue-rotate(80deg) saturate(2.5) brightness(0.7)',   // green cyber
    'invert(0.1) contrast(1.3) brightness(0.75)',                   // ghost
  ];

  /* cycle every 2.2 s with a crossfade */
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(i => (i + 1) % filters.length); setFading(false); }, 350);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  /* entrance */
  useEffect(() => {
    anime({ targets: '.hero-text', opacity: [0, 1], translateX: [60, 0], duration: 1200, delay: 400, easing: 'easeOutExpo' });
    anime({ targets: '.char-wrap', opacity: [0, 1], translateY: [50, 0], duration: 1100, delay: 600, easing: 'easeOutExpo' });
    anime({ targets: '.hero-btns', opacity: [0, 1], translateY: [20, 0], duration: 800, delay: 1100, easing: 'easeOutExpo' });
    /* infinite float */
    setTimeout(() => anime({ targets: '.char-wrap', translateY: [0, -12, 0], duration: 4500, loop: true, easing: 'easeInOutSine' }), 2000);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Giant faint text — starts center and goes off screen right */}
      <h1 className="hero-text">Hi! I'm Hardik</h1>

      {/* Character — center-right of viewport, in front of text */}
      <div className={`char-wrap${fading ? ' char-fade' : ''}`} style={{ opacity: 0 }}>
        <AnimeChar style={{ filter: filters[idx], transition: 'filter 0.35s ease' }} />
        <div className="char-glow" />
      </div>

      {/* Bottom-left buttons */}
      <div className="hero-btns" style={{ opacity: 0 }}>
        <button className="hbtn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
        <button className="hbtn" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Who i'm</button>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   NAV — dark pill, full-width capsule
───────────────────────────────────────────────────────────── */
const Nav = () => {
  const [active, setActive] = useState('home');
  const [mob, setMob] = useState(false);

  useEffect(() => {
    anime({ targets: '.nav-pill', translateY: [-28, 0], opacity: [0, 1], duration: 900, delay: 150, easing: 'easeOutExpo' });
    const fn = () => {
      ['home','about','project','services','contact'].reverse().some(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); return true; }
        return false;
      });
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = id => { setMob(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const links = ['home','about','project','services','contact'];

  return (
    <nav className="nav">
      <div className="nav-pill" style={{ opacity: 0 }}>
        <button className="nav-logo" onClick={() => go('home')}><span className="logo-dim">a</span>mine</button>
        <ul className="nav-list">
          {links.map(l => (
            <li key={l}>
              <button className={`nav-lnk${active === l ? ' nav-lnk-on' : ''}`} onClick={() => go(l)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-ico-row">
          <a className="nav-ico" href="https://github.com/Har-dik25"         target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg></a>
          <a className="nav-ico" href="https://instagram.com"                target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
          <a className="nav-ico" href="https://www.linkedin.com/in/hardik8/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
        </div>
        <button className="nav-burger" onClick={() => setMob(o => !o)}>
          <span className={mob ? 'x' : ''}/><span className={mob ? 'x' : ''}/>
        </button>
      </div>
      {mob && (
        <div className="nav-mob">
          {links.map(l => <button key={l} className="nm-lnk" onClick={() => go(l)}>{l.charAt(0).toUpperCase()+l.slice(1)}</button>)}
        </div>
      )}
    </nav>
  );
};

/* ─────────────────────────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────────────────────────── */
const useReveal = (t = 0.1) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: t });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
};

/* ─────────────────────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────────────────────── */
const About = () => {
  const [ref, v] = useReveal(0.08);

  useEffect(() => {
    if (!v) return;
    anime({ targets: '.ab-title', translateY: [40,0], opacity:[0,1], duration:800, easing:'easeOutExpo' });
    anime({ targets: '.ab-line',  scaleX:[0,1],      opacity:[0,1], duration:600, delay:200, easing:'easeOutExpo' });
    anime({ targets: '.ab-card',  translateX:[-60,0], opacity:[0,1], duration:900, delay:250, easing:'easeOutExpo' });
    anime({ targets: '.ab-right', translateX:[60,0],  opacity:[0,1], duration:900, delay:350, easing:'easeOutExpo' });
    anime({ targets: '.ab-stat',  scale:[0.6,1], opacity:[0,1], delay: anime.stagger(80,{start:600,from:'center'}), easing:'easeOutElastic(1,.7)', duration:900 });
    document.querySelectorAll('.count-n').forEach(el => {
      anime({ targets:el, innerHTML:[0,+el.dataset.v], round:1, duration:2000, delay:700, easing:'easeOutExpo' });
    });
  }, [v]);

  return (
    <section id="about" className="about-sec" ref={ref}>
      {/* "About Me" heading with line below — from screenshot */}
      <div className="ab-header">
        <h2 className="sec-title ab-title" style={{opacity:0}}>About Me</h2>
        <div className="ab-line" style={{opacity:0}} />
      </div>

      <div className="ab-grid">
        {/* Left card with character */}
        <div className="ab-card" style={{opacity:0}}>
          <AnimeChar style={{filter:'none'}} />
        </div>

        {/* Right — text + stats */}
        <div className="ab-right" style={{opacity:0}}>
          <p className="ab-p">Hi, I'm Hardik Choudhary, a passionate Software Engineer and Computer Science student at Lovely Professional University. I enjoy building scalable backend systems, intelligent ML pipelines, and responsive web interfaces that provide a great user experience.</p>
          <p className="ab-p">I focus on clean architecture, smooth data flows, and writing efficient code using modern web technologies. I'm always learning new tools and improving my skills to create better digital products. My goal is to combine creativity with technology to build systems that are both powerful and functional.</p>

          <hr className="ab-divider" />

          <div className="ab-stats">
            {[['9+','PROJECTS',9],[' 80+','LEETCODE',80],['5★','HACKERRANK',5],['2','ORACLE CERTS',2]].map(([disp,lbl,val],i)=>(
              <div key={i} className="ab-stat" style={{opacity:0}}>
                <span className="ab-stat-n">
                  {val===80 ? <><span className="count-n" data-v="80">0</span>+</> :
                   val===9  ? <><span className="count-n" data-v="9">0</span>+</> :
                   val===5  ? <><span className="count-n" data-v="5">0</span>★</> :
                   <span className="count-n" data-v="2">0</span>}
                </span>
                <span className="ab-stat-l">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills strip directly below about */}
      <SkillsStrip />
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   SKILLS STRIP — inside about section, exactly like screenshot
───────────────────────────────────────────────────────────── */
const SkillsStrip = () => {
  const [ref, v] = useReveal(0.15);
  useEffect(() => {
    if (!v) return;
    anime({ targets: '.sk-item', translateY:[28,0], opacity:[0,1], delay: anime.stagger(55,{start:100}), easing:'easeOutExpo', duration:600 });
  }, [v]);

  const skills = [
    {cls:'devicon-python-plain',        lbl:'PYTHON'},
    {cls:'devicon-react-original',      lbl:'REACT'},
    {cls:'devicon-javascript-plain',    lbl:'JS'},
    {cls:'devicon-mysql-plain',         lbl:'MYSQL'},
    {cls:'devicon-fastapi-plain',       lbl:'FASTAPI'},
    {cls:'devicon-nodejs-plain',        lbl:'NODE.JS'},
    {cls:'devicon-tensorflow-original', lbl:'TF'},
    {cls:'devicon-mongodb-plain',       lbl:'MONGODB'},
    {cls:'devicon-docker-plain',        lbl:'DOCKER'},
    {cls:'devicon-git-plain',           lbl:'GIT'},
  ];

  return (
    <div className="skills-strip" ref={ref}>
      {skills.map((s,i) => (
        <div key={i} className="sk-item" style={{opacity:0}}
          onMouseEnter={e => anime({targets:e.currentTarget, scale:1.3, translateY:-8, duration:220, easing:'easeOutBack'})}
          onMouseLeave={e => anime({targets:e.currentTarget, scale:1, translateY:0, duration:320, easing:'easeOutElastic(1,.5)'})}>
          <i className={s.cls} />
          <span>{s.lbl}</span>
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   PROJECTS — light gray bg, 3-col white cards
───────────────────────────────────────────────────────────── */
const Projects = () => {
  const [ref, v] = useReveal(0.05);
  useEffect(() => {
    if (!v) return;
    anime({ targets:'.proj-title-h', translateY:[30,0], opacity:[0,1], duration:700, easing:'easeOutExpo' });
    anime({ targets:'.pcard', translateY:[50,0], opacity:[0,1], delay:anime.stagger(80,{start:300}), easing:'easeOutExpo', duration:800 });
  }, [v]);

  const hov = e => anime({targets:e.currentTarget, translateY:-6, boxShadow:'0 16px 40px rgba(0,0,0,.13)', duration:280, easing:'easeOutExpo'});
  const out = e => anime({targets:e.currentTarget, translateY:0,  boxShadow:'0 2px 10px rgba(0,0,0,.07)',  duration:350, easing:'easeOutElastic(1,.6)'});

  const projects = [
    {t:'Scalable HRMS System',   d:'FastAPI backend with RBAC, Supabase auth and concurrent employee data ops.',                                  tech:['Python','FastAPI','Docker'],        bg:'linear-gradient(135deg,#1e1e2e,#2d2d44)', gh:'https://github.com/Har-dik25/hrms-backend', live:'https://github.com/Har-dik25/hrms-backend'},
    {t:'AI Traffic Predictor',   d:'89% R² ML pipeline on 80K+ records with real-time forecasting via AWS Lambda.',                              tech:['TensorFlow','Flask','AWS'],          bg:'linear-gradient(135deg,#0f2027,#2c5364)', gh:'https://github.com/Har-dik25/AI-Traffic-Congestion-Analysis', live:'https://github.com/Har-dik25/AI-Traffic-Congestion-Analysis'},
    {t:'LegalMind RAG',          d:'AI legal assistant built on RAG pipeline with vector search and LLM APIs.',                                   tech:['Python','LLMs','RAG'],               bg:'linear-gradient(135deg,#1a1a2e,#0f3460)', gh:'https://github.com/Har-dik25/LegalMindRag', live:'https://github.com/Har-dik25/LegalMindRag'},
    {t:'GenAI Demystifier',      d:'Multi-model agent that analyzes and breaks down technical documents using GenAI.',                            tech:['GenAI','LLMs','NLP'],                bg:'linear-gradient(135deg,#2d1b69,#11998e)', gh:'https://github.com/JXPJXT/GoogleGenAiExchange-GenAI-Document-Demistifier', live:'https://github.com/JXPJXT/GoogleGenAiExchange-GenAI-Document-Demistifier'},
    {t:'Backpack Price ML',      d:'XGBoost regression — Top 10% among 500+ Kaggle participants.',                                               tech:['Python','XGBoost','Sklearn'],        bg:'linear-gradient(135deg,#1e3c72,#2a5298)', gh:'https://github.com/JXPJXT/Kaggle-Backpack-Prediction-Challenge', live:'https://github.com/JXPJXT/Kaggle-Backpack-Prediction-Challenge'},
    {t:'UMS Replica',            d:'Full-stack University Management System with portals, courses and admin dashboards.',                         tech:['React','Node.js','SQL'],             bg:'linear-gradient(135deg,#232526,#414345)', gh:'https://github.com/Har-dik25/UMS-replica', live:'https://github.com/Har-dik25/UMS-replica'},
    {t:'OCR Doc Pipeline',       d:'High-accuracy OCR system for document-to-JSON extraction, streamlining physical data digitisation.',          tech:['Python','Tesseract'],               bg:'linear-gradient(135deg,#16213e,#1a1a2e)', gh:'https://github.com/Har-dik25/OCR-DOCS', live:'https://github.com/Har-dik25/OCR-DOCS'},
    {t:'Solar Forecasting',      d:'Ensemble ML for renewable solar energy generation forecasting from raw sensor and weather data.',              tech:['Python','ML','Data Science'],       bg:'linear-gradient(135deg,#1a472a,#2d6a4f)', gh:'https://github.com/LeviAckermanZ9/solar-power-generation-forecasting', live:'https://github.com/LeviAckermanZ9/solar-power-generation-forecasting'},
    {t:'Loan Data Analysis',     d:'Deep EDA with feature importance mapping and financial risk visualisation for lending models.',                tech:['Pandas','Seaborn','Python'],        bg:'linear-gradient(135deg,#3d0c02,#6b1a10)', gh:'https://github.com/rashmisahray/Loan-data-analysis', live:'https://github.com/rashmisahray/Loan-data-analysis'},
  ];

  return (
    <section id="project" className="proj-sec" ref={ref}>
      <h2 className="sec-title proj-title-h" style={{opacity:0}}>Project</h2>
      <div className="sec-underline" />
      <div className="proj-grid">
        {projects.map((p,i) => (
          <div key={i} className="pcard" style={{opacity:0}} onMouseEnter={hov} onMouseLeave={out}>
            {/* Gradient preview image */}
            <div className="pcard-img" style={{background:p.bg}}>
              <span className="pcard-img-txt">{p.t}</span>
            </div>
            <div className="pcard-body">
              <h3 className="pcard-title">{p.t}</h3>
              <p className="pcard-desc">{p.d}</p>
              <div className="pcard-tags">{p.tech.map(t=><span key={t} className="ptag">{t}</span>)}</div>
              <div className="pcard-links">
                <a href={p.gh}   target="_blank" rel="noopener noreferrer" className="plink plink-gh">GitHub</a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="plink plink-live">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   SERVICES — dark bg, 3 cards
───────────────────────────────────────────────────────────── */
const Services = () => {
  const [ref, v] = useReveal(0.1);
  useEffect(() => {
    if (!v) return;
    anime({ targets:'.svc-title-h', translateY:[30,0], opacity:[0,1], duration:700, easing:'easeOutExpo' });
    anime({ targets:'.svc-card', translateY:[50,0], opacity:[0,1], delay:anime.stagger(130,{start:300}), easing:'easeOutExpo', duration:800 });
  }, [v]);

  const svcs = [
    {
      icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      title:'Backend Development',
      desc:'Scalable APIs and backend systems using Python, FastAPI, Flask and Node.js with database design and deployment.',
    },
    {
      icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
      title:'ML & Data Science',
      desc:'End-to-end ML models for prediction, classification and NLP. EDA, feature engineering and deployment on AWS.',
    },
    {
      icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title:'Full Stack Apps',
      desc:'Complete web applications from database to UI. React frontends with robust REST APIs and cloud deployment.',
    },
  ];

  return (
    <section id="services" className="svc-sec" ref={ref}>
      <h2 className="sec-title svc-title-h" style={{opacity:0}}>Services</h2>
      <div className="sec-underline" />
      <div className="svc-grid">
        {svcs.map((s,i) => (
          <div key={i} className="svc-card" style={{opacity:0}}
            onMouseEnter={e=>anime({targets:e.currentTarget,translateY:-8,duration:260,easing:'easeOutBack'})}
            onMouseLeave={e=>anime({targets:e.currentTarget,translateY:0, duration:360,easing:'easeOutElastic(1,.5)'})}>
            <div className="svc-icon">{s.icon}</div>
            <h3 className="svc-name">{s.title}</h3>
            <p className="svc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   CONTACT — dark bg, left info + right form
───────────────────────────────────────────────────────────── */
const Contact = () => {
  const [ref, v] = useReveal(0.08);
  const [form, setForm] = useState({name:'',email:'',msg:''});
  const [st, setSt] = useState('idle');

  useEffect(() => {
    if (!v) return;
    anime({ targets:'.ct-title-h', translateY:[30,0], opacity:[0,1], duration:700, easing:'easeOutExpo' });
    anime({ targets:'.ct-left',  translateX:[-50,0], opacity:[0,1], duration:900, delay:200, easing:'easeOutExpo' });
    anime({ targets:'.ct-right', translateX:[50,0],  opacity:[0,1], duration:900, delay:300, easing:'easeOutExpo' });
  }, [v]);

  const submit = async e => {
    e.preventDefault(); setSt('sending');
    await new Promise(r=>setTimeout(r,1200)); setSt('sent');
    setTimeout(()=>{ setSt('idle'); setForm({name:'',email:'',msg:''}); },3500);
  };

  return (
    <section id="contact" className="ct-sec" ref={ref}>
      <h2 className="sec-title ct-title-h" style={{opacity:0}}>Contact Me</h2>
      <div className="sec-underline" />

      <div className="ct-grid">
        <div className="ct-left" style={{opacity:0}}>
          <h3 className="ct-sub">Get In Touch</h3>
          <p className="ct-body">Feel free to reach out about new projects, opportunities, or just to say hi. I'll get back to you as soon as possible.</p>
          <div className="ct-infos">
            {[
              {svg:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>, txt:'hardikkumar2583@gmail.com'},
              {svg:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, txt:'+91-7878600960'},
              {svg:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>, txt:'India'},
            ].map((item,i)=>(
              <div key={i} className="ct-info">
                <span className="ct-info-ico">{item.svg}</span>
                <span>{item.txt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ct-right" style={{opacity:0}}>
          <form onSubmit={submit} noValidate>
            <input className="ct-inp" type="text"  placeholder="Your Name"    required value={form.name} onChange={e=>setForm(s=>({...s,name:e.target.value}))}/>
            <input className="ct-inp" type="email" placeholder="Your Email"   required value={form.email} onChange={e=>setForm(s=>({...s,email:e.target.value}))}/>
            <textarea className="ct-inp ct-ta"     placeholder="Your Message" required value={form.msg} onChange={e=>setForm(s=>({...s,msg:e.target.value}))}/>
            <button type="submit" className="ct-btn" disabled={st==='sending'}>
              {st==='idle'?'Send Message':st==='sending'?'Sending…':'Sent ✓'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer className="footer">
    <div className="footer-in">
      <span>© 2026 Hardik Choudhary. All rights reserved.</span>
      <div className="ft-icons">
        {[
          {h:'https://github.com/Har-dik25',        s:<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>},
          {h:'https://www.linkedin.com/in/hardik8/', s:<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>},
          {h:'mailto:hardikkumar2583@gmail.com',    s:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>},
        ].map((ico,i)=>(
          <a key={i} href={ico.h} target="_blank" rel="noopener noreferrer" className="ft-ico">{ico.s}</a>
        ))}
      </div>
    </div>
  </footer>
);

/* ─────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
