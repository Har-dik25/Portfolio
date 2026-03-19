import React from 'react';

const Face = ({ hairColor = '#1a1a1a', skinTone = '#e8c9a0', glassesColor = '#3a3a3a', hairStyle = 'default' }) => (
  <>
    <rect x="118" y="168" width="28" height="32" rx="4" fill={skinTone} />
    <ellipse cx="132" cy="118" rx="54" ry="58" fill={skinTone} />
    <ellipse cx="80"  cy="120" rx="8" ry="11" fill={skinTone} />
    <ellipse cx="184" cy="120" rx="8" ry="11" fill={skinTone} />
    <ellipse cx="80"  cy="120" rx="5" ry="7.5" fill="#d4a880" />
    <ellipse cx="184" cy="120" rx="5" ry="7.5" fill="#d4a880" />
    <path d="M96 95 Q106 90 116 93" stroke={hairColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M148 93 Q158 90 168 95" stroke={hairColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <ellipse cx="106" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="158" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="106" cy="113" rx="9" ry="11" fill="#1a3a5c"/>
    <ellipse cx="158" cy="113" rx="9" ry="11" fill="#1a3a5c"/>
    <ellipse cx="107" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <ellipse cx="159" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <circle cx="110" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="162" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="103" cy="116" r="1.2" fill="white" opacity=".5"/>
    <circle cx="106" cy="112" r="18" fill="none" stroke={glassesColor} strokeWidth="2.5"/>
    <circle cx="158" cy="112" r="18" fill="none" stroke={glassesColor} strokeWidth="2.5"/>
    <path d="M124 112 L140 112" stroke={glassesColor} strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M88 112 C82 107 76 105 70 106" stroke={glassesColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M176 112 C182 107 188 105 194 106" stroke={glassesColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M126 132 Q132 140 138 132" stroke="#c4956a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="128" cy="135" r="1.8" fill="#c4956a" opacity=".6"/>
    <circle cx="136" cy="135" r="1.8" fill="#c4956a" opacity=".6"/>
    <path d="M118 150 Q132 158 146 150" stroke="#c07858" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M122 150 Q132 153 142 150" stroke="#e8956e" strokeWidth="1" fill="none" strokeLinecap="round" opacity=".6"/>
    <ellipse cx="88"  cy="136" rx="10" ry="6" fill="#ffb4a0" opacity=".25"/>
    <ellipse cx="176" cy="136" rx="10" ry="6" fill="#ffb4a0" opacity=".25"/>
  </>
);

export const CostumeKimono = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 210 L22 440 L80 450 L110 360 L132 388 L154 360 L184 450 L242 440 L222 210 L188 234 L156 210 L132 228 L108 210 L76 234Z" fill="#1a1a1a"/>
    <path d="M132 228 L108 278 L124 330 L132 312Z" fill="#2a2a2a"/>
    <path d="M132 228 L156 278 L140 330 L132 312Z" fill="#2a2a2a"/>
    <path d="M108 210 L132 228 L156 210 L160 200 L132 218 L104 200Z" fill="#f5f0e8"/>
    <rect x="70" y="310" width="124" height="28" rx="4" fill="#2d2d2d" stroke="#3a3a3a" strokeWidth="1"/>
    <rect x="118" y="312" width="28" height="24" rx="3" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
    <path d="M42 210 L12 370 L40 382 L70 260Z" fill="#1a1a1a"/>
    <path d="M222 210 L252 370 L224 382 L194 260Z" fill="#1a1a1a"/>
    <ellipse cx="25" cy="386" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="239" cy="386" rx="14" ry="18" fill="#e8c9a0"/>
    <path d="M16 378 Q11 370 14 364" stroke="#e8c9a0" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M20 374 Q16 365 18 358" stroke="#e8c9a0" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M80 450 L68 598 L104 598 L132 500 L160 598 L196 598 L184 450Z" fill="#111"/>
    <circle cx="132" cy="420" r="20" fill="#111" stroke="#2a2a2a" strokeWidth="1.5"/>
    <path d="M132 406 l4 10 h11 l-9 6.5 3.4 10.5-9.4-6.8-9.4 6.8 3.4-10.5-9-6.5h11Z" fill="#2a2a2a"/>
    <path d="M82 98 C66 55 70 18 85 8 C96 0 106 16 112 30 C118 12 126 4 136 2 C148 0 154 14 156 28 C162 10 172 3 182 8 C198 16 200 52 190 78 C204 62 218 64 214 94 C210 108 198 108 192 96 C198 112 186 118 174 108 C180 122 158 128 152 114 C144 126 120 124 126 110 C112 124 98 114 102 100 C88 106 78 96 82 98Z" fill="#1a1a1a"/>
    <Face/>
    <path d="M110 20 Q120 10 136 8" stroke="#3a3a3a" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".7"/>
    <path d="M86 40 Q80 60 84 80" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5"/>
  </svg>
);

export const CostumeSamurai = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 205 L18 430 L80 442 L108 355 L132 380 L156 355 L184 442 L246 430 L228 205 L190 228 L160 205 L132 222 L104 205 L74 228Z" fill="#1a0a0a"/>
    <path d="M36 205 L20 255 L60 262 L74 228Z" fill="#8b1a1a"/>
    <path d="M228 205 L244 255 L204 262 L190 228Z" fill="#8b1a1a"/>
    <rect x="82" y="215" width="100" height="90" rx="5" fill="#2a0808" stroke="#8b1a1a" strokeWidth="1.5"/>
    <path d="M92 225 L172 225 L172 295 L92 295Z" fill="#350a0a" stroke="#6b1414" strokeWidth="1"/>
    {[0,1,2,3,4].map(i=><line key={i} x1="92" y1={235+i*12} x2="172" y2={235+i*12} stroke="#6b1414" strokeWidth=".8" opacity=".7"/>)}
    {[-2,-1,0,1,2].map(i=>(
      <rect key={i} x={82+i*18} y="305" width="16" height="45" rx="3" fill="#8b1a1a" stroke="#b22222" strokeWidth="1" transform={`rotate(${i*2} ${90+i*18} 327}`}/>
    ))}
    <path d="M36 205 L8 360 L38 372 L68 255Z" fill="#1a0a0a"/>
    <path d="M228 205 L256 360 L226 372 L196 255Z" fill="#1a0a0a"/>
    <rect x="8" y="280" width="36" height="55" rx="4" fill="#8b1a1a" stroke="#b22222" strokeWidth="1"/>
    <rect x="220" y="280" width="36" height="55" rx="4" fill="#8b1a1a" stroke="#b22222" strokeWidth="1"/>
    <ellipse cx="22" cy="376" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="242" cy="376" rx="14" ry="18" fill="#e8c9a0"/>
    <rect x="244" y="220" width="4" height="200" rx="2" fill="#8a7a6a" transform="rotate(15 246 320)"/>
    <rect x="243" y="216" width="6" height="12" rx="2" fill="#c8a020"/>
    <path d="M80 442 L66 598 L104 598 L132 498 L160 598 L198 598 L184 442Z" fill="#1a0a0a"/>
    <rect x="72" y="460" width="48" height="80" rx="5" fill="#2a0808" stroke="#8b1a1a" strokeWidth="1.2"/>
    <rect x="144" y="460" width="48" height="80" rx="5" fill="#2a0808" stroke="#8b1a1a" strokeWidth="1.2"/>
    <path d="M70 90 C62 55 66 18 82 8 C92 0 103 14 109 27 C116 10 124 2 134 0 C146-2 152 13 155 26 C162 8 172 2 182 7 C198 15 200 50 190 76 C208 58 222 62 218 90 C214 106 202 108 196 96 C200 114 186 118 176 108 C180 122 160 128 153 114 C146 126 118 124 124 110 C110 124 96 114 100 100 C86 106 72 100 70 90Z" fill="#1a0a0a"/>
    <path d="M132 10 C128 0 118-10 112-18 C116-6 118 6 120 14" stroke="#8b1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M132 10 C136 0 146-10 152-18 C148-6 146 6 144 14" stroke="#8b1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M132 4 L138 22 L132 18 L126 22Z" fill="#c8a020"/>
    <Face hairColor="#1a0a0a" glassesColor="#6b1414"/>
  </svg>
);

