import React from 'react';
import CountUp from './ui/CountUp';
import { CostumeScholar } from './ui/Costumes';
import { useReveal } from '../hooks/useReveal';
import { 
  SiPython, 
  SiReact, 
  SiJavascript, 
  SiMysql, 
  SiFastapi, 
  SiNodedotjs, 
  SiTensorflow, 
  SiMongodb, 
  SiDocker, 
  SiGit 
} from 'react-icons/si';

const About = () => {
  const [ref, v] = useReveal(.07);
  
  const skills = [
    { Icon: SiPython, label: 'Python' },
    { Icon: SiReact, label: 'React' },
    { Icon: SiJavascript, label: 'JS' },
    { Icon: SiMysql, label: 'MySQL' },
    { Icon: SiFastapi, label: 'FastAPI' },
    { Icon: SiNodedotjs, label: 'Node.js' },
    { Icon: SiTensorflow, label: 'TensorFlow' },
    { Icon: SiMongodb, label: 'MongoDB' },
    { Icon: SiDocker, label: 'Docker' },
    { Icon: SiGit, label: 'Git' }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="w">
        <span className={`ey${v?' v':''}`}>01 — About</span>
        <h2 className={`st${v?' v':''}`} style={{transitionDelay:'.08s'}}>About Me</h2>
        <div className={`sl${v?' v':''}`} style={{transitionDelay:'.13s'}}/>

        <div className="ag">
          <div className={`acard${v?' v':''}`} style={{transitionDelay:'.2s'}}>
            <div className="acard-inner">
              <CostumeScholar/>
            </div>
            <div className="acard-tag"><span className="atdot"/><span>Available 2025</span></div>
          </div>

          <div className={`atxt${v?' v':''}`} style={{transitionDelay:'.32s'}}>
            <p className="ap">Hi, I'm <strong>Hardik Choudhary</strong>, a passionate Software Engineer and Computer Science student at Lovely Professional University. I enjoy building scalable backend systems, intelligent ML pipelines, and responsive web interfaces.</p>
            <p className="ap">I focus on clean architecture, smooth data flows, and writing efficient code. Interned at <strong>Futurense Technologies</strong> as a Data Analyst — cleaned 30K+ records, built Power BI dashboards, improved decisions by 20%.</p>
            <p className="ap">My goal is to combine creativity with technology to build systems that are both powerful and functional.</p>
            <div className="stats">
              <Cu t={9}  s="+" lbl="Projects"     v={v}/>
              <Cu t={80} s="+" lbl="LeetCode"      v={v}/>
              <Cu t={5}  s="★" lbl="HackerRank"    v={v}/>
              <Cu t={2}  s=""  lbl="Oracle Certs"  v={v}/>
            </div>
            <div className="certs">
              {['OCI Generative AI Professional','OCI Data Science Professional'].map((c,i)=>(
                <div key={i} className="cert">
                  <span className="cico">◎</span>
                  <div><div className="cname">{c}</div><div className="cmeta">Oracle · 2025 · <a href="#" className="clink">Verify →</a></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`skills${v?' v':''}`} style={{transitionDelay:'.5s'}}>
          {skills.map((s,i) => (
            <div key={i} className="sk" style={{animationDelay:v?`${i*.04}s`:'0s'}}>
              <s.Icon /><span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal countup bridge
const Cu = (props) => <CountUp {...props} />;

export default About;
