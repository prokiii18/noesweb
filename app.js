const progress=document.getElementById('progress');
function onScroll(){const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max>0?(d.scrollTop/max)*100:0)+'%'}
addEventListener('scroll',onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('stat'))animateStat(e.target);io.unobserve(e.target)}}),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function animateStat(el){const node=el.querySelector('.statValue');if(!node||node.dataset.done)return;node.dataset.done='1';const target=parseFloat(node.dataset.target||'0'),dec=+node.dataset.decimals||0,suffix=node.dataset.suffix||'';const start=performance.now(),dur=1200;function tick(t){const p=Math.min(1,(t-start)/dur),v=target*(1-Math.pow(1-p,3));node.textContent=v.toFixed(dec)+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
