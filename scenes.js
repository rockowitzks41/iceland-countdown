/* =============================================================
   Scene of the Day — a different animated Iceland vignette for
   every day of the countdown.

   Each scene is a self-contained SVG (viewBox 0 0 800 450).
   All animation lives in the page stylesheet, keyed by class,
   so only one scene's animations are ever live at a time.

   Index 0 is the arrival scene and is shown on the day itself.
   ============================================================= */
window.ICELAND_SCENES = [

/* 0 — ARRIVAL ------------------------------------------------ */
{
  key:'arrival',
  ice:'Komdu sæl',
  title:'Touchdown at Keflavík',
  caption:'Wheels down on the Reykjanes peninsula. The lava fields start at the runway edge.',
  svg:`
  <defs>
    <linearGradient id="arSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stop-color="#0b1733"/>
      <stop offset="55%" stop-color="#3b2a5c"/>
      <stop offset="100%" stop-color="#c2643f"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#arSky)"/>
  <circle class="ar-star" cx="90"  cy="60"  r="1.6" fill="#fff"/>
  <circle class="ar-star" cx="230" cy="40"  r="1.2" fill="#fff" style="animation-delay:.7s"/>
  <circle class="ar-star" cx="600" cy="55"  r="1.5" fill="#fff" style="animation-delay:1.4s"/>
  <circle class="ar-star" cx="720" cy="95"  r="1.1" fill="#fff" style="animation-delay:2.1s"/>
  <circle cx="660" cy="300" r="46" fill="#f2a05a" opacity=".55"/>
  <path d="M0 315 L150 268 L260 306 L380 255 L520 300 L640 268 L800 310 L800 450 L0 450Z" fill="#1b1430"/>
  <path d="M0 352 L180 330 L340 350 L520 328 L800 348 L800 450 L0 450Z" fill="#120d22"/>
  <rect x="0" y="392" width="800" height="58" fill="#0a0714"/>
  <rect x="0" y="404" width="800" height="3" fill="#3a3358" opacity=".8"/>
  <g fill="#ffd27a">
    <circle class="ar-rw" cx="90"  cy="424" r="4"/>
    <circle class="ar-rw" cx="250" cy="424" r="4" style="animation-delay:.25s"/>
    <circle class="ar-rw" cx="410" cy="424" r="4" style="animation-delay:.5s"/>
    <circle class="ar-rw" cx="570" cy="424" r="4" style="animation-delay:.75s"/>
    <circle class="ar-rw" cx="730" cy="424" r="4" style="animation-delay:1s"/>
  </g>
  <g class="ar-plane">
    <path d="M0 0 L62 0 L96 14 L62 28 L0 28 Z" fill="#e8eefc"/>
    <path d="M28 6 L52 -20 L64 -20 L46 6 Z" fill="#c3cfe6"/>
    <path d="M28 22 L52 44 L64 44 L46 22 Z" fill="#aab8d4"/>
    <path d="M0 4 L14 -12 L22 -12 L12 4 Z" fill="#9fb0d0"/>
    <circle cx="86" cy="14" r="3" fill="#7dd3fc"/>
  </g>`
},

/* 1 — AURORA ------------------------------------------------- */
{
  key:'aurora',
  ice:'Norðurljós',
  title:'The Northern Lights',
  caption:'Solar wind hitting the upper atmosphere, 100 kilometres up. Green is oxygen. Purple is nitrogen.',
  svg:`
  <defs>
    <linearGradient id="auSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#03040f"/><stop offset="100%" stop-color="#0a1430"/>
    </linearGradient>
    <linearGradient id="auG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4ade80" stop-opacity="0"/>
      <stop offset="35%" stop-color="#4ade80" stop-opacity=".85"/>
      <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="auP" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0"/>
      <stop offset="45%" stop-color="#c084fc" stop-opacity=".7"/>
      <stop offset="100%" stop-color="#f0abfc" stop-opacity="0"/>
    </linearGradient>
    <filter id="auBlur"><feGaussianBlur stdDeviation="13"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#auSky)"/>
  <circle class="ar-star" cx="70"  cy="50" r="1.5" fill="#fff"/>
  <circle class="ar-star" cx="320" cy="34" r="1.2" fill="#fff" style="animation-delay:.9s"/>
  <circle class="ar-star" cx="540" cy="62" r="1.6" fill="#fff" style="animation-delay:1.7s"/>
  <circle class="ar-star" cx="740" cy="40" r="1.3" fill="#fff" style="animation-delay:2.4s"/>
  <g filter="url(#auBlur)">
    <path class="au-rib au-r1" d="M60 30 C180 110, 120 200, 240 250 L300 240 C190 190, 250 100, 140 20 Z" fill="url(#auG)"/>
    <path class="au-rib au-r2" d="M300 10 C420 100, 350 210, 470 260 L540 248 C430 200, 490 90, 390 5 Z" fill="url(#auP)"/>
    <path class="au-rib au-r3" d="M540 24 C650 104, 590 204, 700 256 L760 244 C660 196, 715 96, 620 16 Z" fill="url(#auG)"/>
  </g>
  <path d="M0 300 L120 240 L210 285 L330 215 L450 280 L580 230 L700 285 L800 250 L800 450 L0 450Z" fill="#070b1c"/>
  <rect y="330" width="800" height="120" fill="#050915"/>
  <g opacity=".35" filter="url(#auBlur)">
    <ellipse cx="260" cy="380" rx="150" ry="24" fill="#4ade80"/>
    <ellipse cx="560" cy="392" rx="130" ry="20" fill="#a78bfa"/>
  </g>`
},

/* 2 — STROKKUR ----------------------------------------------- */
{
  key:'geysir',
  ice:'Strokkur',
  title:'The geyser that still performs',
  caption:'Every few minutes the pool swells into a blue dome, then fires twenty metres straight up.',
  svg:`
  <defs>
    <linearGradient id="gySky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#22405e"/><stop offset="100%" stop-color="#7796ab"/>
    </linearGradient>
    <linearGradient id="gyCol" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#cfe8f5"/><stop offset="100%" stop-color="#fff" stop-opacity=".2"/>
    </linearGradient>
    <filter id="gyBlur"><feGaussianBlur stdDeviation="7"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#gySky)"/>
  <path d="M0 250 L160 196 L300 244 L470 190 L640 238 L800 204 L800 450 L0 450Z" fill="#4a5f63"/>
  <path d="M0 300 L200 276 L420 302 L620 274 L800 296 L800 450 L0 450Z" fill="#3a4a43"/>
  <rect y="330" width="800" height="120" fill="#5c5a4a"/>
  <ellipse cx="400" cy="342" rx="118" ry="26" fill="#2f4c52"/>
  <ellipse cx="400" cy="340" rx="96" ry="19" fill="#5fa8c4" opacity=".9"/>
  <g filter="url(#gyBlur)" opacity=".5">
    <ellipse class="gy-steam" cx="360" cy="300" rx="34" ry="20" fill="#fff"/>
    <ellipse class="gy-steam" cx="440" cy="300" rx="28" ry="17" fill="#fff" style="animation-delay:2.2s"/>
    <ellipse class="gy-steam" cx="400" cy="300" rx="40" ry="22" fill="#fff" style="animation-delay:4.1s"/>
  </g>
  <g class="gy-erupt">
    <ellipse cx="400" cy="330" rx="46" ry="60" fill="url(#gyCol)"/>
    <ellipse cx="400" cy="250" rx="30" ry="96" fill="url(#gyCol)" opacity=".85"/>
    <ellipse cx="400" cy="190" rx="18" ry="70" fill="#fff" opacity=".55"/>
  </g>
  <g class="gy-drops" fill="#dff1fa">
    <circle cx="352" cy="230" r="4"/><circle cx="446" cy="248" r="3.4"/>
    <circle cx="376" cy="182" r="3"/><circle cx="428" cy="196" r="3.6"/>
  </g>`
},

/* 3 — GULLFOSS ----------------------------------------------- */
{
  key:'gullfoss',
  ice:'Gullfoss',
  title:'The golden falls',
  caption:'The Hvítá drops in two stages into a canyon so deep the river seems to vanish into the earth.',
  svg:`
  <defs>
    <linearGradient id="guSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3c5f7d"/><stop offset="100%" stop-color="#9db6c4"/>
    </linearGradient>
    <linearGradient id="guW" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eaf6fb"/><stop offset="100%" stop-color="#9fcbe0"/>
    </linearGradient>
    <filter id="guBlur"><feGaussianBlur stdDeviation="9"/></filter>
    <clipPath id="guClip"><rect x="250" y="196" width="300" height="150"/></clipPath>
    <clipPath id="guClip2"><rect x="150" y="300" width="500" height="120"/></clipPath>
    <pattern id="guStripe" width="26" height="44" patternUnits="userSpaceOnUse">
      <rect width="9" height="44" fill="#fff" opacity=".55"/>
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#guSky)"/>
  <path d="M0 210 L180 168 L360 206 L560 160 L800 200 L800 450 L0 450Z" fill="#6c7f88"/>
  <path d="M0 260 L250 236 L520 262 L800 240 L800 450 L0 450Z" fill="#55666b"/>
  <rect x="200" y="176" width="400" height="26" fill="#7f9aa6"/>
  <rect x="250" y="196" width="300" height="150" fill="url(#guW)"/>
  <g clip-path="url(#guClip)" opacity=".75">
    <rect class="gu-fall" x="250" y="0" width="300" height="600" fill="url(#guStripe)"/>
  </g>
  <rect x="150" y="300" width="500" height="26" fill="#6e8894"/>
  <rect x="150" y="318" width="500" height="110" fill="url(#guW)"/>
  <g clip-path="url(#guClip2)" opacity=".6">
    <rect class="gu-fall2" x="150" y="0" width="500" height="600" fill="url(#guStripe)"/>
  </g>
  <rect y="410" width="800" height="40" fill="#46585e"/>
  <g filter="url(#guBlur)" opacity=".55">
    <ellipse class="gu-mist" cx="300" cy="392" rx="70" ry="28" fill="#fff"/>
    <ellipse class="gu-mist" cx="470" cy="398" rx="86" ry="30" fill="#fff" style="animation-delay:2.6s"/>
    <ellipse class="gu-mist" cx="390" cy="386" rx="60" ry="24" fill="#fff" style="animation-delay:4.4s"/>
  </g>`
},

/* 4 — VOLCANO ------------------------------------------------ */
{
  key:'volcano',
  ice:'Eldgos',
  title:'A fissure opens',
  caption:'Iceland sits on the Mid-Atlantic Ridge — two plates pulling apart, and the mantle finding the gap.',
  svg:`
  <defs>
    <linearGradient id="voSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0616"/><stop offset="60%" stop-color="#3a1224"/>
      <stop offset="100%" stop-color="#8a2a1c"/>
    </linearGradient>
    <radialGradient id="voGlow">
      <stop offset="0%" stop-color="#ffb347" stop-opacity=".95"/>
      <stop offset="100%" stop-color="#ff5722" stop-opacity="0"/>
    </radialGradient>
    <filter id="voBlur"><feGaussianBlur stdDeviation="15"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#voSky)"/>
  <circle class="ar-star" cx="120" cy="46" r="1.4" fill="#fff"/>
  <circle class="ar-star" cx="680" cy="38" r="1.3" fill="#fff" style="animation-delay:1.3s"/>
  <g filter="url(#voBlur)" opacity=".8">
    <ellipse class="vo-cloud" cx="400" cy="150" rx="190" ry="80" fill="#4a2030"/>
  </g>
  <ellipse class="vo-halo" cx="400" cy="300" rx="230" ry="150" fill="url(#voGlow)"/>
  <path d="M0 330 L150 300 L300 322 L800 330 L800 450 L0 450Z" fill="#150c18"/>
  <path d="M250 340 L400 190 L550 340 Z" fill="#1c1020"/>
  <path d="M330 268 L400 190 L470 268 Z" fill="#2a1626"/>
  <g class="vo-lava" fill="#ffca57">
    <circle class="vo-p vo-p1" cx="400" cy="200" r="7"/>
    <circle class="vo-p vo-p2" cx="400" cy="200" r="5"/>
    <circle class="vo-p vo-p3" cx="400" cy="200" r="6"/>
    <circle class="vo-p vo-p4" cx="400" cy="200" r="4"/>
    <circle class="vo-p vo-p5" cx="400" cy="200" r="5.5"/>
  </g>
  <ellipse class="vo-crater" cx="400" cy="196" rx="34" ry="11" fill="#ff8b3d"/>
  <path d="M400 206 L372 340 L432 340 Z" fill="#ff6a2a" opacity=".85"/>
  <path d="M400 206 L388 340 L414 340 Z" fill="#ffd166" opacity=".9"/>`
},

/* 5 — REYNISFJARA -------------------------------------------- */
{
  key:'reynisfjara',
  ice:'Reynisfjara',
  title:'Black sand and basalt',
  caption:'Lava cooled so evenly it cracked into hexagons. The sea stacks offshore were trolls, caught by sunrise.',
  svg:`
  <defs>
    <linearGradient id="reSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2b3a52"/><stop offset="100%" stop-color="#8d9aa8"/>
    </linearGradient>
    <linearGradient id="reSea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a6070"/><stop offset="100%" stop-color="#6b8496"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#reSky)"/>
  <path d="M598 262 L612 150 L628 262 Z" fill="#2a2d38"/>
  <path d="M648 262 L664 112 L684 262 Z" fill="#232631"/>
  <path d="M700 262 L714 178 L730 262 Z" fill="#2a2d38"/>
  <rect y="250" width="800" height="80" fill="url(#reSea)"/>
  <g fill="#e9f1f5" opacity=".75">
    <ellipse class="re-wave re-w1" cx="300" cy="300" rx="260" ry="12"/>
    <ellipse class="re-wave re-w2" cx="520" cy="316" rx="300" ry="13"/>
  </g>
  <rect y="322" width="800" height="128" fill="#15161c"/>
  <rect y="322" width="800" height="12" fill="#22242c"/>
  <g class="re-foam" fill="#f2f7fa" opacity=".55">
    <ellipse cx="240" cy="330" rx="200" ry="11"/>
    <ellipse cx="560" cy="334" rx="220" ry="9"/>
  </g>
  <g fill="#1f222b" stroke="#2f3340" stroke-width="1.5">
    <rect x="30"  y="252" width="26" height="78"/><rect x="58"  y="240" width="26" height="90"/>
    <rect x="86"  y="258" width="26" height="72"/><rect x="114" y="234" width="26" height="96"/>
    <rect x="142" y="262" width="26" height="68"/>
  </g>`
},

/* 6 — GLACIER ------------------------------------------------ */
{
  key:'glacier',
  ice:'Jökull',
  title:'Inside the blue',
  caption:'Ice this old has had every bubble of air pressed out of it. What is left only reflects blue.',
  svg:`
  <defs>
    <linearGradient id="glI" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bfe9ff"/><stop offset="55%" stop-color="#4aa8d8"/>
      <stop offset="100%" stop-color="#14456b"/>
    </linearGradient>
    <linearGradient id="glShaft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eafaff" stop-opacity=".65"/>
      <stop offset="100%" stop-color="#eafaff" stop-opacity="0"/>
    </linearGradient>
    <filter id="glBlur"><feGaussianBlur stdDeviation="10"/></filter>
  </defs>
  <rect width="800" height="450" fill="#0a2740"/>
  <path d="M0 0 L800 0 L800 450 L0 450Z" fill="url(#glI)"/>
  <path d="M0 0 L800 0 L800 90 C640 160 600 250 560 450 L240 450 C200 250 160 160 0 90Z" fill="#092235" opacity=".55"/>
  <ellipse cx="400" cy="450" rx="190" ry="120" fill="#d7f3ff" opacity=".9"/>
  <ellipse cx="400" cy="450" rx="150" ry="96" fill="#8fd8f5"/>
  <g opacity=".85">
    <path class="gl-shaft gl-s1" d="M300 0 L360 0 L300 450 L250 450Z" fill="url(#glShaft)"/>
    <path class="gl-shaft gl-s2" d="M470 0 L540 0 L520 450 L450 450Z" fill="url(#glShaft)"/>
  </g>
  <g fill="#eafaff" opacity=".5" filter="url(#glBlur)">
    <ellipse class="gl-mote" cx="220" cy="300" rx="7" ry="7"/>
    <ellipse class="gl-mote" cx="560" cy="240" rx="5" ry="5" style="animation-delay:3s"/>
    <ellipse class="gl-mote" cx="400" cy="340" rx="6" ry="6" style="animation-delay:5.5s"/>
  </g>
`
},

/* 7 — BLUE LAGOON -------------------------------------------- */
{
  key:'lagoon',
  ice:'Bláa lónið',
  title:'The Blue Lagoon',
  caption:'Seawater pulled from two kilometres down, cooled to about 38°C, and coloured by dissolved silica.',
  svg:`
  <defs>
    <linearGradient id="laSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1f3350"/><stop offset="100%" stop-color="#7f8fa0"/>
    </linearGradient>
    <linearGradient id="laW" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a5e4ee"/><stop offset="100%" stop-color="#5bb9cf"/>
    </linearGradient>
    <filter id="laBlur"><feGaussianBlur stdDeviation="12"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#laSky)"/>
  <path d="M0 200 L170 160 L330 198 L520 152 L700 196 L800 172 L800 300 L0 300Z" fill="#3c4653"/>
  <rect y="250" width="800" height="200" fill="url(#laW)"/>
  <g fill="#2c3440">
    <path d="M60 268 C100 236 160 240 190 268 Z"/>
    <path d="M600 262 C650 226 720 234 756 262 Z"/>
    <path d="M330 258 C360 238 400 240 424 258 Z"/>
  </g>
  <g filter="url(#laBlur)" opacity=".62">
    <ellipse class="la-steam la-t1" cx="180" cy="250" rx="60" ry="30" fill="#fff"/>
    <ellipse class="la-steam la-t2" cx="400" cy="250" rx="76" ry="34" fill="#fff"/>
    <ellipse class="la-steam la-t3" cx="620" cy="250" rx="66" ry="30" fill="#fff"/>
    <ellipse class="la-steam la-t4" cx="290" cy="250" rx="50" ry="26" fill="#fff"/>
    <ellipse class="la-steam la-t5" cx="520" cy="250" rx="58" ry="28" fill="#fff"/>
  </g>
  <g fill="#fff" opacity=".28">
    <ellipse class="re-wave re-w1" cx="360" cy="330" rx="200" ry="7"/>
    <ellipse class="re-wave re-w2" cx="480" cy="380" rx="240" ry="8"/>
  </g>`
},

/* 8 — HORSE -------------------------------------------------- */
{
  key:'horse',
  ice:'Íslenski hesturinn',
  title:'The Icelandic horse',
  caption:'Bred pure for a thousand years. Leave the island once and you are never allowed back.',
  svg:`
  <defs>
    <linearGradient id="hoSky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4d7399"/><stop offset="100%" stop-color="#e0cdb0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#hoSky2)"/>
  <ellipse class="ho-cloud ho-c1" cx="180" cy="80" rx="80" ry="22" fill="#fff" opacity=".55"/>
  <ellipse class="ho-cloud ho-c2" cx="580" cy="56" rx="100" ry="26" fill="#fff" opacity=".45"/>
  <path d="M0 230 L170 176 L340 224 L520 168 L700 220 L800 192 L800 300 L0 300Z" fill="#6b7b7a"/>
  <path d="M0 268 L220 248 L460 272 L800 250 L800 450 L0 450Z" fill="#6d8551"/>
  <path d="M0 320 L260 302 L540 326 L800 306 L800 450 L0 450Z" fill="#587045"/>
  <g class="ho-horse">
    <path d="M300 380 C300 330 330 312 372 312 L468 312 C506 312 524 332 524 372 L524 400 L496 400 L496 364 L344 364 L344 400 L316 400 Z" fill="#4a2f22"/>
    <rect x="330" y="360" width="16" height="52" rx="6" fill="#4a2f22"/>
    <rect x="404" y="362" width="15" height="50" rx="6" fill="#40281d"/>
    <rect x="466" y="360" width="16" height="52" rx="6" fill="#4a2f22"/>
    <rect x="500" y="362" width="15" height="50" rx="6" fill="#40281d"/>
    <path d="M300 340 C268 330 250 296 258 268 L288 258 L300 284 Z" fill="#4a2f22"/>
    <path d="M256 272 L246 246 L266 258 Z" fill="#4a2f22"/>
    <circle cx="272" cy="286" r="4" fill="#120a06"/>
    <path class="ho-mane" d="M292 258 C316 246 340 262 348 296 C330 272 310 268 294 280 Z" fill="#e8dcc4"/>
    <path class="ho-tail" d="M524 330 C556 340 566 380 552 412 C548 378 536 356 520 352 Z" fill="#e8dcc4"/>
  </g>
  <g fill="#4a6136">
    <path class="ho-grass g1" d="M80 450 L86 404 L92 450Z"/>
    <path class="ho-grass g2" d="M170 450 L176 398 L182 450Z"/>
    <path class="ho-grass g3" d="M640 450 L646 400 L652 450Z"/>
    <path class="ho-grass g1" d="M720 450 L726 410 L732 450Z"/>
  </g>`
},

/* 9 — WHALE -------------------------------------------------- */
{
  key:'whale',
  ice:'Hvalur',
  title:'A humpback sounds',
  caption:'Húsavík in the north calls itself the whale capital of Europe, and it is not really bragging.',
  svg:`
  <defs>
    <linearGradient id="whSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d4663"/><stop offset="100%" stop-color="#9fb3c2"/>
    </linearGradient>
    <linearGradient id="whSea2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#43647b"/><stop offset="100%" stop-color="#1d3648"/>
    </linearGradient>
    <filter id="whBlur"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#whSky)"/>
  <path d="M0 200 L140 148 L280 196 L430 140 L600 192 L800 156 L800 240 L0 240Z" fill="#54667a" opacity=".85"/>
  <rect y="230" width="800" height="220" fill="url(#whSea2)"/>
  <g class="wh-whale">
    <path d="M400 300 C370 250 360 210 382 176 C392 200 400 220 400 240 C400 220 408 200 418 176 C440 210 430 250 400 300 Z" fill="#20303f"/>
    <path d="M400 296 C386 264 382 240 390 218 C396 236 400 256 400 272 Z" fill="#2b3f52"/>
  </g>
  <ellipse class="wh-splash" cx="400" cy="300" rx="70" ry="12" fill="#eaf4f9" opacity=".7"/>
  <g fill="#dceaf2" opacity=".55">
    <ellipse class="re-wave re-w1" cx="250" cy="330" rx="200" ry="8"/>
    <ellipse class="re-wave re-w2" cx="560" cy="372" rx="240" ry="9"/>
    <ellipse class="re-wave re-w1" cx="380" cy="416" rx="260" ry="10"/>
  </g>
  <g filter="url(#whBlur)" opacity=".5">
    <ellipse class="wh-blow" cx="400" cy="230" rx="22" ry="40" fill="#fff"/>
  </g>`
},

/* 10 — TURF HOUSE -------------------------------------------- */
{
  key:'turf',
  ice:'Torfbær',
  title:'A turf house at dusk',
  caption:'Walls of stacked sod, a metre thick. For a thousand years this was how you survived the winter.',
  svg:`
  <defs>
    <linearGradient id="tuSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1730"/><stop offset="60%" stop-color="#2f3a5e"/>
      <stop offset="100%" stop-color="#8a6b7a"/>
    </linearGradient>
    <filter id="tuBlur"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <rect width="800" height="450" fill="url(#tuSky)"/>
  <circle class="ar-star" cx="110" cy="52" r="1.6" fill="#fff"/>
  <circle class="ar-star" cx="300" cy="34" r="1.2" fill="#fff" style="animation-delay:.8s"/>
  <circle class="ar-star" cx="520" cy="60" r="1.4" fill="#fff" style="animation-delay:1.6s"/>
  <circle class="ar-star" cx="700" cy="40" r="1.3" fill="#fff" style="animation-delay:2.3s"/>
  <circle cx="660" cy="86" r="26" fill="#f4ead2" opacity=".9"/>
  <path d="M0 250 L180 198 L360 246 L540 192 L720 244 L800 220 L800 320 L0 320Z" fill="#1a2138"/>
  <rect y="300" width="800" height="150" fill="#2b3a2a"/>
  <g>
    <path d="M230 320 L230 268 C230 244 258 230 290 230 C322 230 350 244 350 268 L350 320 Z" fill="#3f5233"/>
    <path d="M222 272 C222 240 252 222 290 222 C328 222 358 240 358 272 L350 272 C350 248 324 234 290 234 C256 234 230 248 230 272 Z" fill="#5c7a42"/>
    <rect x="268" y="282" width="44" height="38" fill="#2a1d14"/>
    <rect x="276" y="290" width="12" height="12" fill="#ffd27a"/>
  </g>
  <g>
    <path d="M380 320 L380 260 C380 234 412 218 450 218 C488 218 520 234 520 260 L520 320 Z" fill="#46583a"/>
    <path d="M372 264 C372 230 406 210 450 210 C494 210 528 230 528 264 L520 264 C520 238 490 222 450 222 C410 222 380 238 380 264 Z" fill="#688a4c"/>
    <rect x="424" y="276" width="52" height="44" fill="#2a1d14"/>
    <rect x="434" y="286" width="14" height="14" fill="#ffd27a"/>
    <rect x="454" y="286" width="14" height="14" fill="#ffc35c"/>
  </g>
  <g filter="url(#tuBlur)" opacity=".5">
    <ellipse class="tu-smoke" cx="450" cy="212" rx="14" ry="12" fill="#e6e9ee"/>
    <ellipse class="tu-smoke" cx="450" cy="212" rx="11" ry="10" fill="#e6e9ee" style="animation-delay:2.4s"/>
    <ellipse class="tu-smoke" cx="290" cy="224" rx="10" ry="9"  fill="#e6e9ee" style="animation-delay:1.2s"/>
  </g>`
},

/* 11 — SNOW / BLACK CHURCH ----------------------------------- */
{
  key:'snow',
  ice:'Búðakirkja',
  title:'The black church',
  caption:'One small tarred church on the Snæfellsnes peninsula, with nothing around it for miles.',
  svg:`
  <defs>
    <linearGradient id="snSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c2740"/><stop offset="100%" stop-color="#6d7f96"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#snSky)"/>
  <path d="M0 240 L140 172 L280 232 L440 160 L600 226 L800 180 L800 320 L0 320Z" fill="#48566d"/>
  <path d="M140 172 L172 196 L108 196Z" fill="#dfe8f2"/>
  <path d="M440 160 L478 190 L402 190Z" fill="#dfe8f2"/>
  <path d="M800 180 L800 210 L752 206Z" fill="#dfe8f2"/>
  <rect y="300" width="800" height="150" fill="#e8eef6"/>
  <path d="M0 300 C160 288 260 308 420 298 C560 290 660 310 800 300 L800 340 L0 340Z" fill="#f4f8fc"/>
  <g>
    <rect x="352" y="252" width="96" height="66" fill="#14161c"/>
    <path d="M344 254 L400 214 L456 254 Z" fill="#0d0f14"/>
    <path d="M344 254 L400 214 L456 254 Z" fill="none"/>
    <path d="M352 250 L400 216 L448 250" fill="none" stroke="#e8eef6" stroke-width="5" stroke-linejoin="round"/>
    <rect x="392" y="188" width="16" height="30" fill="#14161c"/>
    <rect x="386" y="182" width="28" height="10" fill="#0d0f14"/>
    <rect x="396" y="164" width="7" height="22" fill="#14161c"/>
    <rect x="390" y="171" width="19" height="6" fill="#14161c"/>
    <rect x="386" y="288" width="24" height="30" fill="#3a2a1c"/>
    <rect x="364" y="266" width="15" height="16" fill="#ffd27a"/>
    <rect x="422" y="266" width="15" height="16" fill="#ffd27a"/>
  </g>
  <g class="sn-field" fill="#fff">
    <circle class="sn-flake f1" cx="60"  cy="0" r="3"/><circle class="sn-flake f2" cx="150" cy="0" r="2.2"/>
    <circle class="sn-flake f3" cx="240" cy="0" r="3.4"/><circle class="sn-flake f4" cx="330" cy="0" r="2.6"/>
    <circle class="sn-flake f5" cx="420" cy="0" r="3.1"/><circle class="sn-flake f1" cx="510" cy="0" r="2.4"/>
    <circle class="sn-flake f2" cx="600" cy="0" r="3.3"/><circle class="sn-flake f3" cx="690" cy="0" r="2.7"/>
    <circle class="sn-flake f4" cx="760" cy="0" r="3"/>  <circle class="sn-flake f5" cx="105" cy="0" r="2.5"/>
    <circle class="sn-flake f3" cx="285" cy="0" r="2.9"/><circle class="sn-flake f1" cx="465" cy="0" r="2.3"/>
    <circle class="sn-flake f4" cx="645" cy="0" r="3.2"/><circle class="sn-flake f2" cx="375" cy="0" r="2.8"/>
  </g>`
},

/* 12 — SHEEP ------------------------------------------------- */
{
  key:'sheep',
  ice:'Kindur',
  title:'Outnumbered',
  caption:'Roughly two sheep for every person on the island. In September they are rounded up off the highlands.',
  svg:`
  <defs>
    <linearGradient id="shSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6d98bd"/><stop offset="100%" stop-color="#cfe0e8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#shSky)"/>
  <ellipse class="ho-cloud ho-c1" cx="200" cy="70" rx="90" ry="24" fill="#fff" opacity=".7"/>
  <ellipse class="ho-cloud ho-c2" cx="620" cy="50" rx="110" ry="28" fill="#fff" opacity=".6"/>
  <path d="M0 210 L160 150 L320 206 L500 142 L680 202 L800 168 L800 280 L0 280Z" fill="#7b8a8e"/>
  <path d="M160 150 L190 172 L130 172Z" fill="#e6eef4"/>
  <path d="M500 142 L534 168 L466 168Z" fill="#e6eef4"/>
  <path d="M0 250 C200 226 340 262 520 244 C660 230 730 254 800 244 L800 450 L0 450Z" fill="#7fa054"/>
  <path d="M0 322 C180 306 360 338 560 320 C680 310 740 330 800 322 L800 450 L0 450Z" fill="#628247"/>
  <g class="sh-a">
    <ellipse cx="0" cy="0" rx="40" ry="28" fill="#f4f1ea"/>
    <circle cx="-34" cy="-12" r="15" fill="#2c2a28"/>
    <circle cx="-40" cy="-15" r="2.6" fill="#fff"/>
    <rect x="-22" y="20" width="8" height="24" rx="3" fill="#2c2a28"/>
    <rect x="16"  y="20" width="8" height="24" rx="3" fill="#2c2a28"/>
  </g>
  <g class="sh-b">
    <ellipse cx="0" cy="0" rx="32" ry="22" fill="#efeade"/>
    <circle cx="-27" cy="-9" r="12" fill="#332f2c"/>
    <circle cx="-32" cy="-12" r="2.2" fill="#fff"/>
    <rect x="-17" y="16" width="7" height="20" rx="3" fill="#332f2c"/>
    <rect x="12"  y="16" width="7" height="20" rx="3" fill="#332f2c"/>
  </g>
  <g class="sh-c">
    <ellipse cx="0" cy="0" rx="26" ry="18" fill="#f6f3ec"/>
    <circle cx="-22" cy="-7" r="10" fill="#2c2a28"/>
    <circle cx="-26" cy="-10" r="2" fill="#fff"/>
    <rect x="-14" y="13" width="6" height="17" rx="3" fill="#2c2a28"/>
    <rect x="9"   y="13" width="6" height="17" rx="3" fill="#2c2a28"/>
  </g>`
},

/* 13 — PUFFIN ------------------------------------------------ */
{
  key:'puffin',
  ice:'Lundi',
  title:'You just missed the puffins',
  caption:'They nest here in millions all summer, then leave for the open Atlantic in August. Next time.',
  svg:`
  <defs>
    <linearGradient id="puSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a6f92"/><stop offset="100%" stop-color="#bcd0dc"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#puSky)"/>
  <ellipse class="ho-cloud ho-c2" cx="640" cy="70" rx="90" ry="22" fill="#fff" opacity=".5"/>
  <rect y="300" width="800" height="150" fill="#5b7386"/>
  <g fill="#eef5f8" opacity=".5">
    <ellipse class="re-wave re-w1" cx="300" cy="350" rx="240" ry="9"/>
    <ellipse class="re-wave re-w2" cx="560" cy="400" rx="260" ry="10"/>
  </g>
  <path d="M0 300 L0 250 C120 244 200 262 300 268 L340 300Z" fill="#4c5a45"/>
  <path d="M0 250 C120 244 200 262 300 268 L300 280 C200 274 120 256 0 262Z" fill="#6d8a4e"/>
  <g class="pu-bird">
    <ellipse cx="420" cy="250" rx="46" ry="58" fill="#1b1b20"/>
    <ellipse cx="404" cy="262" rx="30" ry="44" fill="#f7f7f4"/>
    <circle cx="420" cy="192" r="34" fill="#1b1b20"/>
    <ellipse cx="404" cy="196" rx="21" ry="24" fill="#f4f4f0"/>
    <path d="M382 192 C360 192 350 202 350 210 C350 220 362 228 384 226 Z" fill="#e8a13c"/>
    <path d="M382 196 C368 196 360 202 360 208 C360 214 368 218 382 216 Z" fill="#d1462f"/>
    <ellipse class="pu-eye" cx="398" cy="188" rx="4" ry="5" fill="#15151a"/>
    <path d="M452 236 C480 248 486 286 468 306 C466 276 460 254 448 246 Z" fill="#111116"/>
    <path d="M406 306 L398 322 L418 322 Z" fill="#e8a13c"/>
    <path d="M432 306 L426 322 L446 322 Z" fill="#e8a13c"/>
  </g>`
},

/* 14 — ICEBERG LAGOON ---------------------------------------- */
{
  key:'jokulsarlon',
  ice:'Jökulsárlón',
  title:'The glacier lagoon',
  caption:'Chunks calve off Breiðamerkurjökull and drift for years before the tide finally takes them out.',
  svg:`
  <defs>
    <linearGradient id="joSky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#22304a"/><stop offset="60%" stop-color="#6e829e"/>
      <stop offset="100%" stop-color="#e0b58c"/>
    </linearGradient>
    <linearGradient id="joIce" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eafaff"/><stop offset="100%" stop-color="#6fc4e8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#joSky2)"/>
  <path d="M0 208 L150 156 L300 204 L460 148 L620 200 L800 164 L800 256 L0 256Z" fill="#3f4d63"/>
  <path d="M150 156 L182 180 L118 180Z" fill="#e8f2f8"/>
  <path d="M460 148 L496 176 L424 176Z" fill="#e8f2f8"/>
  <rect y="248" width="800" height="202" fill="#2e4763"/>
  <g class="jo-berg jo-b1">
    <path d="M120 300 L160 252 L206 300 Z" fill="url(#joIce)"/>
    <path d="M120 300 L160 330 L206 300 Z" fill="#8fd0e8" opacity=".5"/>
  </g>
  <g class="jo-berg jo-b2">
    <path d="M370 312 L406 262 L452 288 L470 312 Z" fill="url(#joIce)"/>
    <path d="M370 312 L420 344 L470 312 Z" fill="#8fd0e8" opacity=".5"/>
  </g>
  <g class="jo-berg jo-b3">
    <path d="M600 296 L636 258 L676 296 Z" fill="url(#joIce)"/>
    <path d="M600 296 L638 322 L676 296 Z" fill="#8fd0e8" opacity=".5"/>
  </g>
  <g class="jo-berg jo-b4">
    <path d="M250 372 L282 336 L322 372 Z" fill="url(#joIce)"/>
    <path d="M250 372 L286 400 L322 372 Z" fill="#8fd0e8" opacity=".5"/>
  </g>
  <g fill="#cfe6f2" opacity=".35">
    <ellipse class="re-wave re-w2" cx="420" cy="420" rx="280" ry="9"/>
  </g>`
}
];
