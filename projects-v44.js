(()=>{
  function mountHero(){
    const hero=document.querySelector('.hero-v27')||document.querySelector('.hero');
    if(!hero||hero.dataset.v44Mounted==='1') return false;
    hero.dataset.v44Mounted='1';
    hero.classList.add('noesHeroV44');
    hero.innerHTML=`
      <div class="noesHeroV44__inner">
        <div class="noesHeroV44__topline">
          <div class="noesHeroV44__index">NOE'S · PRAHA</div>
          <div class="noesHeroV44__eyebrow">Kreativní myšlení.<br>Skutečný dopad.</div>
        </div>
        <div class="noesHeroV44__headlineWrap">
          <h1 class="noesHeroV44__headline"><span>Dáváme</span><span>značkám</span><span class="life">život.</span></h1>
          <div class="noesHeroV44__symbol" aria-hidden="true"><svg viewBox="0 0 200 200"><path d="M100 0V200M0 100H200M29 29L171 171M29 171L171 29"/></svg></div>
        </div>
        <div class="noesHeroV44__bottom">
          <p>Strategie, nápady a realizace pod jednou střechou.<small>Jsme NOE'S. A baví nás dělat věci pořádně.</small></p>
          <a class="noesHeroV44__cta" href="#projectsV38Story"><span>Prohlédnout naši práci</span><span class="noesHeroV44__ctaIcon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
        </div>
      </div>`;
    return true;
  }

  const css=document.createElement('style');
  css.id='v44-hero-style';
  css.textContent=`
    .hero-v27.noesHeroV44,.hero.noesHeroV44{height:auto!important;min-height:0!important;padding:0!important;overflow:visible!important;background:#f6f2ea!important;border:0!important}
    .noesHeroV44__inner{position:relative;min-height:calc(100svh - 72px);padding:54px 28px 30px;display:flex;flex-direction:column;background:#f6f2ea;box-sizing:border-box;overflow:hidden}
    .noesHeroV44__topline{display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:24px;position:relative;z-index:2}
    .noesHeroV44__index,.noesHeroV44__eyebrow{font-size:11px;line-height:1.3;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#1d1d1b}
    .noesHeroV44__eyebrow{text-align:right;justify-self:end;max-width:220px}
    .noesHeroV44__headlineWrap{position:relative;flex:1;display:flex;align-items:center;padding:44px 0 34px}
    .noesHeroV44__headline{margin:0;font-family:inherit;font-size:clamp(82px,11.7vw,184px);line-height:.76;letter-spacing:-.075em;font-weight:800;color:#111;text-transform:none;position:relative;z-index:1}
    .noesHeroV44__headline span{display:block}
    .noesHeroV44__headline .life{font-size:1.13em;line-height:.82}
    .noesHeroV44__symbol{position:absolute;right:4.5vw;top:50%;width:clamp(90px,9vw,150px);aspect-ratio:1;transform:translateY(-45%) rotate(8deg);color:#ef3e32;z-index:0;opacity:.96}
    .noesHeroV44__symbol svg{width:100%;height:100%;display:block}
    .noesHeroV44__symbol path{stroke:currentColor;stroke-width:24;stroke-linecap:square;fill:none}
    .noesHeroV44__bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:40px;position:relative;z-index:2;padding-top:10px}
    .noesHeroV44__bottom p{margin:0;max-width:470px;font-size:18px;line-height:1.3;font-weight:600;color:#161616}
    .noesHeroV44__bottom small{display:block;margin-top:5px;font-size:13px;line-height:1.35;font-weight:500;color:#6b6861}
    .noesHeroV44__cta{display:inline-flex;align-items:center;gap:18px;text-decoration:none;color:#fff;background:#111;padding:10px 12px 10px 22px;border-radius:999px;font-size:13px;font-weight:750;white-space:nowrap;transition:transform .22s ease,background .22s ease}
    .noesHeroV44__cta:hover{transform:translateY(-2px);background:#ef3e32}
    .noesHeroV44__ctaIcon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#111}
    .noesHeroV44__ctaIcon svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .noesHeroV44 + .clientRail,.noesHeroV44 ~ .clientRail{border-top:0!important}
    .clientRail.v42Rail,.clientRail.v41Rail{border-top:0!important}

    @media(max-width:900px){
      .noesHeroV44__inner{min-height:calc(100svh - 64px);padding:40px 20px 24px}
      .noesHeroV44__headlineWrap{padding:34px 0 24px}
      .noesHeroV44__headline{font-size:clamp(72px,15vw,120px)}
      .noesHeroV44__symbol{right:1vw;width:110px}
    }

    @media(max-width:760px){
      .noesHeroV44__inner{min-height:auto;padding:34px 14px 22px}
      .noesHeroV44__topline{grid-template-columns:1fr auto;gap:12px}
      .noesHeroV44__index,.noesHeroV44__eyebrow{font-size:8px;letter-spacing:.12em}
      .noesHeroV44__eyebrow{max-width:125px}
      .noesHeroV44__headlineWrap{min-height:430px;align-items:center;padding:26px 0 18px}
      .noesHeroV44__headline{font-size:21.5vw;line-height:.82;letter-spacing:-.07em}
      .noesHeroV44__headline .life{font-size:1.17em}
      .noesHeroV44__symbol{width:78px;right:4px;top:40%;transform:translateY(-50%) rotate(8deg);opacity:.9}
      .noesHeroV44__symbol path{stroke-width:27}
      .noesHeroV44__bottom{display:block;padding-top:6px}
      .noesHeroV44__bottom p{font-size:16px;max-width:320px}
      .noesHeroV44__bottom small{font-size:12px}
      .noesHeroV44__cta{margin-top:22px;width:100%;justify-content:space-between;box-sizing:border-box;padding-left:18px}
    }

    @media(max-width:390px){
      .noesHeroV44__headlineWrap{min-height:395px}
      .noesHeroV44__headline{font-size:22vw}
      .noesHeroV44__symbol{width:68px;top:38%}
    }
  `;
  if(!document.getElementById(css.id)) document.head.appendChild(css);

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(mountHero()||tries>50) clearInterval(timer);
  },80);
  mountHero();
})();