(()=>{
  function mount(){
    const controls=document.querySelector('#projects .case-controls');
    if(!controls||document.querySelector('.portfolio-all-cta')) return !!controls;

    const wrap=document.createElement('div');
    wrap.className='portfolio-all-wrap';
    wrap.innerHTML=`<a class="portfolio-all-cta" href="https://www.noes.cz/" target="_blank" rel="noopener">Zobrazit celé portfolio <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>`;
    controls.insertAdjacentElement('afterend',wrap);

    if(!document.getElementById('portfolio-all-cta-style')){
      const style=document.createElement('style');
      style.id='portfolio-all-cta-style';
      style.textContent=`
        .portfolio-all-wrap{display:flex;justify-content:flex-end;padding-top:28px}
        .portfolio-all-cta{display:inline-flex;align-items:center;gap:12px;padding:15px 20px;border:1px solid #1c211f;color:#1c211f;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.01em;transition:background .22s ease,color .22s ease,border-color .22s ease}
        .portfolio-all-cta svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;transition:transform .22s ease}
        .portfolio-all-cta:hover{background:#1c211f;color:#fff;border-color:#1c211f}
        .portfolio-all-cta:hover svg{transform:translateX(3px)}
        @media(max-width:849px){.portfolio-all-wrap{padding:22px 0 0}.portfolio-all-cta{width:100%;box-sizing:border-box;justify-content:space-between;padding:16px 18px}}
      `;
      document.head.appendChild(style);
    }
    return true;
  }

  if(!mount()){
    let tries=0;
    const timer=setInterval(()=>{
      tries++;
      if(mount()||tries>60) clearInterval(timer);
    },50);
  }
})();