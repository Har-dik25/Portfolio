import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const Contact = () => {
  const [ref, v] = useReveal(.08);
  const [fm, setFm] = useState({name:'',email:'',msg:''});
  const [st, setSt] = useState('idle');
  const send = async e => { e.preventDefault(); setSt('sending'); await new Promise(r=>setTimeout(r,1300)); setSt('sent'); setTimeout(()=>{setSt('idle');setFm({name:'',email:'',msg:''}); },3500); };
  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="w">
        <span className={`ey${v?' v':''}`}>04 — Contact</span>
        <h2 className={`st${v?' v':''}`} style={{transitionDelay:'.08s'}}>Contact Me</h2>
        <div className={`sl${v?' v':''}`} style={{transitionDelay:'.13s'}}/>
        <div className="cg">
          <div className={`cl${v?' v':''}`} style={{transitionDelay:'.22s'}}>
            <h3 className="csub">Get In Touch</h3>
            <p className="cbody">Feel free to reach out about new projects, opportunities, or just to say hi. I'll get back to you as soon as possible.</p>
            {[
              {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>,t:'hardikkumar2583@gmail.com',h:'mailto:hardikkumar2583@gmail.com'},
              {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,t:'+91-7878600960',h:'tel:+917878600960'},
              {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,t:'India — LPU, Punjab',h:null},
            ].map((item,i)=>(
              <div key={i} className="cinfo">
                <span className="cicobox">{item.icon}</span>
                {item.h?<a href={item.h} className="cinfolink">{item.t}</a>:<span>{item.t}</span>}
              </div>
            ))}
          </div>
          <form className={`cf${v?' v':''}`} onSubmit={send} noValidate style={{transitionDelay:'.34s'}}>
            {[{id:'fn',l:'Name',t:'text',k:'name',ph:'John Doe'},{id:'fe',l:'Email',t:'email',k:'email',ph:'john@example.com'}].map(f=>(
              <div key={f.k} className="fw">
                <label htmlFor={f.id} className="fl">{f.l}</label>
                <input id={f.id} type={f.t} className="fi" placeholder={f.ph} required value={fm[f.k]} onChange={e=>setFm(s=>({...s,[f.k]:e.target.value}))}/>
              </div>
            ))}
            <div className="fw">
              <label htmlFor="fmsg" className="fl">Message</label>
              <textarea id="fmsg" className="fi fta" placeholder="What are you building?" required value={fm.msg} onChange={e=>setFm(s=>({...s,msg:e.target.value}))}/>
            </div>
            <button type="submit" className="cbtn" disabled={st==='sending'}>
              {st==='idle'&&'Send Message →'}{st==='sending'&&'Sending…'}{st==='sent'&&'✓ Sent!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