export const CostumeCyber = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 208 L24 438 L82 448 L110 358 L132 384 L154 358 L182 448 L240 438 L220 208 L186 232 L156 208 L132 226 L108 208 L78 232Z" fill="#0a0e1a"/>
    <path d="M78 232 L108 208 L132 226 L110 290Z" fill="#0e1428"/>
    <path d="M186 232 L156 208 L132 226 L154 290Z" fill="#0e1428"/>
    <path d="M82 240 L82 350 L170 350 L170 240" stroke="#00d4ff" strokeWidth="1.2" fill="none" opacity=".6"/>
    <path d="M95 260 L120 260 L120 280 L150 280" stroke="#00d4ff" strokeWidth=".8" fill="none" opacity=".5"/>
    <path d="M95 300 L140 300 L140 320" stroke="#7000ff" strokeWidth=".8" fill="none" opacity=".5"/>
    <rect x="112" y="248" width="40" height="40" rx="4" fill="#0a0e1a" stroke="#00d4ff" strokeWidth="1.5"/>
    <text x="132" y="272" textAnchor="middle" fill="#00d4ff" fontSize="14" fontFamily="monospace" fontWeight="bold">HC</text>
    <path d="M100 208 L132 226 L164 208 L168 196 L132 216 L96 196Z" fill="#1a2040" stroke="#00d4ff" strokeWidth="1"/>
    <rect x="24" y="208" width="52" height="28" rx="6" fill="#0e1428" stroke="#00d4ff" strokeWidth="1.2"/>
    <rect x="188" y="208" width="52" height="28" rx="6" fill="#0e1428" stroke="#00d4ff" strokeWidth="1.2"/>
    <rect x="70" y="308" width="124" height="20" rx="4" fill="#0e1428" stroke="#7000ff" strokeWidth="1.2"/>
    <rect x="122" y="310" width="20" height="16" rx="3" fill="#0a0e1a" stroke="#00d4ff" strokeWidth="1.5"/>
    <path d="M44 208 L16 368 L44 380 L72 262Z" fill="#0a0e1a"/>
    <path d="M220 208 L248 368 L220 380 L192 262Z" fill="#0a0e1a"/>
    <path d="M20 280 Q26 300 20 320" stroke="#00d4ff" strokeWidth=".8" fill="none" opacity=".5"/>
    <path d="M244 280 Q238 300 244 320" stroke="#7000ff" strokeWidth=".8" fill="none" opacity=".5"/>
    <ellipse cx="28" cy="384" rx="14" ry="18" fill="#0e1428"/>
    <ellipse cx="236" cy="384" rx="14" ry="18" fill="#0e1428"/>
    <path d="M82 448 L70 598 L106 598 L132 502 L158 598 L194 598 L182 448Z" fill="#0a0e1a"/>
    <circle cx="86"  cy="510" r="5" fill="#00d4ff" opacity=".8"/>
    <circle cx="178" cy="510" r="5" fill="#7000ff" opacity=".8"/>
    <path d="M78 94 C60 52 64 16 80 6 C92-2 104 14 110 28 C116 10 126 2 136 0 C148-2 154 12 157 26 C163 8 173 2 184 6 C200 14 202 50 192 76 C206 60 220 62 216 92 C212 106 200 108 194 96 C198 112 186 116 176 106 C180 120 158 128 152 114 C144 126 118 124 124 110 C110 122 96 114 100 98 C86 104 72 98 78 94Z" fill="#0d0d1a"/>
    <path d="M90 30 Q86 60 84 90" stroke="#00d4ff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".6"/>
    <path d="M170 30 Q174 60 176 88" stroke="#7000ff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".6"/>
    <Face hairColor="#0d0d1a" skinTone="#e8c9a0" glassesColor="#00a0cc"/>
    <circle cx="106" cy="112" r="17" fill="#00d4ff" opacity=".08"/>
    <circle cx="158" cy="112" r="17" fill="#7000ff" opacity=".08"/>
  </svg>
);

