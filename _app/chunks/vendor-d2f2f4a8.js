function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function L(){return Object.create(null)}function m(t){t.forEach(M)}function G(t){return typeof t=="function"}function J(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function st(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function K(t){return Object.keys(t).length===0}function at(t,n,e,i){if(t){const r=T(t,n,e,i);return t[0](r)}}function T(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(n.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,s){if(r){const o=T(n,e,i,s);t.p(o,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function Q(){$=!0}function R(){$=!1}function U(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:U(1,r,b=>n[e[b]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const s=[],o=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);l>=c;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(o[c],f)}}function W(t,n){if($){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){$&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){nt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function B(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return B(t,n,e,Y)}function $t(t,n,e){return B(t,n,e,Z)}function et(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function wt(t){return et(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n){t.value=n==null?"":n}function kt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function St(t,n,e){t.classList[e?"add":"remove"](n)}function it(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function At(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function Nt(t){w().$$.on_mount.push(t)}function jt(t){w().$$.after_update.push(t)}function Ct(){const t=w();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const r=it(n,e);i.slice().forEach(s=>{s.call(t,r)})}}}function qt(t,n){w().$$.context.set(t,n)}const g=[],O=[],E=[],D=[],P=Promise.resolve();let A=!1;function F(){A||(A=!0,P.then(H))}function Mt(){return F(),P}function N(t){E.push(t)}const j=new Set;let v=0;function H(){const t=p;do{for(;v<g.length;){const n=g[v];v++,y(n),rt(n.$$)}for(y(null),g.length=0,v=0;O.length;)O.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];j.has(e)||(j.add(e),e())}E.length=0}while(g.length);for(;D.length;)D.pop()();A=!1,j.clear(),y(t)}function rt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const k=new Set;let _;function Lt(){_={r:0,c:[],p:_}}function Tt(){_.r||m(_.c),_=_.p}function ct(t,n){t&&t.i&&(k.delete(t),t.i(n))}function zt(t,n,e,i){if(t&&t.o){if(k.has(t))return;k.add(t),_.c.push(()=>{k.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[s]=l}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=t.$$;r&&r.m(n,e),i||N(()=>{const c=s.map(M).filter(G);o?o.push(...c):m(c),t.$$.on_mount=[]}),l.forEach(N)}function lt(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(g.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,s,o,l=[-1]){const c=p;y(t);const u=t.$$={fragment:null,ctx:null,props:s,update:h,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};o&&o(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,b,...C)=>{const q=C.length?C[0]:b;return u.ctx&&r(u.ctx[a],u.ctx[a]=q)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](q),f&&ut(t,a)),b}):[],u.update(),f=!0,m(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){Q();const a=tt(n.target);u.fragment&&u.fragment.l(a),a.forEach(X)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),R(),H()}y(c)}class Ht{$destroy(){lt(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function It(t,n=h){let e;const i=new Set;function r(l){if(J(t,l)&&(t=l,e)){const c=!d.length;for(const u of i)u[1](),d.push(u,t);if(c){for(let u=0;u<d.length;u+=2)d[u][0](d[u+1]);d.length=0}}}function s(l){r(l(t))}function o(l,c=h){const u=[l,c];return i.add(u),i.size===1&&(e=n(r)||h),l(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:r,update:s,subscribe:o}}export{lt as A,I as B,It as C,Mt as D,W as E,gt as F,h as G,Ct as H,Z as I,$t as J,st as K,m as L,at as M,_t as N,dt as O,ft as P,kt as Q,At as R,Ht as S,St as T,mt as U,vt as V,tt as a,bt as b,xt as c,X as d,Y as e,ht as f,et as g,Et as h,Ft as i,pt as j,yt as k,wt as l,Lt as m,zt as n,Tt as o,ct as p,qt as q,jt as r,J as s,S as t,Nt as u,Dt as v,Pt as w,ot as x,Bt as y,Ot as z};
