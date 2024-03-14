import{s as te,e as b,c as T,b as V,r as F,f as I,o as y,i as G,h as f,n as U,F as se,I as $,a as A,t as oe,z as ce,g as H,d as de,L as ve,K as Q,B as Y,j as fe,N as ue,k as me}from"../chunks/scheduler.e43ee5f3.js";import{S as ne,i as le,c as j,b as k,m as z,t as B,a as Z,d as K}from"../chunks/index.9c613d38.js";import{p as he}from"../chunks/stores.4610d451.js";import{r as _e,w as pe,s as ge}from"../chunks/utils.547bbd9e.js";function ye(l){let n,t,u='<div class="emogi svelte-6xd3vs">👾</div> <div class="emogi svelte-6xd3vs">💎</div> <div class="emogi svelte-6xd3vs">💰</div> <div class="emogi svelte-6xd3vs">🍒</div> <div class="emogi svelte-6xd3vs">🍊</div> <div class="emogi svelte-6xd3vs">🍋</div> <div class="emogi svelte-6xd3vs">🍉</div> <div class="emogi svelte-6xd3vs">🍌</div> <div class="emogi svelte-6xd3vs">🍆</div>';return{c(){n=b("div"),t=b("div"),t.innerHTML=u,this.h()},l(d){n=T(d,"DIV",{class:!0});var e=V(n);t=T(e,"DIV",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1iz3z07"&&(t.innerHTML=u),e.forEach(I),this.h()},h(){y(t,"class","reel svelte-6xd3vs"),y(n,"class","container svelte-6xd3vs")},m(d,e){G(d,n,e),f(n,t),l[3](t)},p:U,i:U,o:U,d(d){d&&I(n),l[3](null)}}}function we(l,n,t){let{spinOffset:u=0}=n,d=4e3+u*1e3,e;se(()=>{m()});const m=()=>{let s=e.querySelectorAll("div"),a=360/s.length,i=Math.round(s[0].offsetHeight/2/Math.tan(Math.PI/s.length));s.forEach((M,c)=>{let E=a*c;M.style.transform=`rotateX(${E}deg) translateZ(${i}px)`})},h=()=>{let s=e.querySelectorAll("div"),a=360/s.length,i=Math.round(s[0].offsetHeight/2/Math.tan(Math.PI/s.length)),M=_e(0,s.length-1),E=5+u;return new Promise(async(_,O)=>{t(0,e.style.transition=`all ${d}ms cubic-bezier(.41,-0.01,.63,1.09)`,e);let p=E*360+M*a;t(0,e.style.transform=`translateZ(${-i}px) rotateX(${-p}deg)`,e),await pe(e),t(0,e.style.transition="none",e),p=p%360,t(0,e.style.transform=`translateZ(${-i}px) rotateX(${-p}deg)`,e),_(M)})};function w(s){$[s?"unshift":"push"](()=>{e=s,t(0,e)})}return l.$$set=s=>{"spinOffset"in s&&t(1,u=s.spinOffset)},[e,u,h,w]}class W extends ne{constructor(n){super(),le(this,n,we,ye,te,{spinOffset:1,roll:2})}get roll(){return this.$$.ctx[2]}}function Ie(l){let n,t="",u,d,e,m,h,w,s,a,i,M,c,E,_,O,p,r,v,C='<div class="arm svelte-f4t2va"></div> <div class="ball svelte-f4t2va"></div>',L,x,D='<div class="instructions svelte-f4t2va">Type !slots to spin the wheel</div>',P,R,J,re={};i=new W({props:re}),l[7](i);let ae={spinOffset:1};c=new W({props:ae}),l[8](c);let ie={spinOffset:2};return _=new W({props:ie}),l[9](_),{c(){n=b("script"),n.innerHTML=t,d=A(),e=b("div"),m=b("div"),h=b("div"),w=oe(l[4]),s=A(),a=b("div"),j(i.$$.fragment),M=A(),j(c.$$.fragment),E=A(),j(_.$$.fragment),O=A(),p=b("div"),r=A(),v=b("div"),v.innerHTML=C,L=A(),x=b("div"),x.innerHTML=D,this.h()},l(o){const N=ce("svelte-1nbh741",document.head);n=T(N,"SCRIPT",{src:!0,"data-svelte-h":!0}),F(n)!=="svelte-i7ndq0"&&(n.innerHTML=t),N.forEach(I),d=H(o),e=T(o,"DIV",{class:!0});var g=V(e);m=T(g,"DIV",{class:!0});var q=V(m);h=T(q,"DIV",{class:!0});var X=V(h);w=de(X,l[4]),X.forEach(I),q.forEach(I),s=H(g),a=T(g,"DIV",{class:!0});var S=V(a);k(i.$$.fragment,S),M=H(S),k(c.$$.fragment,S),E=H(S),k(_.$$.fragment,S),S.forEach(I),O=H(g),p=T(g,"DIV",{class:!0}),V(p).forEach(I),r=H(g),v=T(g,"DIV",{class:!0,role:!0,tabindex:!0,"data-svelte-h":!0}),F(v)!=="svelte-1chcmit"&&(v.innerHTML=C),L=H(g),x=T(g,"DIV",{class:!0,"data-svelte-h":!0}),F(x)!=="svelte-1ugn8wi"&&(x.innerHTML=D),g.forEach(I),this.h()},h(){ve(n.src,u="/tarot/tmi.min.js")||y(n,"src",u),y(h,"class","name svelte-f4t2va"),y(m,"class","semi-circle svelte-f4t2va"),y(a,"class","slots svelte-f4t2va"),Q(a,"winner",l[5]),y(p,"class","mount svelte-f4t2va"),y(v,"class","lever svelte-f4t2va"),y(v,"role","button"),y(v,"tabindex","0"),y(x,"class","console svelte-f4t2va"),y(e,"class","container svelte-f4t2va")},m(o,N){f(document.head,n),G(o,d,N),G(o,e,N),f(e,m),f(m,h),f(h,w),f(e,s),f(e,a),z(i,a,null),f(a,M),z(c,a,null),f(a,E),z(_,a,null),f(e,O),f(e,p),f(e,r),f(e,v),l[10](v),f(e,L),f(e,x),P=!0,R||(J=[Y(v,"click",l[6]),Y(v,"keypress",l[6])],R=!0)},p(o,[N]){(!P||N&16)&&fe(w,o[4]);const g={};i.$set(g);const q={};c.$set(q);const X={};_.$set(X),(!P||N&32)&&Q(a,"winner",o[5])},i(o){P||(B(i.$$.fragment,o),B(c.$$.fragment,o),B(_.$$.fragment,o),P=!0)},o(o){Z(i.$$.fragment,o),Z(c.$$.fragment,o),Z(_.$$.fragment,o),P=!1},d(o){o&&(I(d),I(e)),I(n),l[7](null),K(i),l[8](null),K(c),l[9](null),K(_),l[10](null),R=!1,ue(J)}}}const ee="hello-world",Me=2e3;function be(l,n,t){let u;me(l,he,r=>t(12,u=r));let d,e,m,h,w,s=[],a=ee,i=!1;se(async()=>{d=u.url.searchParams.get("username"),M()});const M=()=>{const r=new window.tmi.Client({channels:[d]});r.connect(),r.on("message",(v,C,L,x)=>{let D=C["display-name"];D!==void 0&&(console.log(`${D}: ${L}`),L=="!slots"&&(s.length==0?(s.push(D),c()):s.push(D)))})},c=async()=>{const r=[{transform:"rotateX(0)"},{transform:"rotateX(180deg)"},{transform:"rotateX(0)"}],v={duration:2e3,easing:"ease-out"};w.animate(r,v),t(4,a=s[0]),a==null&&t(4,a=ee),(await Promise.all([e.roll(),m.roll(),h.roll()])).every((L,x,D)=>L===D[0])&&(t(5,i=!0),await ge(Me),t(5,i=!1)),s.shift(),s.length>0&&c()};function E(r){$[r?"unshift":"push"](()=>{e=r,t(0,e)})}function _(r){$[r?"unshift":"push"](()=>{m=r,t(1,m)})}function O(r){$[r?"unshift":"push"](()=>{h=r,t(2,h)})}function p(r){$[r?"unshift":"push"](()=>{w=r,t(3,w)})}return[e,m,h,w,a,i,c,E,_,O,p]}class Le extends ne{constructor(n){super(),le(this,n,be,Ie,te,{})}}export{Le as component};