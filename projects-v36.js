(()=>{
  const section=document.getElementById('projects');
  if(!section)return;

  const style=document.createElement('style');
  style.id='projects-v36-style';
  style.textContent=`
  .projects.projectsScroll{padding:92px 26px 0!important;background:#fff!important;position:relative}
  .projectsScrollHead{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:end;margin-bottom:34px}
  .projectsScrollHead h2{margin:0;font-size:clamp(56px,7.5vw,110px);line-height:.8;letter-spacing:-.075em}
  .projectsScrollHead p{justify-self:end;max-width:520px;margin:0 0 4px;color:#746f67;font-size:16px;line-height:1.55}
  .projectsStory{height:400svh;position:relative}
  .projectsPin{position:sticky;top:72px;height:calc(100svh - 72px);padding-bottom:22px;background:#fff;overflow:hidden}
  .projectsSplit{height:100%;display:grid;grid-template-columns:minmax(0,1.58fr) minmax(340px,.82fr);border:1px solid rgba(17,17,17,.16);overflow:hidden}
  .projectsVisual{position:relative;min-width:0;background:#111;overflow:hidden;border-right:1px solid rgba(17,17,17,.16)}
  .psPhoto{position:absolute;inset:0;margin:0;opacity:0;clip-path:inset(100% 0 0 0);transform:translateY(20px);pointer-events:none}
  .psPhoto.active{opacity:1;clip-path:inset(0);transform:none;z-index:2}
  .psPhoto.enter{animation:psPhotoIn .7s cubic-bezier(.16,1,.3,1) both}
  .psPhoto img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.045)}
  .psPhoto.enter img{animation:psImgIn .9s cubic-bezier(.16,1,.3,1) both}
  .projectsVisual:after{content:'';position:absolute;z-index:5;left:0;right:0;bottom:0;height:26%;background:linear-gradient(180deg,transparent,rgba(0,0,0,.35));pointer-events:none}
  .psMeta{position:absolute;z-index:8;left:20px;right:20px;bottom:18px;display:flex;justify-content:space-between;color:#fff;font-size:9px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;text-shadow:0 1px 12px rgba(0,0,0,.4)}
  .projectsInfo{min-width:0;background:#f7f4ee;padding:24px 28px 22px;display:flex;flex-direction:column}
  .psTop,.psBottom{display:flex;justify-content:space-between;align-items:center;gap:16px;color:#746f67;font-size:9px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}
  .psBrands{position:relative;flex:1;min-height:0}
  .psBrand{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;opacity:0;transform:translateY(34px);pointer-events:none}
  .psBrand.active{opacity:1;transform:none;pointer-events:auto;z-index:2}
  .psBrand.enter{animation:psBrandIn .52s cubic-bezier(.16,1,.3,1) .08s both}
  .psLogo{width:100%;min-height:145px;display:flex;align-items:center;justify-content:center;margin-bottom:22px;font-size:clamp(70px,7vw,112px);font-weight:900;letter-spacing:-.08em;line-height:.9}
  .psLogo.ploom{font-weight:300;text-transform:lowercase;letter-spacing:-.09em}
  .psLogo.logoImg img{max-width:82%;max-height:110px;object-fit:contain}
  .psBrand p{max-width:390px;margin:0;color:#37342f;font-size:17px;line-height:1.5}
  .psTags{display:flex;gap:7px;justify-content:center;flex-wrap:wrap;margin-top:20px}
  .psTags span{border:1px solid rgba(17,17,17,.18);border-radius:999px;padding:6px 9px;color:#746f67;font-size:8px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
  .psBottom{padding-top:15px;border-top:1px solid rgba(17,17,17,.16);font-size:8px}
  .psBars{display:flex;gap:5px;width:112px}.psBars i{height:2px;flex:1;background:rgba(17,17,17,.14)}.psBars i.on{background:#111}
  @keyframes psPhotoIn{from{opacity:.15;clip-path:inset(100% 0 0 0);transform:translateY(20px)}to{opacity:1;clip-path:inset(0);transform:none}}
  @keyframes psImgIn{from{transform:scale(1.13)}to{transform:scale(1.045)}}
  @keyframes psBrandIn{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
  @media(max-width:760px){
    .projects.projectsScroll{padding:70px 10px 0!important}
    .projectsScrollHead{grid-template-columns:1fr;gap:10px;padding:0 8px;margin-bottom:20px}
    .projectsScrollHead h2{font-size:14vw}.projectsScrollHead p{justify-self:start;font-size:13px;max-width:340px}
    .projectsPin{top:66px;height:calc(100svh - 66px);padding-bottom:10px}
    .projectsSplit{grid-template-columns:1fr;grid-template-rows:56% 44%}
    .projectsVisual{border-right:0;border-bottom:1px solid rgba(17,17,17,.16)}
    .projectsInfo{padding:14px 16px 12px}.psLogo{min-height:70px;margin-bottom:7px;font-size:14vw}.psLogo.logoImg img{max-height:62px}
    .psBrand p{font-size:13px;line-height:1.42;max-width:330px}.psTags{margin-top:8px}.psTags span{font-size:6px;padding:4px 6px}
    .psBottom{padding-top:8px}.psBottom>span{display:none}.psBars{width:100%}.psMeta{left:14px;right:14px;bottom:12px;font-size:7px}
  }`;
  document.head.appendChild(style);

  section.className='projects projectsScroll';
  section.innerHTML=`
    <div class="projectsScrollHead"><h2>Vybrané<br>realizace.</h2><p>Kampaně, aktivace a produkce, které se dostaly z nápadu až mezi lidi.</p></div>
    <div class="projectsStory" id="projectsStory"><div class="projectsPin"><div class="projectsSplit">
      <div class="projectsVisual">
        <figure class="psPhoto active"><img src="https://static.wixstatic.com/media/9df8c5_ffa3086a4b5d42028a3c11b8f8a2bd88~mv2.jpg/v1/fill/w_1500,h_1100,q_92/9df8c5_ffa3086a4b5d42028a3c11b8f8a2bd88~mv2.jpg" alt="Babybel"></figure>
        <figure class="psPhoto"><img src="https://static.wixstatic.com/media/9df8c5_7de737dfd9e94b2aaf45eb6adaa069f7~mv2.jpg/v1/fill/w_1500,h_1100,q_92/9df8c5_7de737dfd9e94b2aaf45eb6adaa069f7~mv2.jpg" alt="Ploom"></figure>
        <figure class="psPhoto"><img src="https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg/v1/fill/w_1500,h_1100,q_92/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg" alt="Kérastase"></figure>
        <figure class="psPhoto"><img src="https://static.wixstatic.com/media/9df8c5_9a48c94b8fa74ce2a3d1d06b883c39ec~mv2.jpg/v1/fill/w_1500,h_1100,q_92/9df8c5_9a48c94b8fa74ce2a3d1d06b883c39ec~mv2.jpg" alt="Bonduelle"></figure>
        <div class="psMeta"><span class="psNo">01</span><span class="psType">Brand activation</span></div>
      </div>
      <aside class="projectsInfo">
        <div class="psTop"><span>Klient</span><span class="psCount">01 / 04</span></div>
        <div class="psBrands">
          <div class="psBrand active"><div class="psLogo">Babybel</div><p>Aktivace značky v retailu, která dostává produkt přímo mezi lidi.</p><div class="psTags"><span>Activation</span><span>Retail</span></div></div>
          <div class="psBrand"><div class="psLogo ploom">ploom</div><p>Experiential formát postavený na prostoru, detailu a kontaktu se značkou.</p><div class="psTags"><span>Experiential</span><span>Production</span></div></div>
          <div class="psBrand"><div class="psLogo logoImg"><img src="https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png" alt="Kérastase"></div><p>Prémiová beauty realizace, kde stejně dobře funguje idea i exekuce.</p><div class="psTags"><span>Beauty</span><span>Creative</span></div></div>
          <div class="psBrand"><div class="psLogo logoImg"><img src="https://static.wixstatic.com/media/9df8c5_7118d6da43634e5f80dea2260ae19822~mv2.png" alt="Bonduelle"></div><p>Field marketing a promo exekuce dotažená od konceptu až na místo.</p><div class="psTags"><span>Field marketing</span><span>Promo</span></div></div>
        </div>
        <div class="psBottom"><div class="psBars"><i class="on"></i><i></i><i></i><i></i></div><span>Scroll pro další</span></div>
      </aside>
    </div></div></div>`;

  const S=document.getElementById('projectsStory');
  const photos=[...S.querySelectorAll('.psPhoto')],brands=[...S.querySelectorAll('.psBrand')],bars=[...S.querySelectorAll('.psBars i')];
  const count=S.querySelector('.psCount'),no=S.querySelector('.psNo'),type=S.querySelector('.psType');
  const types=['Brand activation','Experiential','Beauty / Creative','Field marketing'];
  let current=-1,raf=0;
  function setProject(i,animate=true){
    i=Math.max(0,Math.min(3,i));if(i===current)return;current=i;
    photos.forEach((el,j)=>{el.classList.toggle('active',j===i);el.classList.remove('enter');if(j===i&&animate){void el.offsetWidth;el.classList.add('enter')}});
    brands.forEach((el,j)=>{el.classList.toggle('active',j===i);el.classList.remove('enter');if(j===i&&animate){void el.offsetWidth;el.classList.add('enter')}});
    bars.forEach((el,j)=>el.classList.toggle('on',j<=i));
    const n=String(i+1).padStart(2,'0');count.textContent=n+' / 04';no.textContent=n;type.textContent=types[i];
  }
  function render(){const r=S.getBoundingClientRect(),travel=Math.max(1,S.offsetHeight-innerHeight),p=Math.max(0,Math.min(.999999,-r.top/travel));setProject(Math.floor(p*4));raf=0}
  function update(){if(!raf)raf=requestAnimationFrame(render)}
  addEventListener('scroll',update,{passive:true});addEventListener('resize',update,{passive:true});setProject(0,false);render();
})();