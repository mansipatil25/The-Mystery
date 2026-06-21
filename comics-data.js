const CASE_COMICS = {
  "001": `<svg viewBox="0 0 1000 760" xmlns="http://www.w3.org/2000/svg" font-family="'Oswald', sans-serif">
<defs>
  <pattern id="halftone" width="6" height="6" patternUnits="userSpaceOnUse">
    <circle cx="1.5" cy="1.5" r="1.1" fill="#000" opacity="0.5"/>
  </pattern>
  <pattern id="halftoneRed" width="7" height="7" patternUnits="userSpaceOnUse">
    <circle cx="1.6" cy="1.6" r="1.2" fill="#b8362f" opacity="0.55"/>
  </pattern>
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0"/>
  </filter>
</defs>

<rect x="0" y="0" width="1000" height="760" fill="#0b0c0a"/>

<!-- ===================== PANEL BORDERS / GUTTER ===================== -->
<!-- panel 1: 20,20 -> 488,368  | panel 2: 512,20 -> 980,368 -->
<!-- panel 3: 20,392 -> 488,740 | panel 4: 512,392 -> 980,740 -->

<!-- ===================== PANEL 1: THE PLAYHOUSE, NIGHT ===================== -->
<g clip-path="url(#p1clip)">
<clipPath id="p1clip"><rect x="20" y="20" width="468" height="348"/></clipPath>
<rect x="20" y="20" width="468" height="348" fill="#141511"/>

<!-- sky -->
<rect x="20" y="20" width="468" height="200" fill="#0b0c0a"/>
<circle cx="120" cy="70" r="26" fill="#1d1b16"/>
<circle cx="120" cy="70" r="22" fill="#e8e2d0" opacity="0.13"/>

<!-- street -->
<rect x="20" y="300" width="468" height="68" fill="#0b0c0a"/>
<rect x="20" y="298" width="468" height="4" fill="#1d1b16"/>

<!-- theatre facade -->
<rect x="160" y="120" width="220" height="180" fill="#1d1b16" stroke="#8a7548" stroke-width="1.5"/>
<rect x="160" y="120" width="220" height="14" fill="#2a261d"/>
<!-- marquee -->
<rect x="148" y="150" width="244" height="36" fill="#8a1f1f"/>
<rect x="148" y="150" width="244" height="36" fill="url(#halftoneRed)"/>
<text x="270" y="174" fill="#e8e2d0" font-size="15" font-weight="700" text-anchor="middle" letter-spacing="2">THE ALDGATE PLAYHOUSE</text>
<!-- marquee bulbs -->
<circle cx="156" cy="150" r="3" fill="#c9a961"/><circle cx="156" cy="186" r="3" fill="#c9a961"/>
<circle cx="384" cy="150" r="3" fill="#c9a961"/><circle cx="384" cy="186" r="3" fill="#c9a961"/>
<circle cx="270" cy="150" r="3" fill="#c9a961"/><circle cx="270" cy="186" r="3" fill="#c9a961"/>

<!-- doors -->
<rect x="230" y="220" width="36" height="80" fill="#0b0c0a" stroke="#8a7548" stroke-width="1"/>
<rect x="274" y="220" width="36" height="80" fill="#0b0c0a" stroke="#8a7548" stroke-width="1"/>
<!-- windows -->
<rect x="178" y="200" width="26" height="36" fill="#2a261d" stroke="#8a7548" stroke-width="0.75"/>
<rect x="336" y="200" width="26" height="36" fill="#2a261d" stroke="#8a7548" stroke-width="0.75"/>
<rect x="178" y="200" width="26" height="36" fill="#c9a961" opacity="0.18"/>

<!-- single figure approaching, long shadow, back to viewer (the investigator) -->
<g transform="translate(95,235)">
  <ellipse cx="14" cy="62" rx="36" ry="7" fill="#000" opacity="0.4"/>
  <path d="M14 62 L-36 66" stroke="#000" stroke-width="11" opacity="0.25"/>
  <!-- trench coat body -->
  <path d="M-2 18 Q14 8 30 18 L34 60 Q14 68 -6 60 Z" fill="#0b0c0a" stroke="#8a7548" stroke-width="1.25"/>
  <!-- fedora head -->
  <circle cx="14" cy="6" r="10" fill="#0b0c0a" stroke="#8a7548" stroke-width="1.25"/>
  <path d="M0 4 Q14 -10 28 4 L30 10 L-2 10 Z" fill="#0b0c0a" stroke="#8a7548" stroke-width="1.25"/>
  <ellipse cx="14" cy="9" rx="16" ry="3" fill="#0b0c0a" stroke="#8a7548" stroke-width="1"/>
</g>

<!-- rain streaks -->
<g stroke="#c9a961" stroke-width="1" opacity="0.18">
  <line x1="60" y1="40" x2="50" y2="90"/>
  <line x1="420" y1="50" x2="408" y2="105"/>
  <line x1="460" y1="30" x2="448" y2="80"/>
  <line x1="90" y1="110" x2="80" y2="150"/>
</g>
</g>
<rect x="20" y="20" width="468" height="348" fill="none" stroke="#c9a961" stroke-width="2"/>
<!-- caption box -->
<rect x="34" y="34" width="230" height="30" fill="#efe9d8" stroke="#0b0c0a" stroke-width="1.5"/>
<text x="44" y="55" fill="#0b0c0a" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="700">MARCH 3RD — 7:20 PM</text>

<!-- ===================== PANEL 2: BEHIND THE CURTAIN ===================== -->
<g clip-path="url(#p2clip)">
<clipPath id="p2clip"><rect x="512" y="20" width="468" height="348"/></clipPath>
<rect x="512" y="20" width="468" height="348" fill="#0b0c0a"/>

<!-- velvet curtain folds -->
<g>
  <rect x="512" y="20" width="468" height="348" fill="#1d1b16"/>
  <path d="M512 20 L548 20 L536 368 L512 368 Z" fill="#2a261d"/>
  <path d="M548 20 L584 20 L580 368 L536 368 Z" fill="#1d1b16"/>
  <path d="M584 20 L620 20 L622 368 L580 368 Z" fill="#2a261d"/>
  <path d="M620 20 L656 20 L662 368 L622 368 Z" fill="#1d1b16"/>
  <path d="M656 20 L692 20 L700 368 L662 368 Z" fill="#2a261d"/>
  <path d="M980 20 L944 20 L932 368 L980 368 Z" fill="#2a261d"/>
  <path d="M944 20 L908 20 L900 368 L932 368 Z" fill="#1d1b16"/>
  <path d="M908 20 L872 20 L868 368 L900 368 Z" fill="#2a261d"/>
</g>

<!-- spotlight pool on floor -->
<ellipse cx="745" cy="300" rx="120" ry="36" fill="#c9a961" opacity="0.10"/>
<polygon points="745,40 660,300 830,300" fill="#c9a961" opacity="0.06"/>

<!-- body, on the floor, fallen figure, head toward viewer left, legs trailing right -->
<g transform="translate(670,255)">
  <ellipse cx="60" cy="62" rx="92" ry="10" fill="#000" opacity="0.4"/>
  <!-- legs, bent slightly -->
  <path d="M86 44 Q116 40 140 50 Q118 56 88 54 Z" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
  <path d="M70 42 Q92 38 90 50 Q72 52 60 48 Z" fill="#242017" stroke="#8a7548" stroke-width="1"/>
  <!-- torso + dress -->
  <path d="M26 36 Q50 28 76 38 Q80 48 72 56 L32 58 Q22 48 26 36 Z" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
  <!-- one arm flung out -->
  <path d="M34 38 L8 26" stroke="#2a261d" stroke-width="8" stroke-linecap="round"/>
  <path d="M34 38 L8 26" stroke="#8a7548" stroke-width="1" fill="none" opacity="0.5"/>
  <!-- head -->
  <circle cx="14" cy="36" r="12" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
  <!-- hair fanned out -->
  <path d="M4 30 Q-6 26 -12 34 Q-4 40 4 42 Z" fill="#1d1b16" stroke="#8a7548" stroke-width="0.75"/>
  <!-- chalk outline accent -->
  <path d="M26 36 Q50 28 76 38 L140 50 Q118 56 88 54 L72 56 L32 58 Q22 48 26 36 Z" fill="none" stroke="#e8e2d0" stroke-width="1" opacity="0.3" stroke-dasharray="3 3"/>
</g>

<!-- blood mark, single stab implied -->
<circle cx="715" cy="290" r="5" fill="#8a1f1f"/>
<circle cx="715" cy="290" r="5" fill="url(#halftoneRed)"/>

<!-- evidence tag pin -->
<g transform="translate(835,180)">
  <line x1="0" y1="0" x2="0" y2="40" stroke="#c9a961" stroke-width="1"/>
  <rect x="-26" y="40" width="52" height="22" fill="#efe9d8" stroke="#0b0c0a"/>
  <text x="0" y="55" fill="#0b0c0a" font-size="9" font-family="'JetBrains Mono', monospace" text-anchor="middle" font-weight="700">TAG 01</text>
</g>
</g>
<rect x="512" y="20" width="468" height="348" fill="none" stroke="#c9a961" stroke-width="2"/>
<rect x="526" y="34" width="270" height="30" fill="#efe9d8" stroke="#0b0c0a" stroke-width="1.5"/>
<text x="536" y="55" fill="#0b0c0a" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="700">FOUND: BEHIND THE VELVET CURTAIN</text>

<!-- ===================== PANEL 3: THE FLY TOWER, INTERROGATION ===================== -->
<g clip-path="url(#p3clip)">
<clipPath id="p3clip"><rect x="20" y="392" width="468" height="348"/></clipPath>
<rect x="20" y="392" width="468" height="348" fill="#141511"/>

<!-- rigging ropes -->
<g stroke="#8a7548" stroke-width="2">
  <line x1="60" y1="392" x2="60" y2="700"/>
  <line x1="100" y1="392" x2="92" y2="700"/>
  <line x1="430" y1="392" x2="430" y2="700"/>
  <line x1="392" y1="392" x2="400" y2="700"/>
</g>
<!-- catwalk -->
<rect x="20" y="660" width="468" height="14" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
<g stroke="#8a7548" stroke-width="1.5">
  <line x1="40" y1="660" x2="40" y2="640"/>
  <line x1="90" y1="660" x2="90" y2="640"/>
  <line x1="140" y1="660" x2="140" y2="640"/>
  <line x1="370" y1="660" x2="370" y2="640"/>
  <line x1="420" y1="660" x2="420" y2="640"/>
  <line x1="468" y1="660" x2="468" y2="640"/>
</g>
<rect x="20" y="635" width="468" height="6" fill="#1d1b16"/>

<!-- single hanging bulb -->
<line x1="254" y1="392" x2="254" y2="470" stroke="#8a7548" stroke-width="1"/>
<circle cx="254" cy="476" r="8" fill="#c9a961" opacity="0.9"/>
<ellipse cx="254" cy="476" rx="90" ry="60" fill="#c9a961" opacity="0.07"/>

<!-- Priya, standing, defensive posture, arms crossed -->
<g transform="translate(214,500)">
  <ellipse cx="40" cy="200" rx="46" ry="9" fill="#000" opacity="0.35"/>
  <!-- legs -->
  <rect x="22" y="140" width="14" height="62" rx="4" fill="#1d1b16" stroke="#8a7548" stroke-width="1"/>
  <rect x="46" y="140" width="14" height="62" rx="4" fill="#1d1b16" stroke="#8a7548" stroke-width="1"/>
  <!-- torso -->
  <path d="M16 70 Q40 58 64 70 L62 144 Q40 152 18 144 Z" fill="#2a261d" stroke="#8a7548" stroke-width="1.25"/>
  <!-- shoulders -->
  <circle cx="18" cy="78" r="8" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
  <circle cx="62" cy="78" r="8" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
  <!-- crossed forearms: left shoulder to right hip, right shoulder to left hip -->
  <path d="M16 80 L66 116" stroke="#1d1b16" stroke-width="11" stroke-linecap="round"/>
  <path d="M64 80 L14 116" stroke="#242017" stroke-width="11" stroke-linecap="round"/>
  <circle cx="66" cy="116" r="6" fill="#1d1b16" stroke="#8a7548" stroke-width="0.75"/>
  <circle cx="14" cy="116" r="6" fill="#242017" stroke="#8a7548" stroke-width="0.75"/>
  <!-- head -->
  <circle cx="40" cy="46" r="20" fill="#2a261d" stroke="#8a7548" stroke-width="1.25"/>
  <!-- hair -->
  <path d="M20 38 Q22 16 40 16 Q58 16 60 38 Q60 24 40 24 Q20 24 20 38 Z" fill="#0b0c0a"/>
  <!-- worried brow line -->
  <path d="M30 44 L36 46 M50 44 L44 46" stroke="#0b0c0a" stroke-width="1.5"/>
</g>

<!-- speech / interrogation caption tail -->
<polygon points="290,470 320,470 295,450" fill="#efe9d8"/>
<rect x="290" y="425" width="180" height="46" fill="#efe9d8" stroke="#0b0c0a" stroke-width="1.5"/>
<text x="300" y="446" fill="#0b0c0a" font-size="11.5" font-family="'Special Elite', monospace">"I was checking the</text>
<text x="300" y="462" fill="#0b0c0a" font-size="11.5" font-family="'Special Elite', monospace">rigging. That's all."</text>
</g>
<rect x="20" y="392" width="468" height="348" fill="none" stroke="#c9a961" stroke-width="2"/>
<rect x="34" y="406" width="170" height="30" fill="#efe9d8" stroke="#0b0c0a" stroke-width="1.5"/>
<text x="44" y="427" fill="#0b0c0a" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="700">THE FLY TOWER</text>

<!-- ===================== PANEL 4: THE LEDGER, REVEAL ===================== -->
<g clip-path="url(#p4clip)">
<clipPath id="p4clip"><rect x="512" y="392" width="468" height="348"/></clipPath>
<rect x="512" y="392" width="468" height="348" fill="#0b0c0a"/>

<!-- desk surface -->
<rect x="512" y="600" width="468" height="140" fill="#1d1b16"/>
<rect x="512" y="596" width="468" height="6" fill="#2a261d"/>

<!-- desk lamp glow -->
<ellipse cx="700" cy="600" rx="220" ry="90" fill="#c9a961" opacity="0.10"/>
<g transform="translate(660,540)">
  <line x1="0" y1="0" x2="0" y2="50" stroke="#8a7548" stroke-width="3"/>
  <path d="M-26 0 L26 0 L14 -28 L-14 -28 Z" fill="#2a261d" stroke="#8a7548" stroke-width="1"/>
</g>

<!-- open ledger book -->
<g transform="translate(740,605)">
  <path d="M0 0 L90 -8 L90 50 L0 58 Z" fill="#efe9d8" stroke="#0b0c0a" stroke-width="1"/>
  <path d="M0 0 L-90 -8 L-90 50 L0 58 Z" fill="#dcd5c0" stroke="#0b0c0a" stroke-width="1"/>
  <g stroke="#8a1f1f" stroke-width="1" opacity="0.7">
    <line x1="-72" y1="6" x2="-12" y2="2"/>
    <line x1="-72" y1="16" x2="-12" y2="12"/>
    <line x1="-72" y1="26" x2="-12" y2="22"/>
  </g>
  <g stroke="#0b0c0a" stroke-width="0.75" opacity="0.55">
    <line x1="10" y1="0" x2="78" y2="-5"/>
    <line x1="10" y1="12" x2="78" y2="7"/>
    <line x1="10" y1="24" x2="78" y2="19"/>
    <line x1="10" y1="36" x2="78" y2="31"/>
  </g>
  <!-- torn corner -->
  <path d="M-90 -8 L-60 -6 L-66 8 L-90 4 Z" fill="#0b0c0a"/>
</g>

<!-- pawn ticket prop, slightly overlapping -->
<g transform="translate(560,640) rotate(-8)">
  <rect x="0" y="0" width="70" height="40" fill="#dcd5c0" stroke="#0b0c0a" stroke-width="1"/>
  <text x="35" y="16" fill="#0b0c0a" font-size="8" font-family="'JetBrains Mono', monospace" text-anchor="middle" font-weight="700">PAWN</text>
  <text x="35" y="28" fill="#0b0c0a" font-size="7" font-family="'JetBrains Mono', monospace" text-anchor="middle">TICKET</text>
</g>

<!-- magnifying glass over ledger -->
<g transform="translate(800,575)">
  <circle cx="0" cy="0" r="22" fill="none" stroke="#c9a961" stroke-width="3"/>
  <line x1="16" y1="16" x2="34" y2="34" stroke="#c9a961" stroke-width="5" stroke-linecap="round"/>
</g>

<!-- silhouette walking away in background, top -->
<g transform="translate(540,420)">
  <ellipse cx="14" cy="46" rx="26" ry="5" fill="#000" opacity="0.3"/>
  <rect x="4" y="6" width="20" height="34" rx="5" fill="#0b0c0a" stroke="#8a7548" stroke-width="1"/>
  <circle cx="14" cy="0" r="7" fill="#0b0c0a" stroke="#8a7548" stroke-width="1"/>
</g>

<!-- case stamp -->
<g transform="translate(900,440) rotate(-18)">
  <rect x="-46" y="-16" width="92" height="32" fill="none" stroke="#8a1f1f" stroke-width="2.5"/>
  <text x="0" y="6" fill="#8a1f1f" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="2">CLOSED</text>
</g>
</g>
<rect x="512" y="392" width="468" height="348" fill="none" stroke="#c9a961" stroke-width="2"/>
<rect x="526" y="406" width="230" height="30" fill="#efe9d8" stroke="#0b0c0a" stroke-width="1.5"/>
<text x="536" y="427" fill="#0b0c0a" font-size="12" font-family="'JetBrains Mono', monospace" font-weight="700">THE LEDGER DOESN'T LIE</text>

<!-- grain overlay -->
<rect x="0" y="0" width="1000" height="760" filter="url(#grain)" opacity="0.5"/>
</svg>
`
};
