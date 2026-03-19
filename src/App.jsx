import React, { useEffect, useRef, useState } from 'react';
import './index.css';

/* ══════════════════════════════════════════════════════════════
   ANIME CHARACTER — 7 distinct detailed costume variants
   Each is a full SVG with proper face, hair, outfit details
══════════════════════════════════════════════════════════════ */

/* Shared face/head component — used across all costumes */
const Face = ({ hairColor = '#1a1a1a', skinTone = '#e8c9a0', glassesColor = '#3a3a3a', hairStyle = 'default' }) => (
  <>
    {/* Neck */}
    <rect x="118" y="168" width="28" height="32" rx="4" fill={skinTone} />
    {/* Head base */}
    <ellipse cx="132" cy="118" rx="54" ry="58" fill={skinTone} />
    {/* Ears */}
    <ellipse cx="80"  cy="120" rx="8" ry="11" fill={skinTone} />
    <ellipse cx="184" cy="120" rx="8" ry="11" fill={skinTone} />
    <ellipse cx="80"  cy="120" rx="5" ry="7.5" fill="#d4a880" />
    <ellipse cx="184" cy="120" rx="5" ry="7.5" fill="#d4a880" />

    {/* Eyebrows */}
    <path d="M96 95 Q106 90 116 93" stroke={hairColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M148 93 Q158 90 168 95" stroke={hairColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>

    {/* Eyes — whites */}
    <ellipse cx="106" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="158" cy="112" rx="16" ry="14" fill="white"/>
    {/* Iris */}
    <ellipse cx="106" cy="113" rx="9" ry="11" fill="#1a3a5c"/>
    <ellipse cx="158" cy="113" rx="9" ry="11" fill="#1a3a5c"/>
    {/* Pupils */}
    <ellipse cx="107" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <ellipse cx="159" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    {/* Eye shine */}
    <circle cx="110" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="162" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="103" cy="116" r="1.2" fill="white" opacity=".5"/>

    {/* Glasses */}
    <circle cx="106" cy="112" r="18" fill="none" stroke={glassesColor} strokeWidth="2.5"/>
    <circle cx="158" cy="112" r="18" fill="none" stroke={glassesColor} strokeWidth="2.5"/>
    <path d="M124 112 L140 112" stroke={glassesColor} strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M88 112 C82 107 76 105 70 106" stroke={glassesColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M176 112 C182 107 188 105 194 106" stroke={glassesColor} strokeWidth="2.2" fill="none" strokeLinecap="round"/>

    {/* Nose */}
    <path d="M126 132 Q132 140 138 132" stroke="#c4956a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* Nostrils */}
    <circle cx="128" cy="135" r="1.8" fill="#c4956a" opacity=".6"/>
    <circle cx="136" cy="135" r="1.8" fill="#c4956a" opacity=".6"/>

    {/* Mouth */}
    <path d="M118 150 Q132 158 146 150" stroke="#c07858" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M122 150 Q132 153 142 150" stroke="#e8956e" strokeWidth="1" fill="none" strokeLinecap="round" opacity=".6"/>

    {/* Cheek blush */}
    <ellipse cx="88"  cy="136" rx="10" ry="6" fill="#ffb4a0" opacity=".25"/>
    <ellipse cx="176" cy="136" rx="10" ry="6" fill="#ffb4a0" opacity=".25"/>
  </>
);

/* ── COSTUME 0: Classic Kimono (dark, base) ── */
const CostumeKimono = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Body / Kimono */}
    <path d="M42 210 L22 440 L80 450 L110 360 L132 388 L154 360 L184 450 L242 440 L222 210 L188 234 L156 210 L132 228 L108 210 L76 234Z" fill="#1a1a1a"/>
    {/* Kimono inner fold left */}
    <path d="M132 228 L108 278 L124 330 L132 312Z" fill="#2a2a2a"/>
    <path d="M132 228 L156 278 L140 330 L132 312Z" fill="#2a2a2a"/>
    {/* Collar */}
    <path d="M108 210 L132 228 L156 210 L160 200 L132 218 L104 200Z" fill="#f5f0e8"/>
    {/* Obi sash */}
    <rect x="70" y="310" width="124" height="28" rx="4" fill="#2d2d2d" stroke="#3a3a3a" strokeWidth="1"/>
    <rect x="118" y="312" width="28" height="24" rx="3" fill="#1a1a1a" stroke="#444" strokeWidth="1"/>
    {/* Left arm */}
    <path d="M42 210 L12 370 L40 382 L70 260Z" fill="#1a1a1a"/>
    {/* Right arm */}
    <path d="M222 210 L252 370 L224 382 L194 260Z" fill="#1a1a1a"/>
    {/* Hands */}
    <ellipse cx="25" cy="386" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="239" cy="386" rx="14" ry="18" fill="#e8c9a0"/>
    {/* Fingers L */}
    <path d="M16 378 Q11 370 14 364" stroke="#e8c9a0" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M20 374 Q16 365 18 358" stroke="#e8c9a0" strokeWidth="4" strokeLinecap="round" fill="none"/>
    {/* Legs */}
    <path d="M80 450 L68 598 L104 598 L132 500 L160 598 L196 598 L184 450Z" fill="#111"/>
    {/* Mon crest */}
    <circle cx="132" cy="420" r="20" fill="#111" stroke="#2a2a2a" strokeWidth="1.5"/>
    <path d="M132 406 l4 10 h11 l-9 6.5 3.4 10.5-9.4-6.8-9.4 6.8 3.4-10.5-9-6.5h11Z" fill="#2a2a2a"/>
    {/* Hair */}
    <path d="M82 98 C66 55 70 18 85 8 C96 0 106 16 112 30 C118 12 126 4 136 2 C148 0 154 14 156 28 C162 10 172 3 182 8 C198 16 200 52 190 78 C204 62 218 64 214 94 C210 108 198 108 192 96 C198 112 186 118 174 108 C180 122 158 128 152 114 C144 126 120 124 126 110 C112 124 98 114 102 100 C88 106 78 96 82 98Z" fill="#1a1a1a"/>
    <Face/>
    {/* Hair highlights */}
    <path d="M110 20 Q120 10 136 8" stroke="#3a3a3a" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".7"/>
    <path d="M86 40 Q80 60 84 80" stroke="#3a3a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5"/>
  </svg>
);