export const CostumeScholar = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 208 L26 438 L82 448 L110 358 L132 384 L154 358 L182 448 L238 438 L218 208 L186 232 L154 208 L132 226 L110 208 L78 232Z" fill="#2c1810"/>
    <path d="M110 208 L132 226 L132 310 L118 290 L110 248Z" fill="#3a2418"/>
    <path d="M154 208 L132 226 L132 310 L146 290 L154 248Z" fill="#3a2418"/>
    <path d="M108 208 L132 228 L156 208 L158 196 L132 214 L106 196Z" fill="#f0ece0"/>
    <path d="M126 214 L132 214 L138 214 L136 280 L132 298 L128 280Z" fill="#8b2020"/>
    <path d="M132 250 L126 264 L132 276 L138 264Z" fill="#6b1818"/>
    <path d="M168 238 L180 238 L184 248 L176 244Z" fill="#f0ece0" opacity=".8"/>
    <rect x="10" y="330" width="36" height="52" rx="3" fill="#8b6000" stroke="#a07020" strokeWidth="1"/>
    <rect x="10" y="330" width="6" height="52" rx="2" fill="#6b4800"/>
    <line x1="18" y1="340" x2="42" y2="340" stroke="#a07020" strokeWidth=".8" opacity=".6"/>
    <line x1="18" y1="350" x2="42" y2="350" stroke="#a07020" strokeWidth=".8" opacity=".6"/>
    <line x1="18" y1="360" x2="42" y2="360" stroke="#a07020" strokeWidth=".8" opacity=".6"/>
    <path d="M46 208 L16 368 L44 380 L72 262Z" fill="#2c1810"/>
    <path d="M218 208 L248 368 L220 380 L192 262Z" fill="#2c1810"/>
    <ellipse cx="28" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="236" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    <path d="M82 448 L70 598 L106 598 L132 502 L158 598 L194 598 L182 448Z" fill="#1e1410"/>
    <ellipse cx="88"  cy="596" rx="20" ry="6" fill="#0a0a0a"/>
    <ellipse cx="176" cy="596" rx="20" ry="6" fill="#0a0a0a"/>
    <rect x="82" y="72" width="100" height="14" rx="3" fill="#1a1a1a"/>
    <rect x="82" y="72" width="100" height="6" rx="2" fill="#2a2a2a"/>
    <line x1="192" y1="72" x2="200" y2="110" stroke="#d4a000" strokeWidth="2"/>
    <circle cx="200" cy="114" r="5" fill="#d4a000"/>
    <path d="M82 86 C70 62 72 38 84 26 C92 18 102 22 108 32 C114 18 122 10 132 8 C144 6 150 20 153 32 C160 16 170 10 180 14 C194 22 196 52 188 76 C200 62 214 64 210 90 C210 86 200 94 194 82 C198 98 186 104 176 94 C180 108 158 116 152 102 C144 114 118 112 124 98 C110 110 96 102 100 86 C88 92 78 90 82 86Z" fill="#1a1a1a"/>
    <Face hairColor="#1a1a1a" skinTone="#e8c9a0" glassesColor="#4a3020"/>
  </svg>
);

