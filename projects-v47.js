(()=>{
  const css=document.createElement('style');
  css.id='v47-hero-no-images';
  css.textContent=`
    /* Hero stays the same, just without the image gallery. */
    .hero-v27.noesHeroV45,.hero.noesHeroV45{
      height:118svh!important;
    }
    .noesHeroV45__sticky{
      justify-content:center!important;
    }
    .noesHeroV45__gallery{
      display:none!important;
    }
    .clientRail.v42Rail,
    .clientRail.v41Rail,
    .clientRail{
      margin-top:0!important;
    }

    @media(max-width:760px){
      .hero-v27.noesHeroV45,.hero.noesHeroV45{
        height:112svh!important;
      }
      .noesHeroV45__sticky{
        justify-content:center!important;
        padding-top:24px!important;
        padding-bottom:24px!important;
      }
    }
  `;
  if(!document.getElementById(css.id)) document.head.appendChild(css);
})();