import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
  const [t, setT] = useState(''); const [wi, setWi] = useState(0); const [ci, setCi] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    const id = setTimeout(() => {
      if (!del) { setT(w.slice(0, ci + 1)); if (ci + 1 === w.length) setTimeout(() => setDel(true), 1700); else setCi(c => c + 1); }
      else { setT(w.slice(0, ci - 1)); if (ci - 1 === 0) { setDel(false); setWi(x => (x + 1) % words.length); setCi(0); } else setCi(c => c - 1); }
    }, del ? 38 : 78);
    return () => clearTimeout(id);
  }, [ci, del, wi, words]);
  return <span>{t}<span className="caret">|</span></span>;
};

export default Typewriter;