export const CostumeNinja = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 206 L22 438 L80 448 L110 358 L132 384 L154 358 L184 448 L242 438 L220 206 L188 230 L156 206 L132 224 L108 206 L76 230Z" fill="#0d0d0d"/>
    <path d="M108 206 L132 340 L156 206" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    <path d="M82 256 L182 256" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
    <rect x="80"  y="260" width="22" height="28" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
    <rect x="162" y="260" width="22" height="28" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
    <rect x="70" y="310" width="124" height="22" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
    <g transform="translate(118,320)"><polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#3a3a3a"/></g>
    <g transform="translate(146,320)"><polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5" fill="#3a3a3a"/></g>
    <path d="M44 206 L14 366 L42 378 L70 260Z" fill="#0d0d0d"/>
    <path d="M220 206 L250 366 L222 378 L194 260Z" fill="#0d0d0d"/>
    <ellipse cx="26" cy="382" rx="13" ry="17" fill="#1a1a1a"/>
    <path d="M18 372 Q14 382 16 392" stroke="#2a2a2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M22 368 Q18 380 19 394" stroke="#2a2a2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="238" cy="382" rx="13" ry="17" fill="#1a1a1a"/>
    <path d="M80 448 L68 598 L104 598 L132 500 L160 598 L196 598 L184 448Z" fill="#0d0d0d"/>
    <path d="M72 480 L80 480 L80 540 L72 540" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    <path d="M184 480 L192 480 L192 540 L184 540" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    <path d="M76 96 C56 52 62 14 78 4 C88-4 102 12 108 27 C116 8 124 0 136 0 C148 0 154 12 157 26 C164 8 174 2 184 6 C200 14 202 50 192 76 C208 58 224 60 220 90 C216 104 204 106 198 94 C202 112 190 118 180 108 C186 122 164 130 158 116 C150 128 116 126 122 112 C108 126 94 116 98 100 C84 106 70 100 76 96Z" fill="#0d0d0d"/>
    <rect x="76" y="90" width="112" height="18" rx="4" fill="#1a1a1a"/>
    <rect x="102" y="93" width="60" height="12" rx="2" fill="#0d0d0d" stroke="#8b1a1a" strokeWidth="1"/>
    <rect x="82" y="136" width="100" height="44" rx="8" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="1"/>
    <path d="M82 158 Q132 170 182 158" stroke="#1a1a1a" strokeWidth="1" fill="none"/>
    <ellipse cx="106" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="158" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="106" cy="113" rx="9" ry="11" fill="#8b1a1a"/>
    <ellipse cx="158" cy="113" rx="9" ry="11" fill="#8b1a1a"/>
    <ellipse cx="107" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <ellipse cx="159" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <circle cx="110" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="162" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="106" cy="112" r="18" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
    <circle cx="158" cy="112" r="18" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
    <path d="M124 112 L140 112" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M88 112 C82 107 76 105 70 106" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M176 112 C182 107 188 105 194 106" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M96 95 Q106 90 116 93" stroke="#0d0d0d" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M148 93 Q158 90 168 95" stroke="#0d0d0d" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
  </svg>
);

