// NOE'S — kinetic hero + scroll storytelling
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const lerp=(a,b,t)=>a+(b-a)*t;

// HERO: replace the old signature/text hero with a kinetic, text-led intro.
const oldHero=document.querySelector('header.hero');
if(oldHero){
  oldHero.outerHTML=`<header class="hero-kinetic" id="top">
    <div class="hero-pin">
      <div class="hero-k-meta"><span>NOE'S · Praha</span><span>Field marketing · Kreativa · Produkce</span></div>
      <div class="hero-k-core">
        <div class="hero-k-eyebrow">JSME NOE'S.</div>
        <div class="hero-k-lines" aria-label="Makáme. Myslíme. Vytváříme smysluplné kampaně.">
          <div class="hero-k-line hero-k-line-a"><span>MAKÁME.</span></div>
          <div class="hero-k-line hero-k-line-b"><span>MYSLÍME.</span></div>
          <div class="hero-k-line hero-k-line-c"><span>VYTVÁŘÍME</span></div>
          <div class="hero-k-payoff">smysluplné kampaně.</div>
        </div>
      </div>
      <div class="hero-k-bottom">
        <p>Objevujeme, cestujeme, sníme a děláme věci, které nezůstanou na papíře.</p>
        <a class="hero-k-cta" href="#projects"><span>Prohlédnout realizace</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 8l4 4-4 4"/></svg></a>
        <div class="hero-k-scroll"><span>Scroll</span><i></i></div>
      </div>
    </div>
  </header>`;
}

// SERVICES: turn the list into a scroll-driven story with a sticky visual on desktop.
const services=document.querySelector('#services');
if(services){
  services.classList.add('services-x');
  const head=services.querySelector('.head');
  const rows=[...services.querySelectorAll('.serviceCard')];
  const serviceData=rows.map((row,i)=>({
    no:String(i+1).padStart(2,'0'),
    title:row.querySelector('h3')?.textContent?.trim()||'',
    text:row.querySelector('p')?.textContent?.trim()||'',
    img:row.querySelector('img')?.src||''
  }));
  const steps=serviceData.map(s=>`<article class="serviceStep" data-no="${s.no}" data-title="${s.title.replace(/"/g,'&quot;')}" data-img="${s.img}"><div class="serviceNo">${s.no}</div><div class="serviceCopy"><h3>${s.title}</h3><p>${s.text}</p></div><div class="serviceMobileMedia"><img src="${s.img}" alt=""></div></article>`).join('');
  const body=document.createElement('div');
  body.className='serviceBody';
  body.innerHTML=`<div class="serviceList serviceList-x">${steps}</div><aside class="serviceStage" aria-hidden="true"><div class="serviceStageTop"><span class="serviceStageNo">01 / 06</span><span>Co umíme</span></div><div class="serviceStageFrame"><img class="serviceStageImg" src="${serviceData[0]?.img||''}" alt=""></div><div class="serviceStageTitle">${serviceData[0]?.title||''}</div></aside>`;
  services.querySelector('.serviceList')?.remove();
  head?.after(body);
}

// Give stat blocks huge ambient background numerals.
const stats=[...document.querySelectorAll('.stat')];
['1200+','7+','75,95'].forEach((v,i)=>stats[i]?.setAttribute('data-ghost',v));

