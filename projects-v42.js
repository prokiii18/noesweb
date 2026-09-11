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
    css.id='v42-style';
    css.textContent=`
      .hero-v27{height:auto!important;min-height:0!important;overflow:hidden!important}
      .hero-v27 .v27-inner{position:relative!important;top:auto!important;height:auto!important;min-height:calc(100svh - 72px)!important;padding-bottom:28px!important;overflow:hidden!important}
      .hero-v27 .v27-gallery,.hero-v27 .v27-bottom{display:none!important}
      .hero-v27 .v27-copy{padding-bottom:0!important}
      .hero .gallery,.hero .heroBottom{display:none!important}
      .hero{height:auto!important;min-height:0!important}
      .hero .pin{position:relative!important;top:auto!important;height:auto!important;min-height:calc(100svh - 72px)!important;overflow:hidden!important;padding-bottom:28px!important}

      .clientRail.v42Rail{padding:0!important;background:#f6f2ea!important;border-top:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;overflow:hidden!important}
      .v42Label{padding:15px 22px 11px;font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
      .v42Marquee{overflow:hidden;border-top:1px solid var(--line)}
      .v42Track{display:flex;align-items:center;width:max-content;animation:v42logos 25s linear infinite;will-change:transform}
      .v42Marquee:hover .v42Track{animation-play-state:paused}
      .v42Item{height:98px;min-width:220px;display:flex;align-items:center;justify-content:center;padding:0 36px;border-right:1px solid var(--line);background:rgba(255,255,255,.22)}
      .v42Item img{display:block;width:auto;max-width:142px;max-height:52px;object-fit:contain;filter:none!important;opacity:1!important;transform:none!important}
      .v42Item.becher img{max-width:156px;max-height:46px}
      .v42Item.kiri img{max-width:106px;max-height:62px}
      .v42Item.biolage img{max-width:145px;max-height:48px}
      .v42Item.kerastase img{max-width:150px;max-height:50px}
      @keyframes v42logos{from{transform:translateX(0)}to{transform:translateX(-50%)}}

      .v38Logo.becher img{max-width:82%!important;max-height:86px!important;filter:none!important}
      .v38Logo.kiri img{max-width:54%!important;max-height:110px!important;filter:none!important}
      .v38Logo.biolage img{max-width:72%!important;max-height:62px!important;filter:none!important}
      .v38Logo.kerastase img{max-width:86%!important;max-height:105px!important;filter:none!important}

      @media(max-width:760px){
        .hero-v27 .v27-inner,.hero .pin{min-height:auto!important;padding-bottom:20px!important}
        .v42Label{padding:12px 14px 9px}
        .v42Item{height:84px;min-width:176px;padding:0 26px}
        .v42Item img{max-width:118px;max-height:42px}
        .v42Item.becher img{max-width:130px;max-height:38px}
        .v42Item.kiri img{max-width:88px;max-height:52px}
        .v38Logo.becher img{max-width:78%!important;max-height:58px!important}
        .v38Logo.kiri img{max-width:42%!important;max-height:68px!important}
        .v38Logo.biolage img{max-width:65%!important;max-height:42px!important}
      }
    `;
    if(!document.getElementById('v42-style')) document.head.appendChild(css);

    const rail=document.querySelector('.clientRail');
    if(rail && !rail.classList.contains('v42Rail')){
      rail.className='clientRail v42Rail';
      const items=[
        ['becher',`<img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Becherovka.svg/500px-Becherovka.svg.png" alt="Becherovka">`],
        ['kiri',`<img src="https://cdn.freebiesupply.com/logos/large/2x/kiri-logo-png-transparent.png" alt="Kiri">`],
        ['biolage',`<img src="https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png" alt="Biolage">`],
        ['kerastase',`<img src="https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png" alt="Kérastase">`],
        ['bonduelle',`<img src="https://static.wixstatic.com/media/9df8c5_7118d6da43634e5f80dea2260ae19822~mv2.png" alt="Bonduelle">`],
        ['lindt',`<img src="https://static.wixstatic.com/media/9df8c5_dbcc63e4f88148199753aeab816a9c53~mv2.png" alt="Lindt">`],
        ['ahold',`<img src="https://static.wixstatic.com/media/9df8c5_39a698af2c3248be8f99d1b000102418~mv2.png" alt="Ahold">`]
      ];
      const html=items.concat(items).map(([c,h])=>`<div class="v42Item ${c}">${h}</div>`).join('');
      rail.innerHTML=`<div class="v42Label">Vybrané značky</div><div class="v42Marquee"><div class="v42Track">${html}</div></div>`;
    }

    const story=document.getElementById('projectsV38Story');
    if(story){
      const photos=[...story.querySelectorAll('.v38Photo img')];
      const photoUrls=[
        'https://www.becherovka.com/wp-content/uploads/2022/11/560be8003ac3dda423d0f41813557681933b3f96.jpg',
        'https://static.wixstatic.com/media/9df8c5_5eaeb0c2dfd0418b9adc0cc4a97f55a6~mv2.jpg',
        'https://static.wixstatic.com/media/9df8c5_2f0d2e0151984753ac5395d0dbc0584f~mv2.jpg',
        'https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg'
      ];
      const photoAlts=['Becherovka','Kiri','Biolage','Kérastase'];
      photos.forEach((img,i)=>{if(photoUrls[i]){img.src=photoUrls[i];img.alt=photoAlts[i]}});

      const brands=[...story.querySelectorAll('.v38Brand')];
      const data=[
        {
          cls:'becher',
          logo:'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Becherovka.svg/500px-Becherovka.svg.png',
          alt:'Becherovka',
          text:'Silná značka, výrazný vizuál a aktivace, která funguje přímo mezi lidmi.',
          tags:['Experiential','Activation']
        },
        {
          cls:'kiri',
          logo:'https://cdn.freebiesupply.com/logos/large/2x/kiri-logo-png-transparent.png',
          alt:'Kiri',
          text:'Hravá retailová realizace, která dostává Kiri přímo do místa nákupu.',
          tags:['Retail','POS']
        },
        {
          cls:'biolage',
          logo:'https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png',
          alt:'Biolage',
          text:'Beauty komunikace a produkce s důrazem na čistý vizuál a detail značky.',
          tags:['Beauty','Production']
        },
        {
          cls:'kerastase',
          logo:'https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png',
          alt:'Kérastase',
          text:'Prémiová beauty realizace, kde stejně dobře funguje idea i exekuce.',
          tags:['Beauty','Creative']
        }
      ];
      brands.forEach((brand,i)=>{
        const d=data[i]; if(!d)return;
        const logo=brand.querySelector('.v38Logo');
        if(logo){logo.className=`v38Logo ${d.cls}`;logo.innerHTML=`<img src="${d.logo}" alt="${d.alt}">`;}
        const p=brand.querySelector('p'); if(p)p.textContent=d.text;
        const tags=brand.querySelector('.v38Tags'); if(tags)tags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');
      });

      const type=story.querySelector('.v38Type');
      const types=['Experiential · Activation','Retail · POS','Beauty · Production','Beauty · Creative'];
      const oldSet=window.__v42SetProject;
      if(!oldSet){
        window.__v42SetProject=true;
        let last=-1;
        const syncType=()=>{
          const n=parseInt((story.querySelector('.v38No')?.textContent||'01'),10)-1;
          if(type && n!==last && types[n]){type.textContent=types[n];last=n;}
          requestAnimationFrame(syncType);
        };
        syncType();
      }
    }
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    run();
    if(document.getElementById('projectsV38Story') || tries>40) clearInterval(timer);
  },80);
  run();
})();