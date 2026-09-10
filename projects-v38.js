(()=>{
  const section=document.getElementById('projects');
  if(!section)return;

  /* Hero: remove the first scroll-driven takeover. Keep the entrance, kill the scroll scrub. */
  const heroStyle=document.createElement('style');
  heroStyle.textContent=`
    .hero{height:auto!important;min-height:100svh!important}
    .hero .pin{position:relative!important;top:auto!important;height:auto!important;min-height:100svh!important;overflow:hidden!important}
    .hero .gallery{transform:none!important}
    .hero .left,.hero .main,.hero .right{transform:none!important}
    .hero .panel img{transform:scale(1.07)!important}
    .hero .burst{transform:none!important}
    .hero .heroBottom{transform:none!important;opacity:1!important}
    @media(max-width:760px){.hero{min-height:100svh!important}.hero .pin{min-height:100svh!important}}
  `;
  document.head.appendChild(heroStyle);

  const style=document.createElement('style');
  style.id='projects-v38-style';
  style.textContent=`
    .projects.projectsScrollV38{padding:92px 26px 0!important;background:#fff!important;position:relative}
    .projectsV38Head{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:end;margin-bottom:34px}
    .projectsV38Head h2{margin:0;font-size:clamp(56px,7.5vw,110px);line-height:.8;letter-spacing:-.075em}
    .projectsV38Head p{justify-self:end;max-width:520px;margin:0 0 4px;color:#746f67;font-size:16px;line-height:1.55}
    .projectsV38Story{height:380svh;position:relative}
    .projectsV38Pin{position:sticky;top:72px;height:calc(100svh - 72px);padding-bottom:22px;background:#fff;overflow:hidden}
    .projectsV38Split{height:100%;display:grid;grid-template-columns:minmax(0,1.62fr) minmax(360px,.78fr);border:1px solid rgba(17,17,17,.16);overflow:hidden;background:#f7f4ee}
    .projectsV38Visual{position:relative;min-width:0;background:#111;overflow:hidden;border-right:1px solid rgba(17,17,17,.16)}
    .v38Photo{position:absolute;inset:0;margin:0;opacity:0;transform:translate3d(0,6%,0) scale(1.055);clip-path:inset(10% 0 0 0);transition:opacity .68s cubic-bezier(.16,1,.3,1),transform .92s cubic-bezier(.16,1,.3,1),clip-path .82s cubic-bezier(.16,1,.3,1);pointer-events:none;will-change:opacity,transform,clip-path}
    .v38Photo.active{opacity:1;transform:translate3d(0,0,0) scale(1);clip-path:inset(0);z-index:3}
    .v38Photo.previous{opacity:0;transform:translate3d(0,-3%,0) scale(1.025);clip-path:inset(0 0 7% 0);z-index:2}
    .v38Photo img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.035);transition:transform 1.15s cubic-bezier(.16,1,.3,1)}
    .v38Photo.active img{transform:scale(1)}
    .projectsV38Visual:after{content:'';position:absolute;z-index:7;left:0;right:0;bottom:0;height:26%;background:linear-gradient(180deg,transparent,rgba(0,0,0,.34));pointer-events:none}
    .v38Meta{position:absolute;z-index:9;left:20px;right:20px;bottom:18px;display:flex;justify-content:space-between;color:#fff;font-size:9px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;text-shadow:0 1px 12px rgba(0,0,0,.45)}
    .projectsV38Info{min-width:0;background:#f7f4ee;padding:24px 28px 22px;display:flex;flex-direction:column}
    .v38Top,.v38Bottom{display:flex;justify-content:space-between;align-items:center;gap:16px;color:#746f67;font-size:9px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}
    .v38Brands{position:relative;flex:1;min-height:0}
    .v38Brand{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;opacity:0;transform:translate3d(0,28px,0) scale(.985);transition:opacity .52s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);pointer-events:none;will-change:opacity,transform}
    .v38Brand.active{opacity:1;transform:none;pointer-events:auto;z-index:3}
    .v38Brand.previous{opacity:0;transform:translate3d(0,-22px,0) scale(.99);z-index:2}
    .v38Logo{width:100%;min-height:160px;display:flex;align-items:center;justify-content:center;margin-bottom:22px}
    .v38Logo img{max-width:82%;max-height:118px;object-fit:contain;display:block}
    .v38Logo.becher img{max-width:78%;max-height:100px}
    .v38Logo.biolage img{max-width:70%;max-height:110px}
    .v38Logo.kerastase img{max-width:86%;max-height:105px}
    .v38Logo.relax img{max-width:68%;max-height:145px}
    .v38Brand p{max-width:390px;margin:0;color:#37342f;font-size:17px;line-height:1.5}
    .v38Tags{display:flex;gap:7px;justify-content:center;flex-wrap:wrap;margin-top:20px}
    .v38Tags span{border:1px solid rgba(17,17,17,.18);border-radius:999px;padding:6px 9px;color:#746f67;font-size:8px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .v38Bottom{padding-top:15px;border-top:1px solid rgba(17,17,17,.16);font-size:8px}
    .v38Bars{display:flex;gap:5px;width:112px}.v38Bars i{height:2px;flex:1;background:rgba(17,17,17,.14);transition:background .42s ease}.v38Bars i.on{background:#111}
    @media(max-width:760px){
      .projects.projectsScrollV38{padding:70px 10px 0!important}
      .projectsV38Head{grid-template-columns:1fr;gap:10px;padding:0 8px;margin-bottom:20px}
      .projectsV38Head h2{font-size:14vw}.projectsV38Head p{justify-self:start;font-size:13px;max-width:340px}
      .projectsV38Pin{top:66px;height:calc(100svh - 66px);padding-bottom:10px}
      .projectsV38Split{grid-template-columns:1fr;grid-template-rows:56% 44%}
      .projectsV38Visual{border-right:0;border-bottom:1px solid rgba(17,17,17,.16)}
      .projectsV38Info{padding:14px 16px 12px}.v38Logo{min-height:72px;margin-bottom:7px}.v38Logo img{max-height:64px}.v38Logo.relax img{max-height:82px}
      .v38Brand p{font-size:13px;line-height:1.42;max-width:330px}.v38Tags{margin-top:8px}.v38Tags span{font-size:6px;padding:4px 6px}
      .v38Bottom{padding-top:8px}.v38Bottom>span{display:none}.v38Bars{width:100%}.v38Meta{left:14px;right:14px;bottom:12px;font-size:7px}
    }
  `;
  document.head.appendChild(style);

  section.className='projects projectsScrollV38';
  section.innerHTML=`
    <div class="projectsV38Head"><h2>Vybrané<br>realizace.</h2><p>Každý scroll odhalí jednu značku a jeden hlavní vizuál.</p></div>
    <div class="projectsV38Story" id="projectsV38Story"><div class="projectsV38Pin"><div class="projectsV38Split">
      <div class="projectsV38Visual">
        <figure class="v38Photo active"><img src="https://www.becherovka.com/wp-content/uploads/2022/11/560be8003ac3dda423d0f41813557681933b3f96.jpg" alt="Becherovka"></figure>
        <figure class="v38Photo"><img src="https://static.wixstatic.com/media/9df8c5_7d38ba5d8360433eb9ccdeb4ee02e32b~mv2.jpg" alt="Biolage"></figure>
        <figure class="v38Photo"><img src="https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg" alt="Kérastase"></figure>
        <figure class="v38Photo"><img src="https://static.wixstatic.com/media/9df8c5_d55d1cdf2bde4f2d95eaa9a93e3772d4~mv2.jpg" alt="Relax"></figure>
        <div class="v38Meta"><span class="v38No">01</span><span class="v38Type">Experiential · Activation</span></div>
      </div>
      <aside class="projectsV38Info">
        <div class="v38Top"><span>Klient</span><span class="v38Count">01 / 04</span></div>
        <div class="v38Brands">
          <div class="v38Brand active"><div class="v38Logo becher"><img src="https://www.becherovka.com/wp-content/uploads/2023/06/Becherovka_claim.svg" alt="Becherovka"></div><p>Silná značka, výrazný vizuál a aktivace, která funguje přímo mezi lidmi.</p><div class="v38Tags"><span>Experiential</span><span>Activation</span></div></div>
          <div class="v38Brand"><div class="v38Logo biolage"><img src="https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png" alt="Biolage"></div><p>Beauty komunikace postavená na čistém detailu a prémiové prezentaci značky.</p><div class="v38Tags"><span>Beauty</span><span>Retail</span></div></div>
          <div class="v38Brand"><div class="v38Logo kerastase"><img src="https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png" alt="Kérastase"></div><p>Prémiová beauty realizace, kde musí stejně dobře fungovat idea i exekuce.</p><div class="v38Tags"><span>Beauty</span><span>Experience</span></div></div>
          <div class="v38Brand"><div class="v38Logo relax"><img src="https://photo.maspex.com/img/thumbs/w1920h1920q100/resources/products/RELAX-LOGO_23.png" alt="Relax"></div><p>Retail a promo komunikace s jasnou energií, produkcí a viditelností v místě prodeje.</p><div class="v38Tags"><span>Retail</span><span>Promotion</span></div></div>
        </div>
        <div class="v38Bottom"><div class="v38Bars"><i class="on"></i><i></i><i></i><i></i></div><span>Scroll pro další</span></div>
      </aside>
    </div></div></div>`;

  /* Preload the next visuals so every step feels immediate. */
  section.querySelectorAll('.v38Photo img,.v38Logo img').forEach(img=>{const p=new Image();p.src=img.src});

  const S=document.getElementById('projectsV38Story');
  const photos=[...S.querySelectorAll('.v38Photo')],brands=[...S.querySelectorAll('.v38Brand')],bars=[...S.querySelectorAll('.v38Bars i')];
  const count=S.querySelector('.v38Count'),no=S.querySelector('.v38No'),type=S.querySelector('.v38Type');
  const types=['Experiential · Activation','Beauty · Retail','Beauty · Experience','Retail · Promotion'];
  let current=0,raf=0;

  function setProject(i){
    i=Math.max(0,Math.min(3,i));
    if(i===current)return;
    const prev=current;
    current=i;
    photos.forEach((el,j)=>{el.classList.toggle('active',j===i);el.classList.toggle('previous',j===prev&&j!==i)});
    brands.forEach((el,j)=>{el.classList.toggle('active',j===i);el.classList.toggle('previous',j===prev&&j!==i)});
    bars.forEach((el,j)=>el.classList.toggle('on',j<=i));
    const n=String(i+1).padStart(2,'0');count.textContent=n+' / 04';no.textContent=n;type.textContent=types[i];
  }

  function render(){
    const r=S.getBoundingClientRect();
    const travel=Math.max(1,S.offsetHeight-innerHeight);
    const p=Math.max(0,Math.min(.999999,-r.top/travel));
    const i=Math.min(3,Math.floor(p*4));
    setProject(i);
    raf=0;
  }
  function update(){if(!raf)raf=requestAnimationFrame(render)}
  addEventListener('scroll',update,{passive:true});
  addEventListener('resize',update,{passive:true});
  render();
})();