/* ── COSTUME 1: Samurai Armor (red/dark) ── */
const CostumeSamurai = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Chest armor - do-maru */}
    <path d="M36 205 L18 430 L80 442 L108 355 L132 380 L156 355 L184 442 L246 430 L228 205 L190 228 L160 205 L132 222 L104 205 L74 228Z" fill="#1a0a0a"/>
    {/* Armor plates - shoulder guards */}
    <path d="M36 205 L20 255 L60 262 L74 228Z" fill="#8b1a1a"/>
    <path d="M228 205 L244 255 L204 262 L190 228Z" fill="#8b1a1a"/>
    {/* Chest plate detail */}
    <rect x="82" y="215" width="100" height="90" rx="5" fill="#2a0808" stroke="#8b1a1a" strokeWidth="1.5"/>
    <path d="M92 225 L172 225 L172 295 L92 295Z" fill="#350a0a" stroke="#6b1414" strokeWidth="1"/>
    {/* Chest pattern lines */}
    {[0,1,2,3,4].map(i=><line key={i} x1="92" y1={235+i*12} x2="172" y2={235+i*12} stroke="#6b1414" strokeWidth=".8" opacity=".7"/>)}
    {/* Tassets (skirt armor) */}
    {[-2,-1,0,1,2].map(i=>(
      <rect key={i} x={82+i*18} y="305" width="16" height="45" rx="3" fill="#8b1a1a" stroke="#b22222" strokeWidth="1" transform={`rotate(${i*2} ${90+i*18} 327}`}/>
    ))}
    {/* Arm guards */}
    <path d="M36 205 L8 360 L38 372 L68 255Z" fill="#1a0a0a"/>
    <path d="M228 205 L256 360 L226 372 L196 255Z" fill="#1a0a0a"/>
    <rect x="8" y="280" width="36" height="55" rx="4" fill="#8b1a1a" stroke="#b22222" strokeWidth="1"/>
    <rect x="220" y="280" width="36" height="55" rx="4" fill="#8b1a1a" stroke="#b22222" strokeWidth="1"/>
    {/* Hands */}
    <ellipse cx="22" cy="376" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="242" cy="376" rx="14" ry="18" fill="#e8c9a0"/>
    {/* Katana in right hand */}
    <rect x="244" y="220" width="4" height="200" rx="2" fill="#8a7a6a" transform="rotate(15 246 320)"/>
    <rect x="243" y="216" width="6" height="12" rx="2" fill="#c8a020"/>
    {/* Legs with greaves */}
    <path d="M80 442 L66 598 L104 598 L132 498 L160 598 L198 598 L184 442Z" fill="#1a0a0a"/>
    <rect x="72" y="460" width="48" height="80" rx="5" fill="#2a0808" stroke="#8b1a1a" strokeWidth="1.2"/>
    <rect x="144" y="460" width="48" height="80" rx="5" fill="#2a0808" stroke="#8b1a1a" strokeWidth="1.2"/>
    {/* Helmet kabuto */}
    <path d="M70 90 C62 55 66 18 82 8 C92 0 103 14 109 27 C116 10 124 2 134 0 C146-2 152 13 155 26 C162 8 172 2 182 7 C198 15 200 50 190 76 C208 58 222 62 218 90 C214 106 202 108 196 96 C200 114 186 118 176 108 C180 122 160 128 153 114 C146 126 118 124 124 110 C110 124 96 114 100 100 C86 106 72 100 70 90Z" fill="#1a0a0a"/>
    {/* Kabuto horn decorations */}
    <path d="M132 10 C128 0 118-10 112-18 C116-6 118 6 120 14" stroke="#8b1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M132 10 C136 0 146-10 152-18 C148-6 146 6 144 14" stroke="#8b1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
    {/* Maedate crest */}
    <path d="M132 4 L138 22 L132 18 L126 22Z" fill="#c8a020"/>
    <Face hairColor="#1a0a0a" glassesColor="#6b1414"/>
  </svg>
);

