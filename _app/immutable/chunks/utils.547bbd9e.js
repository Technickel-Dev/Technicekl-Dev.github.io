const s=(t,n)=>Math.floor(Math.random()*(n-t+1)+t),e=t=>new Promise(n=>setTimeout(n,t)),r=(t=document)=>{const n=t.getAnimations().map(o=>o.finished);return Promise.all(n)};export{s as r,e as s,r as w};
