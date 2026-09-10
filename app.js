// NOE'S — clean hero + premium scroll motion
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Remove the oversized signature logo and build a cleaner text-led hero.
const signature=document.querySelector('.signature');
if(signature) signature.remove();
const heroCenter=document.querySelector('.hero-center');
const heroCopy=document.querySelector('.hero-copy');
if(heroCenter && heroCopy){
  const kicker=document.createElement('div');
  kicker.className='hero-kicker';
  kicker.textContent='Field marketing · Kreativa · Produkce';
  const title=document.createElement('h1');
  title.className='hero-title';
  title.innerHTML='Od nápadu<br>až do terénu.';
  heroCenter.insertBefore(kicker,heroCopy);
  heroCenter.insertBefore(title,heroCopy);
  const strong=heroCopy.querySelector('strong');
  if(strong) strong.textContent="JSME NOE'S.";
}

const css=`
.signature{display:none!important}
.hero{min-height:100svh;padding:112px 26px 22px;position:relative}
.hero-center{align-items:flex-start;text-align:left;justify-content:center;max-width:1240px;width:100%;margin:0 auto;padding:6vh 0 5vh}
.hero-kicker{font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;opacity:0;transform:translateY(18px);animation:heroIn .75s var(--ease) .08s forwards}
.hero-title{margin:0;font-size:clamp(72px,11.3vw,170px);line-height:.86;letter-spacing:-.082em;font-weight:900;max-width:1120px;opacity:0;transform:translateY(26px);animation:heroIn .9s var(--ease) .16s forwards}
.hero-copy{margin-top:30px!important;max-width:790px!important;opacity:0!important;transform:translateY(18px)!important;animation:heroIn .75s var(--ease) .32s forwards!important}
.hero-copy p{font-size:clamp(18px,1.75vw,27px)!important;line-height:1.46!important}
.hero-copy strong{font-size:13px!important;letter-spacing:.1em;text-transform:uppercase;margin-top:14px!important}
.hero-action{opacity:0!important;transform:translateY(16px)!important;animation:heroIn .75s var(--ease) .48s forwards!important}
.hero-bottom{justify-content:flex-start!important;max-width:1240px;width:100%;margin:0 auto}
@keyframes heroIn{to{opacity:1;transform:none}}
.hero:after{content:"";position:absolute;left:26px;right:26px;bottom:0;height:1px;background:var(--line);transform-origin:left;transform:scaleX(0);animation:heroRule 1.1s var(--ease) .65s forwards}
@keyframes heroRule{to{transform:scaleX(1)}}

.projectCard,.serviceCard,.person{will-change:transform,opacity}
.projectCard.motion-ready,.serviceCard.motion-ready,.person.motion-ready{opacity:0;transform:translateY(48px)}
.projectCard.motion-in,.serviceCard.motion-in,.person.motion-in{opacity:1;transform:none;transition:opacity .85s var(--ease),transform .95s var(--ease);transition-delay:var(--motion-delay,0ms)}
.projectMedia{clip-path:inset(0 0 100% 0);transition:clip-path 1.05s var(--ease)}
.projectCard.motion-in .projectMedia{clip-path:inset(0 0 0 0)}
.projectMedia img{will-change:transform;transform:scale(1.07)}
.projectMeta{opacity:0;transform:translateY(12px)}
.projectCard.motion-in .projectMeta{opacity:1;transform:none;transition:opacity .65s var(--ease) .18s,transform .65s var(--ease) .18s}
.serviceVisual{clip-path:inset(100% 0 0 0)}
.serviceCard.motion-in .serviceVisual{clip-path:inset(0 0 0 0);transition:clip-path .82s var(--ease) .08s,transform .5s var(--ease),opacity .5s var(--ease)}
.person.motion-ready{transform:translateY(34px) scale(.985)}
.portrait img{will-change:transform}
.statValue{will-change:transform,opacity}
.stat:not(.in) .statValue{opacity:.12;transform:translateY(18px) scale(.97)}
.stat.in .statValue{opacity:1;transform:none;transition:opacity .7s var(--ease),transform .9s var(--ease)}
.mapReal{clip-path:inset(0 100% 0 0);transition:clip-path 1.05s var(--ease)}
.contactGrid.in .mapReal{clip-path:inset(0 0 0 0)}
.contactInfo>*{opacity:0;transform:translateY(16px)}
.contactGrid.in .contactInfo>*{opacity:1;transform:none;transition:opacity .7s var(--ease),transform .8s var(--ease)}
.contactGrid.in .contactInfo>*:nth-child(2){transition-delay:.15s}
.clientRail{position:relative}
.clientRail:before,.clientRail:after{content:"";position:absolute;top:0;bottom:0;width:min(9vw,110px);z-index:4;pointer-events:none}
.clientRail:before{left:0;background:linear-gradient(90deg,var(--paper),rgba(242,239,232,0))}
.clientRail:after{right:0;background:linear-gradient(270deg,var(--paper),rgba(242,239,232,0))}

@media(max-width:850px){
 .hero{padding:100px 18px 18px}
 .hero-center{padding:3vh 0 2vh}
 .hero-title{font-size:18vw;line-height:.89}
 .hero-kicker{font-size:8px;margin-bottom:14px}
 .hero-copy{margin-top:20px!important}
 .hero-copy p{font-size:16px!important}
 .hero-copy strong{font-size:10px!important}
 .hero:after{left:18px;right:18px}
 .projectCard.motion-ready,.serviceCard.motion-ready,.person.motion-ready{transform:translateY(28px)}
 .clientRail:before,.clientRail:after{width:34px}
}
@media(prefers-reduced-motion:reduce){
 .hero-kicker,.hero-title,.hero-copy,.hero-action{opacity:1!important;transform:none!important;animation:none!important}
 .projectCard.motion-ready,.serviceCard.motion-ready,.person.motion-ready{opacity:1;transform:none}
 .projectMedia,.serviceVisual,.mapReal{clip-path:none!important}
}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

const progress=document.getElementById('progress');
function animateStat(el){
  const node=el.querySelector('.statValue');
  if(!node||node.dataset.done)return;
  node.dataset.done='1';
  const target=parseFloat(node.dataset.target||'0'),dec=+node.dataset.decimals||0,suffix=node.dataset.suffix||'';
  const start=performance.now(),dur=1450;
  function tick(t){
    const p=Math.min(1,(t-start)/dur),ease=1-Math.pow(1-p,4),v=target*ease;
    node.textContent=v.toFixed(dec)+suffix;
    if(p<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const revealIO=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('in');
  if(e.target.classList.contains('stat'))animateStat(e.target);
  revealIO.unobserve(e.target);
}),{threshold:.14,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealIO.observe(el));

const motionItems=[...document.querySelectorAll('.projectCard,.serviceCard,.person')];
motionItems.forEach((el,i)=>{
  el.classList.add('motion-ready');
  if(el.classList.contains('serviceCard'))el.style.setProperty('--motion-delay',`${(i%6)*45}ms`);
  if(el.classList.contains('person'))el.style.setProperty('--motion-delay',`${(i%4)*65}ms`);
});
const motionIO=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('motion-in');
  motionIO.unobserve(e.target);
}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
motionItems.forEach(el=>motionIO.observe(el));

let latestY=scrollY,raf=false,prevY=scrollY;
function renderScroll(){
  raf=false;
  const d=document.documentElement;
  const max=Math.max(1,d.scrollHeight-d.clientHeight);
  if(progress)progress.style.width=((latestY/max)*100)+'%';
  if(reduced)return;
  const vh=innerHeight;
  const hero=document.querySelector('.hero');
  const title=document.querySelector('.hero-title');
  const copy=document.querySelector('.hero-copy');
  if(hero && title){
    const p=Math.min(1,Math.max(0,latestY/(vh*.92)));
    title.style.transform=`translate3d(0,${-p*34}px,0)`;
    if(copy)copy.style.transform=`translate3d(0,${-p*18}px,0)`;
    hero.style.opacity=String(1-p*.11);
  }
  document.querySelectorAll('.projectCard.motion-in .projectMedia img').forEach(img=>{
    const r=img.parentElement.getBoundingClientRect();
    const n=((r.top+r.height/2)-vh/2)/vh;
    const y=Math.max(-22,Math.min(22,-n*28));
    img.style.transform=`translate3d(0,${y}px,0) scale(1.045)`;
  });
  document.querySelectorAll('.person.motion-in .portrait img').forEach(img=>{
    const r=img.parentElement.getBoundingClientRect();
    const n=((r.top+r.height/2)-vh/2)/vh;
    const y=Math.max(-9,Math.min(9,-n*10));
    img.style.transform=`translate3d(0,${y}px,0) scale(1.025)`;
  });
  const rail=document.querySelector('.marqueeTrack');
  if(rail){
    const velocity=Math.abs(latestY-prevY);
    rail.style.animationDuration=`${Math.max(17,25-Math.min(8,velocity*.35))}s`;
  }
  prevY=latestY;
}
function onScroll(){latestY=scrollY;if(!raf){raf=true;requestAnimationFrame(renderScroll)}}
addEventListener('scroll',onScroll,{passive:true});
addEventListener('resize',onScroll,{passive:true});
onScroll();
