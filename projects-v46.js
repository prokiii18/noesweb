(()=>{
  const css=document.createElement('style');
  css.id='v46-brand-gap';
  css.textContent=`
    /* Keep the current design. Only add breathing room between hero and logo panel. */
    .clientRail.v42Rail,
    .clientRail.v41Rail,
    .clientRail{
      margin-top:clamp(110px,14vh,180px)!important;
    }

    @media(max-width:760px){
      .clientRail.v42Rail,
      .clientRail.v41Rail,
      .clientRail{
        margin-top:88px!important;
      }
    }
  `;
  if(!document.getElementById(css.id)) document.head.appendChild(css);
})();