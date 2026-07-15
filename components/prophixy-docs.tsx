<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PROPHIXY — Predict Smarter. Decide Better. Shape Africa's Future.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --bg: #08060F;
    --bg-2: #0D0A19;
    --panel: #120E22;
    --panel-2: #16112A;
    --line: rgba(196, 181, 253, 0.10);
    --line-strong: rgba(196, 181, 253, 0.22);
    --ink: #F3F1FA;
    --ink-dim: #ABA5C4;
    --ink-dimmer: #6E6890;

    --violet: #7C3AED;
    --violet-bright: #A78BFA;
    --magenta: #E946B0;
    --cyan: #35D0C9;
    --amber: #F5B942;
    --green: #34D399;

    --grad: linear-gradient(90deg, var(--violet) 0%, var(--magenta) 100%);
  }

  *{ box-sizing:border-box; margin:0; padding:0; }
  html{ scroll-behavior:smooth; }

  body{
    background: var(--bg);
    color: var(--ink);
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::selection{ background: var(--violet); color: #fff; }
  a{ color:inherit; text-decoration:none; }

  .display{ font-family: 'Sora', sans-serif; }
  .mono{ font-family: 'JetBrains Mono', monospace; }

  /* ambient starfield */
  .bg-stars{
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .bg-glow{
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 800px 500px at 15% -5%, rgba(124,58,237,0.20), transparent 60%),
      radial-gradient(ellipse 700px 500px at 85% 10%, rgba(233,70,176,0.14), transparent 60%);
  }

  .wrap{ position:relative; z-index:1; max-width: 1400px; margin: 0 auto; }

  /* ===================== TOP BAR ===================== */
  .topbar{
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 1.4rem 2.5rem;
    border-bottom: 1px solid var(--line);
    position: sticky;
    top:0;
    z-index: 30;
    background: rgba(8,6,15,0.85);
    backdrop-filter: blur(14px);
  }
  .brand{ display:flex; align-items:center; gap:0.7rem; }
  .brand-mark{ width:34px; height:34px; }
  .brand-name{
    font-family:'Sora', sans-serif;
    font-weight:800;
    font-size:1.3rem;
    letter-spacing: 0.01em;
  }
  .topbar-actions{ display:flex; gap:0.75rem; }
  .btn{
    font-family:'Space Grotesk', sans-serif;
    font-size:0.86rem;
    font-weight:600;
    padding: 0.6rem 1.3rem;
    border-radius: 8px;
    cursor:pointer;
    border: 1px solid var(--line-strong);
    transition: transform 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    display:inline-block;
  }
  .btn:hover{ transform: translateY(-1px); }
  .btn-primary{
    background: var(--grad);
    border: none;
    color: #fff;
  }
  .btn-primary:hover{ opacity: 0.92; }
  .btn-ghost{ color: var(--ink); background: transparent; }
  .btn-ghost:hover{ border-color: var(--violet-bright); }

  @media (max-width: 720px){
    .topbar-actions .btn:first-child{ display:none; }
  }

  /* ===================== NAV RAIL (11 sections) ===================== */
  .navrail{
    position: sticky;
    top: 73px;
    z-index: 25;
    background: rgba(13,10,25,0.92);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
    overflow-x: auto;
    scrollbar-width: none;
  }
  .navrail::-webkit-scrollbar{ display:none; }
  .navrail-inner{
    display:flex;
    gap: 0.25rem;
    padding: 0.9rem 2.5rem;
    min-width: max-content;
  }
  .navitem{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 0.45rem;
    padding: 0.4rem 1.1rem;
    border-radius: 10px;
    color: var(--ink-dimmer);
    transition: color 0.15s ease, background 0.15s ease;
    position: relative;
  }
  .navitem:hover{ color: var(--ink); background: rgba(255,255,255,0.03); }
  .navitem.active{ color: var(--violet-bright); }
  .navitem.active .navitem-icon{
    border-color: var(--violet-bright);
    box-shadow: 0 0 0 3px rgba(124,58,237,0.15);
  }
  .navitem-icon{
    width: 34px; height:34px;
    border-radius: 50%;
    border: 1px solid var(--line-strong);
    display:flex; align-items:center; justify-content:center;
    font-size: 1rem;
    background: var(--panel);
    flex-shrink:0;
  }
  .navitem-label{
    font-family:'JetBrains Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* ===================== HERO ===================== */
  .hero{
    padding: 5.5rem 2.5rem 4rem 2.5rem;
    text-align:center;
    position: relative;
  }
  .hero-eyebrow{
    font-family:'JetBrains Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 1.5rem;
  }
  .hero h1{
    font-family:'Sora', sans-serif;
    font-weight: 800;
    font-size: clamp(2.6rem, 6vw, 4.6rem);
    line-height: 1.05;
    letter-spacing: -0.01em;
    max-width: 900px;
    margin: 0 auto 1.4rem auto;
  }
  .hero h1 .accent{
    background: var(--grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .hero-tagline{
    font-family:'Sora', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    color: var(--ink-dim);
    margin-bottom: 2.5rem;
  }
  .hero-actions{
    display:flex;
    gap: 1rem;
    justify-content:center;
    margin-bottom: 3rem;
  }
  .hero-actions .btn{ padding: 0.85rem 1.9rem; font-size: 0.95rem; }
  .not-betting{
    display:inline-flex;
    flex-direction: column;
    gap: 0.15rem;
    margin: 0 auto;
  }
  .not-betting span:first-child{
    font-size: 0.95rem;
    color: var(--ink-dimmer);
    text-decoration: line-through;
    text-decoration-color: rgba(110,104,144,0.5);
  }
  .not-betting span:last-child{
    font-family:'Sora', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--ink);
  }

  /* ===================== SECTION SHELL ===================== */
  .section{
    padding: 5rem 2.5rem;
    border-top: 1px solid var(--line);
    scroll-margin-top: 150px;
  }
  .section-head{
    display:flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }
  .section-icon{
    width: 46px; height:46px;
    border-radius: 12px;
    display:flex; align-items:center; justify-content:center;
    font-size: 1.3rem;
    border: 1px solid var(--line-strong);
    background: var(--panel);
    flex-shrink:0;
  }
  .section-num{
    font-family:'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--ink-dimmer);
    letter-spacing: 0.1em;
  }
  .section-title{
    font-family:'Sora', sans-serif;
    font-weight: 700;
    font-size: clamp(1.6rem, 3vw, 2.1rem);
    letter-spacing: -0.01em;
  }
  .section-sub{
    color: var(--ink-dim);
    max-width: 640px;
    font-size: 1.02rem;
    margin: 1rem 0 2.5rem 0;
  }
  .section-inner{ max-width: 1200px; margin: 0 auto; }

  p{ color: var(--ink-dim); margin-bottom: 1rem; max-width: 68ch; }
  strong{ color: var(--ink); font-weight: 600; }

  /* generic card grid */
  .grid{
    display:grid;
    gap: 1.25rem;
  }
  .grid-2{ grid-template-columns: repeat(2, 1fr); }
  .grid-3{ grid-template-columns: repeat(3, 1fr); }
  .grid-4{ grid-template-columns: repeat(4, 1fr); }

  .card{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 1.6rem;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
  .card:hover{ border-color: var(--line-strong); transform: translateY(-2px); }

  .card-icon{
    width:40px; height:40px;
    border-radius: 10px;
    display:flex; align-items:center; justify-content:center;
    font-size:1.15rem;
    margin-bottom: 1rem;
  }
  .card h3{
    font-family:'Sora', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  .card p{ font-size: 0.9rem; margin-bottom: 0.8rem; }
  .card ul{ list-style:none; display:flex; flex-direction:column; gap:0.4rem; }
  .card ul li{
    font-size: 0.85rem;
    color: var(--ink-dimmer);
    padding-left: 1rem;
    position: relative;
  }
  .card ul li::before{
    content:'—';
    position:absolute; left:0;
    color: var(--violet-bright);
    opacity:0.7;
  }

  /* tinted icon backgrounds keyed by hue */
  .tint-violet{ background: rgba(124,58,237,0.15); color: var(--violet-bright); }
  .tint-magenta{ background: rgba(233,70,176,0.15); color: var(--magenta); }
  .tint-cyan{ background: rgba(53,208,201,0.15); color: var(--cyan); }
  .tint-amber{ background: rgba(245,185,66,0.15); color: var(--amber); }
  .tint-green{ background: rgba(52,211,153,0.15); color: var(--green); }

  /* checklist */
  .checklist{ display:flex; flex-direction:column; gap:0.6rem; margin: 1.5rem 0; }
  .check-item{
    display:flex; align-items:center; gap:0.85rem;
    font-size: 0.95rem; color: var(--ink-dim);
    padding: 0.7rem 1rem;
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 10px;
  }
  .check-mark{
    width:22px; height:22px; border-radius:50%;
    background: var(--grad);
    color:#fff; font-size:0.7rem;
    display:flex; align-items:center; justify-content:center;
    flex-shrink:0;
  }

  /* ===================== ECOSYSTEM PILLARS ===================== */
  .pillar-card{
    text-align:left;
    position: relative;
    overflow: hidden;
  }
  .pillar-card::before{
    content:'';
    position:absolute; top:0; left:0; right:0; height:3px;
    background: var(--grad);
  }
  .pillar-badge{
    font-family:'JetBrains Mono', monospace;
    font-size:0.7rem;
    color: var(--violet-bright);
    margin-bottom: 0.8rem;
  }

  /* reputation list */
  .rep-grid{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap: 0.75rem;
    margin: 1.5rem 0;
  }
  .rep-chip{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 0.9rem 1rem;
    font-size: 0.85rem;
    color: var(--ink-dim);
  }

  /* ===================== MEMBERSHIP TIERS ===================== */
  .tier-grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .tier-card{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 2rem;
    position: relative;
  }
  .tier-card.top{
    border-color: rgba(233,70,176,0.4);
    background: linear-gradient(180deg, rgba(233,70,176,0.06), var(--panel) 40%);
  }
  .tier-badge-corner{
    position:absolute; top:1.5rem; right:1.5rem;
    font-family:'JetBrains Mono', monospace;
    font-size:0.62rem;
    letter-spacing:0.08em;
    text-transform:uppercase;
    padding: 0.3rem 0.65rem;
    border-radius: 999px;
    background: var(--grad);
    color:#fff;
  }
  .tier-supply-tag{
    display:inline-block;
    font-family:'JetBrains Mono', monospace;
    font-size:0.7rem;
    color: var(--cyan);
    letter-spacing:0.05em;
    text-transform:uppercase;
    margin-bottom:1rem;
  }
  .tier-name{
    font-family:'Sora', sans-serif;
    font-weight:800;
    font-size:1.7rem;
    margin-bottom:0.3rem;
  }
  .tier-count{
    font-family:'JetBrains Mono', monospace;
    color: var(--ink-dimmer);
    font-size:0.85rem;
    margin-bottom:1rem;
  }
  .tier-desc{ font-size:0.92rem; margin-bottom:1.5rem; }
  .tier-benefits{ list-style:none; display:flex; flex-direction:column; gap:0.6rem; }
  .tier-benefits li{
    font-size:0.88rem; color:var(--ink-dim);
    padding-left:1.5rem; position:relative;
  }
  .tier-benefits li::before{
    content:'✦'; position:absolute; left:0; top:0.1rem;
    color: var(--violet-bright); font-size:0.75rem;
  }
  .tier-benefits li.divider-note{
    color: var(--magenta);
    font-style: italic;
    font-family: 'Sora', sans-serif;
    padding-left:0;
    margin: 0.3rem 0;
  }
  .tier-benefits li.divider-note::before{ content:none; }

  /* ===================== REWARDS ===================== */
  .points-grid{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .point-card{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 2rem;
    text-align:center;
  }
  .point-num{
    font-family:'Sora', sans-serif;
    font-weight: 800;
    font-size: 2.6rem;
    background: var(--grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height:1;
    margin-bottom: 0.5rem;
  }
  .point-label{ font-size:0.9rem; color: var(--ink-dim); }

  /* ===================== TGE ===================== */
  .tge-panel{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 2.5rem;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  /* ===================== ROADMAP ===================== */
  .roadmap-grid{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
  .rm-card{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 1.75rem;
  }
  .rm-phase-tag{
    font-family:'JetBrains Mono', monospace;
    font-size:0.68rem;
    color: var(--violet-bright);
    letter-spacing:0.08em;
    text-transform:uppercase;
    margin-bottom: 0.6rem;
  }
  .rm-title{
    font-family:'Sora', sans-serif;
    font-weight:700;
    font-size:1.15rem;
    margin-bottom:1.1rem;
  }
  .rm-items{ list-style:none; display:flex; flex-direction:column; gap:0.55rem; }
  .rm-items li{
    font-size:0.85rem;
    color: var(--ink-dim);
    display:flex;
    align-items:flex-start;
    gap:0.5rem;
  }
  .rm-check{
    width:16px; height:16px; border-radius:50%;
    flex-shrink:0; margin-top:0.15rem;
    display:flex; align-items:center; justify-content:center;
    font-size:0.6rem;
  }
  .rm-check.done{ background: var(--green); color:#08060F; }
  .rm-check.pending{ border: 1px solid var(--line-strong); color: transparent; }

  /* ===================== HOW IT WORKS STEPS ===================== */
  .steps-row{
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.75rem;
    margin-top: 2rem;
  }
  .step-card{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 1.25rem 1rem;
    text-align:center;
  }
  .step-num-badge{
    width:30px; height:30px;
    border-radius:50%;
    background: var(--grad);
    color:#fff;
    display:flex; align-items:center; justify-content:center;
    font-family:'JetBrains Mono', monospace;
    font-size:0.8rem;
    margin: 0 auto 0.75rem auto;
  }
  .step-text{ font-size:0.8rem; color: var(--ink-dim); line-height:1.4; }

  /* ===================== JOIN / CLOSING ===================== */
  .closing{
    text-align:center;
    padding: 5rem 2.5rem 6rem 2.5rem;
    position: relative;
  }
  .closing-panel{
    max-width: 780px;
    margin: 0 auto;
    background: var(--panel);
    border: 1px solid var(--line-strong);
    border-radius: 24px;
    padding: 3.5rem 2.5rem;
    position: relative;
    overflow:hidden;
  }
  .closing-panel::before{
    content:'';
    position:absolute; inset:0;
    background: radial-gradient(ellipse 500px 300px at 50% 0%, rgba(124,58,237,0.18), transparent 70%);
    pointer-events:none;
  }
  .closing-panel p{ margin: 0 auto 1.2rem auto; color: var(--ink-dim); }
  .closing-mantra{
    font-family:'Sora', sans-serif;
    font-weight: 800;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    background: var(--grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-top: 1.5rem;
    line-height: 1.3;
  }

  footer{
    text-align:center;
    padding: 2.5rem;
    font-family:'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--ink-dimmer);
    border-top: 1px solid var(--line);
  }

  /* ===================== RESPONSIVE ===================== */
  @media (max-width: 1024px){
    .grid-4{ grid-template-columns: repeat(2,1fr); }
    .grid-3{ grid-template-columns: repeat(2,1fr); }
    .roadmap-grid{ grid-template-columns: repeat(2,1fr); }
    .steps-row{ grid-template-columns: repeat(4,1fr); }
    .tge-panel{ grid-template-columns: 1fr; }
    .rep-grid{ grid-template-columns: repeat(2,1fr); }
  }
  @media (max-width: 720px){
    .topbar{ padding: 1rem 1.25rem; }
    .navrail-inner{ padding: 0.8rem 1.25rem; }
    .section{ padding: 3.5rem 1.25rem; }
    .hero{ padding: 3.5rem 1.25rem 3rem 1.25rem; }
    .grid-2, .grid-3, .grid-4{ grid-template-columns: 1fr; }
    .tier-grid{ grid-template-columns: 1fr; }
    .points-grid{ grid-template-columns: 1fr; }
    .roadmap-grid{ grid-template-columns: 1fr; }
    .steps-row{ grid-template-columns: repeat(2,1fr); }
    .rep-grid{ grid-template-columns: 1fr; }
    .hero-actions{ flex-direction: column; align-items:center; }
  }

  @media (prefers-reduced-motion: reduce){
    html{ scroll-behavior:auto; }
    *{ transition:none !important; animation:none !important; }
  }
</style>
</head>
<body>

<canvas class="bg-stars" id="bgCanvas"></canvas>
<div class="bg-glow"></div>

<div class="wrap">

  <!-- TOP BAR -->
  <div class="topbar">
    <div class="brand">
      <svg class="brand-mark" viewBox="0 0 34 34" fill="none">
        <path d="M4 26L17 4L30 26L17 20L4 26Z" fill="url(#gradmark)"/>
        <defs>
          <linearGradient id="gradmark" x1="4" y1="4" x2="30" y2="26" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7C3AED"/>
            <stop offset="1" stop-color="#E946B0"/>
          </linearGradient>
        </defs>
      </svg>
      <span class="brand-name">PROPHIXY</span>
    </div>
    <div class="topbar-actions">
      <a class="btn btn-primary" href="#join">Launch App</a>
      <a class="btn btn-ghost" href="#membership">Mint Membership</a>
    </div>
  </div>

  <!-- NAV RAIL -->
  <nav class="navrail">
    <div class="navrail-inner" id="navrailInner">
      <a class="navitem" data-target="home" href="#home"><span class="navitem-icon">🏠</span><span class="navitem-label">Home</span></a>
      <a class="navitem" data-target="introduction" href="#introduction"><span class="navitem-icon">📄</span><span class="navitem-label">Introduction</span></a>
      <a class="navitem" data-target="ecosystem" href="#ecosystem"><span class="navitem-icon">🧩</span><span class="navitem-label">Ecosystem</span></a>
      <a class="navitem" data-target="predictions" href="#predictions"><span class="navitem-icon">🎯</span><span class="navitem-label">Predictions</span></a>
      <a class="navitem" data-target="membership" href="#membership"><span class="navitem-icon">👑</span><span class="navitem-label">Membership</span></a>
      <a class="navitem" data-target="rewards" href="#rewards"><span class="navitem-icon">🎁</span><span class="navitem-label">Rewards</span></a>
      <a class="navitem" data-target="tge" href="#tge"><span class="navitem-icon">🪙</span><span class="navitem-label">TGE</span></a>
      <a class="navitem" data-target="roadmap" href="#roadmap"><span class="navitem-icon">🛣️</span><span class="navitem-label">Roadmap</span></a>
      <a class="navitem" data-target="security" href="#security"><span class="navitem-icon">🛡️</span><span class="navitem-label">Security</span></a>
      <a class="navitem" data-target="about" href="#about"><span class="navitem-icon">ℹ️</span><span class="navitem-label">About</span></a>
      <a class="navitem" data-target="join" href="#join"><span class="navitem-icon">🤝</span><span class="navitem-label">Join</span></a>
    </div>
  </nav>

  <!-- HOME / HERO -->
  <section class="hero" id="home">
    <div class="hero-eyebrow">/// Africa's Intelligence Network</div>
    <h1>Predict Smarter. <span class="accent">Decide Better.</span><br>Shape Africa's Future.</h1>
    <p cl