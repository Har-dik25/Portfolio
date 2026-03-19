import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Projects = () => {
  const [ref, v] = useReveal(.04);
  const tilt = e => { const c=e.currentTarget,r=c.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width/2),y=(e.clientY-r.top-r.height/2)/(r.height/2); c.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) scale(1.04)`; c.querySelector('.psh').style.background=`radial-gradient(circle at ${(e.clientX-r.left)/r.width*100}% ${(e.clientY-r.top)/r.height*100}%,rgba(255,255,255,.11) 0%,transparent 65%)`; };
  const flat = e => { e.currentTarget.style.transform=''; e.currentTarget.querySelector('.psh').style.background=''; };

  const data = [
    {t:'Scalable HRMS System',   d:'FastAPI backend with RBAC, Supabase auth and concurrent employee data ops.',                  tech:['Python','FastAPI','Docker'],       bg:'url(/projects/hrms_system.webp)',gh:'https://github.com/Har-dik25/hrms-backend'},
    {t:'AI Traffic Predictor',   d:'89% R² ML pipeline on 80K+ records. Real-time forecasting via AWS Lambda.',                   tech:['TensorFlow','Flask','AWS'],         bg:'url(/projects/traffic_ai.webp)',gh:'https://github.com/Har-dik25/AI-Traffic-Congestion-Analysis'},
    {t:'LegalMind RAG',          d:'AI legal assistant on advanced RAG pipeline with vector search and LLM APIs.',                 tech:['Python','LLMs','RAG'],              bg:'url(/projects/legal_mind.webp)',gh:'https://github.com/Har-dik25/LegalMindRag'},
    {t:'GenAI Demystifier',      d:'Multi-model agent that analyzes and breaks down technical documents using GenAI.',             tech:['GenAI','LLMs','NLP'],               bg:'url(/projects/gen_ai_demistifier.webp)',gh:'https://github.com/JXPJXT/GoogleGenAiExchange-GenAI-Document-Demistifier'},
    {t:'Backpack Price ML',      d:'XGBoost regression — Top 10% among 500+ Kaggle participants.',                                tech:['Python','XGBoost','Sklearn'],       bg:'url(/projects/backpack_prediction.webp)',gh:'https://github.com/JXPJXT/Kaggle-Backpack-Prediction-Challenge'},
    {t:'UMS Replica',            d:'Full-stack University Management System with portals, courses and dashboards.',                tech:['React','Node.js','SQL'],            bg:'url(/projects/ums_replica.webp)',gh:'https://github.com/Har-dik25/UMS-replica'},
    {t:'OCR Doc Pipeline',       d:'High-accuracy OCR system for document-to-JSON extraction and digitisation.',                  tech:['Python','Tesseract'],              bg:'url(/projects/ocr_docs.webp)',gh:'https://github.com/Har-dik25/OCR-DOCS'},
    {t:'Solar Forecasting',      d:'Ensemble ML for renewable solar energy generation forecasting from sensor data.',              tech:['Python','ML','Data Science'],      bg:'url(/projects/solar_forecasting.webp)',gh:'https://github.com/LeviAckermanZ9/solar-power-generation-forecasting'},
    {t:'Loan Data Analysis',     d:'Deep EDA with feature importance mapping and financial risk visualisation.',                   tech:['Pandas','Seaborn','Python'],       bg:'url(/projects/loan_analysis.webp)',gh:'https://github.com/rashmisahray/Loan-data-analysis'},
  ];
  return (
    <section id="project" className="projects" ref={ref}>
      <div className="w">
        <span className={`ey proj-ey${v?' v':''}`}>02 — Work</span>
        <h2 className={`st proj-st${v?' v':''}`} style={{transitionDelay:'.08s'}}>Project</h2>
        <div className={`sl sl-dk${v?' v':''}`} style={{transitionDelay:'.13s'}}/>
        <div className="pg">
          {data.map((p,i)=>(
            <div key={i} className={`pcard${v?' v':''}`} style={{transitionDelay:`${.14+i*.055}s`,transformStyle:'preserve-3d'}} onMouseMove={tilt} onMouseLeave={flat}>
              <div className="psh"/>
              <div className="pimg" style={{backgroundImage:p.bg}} loading="lazy" decoding="async"><span className="pilbl">{p.t}</span></div>
              <div className="pb">
                <h3 className="pt">{p.t}</h3>
                <p className="pd">{p.d}</p>
                <div className="ptgs">{p.tech.map(t=><span key={t} className="ptg">{t}</span>)}</div>
                <div className="pls">
                  <a href={p.gh} target="_blank" rel="noopener noreferrer" className="pl plg">GitHub</a>
                  <a href={p.gh} target="_blank" rel="noopener noreferrer" className="pl pll">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