/* ── COSTUME 2: Cyberpunk Tech (blue/neon) ── */
const CostumeCyber = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Main jacket */}
    <path d="M44 208 L24 438 L82 448 L110 358 L132 384 L154 358 L182 448 L240 438 L220 208 L186 232 L156 208 L132 226 L108 208 L78 232Z" fill="#0a0e1a"/>
    {/* Jacket panels with neon trim */}
    <path d="M78 232 L108 208 L132 226 L110 290Z" fill="#0e1428"/>
    <path d="M186 232 L156 208 L132 226 L154 290Z" fill="#0e1428"/>
    {/* Neon circuit lines */}
    <path d="M82 240 L82 350 L170 350 L170 240" stroke="#00d4ff" strokeWidth="1.2" fill="none" opacity=".6"/>
    <path d="M95 260 L120 260 L120 280 L150 280" stroke="#00d4ff" strokeWidth=".8" fill="none" opacity=".5"/>
    <path d="M95 300 L140 300 L140 320" stroke="#7000ff" strokeWidth=".8" fill="none" opacity=".5"/>
    {/* Chest emblem */}
    <rect x="112" y="248" width="40" height="40" rx="4" fill="#0a0e1a" stroke="#00d4ff" strokeWidth="1.5"/>
    <text x="132" y="272" textAnchor="middle" fill="#00d4ff" fontSize="14" fontFamily="monospace" fontWeight="bold">HC</text>
    {/* Collar tech */}
    <path d="M100 208 L132 226 L164 208 L168 196 L132 216 L96 196Z" fill="#1a2040" stroke="#00d4ff" strokeWidth="1"/>
    {/* Shoulder tech pads */}
    <rect x="24" y="208" width="52" height="28" rx="6" fill="#0e1428" stroke="#00d4ff" strokeWidth="1.2"/>
    <rect x="188" y="208" width="52" height="28" rx="6" fill="#0e1428" stroke="#00d4ff" strokeWidth="1.2"/>
    {/* Belt with glowing buckle */}
    <rect x="70" y="308" width="124" height="20" rx="4" fill="#0e1428" stroke="#7000ff" strokeWidth="1.2"/>
    <rect x="122" y="310" width="20" height="16" rx="3" fill="#0a0e1a" stroke="#00d4ff" strokeWidth="1.5"/>
    {/* Arms */}
    <path d="M44 208 L16 368 L44 380 L72 262Z" fill="#0a0e1a"/>
    <path d="M220 208 L248 368 L220 380 L192 262Z" fill="#0a0e1a"/>
    {/* Arm circuit details */}
    <path d="M20 280 Q26 300 20 320" stroke="#00d4ff" strokeWidth=".8" fill="none" opacity=".5"/>
    <path d="M244 280 Q238 300 244 320" stroke="#7000ff" strokeWidth=".8" fill="none" opacity=".5"/>
    {/* Gloved hands */}
    <ellipse cx="28" cy="384" rx="14" ry="18" fill="#0e1428"/>
    <ellipse cx="236" cy="384" rx="14" ry="18" fill="#0e1428"/>
    {/* Legs */}
    <path d="M82 448 L70 598 L106 598 L132 502 L158 598 L194 598 L182 448Z" fill="#0a0e1a"/>
    {/* Knee light */}
    <circle cx="86"  cy="510" r="5" fill="#00d4ff" opacity=".8"/>
    <circle cx="178" cy="510" r="5" fill="#7000ff" opacity=".8"/>
    {/* Hair — styled/undercut */}
    <path d="M78 94 C60 52 64 16 80 6 C92-2 104 14 110 28 C116 10 126 2 136 0 C148-2 154 12 157 26 C163 8 173 2 184 6 C200 14 202 50 192 76 C206 60 220 62 216 92 C212 106 200 108 194 96 C198 112 186 116 176 106 C180 120 158 128 152 114 C144 126 118 124 124 110 C110 122 96 114 100 98 C86 104 72 98 78 94Z" fill="#0d0d1a"/>
    {/* Neon hair streaks */}
    <path d="M90 30 Q86 60 84 90" stroke="#00d4ff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".6"/>
    <path d="M170 30 Q174 60 176 88" stroke="#7000ff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".6"/>
    <Face hairColor="#0d0d1a" skinTone="#e8c9a0" glassesColor="#00a0cc"/>
    {/* Cyber glasses lens tint */}
    <circle cx="106" cy="112" r="17" fill="#00d4ff" opacity=".08"/>
    <circle cx="158" cy="112" r="17" fill="#7000ff" opacity=".08"/>
  </svg>
);

