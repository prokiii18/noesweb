(()=>{
  const logos=[
    ['JTI','https://static.wixstatic.com/media/9df8c5_4a016a8a40784d2c82f0f52d85e15aea~mv2.png'],
    ['Bel','https://static.wixstatic.com/media/9df8c5_a60ac37985d649408035dc430f15836f~mv2.png'],
    ['Maspex','https://static.wixstatic.com/media/9df8c5_7b66673605ed4e798cc7a6c3529ca598~mv2.webp'],
    ['Ahold','https://static.wixstatic.com/media/9df8c5_39a698af2c3248be8f99d1b000102418~mv2.png'],
    ['Intersnack','https://static.wixstatic.com/media/9df8c5_afb3f0f736f84c2a960fe003bd2e3157~mv2.png'],
    ['ONA','https://static.wixstatic.com/media/9df8c5_f612ad57dc324bb3a3910dd2aa311649~mv2.png'],
    ['Lindt','https://static.wixstatic.com/media/9df8c5_dbcc63e4f88148199753aeab816a9c53~mv2.png'],
    ['Biolage','https://static.wixstatic.com/media/9df8c5_bd1f569388a347c8b81e749fed0bacef~mv2.png'],
    ['Bonduelle','https://static.wixstatic.com/media/9df8c5_7118d6da43634e5f80dea2260ae19822~mv2.png'],
    ['Kérastase','https://static.wixstatic.com/media/9df8c5_01945cf09d7940f389cd5b37664e8e76~mv2.png'],
    ['Matrix','https://static.wixstatic.com/media/9df8c5_ad9274137baa40f1ba36cf60f36f6b85~mv2.png']
  ];
  function apply(){
    const strip=document.querySelector('.clients .logos');
    if(!strip) return false;
    strip.innerHTML=logos.map(([alt,src])=>`<img alt="${alt}" loading="lazy" src="${src}">`).join('');
    if(!document.getElementById('original-noes-logos-style')){
      const s=document.createElement('style');
      s.id='original-noes-logos-style';
      s.textContent=`
        .clients .logos{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:clamp(16px,2.5vw,42px)!important;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:none!important;-ms-overflow-style:none!important;white-space:nowrap!important}
        .clients .logos::-webkit-scrollbar{display:none!important}
        .clients .logos img{flex:0 0 auto!important;max-width:110px!important;width:auto!important;height:42px!important;object-fit:contain!important;filter:none!important;opacity:1!important}
        @media(max-width:900px){.clients .logos{justify-content:flex-start!important;padding-bottom:2px!important}.clients .logos img{height:34px!important;max-width:94px!important}}
      `;
      document.head.appendChild(s);
    }
    return true;
  }
  if(!apply()){
    let n=0;const t=setInterval(()=>{n++;if(apply()||n>60)clearInterval(t)},50);
  }
})();