const css=`
.hero{display:none!important}
.hero-kinetic{height:185svh;background:var(--paper);position:relative;border-bottom:1px solid var(--line)}
.hero-pin{position:sticky;top:0;height:100svh;padding:112px 26px 22px;display:flex;flex-direction:column;overflow:hidden}
.hero-k-meta{display:flex;justify-content:space-between;gap:20px;font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#6d675f;position:relative;z-index:3}
.hero-k-core{flex:1;display:flex;flex-direction:column;justify-content:center;min-height:0;padding:3vh 0 2vh}
.hero-k-eyebrow{font-size:10px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin-bottom:16px;opacity:.62}
.hero-k-lines{position:relative;width:100%;line-height:.76}
.hero-k-line{overflow:hidden;white-space:nowrap}
.hero-k-line span{display:block;font-size:clamp(90px,14vw,218px);font-weight:900;letter-spacing:-.095em;transform-origin:center;will-change:transform}
.hero-k-line-a{text-align:left}.hero-k-line-b{text-align:right}.hero-k-line-c{text-align:center}
.hero-k-line-a span{transform:translate3d(-2.5vw,110%,0)}.hero-k-line-b span{transform:translate3d(2.5vw,110%,0)}.hero-k-line-c span{transform:translate3d(0,110%,0)}
.hero-kinetic.loaded .hero-k-line span{transform:translate3d(0,0,0);transition:transform 1.05s var(--ease)}
.hero-kinetic.loaded .hero-k-line-b span{transition-delay:.08s}.hero-kinetic.loaded .hero-k-line-c span{transition-delay:.16s}
.hero-k-payoff{position:absolute;right:5.3vw;bottom:-.48em;font-size:clamp(26px,3vw,48px);font-weight:500;letter-spacing:-.045em;opacity:0;transform:translateY(22px);will-change:transform,opacity}
.hero-k-bottom{display:grid;grid-template-columns:minmax(0,560px) auto 1fr;gap:24px;align-items:end;position:relative;z-index:3}
.hero-k-bottom>p{margin:0;font-size:15px;line-height:1.55;color:var(--muted)}
.hero-k-cta{display:inline-flex;align-items:center;gap:12px;padding-bottom:5px;border-bottom:1px solid #111;font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
.hero-k-cta svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;transition:transform .28s var(--ease)}.hero-k-cta:hover svg{transform:translateX(4px)}
.hero-k-scroll{justify-self:end;display:flex;gap:12px;align-items:center;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.hero-k-scroll i{display:block;width:90px;height:1px;background:var(--line);position:relative;overflow:hidden}.hero-k-scroll i:after{content:"";position:absolute;inset:0 auto 0 -30%;width:30%;background:#111;animation:kScroll 1.7s var(--ease) infinite}@keyframes kScroll{65%,100%{transform:translateX(430%)}}
.projectCard{will-change:transform,opacity}.projectCard.motion-ready{opacity:0;transform:translateY(55px)}.projectCard.motion-in{opacity:1;transition:opacity .85s var(--ease),transform 1s var(--ease)}
.projectMedia{clip-path:inset(0 0 100% 0)!important;transition:none!important}.projectCard.motion-in .projectMedia{animation:projectWipe 1.05s var(--ease) forwards}@keyframes projectWipe{to{clip-path:inset(0 0 0 0)}}
.projectMedia img{transform:scale(1.13);will-change:transform}.projectMeta{opacity:0;transform:translateY(18px)}.projectCard.motion-in .projectMeta{opacity:1;transform:none;transition:opacity .7s var(--ease) .28s,transform .8s var(--ease) .28s}
.services-x{position:relative}.serviceBody{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(330px,.75fr);gap:5vw;align-items:start}.serviceList-x{border-top:1px solid var(--line)}
.serviceStep{min-height:43vh;display:grid;grid-template-columns:48px 1fr;gap:22px;align-content:center;border-bottom:1px solid var(--line);opacity:.28;transform:translateX(-22px);transition:opacity .45s var(--ease),transform .6s var(--ease);will-change:opacity,transform}.serviceStep.active{opacity:1;transform:none}
.serviceStep .serviceCopy h3{margin:0;font-size:clamp(38px,4vw,64px);line-height:.93;letter-spacing:-.06em}.serviceStep .serviceCopy p{margin:12px 0 0;max-width:580px;color:var(--muted);font-size:15px;line-height:1.55}.serviceMobileMedia{display:none}
.serviceStage{position:sticky;top:18vh;height:64vh;display:flex;flex-direction:column;gap:14px;align-self:start}.serviceStageTop{display:flex;justify-content:space-between;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}.serviceStageFrame{flex:1;min-height:0;overflow:hidden;background:#ddd}.serviceStageImg{width:100%;height:100%;object-fit:cover;filter:grayscale(.14);transform:scale(1.055);transition:opacity .2s ease,transform .75s var(--ease);will-change:opacity,transform}.serviceStageImg.swap{opacity:0;transform:scale(1.12)}.serviceStageTitle{font-size:18px;font-weight:800;letter-spacing:-.03em}
.stat{overflow:hidden;position:relative}.stat:before{content:attr(data-ghost);position:absolute;right:-.03em;bottom:-.18em;font-size:clamp(110px,15vw,240px);font-weight:900;letter-spacing:-.08em;color:rgba(255,255,255,.03);pointer-events:none;transform:translate3d(0,var(--ghostY,0),0);will-change:transform}.statValue{position:relative;z-index:1}.stat:not(.in) .statValue{opacity:.08;transform:translateY(28px) scale(.95)}.stat.in .statValue{opacity:1;transform:none;transition:opacity .65s var(--ease),transform .95s var(--ease)}
.person{opacity:0;transform:translateY(52px) rotate(.8deg);will-change:transform,opacity}.person.motion-in{opacity:1;transform:none;transition:opacity .75s var(--ease),transform 1s var(--ease);transition-delay:var(--motion-delay,0ms)}.person:nth-child(even){transform:translateY(62px) rotate(-.8deg)}.person:nth-child(even).motion-in{transform:none}.portrait{clip-path:inset(100% 0 0 0)}.person.motion-in .portrait{animation:teamWipe .95s var(--ease) forwards}@keyframes teamWipe{to{clip-path:inset(0 0 0 0)}}
.mapReal{clip-path:inset(0 100% 0 0);transition:clip-path 1.08s var(--ease)}.contactGrid.in .mapReal{clip-path:inset(0 0 0 0)}
.head h2{transform:translateX(var(--headX,0));will-change:transform}
@media(max-width:900px){.hero-kinetic{height:145svh}.hero-pin{padding:98px 18px 18px}.hero-k-meta span:last-child{display:none}.hero-k-core{padding:2vh 0}.hero-k-line span{font-size:19vw;line-height:.8}.hero-k-line-a,.hero-k-line-b,.hero-k-line-c{text-align:left}.hero-k-payoff{position:static;margin-top:26px;font-size:8vw;line-height:1.05;text-align:left}.hero-k-bottom{grid-template-columns:1fr auto;gap:18px}.hero-k-bottom>p{grid-column:1/-1;font-size:14px}.hero-k-scroll{display:none}.serviceBody{grid-template-columns:1fr}.serviceStage{display:none}.serviceStep{min-height:0;padding:34px 0;display:grid;grid-template-columns:32px 1fr;opacity:1;transform:none}.serviceMobileMedia{display:block;grid-column:2;margin-top:18px;aspect-ratio:16/9;overflow:hidden}.serviceMobileMedia img{width:100%;height:100%;object-fit:cover}.serviceStep .serviceCopy h3{font-size:10vw}}
@media(prefers-reduced-motion:reduce){.hero-kinetic{height:100svh}.hero-pin{position:relative}.hero-k-line span{transform:none!important;transition:none!important}.hero-k-payoff{opacity:1!important;transform:none!important}.projectMedia,.portrait,.mapReal{clip-path:none!important}.serviceStep,.person,.projectCard{opacity:1!important;transform:none!important}}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);

function animateStat(el){const node=el.querySelector('.statValue');if(!node||node.dataset.done)return;node.dataset.done='1';const target=parseFloat(node.dataset.target||'0'),dec=+node.dataset.decimals||0,suffix=node.dataset.suffix||'';const start=performance.now(),dur=1550;function tick(t){const p=clamp((t-start)/dur,0,1),e=1-Math.pow(1-p,4);node.textContent=(target*e).toFixed(dec)+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
const revealIO=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');if(e.target.classList.contains('stat'))animateStat(e.target);revealIO.unobserve(e.target)}),{threshold:.14,rootMargin:'0px 0px -6% 0px'});document.querySelectorAll('.reveal').forEach(el=>revealIO.observe(el));
const motionItems=[...document.querySelectorAll('.projectCard,.person')];motionItems.forEach((el,i)=>{el.classList.add('motion-ready');if(el.classList.contains('person'))el.style.setProperty('--motion-delay',`${(i%4)*75}ms`)});const motionIO=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('motion-in');motionIO.unobserve(e.target)}),{threshold:.14,rootMargin:'0px 0px -7% 0px'});motionItems.forEach(el=>motionIO.observe(el));
const hero=document.querySelector('.hero-kinetic');requestAnimationFrame(()=>hero?.classList.add('loaded'));
const serviceSteps=[...document.querySelectorAll('.serviceStep')],stageImg=document.querySelector('.serviceStageImg'),stageNo=document.querySelector('.serviceStageNo'),stageTitle=document.querySelector('.serviceStageTitle');let activeService=-1,swapTimer=0;
function setService(i){if(i===activeService||!serviceSteps[i])return;activeService=i;serviceSteps.forEach((s,j)=>s.classList.toggle('active',j===i));if(!stageImg)return;clearTimeout(swapTimer);stageImg.classList.add('swap');swapTimer=setTimeout(()=>{stageImg.src=serviceSteps[i].dataset.img;stageNo.textContent=`${serviceSteps[i].dataset.no} / 06`;stageTitle.textContent=serviceSteps[i].dataset.title;requestAnimationFrame(()=>stageImg.classList.remove('swap'))},170)}setService(0);
const progress=document.getElementById('progress');let sy=scrollY,lastY=sy,raf=0;
function frame(){raf=0;const vh=innerHeight,doc=document.documentElement,max=Math.max(1,doc.scrollHeight-vh);if(progress)progress.style.width=(sy/max*100)+'%';if(reduced)return;if(hero){const r=hero.getBoundingClientRect(),travel=Math.max(1,hero.offsetHeight-vh),p=clamp(-r.top/travel,0,1);const a=hero.querySelector('.hero-k-line-a span'),b=hero.querySelector('.hero-k-line-b span'),c=hero.querySelector('.hero-k-line-c span'),pay=hero.querySelector('.hero-k-payoff');if(a)a.style.transform=`translate3d(${-p*7.5}vw,${-p*1.5}vh,0)`;if(b)b.style.transform=`translate3d(${p*8.5}vw,${-p*.5}vh,0)`;if(c)c.style.transform=`translate3d(${(p-.5)*1.2}vw,${-p*1.8}vh,0) scale(${1+p*.035})`;if(pay){const q=clamp((p-.12)/.36,0,1);pay.style.opacity=q;pay.style.transform=`translate3d(0,${lerp(24,0,q)}px,0)`}}document.querySelectorAll('.projectCard.motion-in').forEach(card=>{const media=card.querySelector('.projectMedia'),img=card.querySelector('img');if(!media||!img)return;const r=media.getBoundingClientRect(),n=(r.top+r.height/2-vh/2)/vh;img.style.transform=`translate3d(0,${clamp(-n*62,-46,46)}px,0) scale(1.14)`;card.style.transform=`translate3d(0,${clamp(n*7,-7,7)}px,0)`});let best=0,bestDist=1e9;serviceSteps.forEach((step,i)=>{const r=step.getBoundingClientRect(),d=Math.abs((r.top+r.height*.5)-vh*.5);if(d<bestDist){bestDist=d;best=i}});if(serviceSteps.length)setService(best);stats.forEach(el=>{const r=el.getBoundingClientRect(),n=(r.top+r.height/2-vh/2)/vh;el.style.setProperty('--ghostY',`${clamp(-n*40,-30,30)}px`)});document.querySelectorAll('.head h2').forEach(h=>{const r=h.getBoundingClientRect(),n=(r.top-vh*.55)/vh;h.style.setProperty('--headX',`${clamp(-n*16,-16,16)}px`)});const rail=document.querySelector('.marqueeTrack');if(rail){const velocity=Math.abs(sy-lastY);rail.style.animationDuration=`${clamp(25-velocity*.18,13,25)}s`}lastY=sy}
function onScroll(){sy=scrollY;if(!raf)raf=requestAnimationFrame(frame)}addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});onScroll();