/* ── COSTUME 3: Scholar/Academic (warm brown) ── */
const CostumeScholar = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Blazer */}
    <path d="M46 208 L26 438 L82 448 L110 358 L132 384 L154 358 L182 448 L238 438 L218 208 L186 232 L154 208 L132 226 L110 208 L78 232Z" fill="#2c1810"/>
    {/* Lapels */}
    <path d="M110 208 L132 226 L132 310 L118 290 L110 248Z" fill="#3a2418"/>
    <path d="M154 208 L132 226 L132 310 L146 290 L154 248Z" fill="#3a2418"/>
    {/* Shirt collar */}
    <path d="M108 208 L132 228 L156 208 L158 196 L132 214 L106 196Z" fill="#f0ece0"/>
    {/* Tie */}
    <path d="M126 214 L132 214 L138 214 L136 280 L132 298 L128 280Z" fill="#8b2020"/>
    <path d="M132 250 L126 264 L132 276 L138 264Z" fill="#6b1818"/>
    {/* Pocket square */}
    <path d="M168 238 L180 238 L184 248 L176 244Z" fill="#f0ece0" opacity=".8"/>
    {/* Book under left arm */}
    <rect x="10" y="330" width="36" height="52" rx="3" fill="#8b6000" stroke="#a07020" strokeWidth="1"/>
    <rect x="10" y="330" width="6" height="52" rx="2" fill="#6b4800"/>
    <line x1="18" y1="340" x2="42" y2="340" stroke="#a07020" strokeWidth=".8" opacity=".6"/>
    <line x1="18" y1="350" x2="42" y2="350" stroke="#a07020" strokeWidth=".8" opacity=".6"/>
    <line x1="18" y1="360" x2="42" y2="360" stroke="#a07020" strokeWidth=".8" opacity=".6"/>
    {/* Arms */}
    <path d="M46 208 L16 368 L44 380 L72 262Z" fill="#2c1810"/>
    <path d="M218 208 L248 368 L220 380 L192 262Z" fill="#2c1810"/>
    {/* Hands */}
    <ellipse cx="28" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="236" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    {/* Trousers */}
    <path d="M82 448 L70 598 L106 598 L132 502 L158 598 L194 598 L182 448Z" fill="#1e1410"/>
    {/* Shoes */}
    <ellipse cx="88"  cy="596" rx="20" ry="6" fill="#0a0a0a"/>
    <ellipse cx="176" cy="596" rx="20" ry="6" fill="#0a0a0a"/>
    {/* Academic cap mortarboard */}
    <rect x="82" y="72" width="100" height="14" rx="3" fill="#1a1a1a"/>
    <rect x="82" y="72" width="100" height="6" rx="2" fill="#2a2a2a"/>
    {/* Cap tassel */}
    <line x1="192" y1="72" x2="200" y2="110" stroke="#d4a000" strokeWidth="2"/>
    <circle cx="200" cy="114" r="5" fill="#d4a000"/>
    {/* Hair under cap */}
    <path d="M82 86 C70 62 72 38 84 26 C92 18 102 22 108 32 C114 18 122 10 132 8 C144 6 150 20 153 32 C160 16 170 10 180 14 C194 22 196 52 188 76 C200 62 214 64 210 90 C210 86 200 94 194 82 C198 98 186 104 176 94 C180 108 158 116 152 102 C144 114 118 112 124 98 C110 110 96 102 100 86 C88 92 78 90 82 86Z" fill="#1a1a1a"/>
    <Face hairColor="#1a1a1a" skinTone="#e8c9a0" glassesColor="#4a3020"/>
  </svg>
);

/* ── COSTUME 4: Ninja/Shinobi (all black, red mask) ── */
const CostumeNinja = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Body suit */}
    <path d="M44 206 L22 438 L80 448 L110 358 L132 384 L154 358 L184 448 L242 438 L220 206 L188 230 L156 206 L132 224 L108 206 L76 230Z" fill="#0d0d0d"/>
    {/* Chest harness straps */}
    <path d="M108 206 L132 340 L156 206" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    <path d="M82 256 L182 256" stroke="#1a1a1a" strokeWidth="2.5" fill="none"/>
    {/* Weapon pouches */}
    <rect x="80"  y="260" width="22" height="28" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
    <rect x="162" y="260" width="22" height="28" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Belt with shuriken/kunai */}
    <rect x="70" y="310" width="124" height="22" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
    {/* Shuriken on belt */}
    <g transform="translate(118,320)">
      <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#3a3a3a"/>
    </g>
    <g transform="translate(146,320)">
      <polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5" fill="#3a3a3a"/>
    </g>
    {/* Arms */}
    <path d="M44 206 L14 366 L42 378 L70 260Z" fill="#0d0d0d"/>
    <path d="M220 206 L250 366 L222 378 L194 260Z" fill="#0d0d0d"/>
    {/* Wrapped hands */}
    <ellipse cx="26" cy="382" rx="13" ry="17" fill="#1a1a1a"/>
    <path d="M18 372 Q14 382 16 392" stroke="#2a2a2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M22 368 Q18 380 19 394" stroke="#2a2a2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="238" cy="382" rx="13" ry="17" fill="#1a1a1a"/>
    {/* Legs */}
    <path d="M80 448 L68 598 L104 598 L132 500 L160 598 L196 598 L184 448Z" fill="#0d0d0d"/>
    {/* Shin wrappings */}
    <path d="M72 480 L80 480 L80 540 L72 540" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    <path d="M184 480 L192 480 L192 540 L184 540" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    {/* Hair — wild/spiked */}
    <path d="M76 96 C56 52 62 14 78 4 C88-4 102 12 108 27 C116 8 124 0 136 0 C148 0 154 12 157 26 C164 8 174 2 184 6 C200 14 202 50 192 76 C208 58 224 60 220 90 C216 104 204 106 198 94 C202 112 190 118 180 108 C186 122 164 130 158 116 C150 128 116 126 122 112 C108 126 94 116 98 100 C84 106 70 100 76 96Z" fill="#0d0d0d"/>
    {/* Forehead protector */}
    <rect x="76" y="90" width="112" height="18" rx="4" fill="#1a1a1a"/>
    <rect x="102" y="93" width="60" height="12" rx="2" fill="#0d0d0d" stroke="#8b1a1a" strokeWidth="1"/>
    {/* Mask covering lower face */}
    <rect x="82" y="136" width="100" height="44" rx="8" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="1"/>
    <path d="M82 158 Q132 170 182 158" stroke="#1a1a1a" strokeWidth="1" fill="none"/>
    {/* Eyes only visible */}
    <ellipse cx="106" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="158" cy="112" rx="16" ry="14" fill="white"/>
    <ellipse cx="106" cy="113" rx="9" ry="11" fill="#8b1a1a"/>
    <ellipse cx="158" cy="113" rx="9" ry="11" fill="#8b1a1a"/>
    <ellipse cx="107" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <ellipse cx="159" cy="114" rx="5" ry="7" fill="#0a0a0a"/>
    <circle cx="110" cy="110" r="2.5" fill="white" opacity=".9"/>
    <circle cx="162" cy="110" r="2.5" fill="white" opacity=".9"/>
    {/* Glasses over mask */}
    <circle cx="106" cy="112" r="18" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
    <circle cx="158" cy="112" r="18" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
    <path d="M124 112 L140 112" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M88 112 C82 107 76 105 70 106" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M176 112 C182 107 188 105 194 106" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    {/* Eyebrows */}
    <path d="M96 95 Q106 90 116 93" stroke="#0d0d0d" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M148 93 Q158 90 168 95" stroke="#0d0d0d" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
  </svg>
);