export const CostumeCasual = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 208 L26 440 L82 450 L110 358 L132 386 L154 358 L182 450 L238 440 L218 208 L186 232 L154 208 L132 226 L110 208 L78 232Z" fill="#1e2530"/>
    <path d="M82 210 C72 196 70 180 80 172 C90 164 110 170 132 168 C154 170 174 164 184 172 C194 180 192 196 182 210Z" fill="#1a2028" stroke="#252d38" strokeWidth="1"/>
    <path d="M96 310 Q132 318 168 310 L170 370 Q132 378 94 370Z" fill="#1a2028" stroke="#252d38" strokeWidth="1"/>
    <path d="M118 172 L114 220" stroke="#2a3040" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M146 172 L150 220" stroke="#2a3040" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="114" cy="222" r="3" fill="#3a4050"/>
    <circle cx="150" cy="222" r="3" fill="#3a4050"/>
    <text x="132" y="278" textAnchor="middle" fill="#2a3040" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="2">HARDIK</text>
    <path d="M108 208 L132 228 L156 208 L158 196 L132 214 L106 196Z" fill="#eee" opacity=".9"/>
    <path d="M46 208 L18 370 L46 382 L72 264Z" fill="#1e2530"/>
    <path d="M218 208 L246 370 L218 382 L192 264Z" fill="#1e2530"/>
    <rect x="14" y="358" width="38" height="24" rx="6" fill="#252d38"/>
    <rect x="212" y="358" width="38" height="24" rx="6" fill="#252d38"/>
    <ellipse cx="30" cy="388" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="234" cy="388" rx="14" ry="18" fill="#e8c9a0"/>
    <path d="M82 450 L70 598 L106 598 L132 500 L158 598 L194 598 L182 450Z" fill="#1e3a5f"/>
    <path d="M106 598 L100 500 L110 480" stroke="#254878" strokeWidth="1" fill="none" opacity=".6"/>
    <path d="M158 598 L164 500 L154 480" stroke="#254878" strokeWidth="1" fill="none" opacity=".6"/>
    <path d="M68 590 Q82 582 110 588 L108 598 L68 598Z" fill="#f0f0f0"/>
    <path d="M70 590 Q90 584 108 590" stroke="#ddd" strokeWidth="1.5" fill="none"/>
    <path d="M156 590 Q170 582 196 588 L196 598 L156 598Z" fill="#f0f0f0"/>
    <path d="M156 590 Q176 584 196 590" stroke="#ddd" strokeWidth="1.5" fill="none"/>
    <path d="M80 96 C62 54 66 16 82 6 C92-2 104 14 110 28 C116 10 126 2 136 0 C148-2 154 12 157 26 C163 8 173 2 184 6 C200 14 202 50 192 76 C206 60 220 62 216 92 C212 106 200 108 194 96 C198 112 186 116 176 106 C180 120 158 128 152 114 C144 126 118 124 124 110 C110 122 96 114 100 98 C86 104 72 98 80 96Z" fill="#1a1a1a"/>
    <rect x="68" y="116" width="5" height="16" rx="2.5" fill="white"/>
    <circle cx="70" cy="114" r="4" fill="white"/>
    <Face hairColor="#1a1a1a" skinTone="#e8c9a0" glassesColor="#1e2530"/>
  </svg>
);

