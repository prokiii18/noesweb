(()=>{
  function run(){
    const hero=document.querySelector('.hero-v27')||document.querySelector('.hero');
    if(hero){
      const gallery=hero.querySelector('.v27-gallery,.gallery');
      if(gallery) gallery.remove();
      const bottom=hero.querySelector('.v27-bottom,.heroBottom');
      if(bottom) bottom.remove();
    }

    const css=document.createElement('style');
    css.id='v41-style';
    css.textContent=`
      .hero-v27{height:auto!important;min-height:0!important;overflow:hidden!important}
      .hero-v27 .v27-inner{position:relative!important;top:auto!important;height:auto!important;min-height:calc(100svh - 72px)!important;padding-bottom:28px!important;overflow:hidden!important}
      .hero-v27 .v27-gallery,.hero-v27 .v27-bottom{display:none!important}
      .hero-v27 .v27-copy{padding-bottom:0!important}
      .hero .gallery,.hero .heroBottom{display:none!important}
      .hero{height:auto!important;min-height:0!important}
      .hero .pin{position:relative!important;top:auto!important;height:auto!important;min-height:calc(100svh - 72px)!important;overflow:hidden!important;padding-bottom:28px!important}

      .clientRail.v41Rail{padding:0!important;background:#f6f2ea!important;border-top:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;overflow:hidden!important}
      .v41Label{padding:15px 22px 11px;font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
      .v41Marquee{overflow:hidden;border-top:1px solid var(--line)}
      .v41Track{display:flex;align-items:center;width:max-content;animation:v41logos 26s linear infinite;will-change:transform}
      .v41Marquee:hover .v41Track{animation-play-state:paused}
      .v41Item{height:98px;min-width:220px;display:flex;align-items:center;justify-content:center;padding:0 36px;border-right:1px solid var(--line);background:rgba(255,255,255,.22)}
      .v41Item img{display:block;width:auto;max-width:140px;max-height:50px;object-fit:contain;filter:none!important;opacity:1!important;transform:none!important}
      .v41Item.relax img{max-height:62px;max-width:118px}
      .v41BecherBadge{display:inline-flex;align-items:center;justify-content:center;background:#2f3494;padding:12px 18px}
      .v41BecherBadge img{max-width:150px;max-height:32px;filter:brightness(0) invert(1)!important}
      @keyframes v41logos{from{transform:translateX(0)}to{transform:translateX(-50%)}}

      .v38Logo.becher .v41BecherBadge{padding:18px 24px}
      .v38Logo.becher .v41BecherBadge img{max-width:220px;max-height:42px}
      .v38Logo.biolage img{max-height:52px!important}

      @media(max-width:760px){
        .hero-v27 .v27-inner,.hero .pin{min-height:auto!important;padding-bottom:20px!important}
        .v41Label{padding:12px 14px 9px}
        .v41Item{height:84px;min-width:176px;padding:0 26px}
        .v41Item img{max-width:118px;max-height:42px}
        .v41Item.relax img{max-height:52px}
        .v41BecherBadge{padding:10px 14px}
        .v41BecherBadge img{max-width:126px;max-height:27px}
      }
    `;
    if(!document.getElementById('v41-style')) document.head.appendChild(css);

    const rail=document.querySelector('.clientRail');
    if(rail && !rail.classList.contains('v41Rail')){
      rail.className='clientRail v41Rail';
      const items=[
        ['becher',`<span class="v41BecherBadge"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Becherovka.svg" alt="Becherovka"></span>`],
        ['biolage',`<img src="https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png" alt="Biolage">`],
        ['kerastase',`<img src="https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png" alt="Kérastase">`],
        ['relax',`<img src="https://photo.maspex.com/img/thumbs/w1920h1920q100/resources/products/RELAX-LOGO_23.png" alt="Relax">`],
        ['bonduelle',`<img src="https://static.wixstatic.com/media/9df8c5_7118d6da43634e5f80dea2260ae19822~mv2.png" alt="Bonduelle">`],
        ['lindt',`<img src="https://static.wixstatic.com/media/9df8c5_dbcc63e4f88148199753aeab816a9c53~mv2.png" alt="Lindt">`],
        ['ahold',`<img src="https://static.wixstatic.com/media/9df8c5_39a698af2c3248be8f99d1b000102418~mv2.png" alt="Ahold">`]
      ];
      const html=items.concat(items).map(([c,h])=>`<div class="v41Item ${c}">${h}</div>`).join('');
      rail.innerHTML=`<div class="v41Label">Vybrané značky</div><div class="v41Marquee"><div class="v41Track">${html}</div></div>`;
    }

    const story=document.getElementById('projectsV38Story');
    if(story){
      const photos=[...story.querySelectorAll('.v38Photo img')];
      if(photos[0]) photos[0].src='https://www.becherovka.com/wp-content/uploads/2022/11/560be8003ac3dda423d0f41813557681933b3f96.jpg';
      if(photos[1]) photos[1].src='https://static.wixstatic.com/media/9df8c5_5eaeb0c2dfd0418b9adc0cc4a97f55a6~mv2.jpg';

      const brands=[...story.querySelectorAll('.v38Brand')];
      if(brands[0]){
        const logo=brands[0].querySelector('.v38Logo');
        if(logo){logo.className='v38Logo becher';logo.innerHTML='<span class="v41BecherBadge"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Becherovka.svg" alt="Becherovka"></span>';}
        const p=brands[0].querySelector('p');
        if(p) p.textContent='Silná značka, výrazný vizuál a aktivace, která funguje přímo mezi lidmi.';
      }
      if(brands[1]){
        const logo=brands[1].querySelector('.v38Logo');
        if(logo){logo.className='v38Logo biolage';logo.innerHTML='<img src="https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png" alt="Biolage">';}
        const p=brands[1].querySelector('p');
        if(p) p.textContent='Beauty komunikace a produkce s důrazem na čistý vizuál a detail značky.';
      }
    }
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    run();
    if(document.getElementById('projectsV38Story') || tries>30) clearInterval(timer);
  },80);
  run();
})();