/* ── COSTUME 5: Street/Casual Hoodie ── */
const CostumeCasual = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Hoodie body */}
    <path d="M46 208 L26 440 L82 450 L110 358 L132 386 L154 358 L182 450 L238 440 L218 208 L186 232 L154 208 L132 226 L110 208 L78 232Z" fill="#1e2530"/>
    {/* Hood down */}
    <path d="M82 210 C72 196 70 180 80 172 C90 164 110 170 132 168 C154 170 174 164 184 172 C194 180 192 196 182 210Z" fill="#1a2028" stroke="#252d38" strokeWidth="1"/>
    {/* Hoodie front pocket */}
    <path d="M96 310 Q132 318 168 310 L170 370 Q132 378 94 370Z" fill="#1a2028" stroke="#252d38" strokeWidth="1"/>
    {/* Drawstrings */}
    <path d="M118 172 L114 220" stroke="#2a3040" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M146 172 L150 220" stroke="#2a3040" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="114" cy="222" r="3" fill="#3a4050"/>
    <circle cx="150" cy="222" r="3" fill="#3a4050"/>
    {/* Brand text on chest */}
    <text x="132" y="278" textAnchor="middle" fill="#2a3040" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="2">HARDIK</text>
    {/* Collar - turtleneck underneath */}
    <path d="M108 208 L132 228 L156 208 L158 196 L132 214 L106 196Z" fill="#eee" opacity=".9"/>
    {/* Arms with cuffs */}
    <path d="M46 208 L18 370 L46 382 L72 264Z" fill="#1e2530"/>
    <path d="M218 208 L246 370 L218 382 L192 264Z" fill="#1e2530"/>
    {/* Cuffs */}
    <rect x="14" y="358" width="38" height="24" rx="6" fill="#252d38"/>
    <rect x="212" y="358" width="38" height="24" rx="6" fill="#252d38"/>
    {/* Hands */}
    <ellipse cx="30" cy="388" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="234" cy="388" rx="14" ry="18" fill="#e8c9a0"/>
    {/* Jeans */}
    <path d="M82 450 L70 598 L106 598 L132 500 L158 598 L194 598 L182 450Z" fill="#1e3a5f"/>
    {/* Jeans stitching */}
    <path d="M106 598 L100 500 L110 480" stroke="#254878" strokeWidth="1" fill="none" opacity=".6"/>
    <path d="M158 598 L164 500 L154 480" stroke="#254878" strokeWidth="1" fill="none" opacity=".6"/>
    {/* Sneakers */}
    <path d="M68 590 Q82 582 110 588 L108 598 L68 598Z" fill="#f0f0f0"/>
    <path d="M70 590 Q90 584 108 590" stroke="#ddd" strokeWidth="1.5" fill="none"/>
    <path d="M156 590 Q170 582 196 588 L196 598 L156 598Z" fill="#f0f0f0"/>
    <path d="M156 590 Q176 584 196 590" stroke="#ddd" strokeWidth="1.5" fill="none"/>
    {/* Hair */}
    <path d="M80 96 C62 54 66 16 82 6 C92-2 104 14 110 28 C116 10 126 2 136 0 C148-2 154 12 157 26 C163 8 173 2 184 6 C200 14 202 50 192 76 C206 60 220 62 216 92 C212 106 200 108 194 96 C198 112 186 116 176 106 C180 120 158 128 152 114 C144 126 118 124 124 110 C110 122 96 114 100 98 C86 104 72 98 80 96Z" fill="#1a1a1a"/>
    {/* AirPods */}
    <rect x="68" y="116" width="5" height="16" rx="2.5" fill="white"/>
    <circle cx="70" cy="114" r="4" fill="white"/>
    <Face hairColor="#1a1a1a" skinTone="#e8c9a0" glassesColor="#1e2530"/>
  </svg>
);

