const FORM_ENDPOINT="https://formspree.io/f/xppwdegn"; 
document.getElementById('cf').onsubmit=async e=>{e.preventDefault();const v=i=>document.getElementById(i).value,st=document.getElementById('fs'),btn=e.target.querySelector('button');
btn.disabled=true;st.textContent='Sending...';
try{const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:v('n'),email:v('e'),subject:v('s'),message:v('m')})});
if(r.ok){st.textContent='Thank you! Your message has been sent.';e.target.reset()}else{st.textContent='Something went wrong. Please email me directly.'}}
catch(err){st.textContent='Network error. Please try again.'}btn.disabled=false};
const bm=document.getElementById('bm'),ey=document.getElementById('ey');let x=-99,y=-99,tx=-99,ty=-99,on=0;
addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;if(!on){x=tx;y=ty;on=1}bm.style.opacity=1});
document.addEventListener('mouseleave',()=>bm.style.opacity=0);
(function f(){x+=(tx+34-x)*.09;y+=(ty+30-y)*.09;const cx=x+30,cy=y+30,dx=tx-cx,dy=ty-cy,d=Math.hypot(dx,dy)||1,k=Math.min(d/40,1);
ey.setAttribute('transform',`translate(${dx/d*k*4.5} ${dy/d*k*3})`);
bm.style.transform=`translate(${x}px,${y}px) rotate(${Math.max(-14,Math.min(14,dx/18))}deg)`;requestAnimationFrame(f)})();
const pg=document.createElement('div');pg.id='pg';document.body.prepend(pg);
addEventListener('scroll',()=>pg.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%',{passive:true});
const io=new IntersectionObserver(a=>a.forEach(t=>{if(t.isIntersecting){t.target.classList.add('in');io.unobserve(t.target)}}),{threshold:.12});
document.querySelectorAll('.hero>*,h2,.about p,.card,form,.tl').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(el.closest('.hero')?2000+i*150:(i%4)*90)+'ms';io.observe(el)});

const h1=document.querySelector('h1');h1.innerHTML=h1.textContent.split(' ').map((w,i,a)=>`<span class="hw${i==a.length-1?' ac':''}" style="animation-delay:${2.15+i*.12}s">${w}</span>`).reduce((t,x,i,a)=>t+(i==a.length-1?'<br>':i?' ':'')+x,'');
const cio=new IntersectionObserver(a=>a.forEach(t=>{if(!t.isIntersecting)return;cio.unobserve(t.target);const el=t.target,to=+el.dataset.c,d=+(el.dataset.d||0),s=performance.now();
(function u(n){const p=Math.min((n-s)/1400,1),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(d);if(p<1)requestAnimationFrame(u)})(s)}),{threshold:.6});
document.querySelectorAll('[data-c]').forEach(e=>cio.observe(e));
const nl=[...document.querySelectorAll('.menu a')];
addEventListener('scroll',()=>{let c='';document.querySelectorAll('main section,#contact').forEach(s=>{if(s.getBoundingClientRect().top<200)c='#'+s.id});nl.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==c))},{passive:true});
/* Theme toggle (light / dark) - remembers the choice */
document.getElementById('tt').onclick=()=>{const r=document.documentElement,n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}};
