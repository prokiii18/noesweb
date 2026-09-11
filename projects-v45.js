(()=>{
  function mount(){
    const hero=document.querySelector('.hero-v27')||document.querySelector('.hero');
    if(!hero||hero.dataset.v45Mounted==='1') return false;
    hero.dataset.v45Mounted='1';
    hero.className=(hero.className||'')+' noesHeroV45';
    hero.innerHTML=`
      <div class="noesHeroV45__sticky">
        <div class="noesHeroV45__copy">
          <div class="noesHeroV45__eyebrow"><i></i>Kreativní myšlení. Skutečný dopad.</div>
          <h1>Dáváme značkám <span>život.</span><b aria-hidden="true"></b></h1>
          <p>Strategie, nápady a realizace pod jednou střechou.<br>Jsme NOE’S. A baví nás dělat věci pořádně.</p>
          <a href="#projectsV38Story">Prohlédnout naši práci <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div class="noesHeroV45__gallery" aria-hidden="true">
          <figure class="card c1"><img src="https://static.wixstatic.com/media/9df8c5_006fb498fd764b999fd8601db469ec97~mv2.jpg" alt=""></figure>
          <figure class="card c2"><img src="https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg" alt=""></figure>
          <figure class="card c3"><img src="https://static.wixstatic.com/media/9df8c5_7de737dfd9e94b2aaf45eb6adaa069f7~mv2.jpg" alt=""></figure>
        </div>
      </div>`;
    return true;
  }

  const css=document.createElement('style');
  css.id='v45-hero-style';
  css.textContent=`
    .hero-v27.noesHeroV45,.hero.noesHeroV45{height:176svh!important;min-height:0!important;padding:0!important;overflow:visible!important;background:#f6f2ea!important;border:0!important;position:relative!important}
    .noesHeroV45__sticky{position:sticky;top:0;height:100svh;box-sizing:border-box;padding:68px 3.2vw 24px;background:#f6f2ea;overflow:hidden;display:flex;flex-direction:column}
    .noesHeroV45__copy{text-align:center;position:relative;z-index:3;flex:0 0 auto}
    .noesHeroV45__eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:10px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:#57534e;margin-bottom:20px}
    .noesHeroV45__eyebrow i{width:10px;height:10px;border-radius:50%;background:#f03a2f;display:block}
    .noesHeroV45__copy h1{margin:0 auto;max-width:1120px;font-size:clamp(64px,7.6vw,122px);line-height:.82;letter-spacing:-.07em;font-weight:850;color:#111;position:relative}
    .noesHeroV45__copy h1 span{display:block;color:#f03a2f;font-size:1.06em;line-height:.88}
    .noesHeroV45__copy h1 b{position:absolute;width:62px;height:62px;right:17%;bottom:6%;transform:rotate(10deg);background:repeating-conic-gradient(from 0deg,#f03a2f 0 6deg,transparent 6deg 15deg);border-radius:50%}
    .noesHeroV45__copy p{margin:24px auto 0;font-size:18px;line-height:1.25;color:#26211d;max-width:620px}
    .noesHeroV45__copy a{margin-top:22px;display:inline-flex;align-items:center;gap:14px;background:#111;color:white;text-decoration:none;padding:14px 22px;border-radius:999px;font-size:13px;font-weight:750}
    .noesHeroV45__copy a svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .noesHeroV45__gallery{position:relative;z-index:2;flex:1;min-height:0;margin-top:28px;display:grid;grid-template-columns:1fr 1.8fr 1.05fr;gap:6px;align-items:stretch;transform:scale(.91);transform-origin:50% 100%;transition:none}
    .noesHeroV45__gallery .card{margin:0;min-width:0;overflow:hidden;border-radius:10px;position:relative;will-change:transform,filter}
    .noesHeroV45__gallery img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.08);will-change:transform}
    .noesHeroV45__gallery .c1{transform:translateX(17vw) scale(.94)}
    .noesHeroV45__gallery .c2{z-index:2}
    .noesHeroV45__gallery .c3{transform:translateX(-17vw) scale(.94)}
    .clientRail.v42Rail,.clientRail.v41Rail{border-top:0!important}

    @media(max-width:760px){
      .hero-v27.noesHeroV45,.hero.noesHeroV45{height:162svh!important}
      .noesHeroV45__sticky{padding:28px 0 18px;height:100svh}
      .noesHeroV45__copy{padding:0 18px}
      .noesHeroV45__eyebrow{font-size:8px;gap:10px;letter-spacing:.24em;max-width:250px;line-height:1.45;margin-bottom:22px}
      .noesHeroV45__eyebrow i{width:8px;height:8px;flex:0 0 auto}
      .noesHeroV45__copy h1{font-size:12.8vw;line-height:.9;letter-spacing:-.065em;max-width:360px}
      .noesHeroV45__copy h1 span{display:inline;color:#f03a2f}
      .noesHeroV45__copy h1 b{width:42px;height:42px;right:-2px;bottom:-2px}
      .noesHeroV45__copy p{font-size:16px;line-height:1.35;margin-top:24px;max-width:330px}
      .noesHeroV45__copy a{margin-top:22px;width:calc(100% - 16px);justify-content:center;box-sizing:border-box;padding:17px 20px;font-size:13px}
      .noesHeroV45__gallery{margin-top:34px;display:flex;gap:8px;width:max-content;align-items:stretch;height:38vh;min-height:280px;transform:none}
      .noesHeroV45__gallery .card{width:72vw;flex:0 0 72vw;border-radius:8px}
      .noesHeroV45__gallery .c1{transform:translateX(-48vw)}
      .noesHeroV45__gallery .c2{transform:translateX(-48vw)}
      .noesHeroV45__gallery .c3{transform:translateX(-48vw)}
    }
  `;
  if(!document.getElementById(css.id)) document.head.appendChild(css);

  let ticking=false;
  function render(){
    ticking=false;
    const hero=document.querySelector('.noesHeroV45');
    const gal=hero?.querySelector('.noesHeroV45__gallery');
    if(!hero||!gal) return;
    const r=hero.getBoundingClientRect();
    const scrollable=Math.max(1,hero.offsetHeight-window.innerHeight);
    const p=Math.max(0,Math.min(1,-r.top/scrollable));
    const ease=1-Math.pow(1-p,3);
    if(window.innerWidth<=760){
      const x=-48 + ease*36;
      gal.querySelectorAll('.card').forEach((c,i)=>{
        const extra=(i-1)*ease*3;
        c.style.transform=`translateX(${x+extra}vw)`;
      });
    }else{
      gal.style.transform=`scale(${.91+.09*ease})`;
      const c1=gal.querySelector('.c1'),c2=gal.querySelector('.c2'),c3=gal.querySelector('.c3');
      if(c1)c1.style.transform=`translateX(${17*(1-ease)}vw) scale(${.94+.06*ease})`;
      if(c2)c2.style.transform=`scale(${.98+.02*ease})`;
      if(c3)c3.style.transform=`translateX(${-17*(1-ease)}vw) scale(${.94+.06*ease})`;
      gal.querySelectorAll('img').forEach(img=>img.style.transform=`scale(${1.08-.08*ease})`);
    }
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(render)}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll,{passive:true});

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(mount()||tries>50){clearInterval(timer);render()}
  },80);
  mount();render();
})();