/* ── COSTUME 6: Oni Warrior (demonic red/gold) ── */
const CostumeOni = () => (
  <svg viewBox="0 0 264 600" className="char-svg" xmlns="http://www.w3.org/2000/svg">
    {/* Haori jacket */}
    <path d="M40 206 L18 438 L78 448 L108 356 L132 382 L156 356 L186 448 L246 438 L224 206 L190 230 L158 206 L132 224 L106 206 L74 230Z" fill="#2a0808"/>
    {/* Haori pattern — demon cloud motif */}
    <path d="M56 250 Q70 240 84 250 Q78 268 56 260Z" fill="#4a1010" opacity=".7"/>
    <path d="M180 280 Q194 270 208 280 Q202 298 180 290Z" fill="#4a1010" opacity=".7"/>
    <path d="M86 340 Q100 330 114 340 Q108 358 86 350Z" fill="#4a1010" opacity=".7"/>
    {/* Gold trim */}
    <path d="M74 230 L106 206 L132 224 L158 206 L190 230" stroke="#c8a020" strokeWidth="2" fill="none"/>
    <path d="M40 206 L18 438" stroke="#c8a020" strokeWidth="1.5" fill="none" opacity=".5"/>
    <path d="M224 206 L246 438" stroke="#c8a020" strokeWidth="1.5" fill="none" opacity=".5"/>
    {/* Inner kimono layer */}
    <path d="M106 206 L132 224 L132 310 L118 288 L106 246Z" fill="#1a0404"/>
    <path d="M158 206 L132 224 L132 310 L146 288 L158 246Z" fill="#1a0404"/>
    {/* White collar */}
    <path d="M106 206 L132 226 L158 206 L160 194 L132 212 L104 194Z" fill="#f5f0e0"/>
    {/* Belt/Obi */}
    <rect x="68" y="308" width="128" height="30" rx="4" fill="#c8a020"/>
    <rect x="118" y="311" width="28" height="24" rx="3" fill="#8b6e00"/>
    {/* Oni mask on belt */}
    <ellipse cx="132" cy="323" rx="12" ry="11" fill="#cc2222"/>
    <ellipse cx="128" cy="320" rx="3" ry="4" fill="#1a0a0a"/>
    <ellipse cx="136" cy="320" rx="3" ry="4" fill="#1a0a0a"/>
    <path d="M125 328 Q132 332 139 328" stroke="#1a0a0a" strokeWidth="1.5" fill="none"/>
    {/* Arms */}
    <path d="M40 206 L10 368 L38 380 L68 260Z" fill="#2a0808"/>
    <path d="M224 206 L254 368 L226 380 L196 260Z" fill="#2a0808"/>
    {/* Arm gold cuffs */}
    <rect x="10" y="355" width="36" height="22" rx="5" fill="#c8a020"/>
    <rect x="218" y="355" width="36" height="22" rx="5" fill="#c8a020"/>
    {/* Hands */}
    <ellipse cx="26" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    <ellipse cx="238" cy="384" rx="14" ry="18" fill="#e8c9a0"/>
    {/* Legs */}
    <path d="M78 448 L66 598 L104 598 L132 500 L160 598 L198 598 L186 448Z" fill="#1a0404"/>
    {/* Oni horns on head */}
    <path d="M96 82 C88 62 92 40 100 28 C106 36 106 58 104 80" fill="#cc2222" stroke="#8b1010" strokeWidth="1"/>
    <path d="M168 82 C176 62 172 40 164 28 C158 36 158 58 160 80" fill="#cc2222" stroke="#8b1010" strokeWidth="1"/>
    {/* Hair */}
    <path d="M80 98 C62 56 66 18 82 8 C92 0 104 16 110 30 C116 12 126 4 136 2 C148 0 154 14 157 28 C163 10 173 4 184 8 C200 16 202 52 192 78 C206 62 220 64 216 94 C212 108 200 110 194 98 C198 114 186 118 176 108 C180 122 158 130 152 116 C144 128 118 126 124 112 C110 124 96 116 100 100 C86 106 72 100 80 98Z" fill="#1a0808"/>
    <Face hairColor="#1a0808" skinTone="#e8c9a0" glassesColor="#8b1a1a"/>
    {/* Oni war paint */}
    <path d="M86 128 Q96 118 106 126" stroke="#cc2222" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".6"/>
    <path d="M158 126 Q168 118 178 128" stroke="#cc2222" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".6"/>
  </svg>
);

const COSTUMES = [
  { el: <CostumeKimono/>,  label: 'Classic Kimono',  color: '#1a1a1a' },
  { el: <CostumeSamurai/>, label: 'Samurai Armor',   color: '#8b1a1a' },
  { el: <CostumeCyber/>,   label: 'Cyberpunk',       color: '#00d4ff' },
  { el: <CostumeScholar/>, label: 'Scholar',         color: '#8b6000' },
  { el: <CostumeNinja/>,   label: 'Ninja',           color: '#0d0d0d' },
  { el: <CostumeCasual/>,  label: 'Streetwear',      color: '#1e2530' },
  { el: <CostumeOni/>,     label: 'Oni Warrior',     color: '#cc2222' },
];

/* ─── CONSTELLATION ────────────────────────────────────── */
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

/* ─── TYPEWRITER ───────────────────────────────────────── */
const TW = ({ words }) => {
  const [t, setT] = useState(''); const [wi, setWi] = useState(0); const [ci, setCi] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    const id = setTimeout(() => {
      if (!del) { setT(w.slice(0, ci + 1)); if (ci + 1 === w.length) setTimeout(() => setDel(true), 1700); else setCi(c => c + 1); }
      else { setT(w.slice(0, ci - 1)); if (ci - 1 === 0) { setDel(false); setWi(x => (x + 1) % words.length); setCi(0); } else setCi(c => c - 1); }
    }, del ? 38 : 78);
    return () => clearTimeout(id);
  }, [ci, del, wi]);
  return <span>{t}<span className="caret">|</span></span>;
};

/* ─── SCROLL PROGRESS ──────────────────────────────────── */
const Spb = () => {
  useEffect(() => {
    const bar = document.querySelector('.spb');
    window.addEventListener('scroll', () => { const h = document.documentElement; if (bar) bar.style.width = `${h.scrollTop / (h.scrollHeight - h.clientHeight) * 100}%`; }, { passive: true });
  }, []);
  return <div className="spb" />;
};

