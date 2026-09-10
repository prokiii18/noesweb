(()=>{
  const old=document.getElementById('projectsStory');
  if(!old)return;

  /* Detach the V36 node so its old discrete scroll listener can no longer affect the visible section. */
  const S=old.cloneNode(true);
  old.replaceWith(S);

  const style=document.createElement('style');
  style.id='projects-smooth-v37-style';
  style.textContent=`
    #projectsStory .psPhoto{opacity:0;clip-path:inset(100% 0 0 0);transform:none!important;animation:none!important;transition:none!important;will-change:clip-path,opacity}
    #projectsStory .psPhoto img{animation:none!important;transition:none!important;will-change:transform}
    #projectsStory .psBrand{opacity:0;transform:translate3d(0,26px,0);animation:none!important;transition:none!important;will-change:opacity,transform}
    #projectsStory .psBars i{background:rgba(17,17,17,.14)!important;position:relative;overflow:hidden}
    #projectsStory .psBars i:after{content:'';position:absolute;inset:0;background:#111;transform:scaleX(var(--fill,0));transform-origin:left center;will-change:transform}
    #projectsStory .psBars i.on{background:rgba(17,17,17,.14)!important}
  `;
  document.head.appendChild(style);

  const photos=[...S.querySelectorAll('.psPhoto')];
  const imgs=photos.map(x=>x.querySelector('img'));
  const brands=[...S.querySelectorAll('.psBrand')];
  const bars=[...S.querySelectorAll('.psBars i')];
  const count=S.querySelector('.psCount');
  const no=S.querySelector('.psNo');
  const type=S.querySelector('.psType');
  const types=['Brand activation','Experiential','Beauty / Creative','Field marketing'];

  photos.forEach(x=>x.classList.remove('active','enter'));
  brands.forEach(x=>x.classList.remove('active','enter'));
  bars.forEach(x=>x.classList.remove('on'));

  const clamp=v=>Math.max(0,Math.min(1,v));
  const smoothstep=t=>t*t*(3-2*t);
  let target=0;
  let current=0;
  let raf=0;
  let label=-1;

  function measure(){
    const r=S.getBoundingClientRect();
    const travel=Math.max(1,S.offsetHeight-innerHeight);
    target=clamp(-r.top/travel);
  }

  function paint(p){
    const pos=p*3;
    const i=Math.min(3,Math.floor(pos));
    const next=Math.min(3,i+1);
    const raw=i===3?0:pos-i;
    const t=smoothstep(raw);

    photos.forEach((el,j)=>{
      if(j===i){
        el.style.opacity='1';
        el.style.clipPath='inset(0% 0 0 0)';
        el.style.zIndex='2';
      }else if(j===next&&next!==i){
        el.style.opacity='1';
        el.style.clipPath=`inset(${(1-t)*100}% 0 0 0)`;
        el.style.zIndex='3';
      }else{
        el.style.opacity='0';
        el.style.clipPath='inset(100% 0 0 0)';
        el.style.zIndex='1';
      }
    });

    imgs.forEach((img,j)=>{
      if(j===i) img.style.transform=`scale(${1.04+.035*t}) translate3d(0,${5*t}px,0)`;
      else if(j===next&&next!==i) img.style.transform=`scale(${1.085-.045*t}) translate3d(0,${8*(1-t)}px,0)`;
      else img.style.transform='scale(1.055)';
    });

    brands.forEach((el,j)=>{
      if(j===i){
        el.style.opacity=String(1-t);
        el.style.transform=`translate3d(0,${-22*t}px,0) scale(${1-.012*t})`;
        el.style.zIndex='2';
      }else if(j===next&&next!==i){
        el.style.opacity=String(t);
        el.style.transform=`translate3d(0,${26*(1-t)}px,0) scale(${.985+.015*t})`;
        el.style.zIndex='3';
      }else{
        el.style.opacity='0';
        el.style.transform='translate3d(0,26px,0) scale(.985)';
        el.style.zIndex='1';
      }
    });

    bars.forEach((bar,j)=>{
      const fill=j<i?1:(j===i?(i===3?1:raw):0);
      bar.style.setProperty('--fill',String(fill));
    });

    const active=Math.min(3,Math.floor(pos+.5));
    if(active!==label){
      label=active;
      const n=String(active+1).padStart(2,'0');
      count.textContent=n+' / 04';
      no.textContent=n;
      type.textContent=types[active];
    }
  }

  function frame(){
    const d=target-current;
    current+=d*.16;
    if(Math.abs(d)<.00025)current=target;
    paint(current);
    if(Math.abs(target-current)>.00025)raf=requestAnimationFrame(frame);
    else raf=0;
  }

  function update(){
    measure();
    if(!raf)raf=requestAnimationFrame(frame);
  }

  measure();
  current=target;
  paint(current);
  addEventListener('scroll',update,{passive:true});
  addEventListener('resize',()=>{measure();current=target;paint(current)},{passive:true});
})();
