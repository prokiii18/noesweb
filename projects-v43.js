(()=>{
  const css=document.createElement('style');
  css.id='v43-layout-fix';
  css.textContent=`
    /* Hero: remove the empty first-screen feeling and pull the content directly under nav */
    .hero-v27{
      height:auto!important;
      min-height:0!important;
      padding:0!important;
      overflow:hidden!important;
    }
    .hero-v27 .v27-inner{
      position:relative!important;
      top:auto!important;
      height:auto!important;
      min-height:0!important;
      padding:92px 24px 26px!important;
      justify-content:flex-start!important;
      overflow:hidden!important;
    }
    .hero-v27 .v27-copy{
      padding:24px 0 24px!important;
      margin:0 auto!important;
    }
    .hero-v27 .v27-gallery,
    .hero-v27 .v27-bottom,
    .hero .gallery,
    .hero .heroBottom{display:none!important}

    /* fallback for the older hero class if it ever gets rendered */
    .hero{
      height:auto!important;
      min-height:0!important;
      padding:0!important;
    }
    .hero .pin{
      position:relative!important;
      top:auto!important;
      height:auto!important;
      min-height:0!important;
      padding:92px 24px 26px!important;
      justify-content:flex-start!important;
      overflow:hidden!important;
    }

    /* remove the pale separator above the project progress bars */
    .projectsV38Info .v38Bottom{
      border-top:0!important;
    }

    @media(max-width:760px){
      .hero-v27 .v27-inner{
        min-height:0!important;
        padding:76px 14px 18px!important;
      }
      .hero-v27 .v27-copy{
        padding:18px 8px 20px!important;
      }
      .hero .pin{
        min-height:0!important;
        padding:76px 14px 18px!important;
      }
    }
  `;
  document.head.appendChild(css);
})();