/* ─── CUSTOM CURSOR ────────────────────────────────────── */
const Cursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cd'); const ring = document.querySelector('.cr');
    let rx = 0, ry = 0, mx = window.innerWidth / 2, my = window.innerHeight / 2;
    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    const raf = () => { rx += (mx - rx) * .12; ry += (my - ry) * .12; if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; } if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; } requestAnimationFrame(raf); };
    raf();
    document.querySelectorAll('a,button,.pcard,.scard').forEach(el => {
      el.addEventListener('mouseenter', () => ring?.classList.add('big'));
      el.addEventListener('mouseleave', () => ring?.classList.remove('big'));
    });
  }, []);
  return <><div className="cd" /><div className="cr" /></>;
};

/* ─── NAV ──────────────────────────────────────────────── */
const Nav = () => {
  const [on, setOn] = useState(false); const [act, setAct] = useState('home'); const [mob, setMob] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOn(window.scrollY > 30);
      const ids = ['home','about','project','services','contact'];
      [...ids].reverse().some(id => { const el = document.getElementById(id); if (el && window.scrollY >= el.offsetTop - 130) { setAct(id); return true; } return false; });
    }, { passive: true });
  }, []);
  const go = id => { setMob(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <nav className={`nav${on ? ' nav-on' : ''}`}>
      <div className="npill">
        <button className="nlogo ni0" onClick={() => go('home')}><span className="nd">a</span>mine</button>
        <ul className="nlinks ni1">
          {['home','about','project','services','contact'].map((l,i) => (
            <li key={l} style={{animationDelay:`${.08+i*.06}s`}}>
              <button className={`nl${act===l?' nl-on':''}`} onClick={()=>go(l)}>{l[0].toUpperCase()+l.slice(1)}</button>
            </li>
          ))}
        </ul>
        <div className="nicons ni2">
          {[
            ['https://github.com/Har-dik25',<svg key="g" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>],
            ['https://instagram.com',<svg key="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>],
            ['https://www.linkedin.com/in/hardik8/',<svg key="l" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>],
          ].map(([h,s])=><a key={h} href={h} className="nico" target="_blank" rel="noopener noreferrer">{s}</a>)}
        </div>
        <button className="nbur ni3" onClick={()=>setMob(o=>!o)}><span className={mob?'x':''}/><span className={mob?'x':''}/></button>
      </div>
      {mob&&<div className="nmob">{['home','about','project','services','contact'].map(l=><button key={l} className="nmlink" onClick={()=>go(l)}>{l[0].toUpperCase()+l.slice(1)}</button>)}</div>}
    </nav>
  );
};

/* ─── HERO ─────────────────────────────────────────────── */
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
    window.addEventListener('scroll', () => {
      const el = document.querySelector('.char-stage');
      if (el) el.style.transform = `translateX(-50%) translateY(${window.scrollY * .14}px)`;
    }, { passive: true });
  }, []);

  const roles = ['Software Engineer','ML Engineer','Data Scientist','Full-Stack Developer','Problem Solver'];
  const costume = COSTUMES[ci];

  return (
    <section id="home" className="hero">
      <Stars />

      {/* Giant faint text — overflows right */}
      <h1 className="hbg ha1">Hi! I'm Hardik</h1>

      {/* Character stage */}
      <div className={`char-stage ha2${out ? ' char-out' : ''}`}>
        <div className="char-glow" style={{ background: `radial-gradient(ellipse,${costume.color}44 0%,transparent 65%)` }} />
        {costume.el}
        {/* Costume label */}
        <div className="char-lbl ha5">
          <span className="clbl-dot" style={{ background: costume.color }} />
          <span>{costume.label}</span>
        </div>
      </div>

      {/* Left text block */}
      <div className="hleft ha3">
        <p className="hhello">Hey there 👋</p>
        <p className="hrole">I'm a <TW words={roles} /></p>
        <p className="hsub">Building scalable systems &amp; intelligent ML pipelines that turn raw data into real-world impact.</p>
      </div>

      {/* Buttons */}
      <div className="hbtns ha4">
        <button className="hbtn hbf" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Contact</button>
        <button className="hbtn hbo" onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>Who i'm</button>
      </div>

      {/* Scroll hint */}
      <div className="hscroll ha6">
        <div className="hmouse"><div className="hwheel"/></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

/* ─── REVEAL HOOK ──────────────────────────────────────── */
const useR = (t = .1) => { const ref = useRef(null); const [v, setV] = useState(false); useEffect(() => { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: t }); if (ref.current) obs.observe(ref.current); return () => obs.disconnect(); }, []); return [ref, v]; };

/* ─── COUNT UP ─────────────────────────────────────────── */
const Cu = ({ t, s, lbl, v }) => {
  const [n, setN] = useState(0);
  useEffect(() => { if (!v) return; let c = 0; const step = t / 55; const id = setInterval(() => { c = Math.min(c + step, t); setN(Math.floor(c)); if (c >= t) clearInterval(id); }, 22); return () => clearInterval(id); }, [v]);
  return <div className="stat-b"><span className="stat-n">{n}{s}</span><span className="stat-l">{lbl}</span></div>;
};

