import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Services = () => {
  const [ref, v] = useReveal(.1);
  const svcs = [
    {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,t:'Backend Development',d:'Scalable APIs and backend systems using Python, FastAPI, Flask and Node.js. REST APIs, auth systems, database design and cloud deployment.'},
    {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,t:'ML & Data Science',d:'End-to-end ML models for prediction, classification and NLP. EDA, feature engineering, RAG pipelines and deployment on AWS.'},
    {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,t:'Full Stack Apps',d:'Complete web applications from database to UI. React frontends, robust REST APIs, Docker deployment and CI/CD pipelines.'},
  ];
  return (
    <section id="services" className="services" ref={ref}>
      <div className="w">
        <span className={`ey${v?' v':''}`}>03 — Services</span>
        <h2 className={`st${v?' v':''}`} style={{transitionDelay:'.08s'}}>Services</h2>
        <div className={`sl${v?' v':''}`} style={{transitionDelay:'.13s'}}/>
        <div className="sg">
          {svcs.map((s,i)=>(
            <div key={i} className={`scard${v?' v':''}`} style={{transitionDelay:`${.18+i*.13}s`}}>
              <div className="sico">{s.icon}</div>
              <h3 className="st2">{s.t}</h3>
              <p className="sd">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
