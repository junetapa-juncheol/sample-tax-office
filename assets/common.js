'use strict';
document.querySelector('.nav-toggle')?.addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',String(open));document.getElementById('site-nav').classList.toggle('open',open);});
window.say=message=>{const el=document.getElementById('toast');el.textContent=message;el.hidden=false;clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.hidden=true,4500);};
window.escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.readLocal=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
window.writeLocal=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{say('브라우저'+' 저장 공간을 사용할 수 없습니다. 저장 허용 설정을 확인해 주세요.');return false;}};

const navButton=document.querySelector('.nav-toggle');
const menu=document.getElementById('site-nav');
function closeMenu(){menu?.classList.remove('open');navButton?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open')){closeMenu();navButton?.focus();}});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('motion-on');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.section-head,.card,.course-card,.note-card,.service-block,.company-row,.milestone').forEach(el=>{el.classList.add('reveal-item');observer.observe(el);});
}