/* ─── ABOUT ────────────────────────────────────────────── */
const About = () => {
  const [ref, v] = useR(.07);
  return (
    <section id="about" className="about" ref={ref}>
      <div className="w">
        <span className={`ey${v?' v':''}`}>01 — About</span>
        <h2 className={`st${v?' v':''}`} style={{transitionDelay:'.08s'}}>About Me</h2>
        <div className={`sl${v?' v':''}`} style={{transitionDelay:'.13s'}}/>

        <div className="ag">
          {/* Character card in about — cycling too! */}
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

        {/* Skills */}
        <div className={`skills${v?' v':''}`} style={{transitionDelay:'.5s'}}>
          {[
            {c:'devicon-python-plain',l:'Python'},{c:'devicon-react-original',l:'React'},
            {c:'devicon-javascript-plain',l:'JS'},{c:'devicon-mysql-plain',l:'MySQL'},
            {c:'devicon-fastapi-plain',l:'FastAPI'},{c:'devicon-nodejs-plain',l:'Node.js'},
            {c:'devicon-tensorflow-original',l:'TensorFlow'},{c:'devicon-mongodb-plain',l:'MongoDB'},
            {c:'devicon-docker-plain',l:'Docker'},{c:'devicon-git-plain',l:'Git'},
          ].map((s,i)=>(
            <div key={i} className="sk" style={{animationDelay:v?`${i*.04}s`:'0s'}}>
              <i className={s.c}/><span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PROJECTS ─────────────────────────────────────────── */
const Projects = () => {
  const [ref, v] = useR(.04);
  const tilt = e => { const c=e.currentTarget,r=c.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width/2),y=(e.clientY-r.top-r.height/2)/(r.height/2); c.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) scale(1.04)`; c.querySelector('.psh').style.background=`radial-gradient(circle at ${(e.clientX-r.left)/r.width*100}% ${(e.clientY-r.top)/r.height*100}%,rgba(255,255,255,.11) 0%,transparent 65%)`; };
  const flat = e => { e.currentTarget.style.transform=''; e.currentTarget.querySelector('.psh').style.background=''; };

  const data = [
    {t:'Scalable HRMS System',   d:'FastAPI backend with RBAC, Supabase auth and concurrent employee data ops.',                  tech:['Python','FastAPI','Docker'],       bg:'linear-gradient(135deg,#1e1e2e,#2d2d44)',gh:'https://github.com/Har-dik25/hrms-backend'},
    {t:'AI Traffic Predictor',   d:'89% R² ML pipeline on 80K+ records. Real-time forecasting via AWS Lambda.',                   tech:['TensorFlow','Flask','AWS'],         bg:'linear-gradient(135deg,#0f2027,#2c5364)',gh:'https://github.com/Har-dik25/AI-Traffic-Congestion-Analysis'},
    {t:'LegalMind RAG',          d:'AI legal assistant on advanced RAG pipeline with vector search and LLM APIs.',                 tech:['Python','LLMs','RAG'],              bg:'linear-gradient(135deg,#1a1a2e,#0f3460)',gh:'https://github.com/Har-dik25/LegalMindRag'},
    {t:'GenAI Demystifier',      d:'Multi-model agent that analyzes and breaks down technical documents using GenAI.',             tech:['GenAI','LLMs','NLP'],               bg:'linear-gradient(135deg,#2d1b69,#11998e)',gh:'https://github.com/JXPJXT/GoogleGenAiExchange-GenAI-Document-Demistifier'},
    {t:'Backpack Price ML',      d:'XGBoost regression — Top 10% among 500+ Kaggle participants.',                                tech:['Python','XGBoost','Sklearn'],       bg:'linear-gradient(135deg,#1e3c72,#2a5298)',gh:'https://github.com/JXPJXT/Kaggle-Backpack-Prediction-Challenge'},
    {t:'UMS Replica',            d:'Full-stack University Management System with portals, courses and dashboards.',                tech:['React','Node.js','SQL'],            bg:'linear-gradient(135deg,#232526,#414345)',gh:'https://github.com/Har-dik25/UMS-replica'},
    {t:'OCR Doc Pipeline',       d:'High-accuracy OCR system for document-to-JSON extraction and digitisation.',                  tech:['Python','Tesseract'],              bg:'linear-gradient(135deg,#16213e,#1a1a2e)',gh:'https://github.com/Har-dik25/OCR-DOCS'},
    {t:'Solar Forecasting',      d:'Ensemble ML for renewable solar energy generation forecasting from sensor data.',              tech:['Python','ML','Data Science'],      bg:'linear-gradient(135deg,#1a472a,#2d6a4f)',gh:'https://github.com/LeviAckermanZ9/solar-power-generation-forecasting'},
    {t:'Loan Data Analysis',     d:'Deep EDA with feature importance mapping and financial risk visualisation.',                   tech:['Pandas','Seaborn','Python'],       bg:'linear-gradient(135deg,#3d0c02,#6b1a10)',gh:'https://github.com/rashmisahray/Loan-data-analysis'},
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
              <div className="pimg" style={{background:p.bg}}><span className="pilbl">{p.t}</span></div>
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

/* ─── SERVICES ─────────────────────────────────────────── */
const Services = () => {
  const [ref, v] = useR(.1);
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

/* ─── CONTACT ──────────────────────────────────────────── */
const Contact = () => {
  const [ref, v] = useR(.08);
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

/* ─── FOOTER ───────────────────────────────────────────── */
const Footer = () => (
  <footer className="footer">
    <div className="w ft-in">
      <span>© 2026 Hardik Choudhary. All rights reserved.</span>
      <div className="fticos">
        {[
          ['https://github.com/Har-dik25',<svg key="g" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>],
          ['https://www.linkedin.com/in/hardik8/',<svg key="l" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>],
          ['mailto:hardikkumar2583@gmail.com',<svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>],
        ].map(([h,s])=><a key={h} href={h} target="_blank" rel="noopener noreferrer" className="ftico">{s}</a>)}
      </div>
    </div>
  </footer>
);

/* ─── APP ──────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="app">
      <Spb/><Cursor/><Nav/>
      <main>
        <Hero/><About/><Projects/><Services/><Contact/>
      </main>
      <Footer/>
    </div>
  );
}
