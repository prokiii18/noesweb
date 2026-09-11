(()=>{
  /* HERO — keep current copy, remove photos + scroll takeover */
  const hero=document.querySelector('.hero-v27');
  if(hero){const g=hero.querySelector('.v27-gallery');if(g)g.remove()}
  const hs=document.createElement('style');hs.textContent=`
    .hero-v27{height:auto!important;min-height:calc(100svh - 72px)!important;overflow:hidden!important;background:var(--paper)!important}
    .hero-v27 .v27-inner{position:relative!important;top:auto!important;height:auto!important;min-height:calc(100svh - 72px)!important;padding:116px 24px 44px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;overflow:hidden!important}
    .hero-v27 .v27-copy{width:min(1180px,100%)!important;margin:0 auto!important;padding:0!important;transform:none!important}
    .hero-v27 .v27-kicker,.hero-v27 .v27-title,.hero-v27 .v27-title .line,.hero-v27 .v27-sub,.hero-v27 .v27-cta,.hero-v27 .v27-burst{transform:none!important}
    .hero-v27 .v27-gallery{display:none!important}
    .hero-v27 .v27-bottom{width:min(1180px,100%)!important;margin:72px auto 0!important;opacity:1!important;transform:none!important}
    @media(max-width:760px){.hero-v27{min-height:calc(100svh - 64px)!important}.hero-v27 .v27-inner{min-height:calc(100svh - 64px)!important;padding:96px 14px 32px!important}.hero-v27 .v27-bottom{margin-top:52px!important}}
  `;document.head.appendChild(hs);

  /* CLIENTS — static, coloured, no duplicate marquee */
  const rail=document.querySelector('.clientRail');
  if(rail){
    rail.className='clientRail clientV40';
    rail.innerHTML=`<div class="clientV40Inner"><div class="clientV40Label">Vybrané značky</div><div class="clientV40Logos">
      <div class="clientV40Logo becher"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Becherovka.svg" alt="Becherovka"></div>
      <div class="clientV40Logo"><img src="https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png" alt="Biolage"></div>
      <div class="clientV40Logo"><img src="https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png" alt="Kérastase"></div>
      <div class="clientV40Logo relax"><img src="https://photo.maspex.com/img/thumbs/w1920h1920q100/resources/products/RELAX-LOGO_23.png" alt="Relax"></div>
      <div class="clientV40Logo"><img src="https://static.wixstatic.com/media/9df8c5_7118d6da43634e5f80dea2260ae19822~mv2.png" alt="Bonduelle"></div>
      <div class="clientV40Logo"><img src="https://static.wixstatic.com/media/9df8c5_dbcc63e4f88148199753aeab816a9c53~mv2.png" alt="Lindt"></div>
      <div class="clientV40Logo"><img src="https://static.wixstatic.com/media/9df8c5_39a698af2c3248be8f99d1b000102418~mv2.png" alt="Ahold"></div>
    </div></div>`;
  }
  const cs=document.createElement('style');cs.textContent=`
    .clientV40{padding:0!important;background:#f6f2ea!important;border-top:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;overflow:hidden!important}
    .clientV40Inner{display:grid;grid-template-columns:168px 1fr;max-width:1600px;margin:auto}.clientV40Label{display:flex;align-items:center;padding:0 26px;border-right:1px solid var(--line);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
    .clientV40Logos{display:grid;grid-template-columns:repeat(7,minmax(110px,1fr))}.clientV40Logo{height:102px;display:grid;place-items:center;padding:20px 22px;border-right:1px solid var(--line);background:transparent;transition:background .25s ease}.clientV40Logo:last-child{border-right:0}.clientV40Logo:hover{background:#fff}
    .clientV40Logo img{width:auto;max-width:140px;max-height:50px;object-fit:contain;filter:none!important;opacity:1!important;transform:none!important}.clientV40Logo.becher img{max-height:44px;max-width:145px}.clientV40Logo.relax img{max-height:62px}
    @media(max-width:980px){.clientV40Inner{grid-template-columns:1fr}.clientV40Label{min-height:44px;border-right:0;border-bottom:1px solid var(--line);padding:0 18px}.clientV40Logos{display:flex;overflow-x:auto;scrollbar-width:none}.clientV40Logos::-webkit-scrollbar{display:none}.clientV40Logo{flex:0 0 150px;height:84px}}
  `;document.head.appendChild(cs);

  /* REALIZACE — same current sticky layout, corrected NOE'S assets */
  const story=document.getElementById('projectsV38Story');
  if(story){
    const photos=story.querySelectorAll('.v38Photo img');
    const srcs=[
      'https://static.wixstatic.com/media/9df8c5_2aa563ae098f47fb887124e65f6cc83f~mv2.jpg',
      'https://static.wixstatic.com/media/9df8c5_006fb498fd764b999fd8601db469ec97~mv2.jpg',
      'https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg',
      'https://static.wixstatic.com/media/9df8c5_d55d1cdf2bde4f2d95eaa9a93e3772d4~mv2.jpg'
    ];photos.forEach((img,i)=>{if(srcs[i])img.src=srcs[i]});
    const logos=story.querySelectorAll('.v38Logo img');
    if(logos[0]){logos[0].src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Becherovka.svg';logos[0].alt='Becherovka'}
    if(logos[1])logos[1].src='https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png';
    if(logos[2])logos[2].src='https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png';
    if(logos[3])logos[3].src='https://photo.maspex.com/img/thumbs/w1920h1920q100/resources/products/RELAX-LOGO_23.png';
    const texts=story.querySelectorAll('.v38Brand p');
    const copy=['Aktivace značky a retailová realizace dotažená od nápadu až mezi lidi.','Beauty komunikace a produkce s důrazem na čistý vizuál a detail značky.','Prémiová beauty realizace, kde stejně dobře funguje idea i exekuce.','Promo a field marketing, který dostává značku přímo do kontaktu se zákazníkem.'];texts.forEach((p,i)=>{if(copy[i])p.textContent=copy[i]});
  }
  const ps=document.createElement('style');ps.textContent=`
    .projectsV38Story{height:400svh!important}.v38Photo{transition-duration:.58s,.78s,.72s!important}.v38Brand{transition-duration:.48s,.62s!important}
    .v38Logo img{filter:none!important;opacity:1!important}.v38Logo.becher img{max-width:76%!important;max-height:86px!important}.v38Logo.relax img{max-width:66%!important;max-height:130px!important}
  `;document.head.appendChild(ps);
})();