export const CostumeOni = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 206 L18 438 L78 448 L108 356 L132 382 L156 356 L186 448 L246 438 L224 206 L190 230 L158 206 L132 224 L106 206 L74 230Z" fill="#2a0808"/>
    <path d="M56 250 Q70 240 84 250 Q78 268 56 260Z" fill="#4a1010" opacity=".7"/>
    <path d="M180 280 Q194 270 208 280 Q202 298 180 290Z" fill="#4a1010" opacity=".7"/>
    <path d="M86 340 Q100 330 114 340 Q108 358 86 350Z" fill="#4a1010" opacity=".7"/>
    <path d="M74 230 L106 206 L132 224 L158 206 L190 230" stroke="#c8a020" strokeWidth="2" fill="none"/>
    <path d="M40 206 L18 438" stroke="#c8a020" strokeWidth="1.5" fill="none" opacity=".5"/>
    <path d="M224 206 L246 438" stroke="#c8a020" strokeWidth="1.5" fill="none" opacity=".5"/>
    <path d="M106 206 L132 224 L132 310 L118 288 L106 246Z" fill="#1a0404"/>
    <path d="M158 206 L132 224 L132 310 L146 288 L158 246Z" fill="#1a0404"/>
    <path d="M106 206 L132 226 L158 206 L160 194 L132 212 L104 194Z" fill="#f5f0e0"/>
    <rect x="68" y="308" width="128" height="30" rx="4" fill="#c8a020"/>
    <rect x="118" y="311" width="28" height="24" rx="3" fill="#8b6e00"/>
    <ellipse cx="132" cy="323" rx="12" ry="11" fill="#cc2222"/>
    <ellipse cx="128" cy="320" rx="3" ry="4" fill="#1a0a0a"/>
    <ellipse cx="136" cy="320" rx="3" ry="4" fill="#1a0a0a"/>
    <path d="M125 328 Q132 332 139 328" stroke="#1a0a0a" strokeWidth="1.5" fill="none"/>
    <path d="M40 206 L10 368 L38 380 L68 260Z" fill="#2a0808"/>
    <path d="M224 206 L254 368 L226 380 L196 260Z" fill="#2a0808"/>
    <rect x="10" y="355" width="36" height="22" rx="5" fill="#c8a020"/>
    <rect x="218" y="355" width="36" height="22" rx="5" fill="#c8a020"/>
    <ellipse cx="26" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="238" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    <path d="M78 448 L66 598 L104 598 L132 500 L160 598 L198 598 L186 448Z" fill="#1a0404"/>
    <path d="M96 82 C88 62 92 40 100 28 C106 36 106 58 104 80" fill="#cc2222" stroke="#8b1010" strokeWidth="1"/>
    <path d="M168 82 C176 62 172 40 164 28 C158 36 158 58 160 80" fill="#cc2222" stroke="#8b1010" strokeWidth="1"/>
    <path d="M80 98 C62 56 66 18 82 8 C92 0 104 16 110 30 C116 12 126 4 136 2 C148 0 154 14 157 28 C163 10 173 4 184 8 C200 16 202 52 192 78 C204 62 218 64 216 94 C212 108 200 110 194 98 C198 114 186 118 176 108 C180 122 158 130 152 116 C144 128 118 126 124 112 C110 124 96 116 100 100 C86 106 72 100 80 98Z" fill="#1a0808"/>
    <Face hairColor="#1a0808" skinTone="#e8c9a0" glassesColor="#8b1a1a"/>
    <path d="M86 128 Q96 118 106 126" stroke="#cc2222" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".6"/>
    <path d="M158 126 Q168 118 178 128" stroke="#cc2222" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".6"/>
  </svg>
);
