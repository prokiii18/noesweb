(()=>{
  'use strict';
  function clean(root=document){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(node.nodeValue && node.nodeValue.includes('↗')){
        node.nodeValue=node.nodeValue.replace(/\s*↗\uFE0F?/g,'').replace(/\s{2,}/g,' ');
      }
    });
    document.querySelectorAll('.feature-arrow,.zoom,.contact-arrow').forEach(el=>el.remove());
    document.querySelectorAll('span[aria-hidden="true"]').forEach(el=>{
      if(!el.textContent.trim()) el.remove();
    });
  }
  clean();
  const observer=new MutationObserver(()=>clean());
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();