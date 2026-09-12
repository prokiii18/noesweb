(()=>{
  'use strict';
  const icon=(cls='mini-arrow-icon')=>`<svg class="${cls}" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M6 14L14 6M8 6h6v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function stripEmoji(root=document){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(node.nodeValue && node.nodeValue.includes('↗')){
        node.nodeValue=node.nodeValue.replace(/\s*↗\uFE0F?/g,'').replace(/\s{2,}/g,' ');
      }
    });
  }

  function addInline(selector){
    document.querySelectorAll(selector).forEach(el=>{
      if(!el.querySelector('.mini-arrow-icon')) el.insertAdjacentHTML('beforeend',icon());
    });
  }

  function addFloating(selector,className){
    document.querySelectorAll(selector).forEach(parent=>{
      if(parent.querySelector('.'+className)) return;
      const span=document.createElement('span');
      span.className=className;
      span.setAttribute('aria-hidden','true');
      span.innerHTML=icon('mini-arrow-icon');
      parent.appendChild(span);
    });
  }

  function apply(){
    stripEmoji();

    // text links/buttons
    addInline('.cta, .nav-contact, .about-more, .text-link, .case-open, .mail, footer a[target="_blank"]');

    // caption on the large featured work block
    const cap=document.querySelector('.feature-caption span:last-child');
    if(cap && !cap.querySelector('.mini-arrow-icon')) cap.insertAdjacentHTML('beforeend',icon());

    // circular arrows on visuals
    addFloating('.feature','feature-arrow');
    document.querySelectorAll('.project-visual').forEach(el=>{
      if(!el.querySelector('.zoom')){
        const span=document.createElement('span');
        span.className='zoom';
        span.setAttribute('aria-hidden','true');
        span.innerHTML=icon();
        el.appendChild(span);
      }
    });

    // contact circle
    const contact=document.querySelector('a.contact-arrow');
    if(contact && !contact.querySelector('.mini-arrow-icon')){
      contact.textContent='';
      contact.innerHTML=icon();
    }

    if(!document.getElementById('minimal-arrow-style')){
      const s=document.createElement('style');
      s.id='minimal-arrow-style';
      s.textContent=`
        .mini-arrow-icon{width:15px;height:15px;display:inline-block;vertical-align:-2px;margin-left:7px;flex:0 0 auto;transition:transform .22s ease;overflow:visible}
        a:hover .mini-arrow-icon,button:hover .mini-arrow-icon,.feature-caption span:last-child:hover .mini-arrow-icon{transform:translate(2px,-2px)}
        .feature-arrow,.zoom{display:flex!important;align-items:center!important;justify-content:center!important;color:#17201d!important;font-size:0!important}
        .feature-arrow .mini-arrow-icon,.zoom .mini-arrow-icon,.contact-arrow .mini-arrow-icon{margin:0!important;width:18px;height:18px}
        .contact-arrow{display:flex!important;align-items:center!important;justify-content:center!important}
        .cta .mini-arrow-icon{width:16px;height:16px;margin-left:10px}
        @media(max-width:700px){
          .mini-arrow-icon{width:14px;height:14px;margin-left:6px}
          .feature-arrow .mini-arrow-icon,.zoom .mini-arrow-icon{width:17px;height:17px}
        }
      `;
      document.head.appendChild(s);
    }
  }

  apply();
  let queued=false;
  const observer=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply()});
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();