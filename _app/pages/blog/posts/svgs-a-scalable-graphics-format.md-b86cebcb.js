import{S as vs,i as ks,s as gs,e as s,t as n,j as p,c as l,a as h,g as r,d as t,l as u,K as Ba,b as c,f as o,E as a,G as Ma}from"../../../chunks/vendor-d2f2f4a8.js";function Gs(bs){let g,ot,ye,G,nt,rt,ht,ve,ke,ge,Y,pt,Ge,w,ut,le,ct,ft,mt,dt,Se,y,bt,ie,wt,yt,vt,kt,_e,N,I,Da,Ve,S,oe,x,gt,P,Gt,St,_t,Ee,Te,U,Vt,Re,_,Et,Tt,Rt,Ie,B,ws='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>circle</span><span class="token punctuation">></span></span></code>',xe,Pe,Be,Me,De,Ae,f,M,It,ne,xt,Pt,Bt,v,Mt,re,Dt,At,he,Lt,Ct,qt,D,Ht,pe,zt,Ft,Wt,A,Yt,ue,Nt,Ut,jt,L,Jt,ce,Ot,Xt,Kt,k,Qt,fe,Zt,$t,ea,ta,Le,j,aa,Ce,J,C,Aa,qe,V,me,de,sa,la,He,ze,O,ia,Fe,E,oa,na,ra,We,X,ha,Ye,T,pa,ua,ca,Ne,K,q,La,Ue,R,be,we,fa,ma,je,Je,Q,da,Oe,m,ba,H,wa,ya,z,va,ka,F,ga,Ga,W,Sa,_a,Va,Ea,Xe,Z,Ta,Ke,$,Ra;return{c(){g=s("h1"),ot=n(fs),ye=p(),G=s("p"),nt=n(ds),rt=n(" - "),ht=n(ms),ve=p(),ke=s("br"),ge=p(),Y=s("h2"),pt=n("What is an SVG?"),Ge=p(),w=s("p"),ut=n("The future of web graphics is ever changing but time and time again you will hear one special graphic uttered through the grape vine. That graphic goes by the name of SVG, but what exactly is it? SVG stands for "),le=s("em"),ct=n("scalable vector graphics"),ft=n(". It is an XML-based markup language for describing two-dimensional based vector graphics. That\u2019s still a pretty confusing way to describe it, so lets think of it this way."),mt=s("br"),dt=s("br"),Se=p(),y=s("p"),bt=n("You are most likely familiar with the most popular type of graphic called "),ie=s("em"),wt=n("Raster Graphics"),yt=n(". Raster Graphics are images made up of individual pixels with the most common types being PNG and JPEG. You interact with Raster Graphics everyday without even knowing it. An SVG on the other hand, can be simplified down to individual pieces of math and code to describe a shape."),vt=s("br"),kt=s("br"),_e=p(),N=s("p"),I=s("img"),Ve=p(),S=s("div"),oe=s("p"),x=s("em"),gt=n("Difference between raster and vector images. (Yug et al., "),P=s("a"),Gt=n("https://commons.wikimedia.org/w/index.php?curid=1183592"),St=n(")"),_t=p(),Ee=s("br"),Te=p(),U=s("h2"),Vt=n("SVGs in action"),Re=p(),_=s("p"),Et=n("To see how an SVG works, let\u2019s look at the following block of code that describes the shape of a yellow circle with a green outline."),Tt=s("br"),Rt=s("br"),Ie=p(),B=s("pre"),xe=p(),Pe=s("br"),Be=n(`
Let's break down what this actually means:`),Me=s("br"),De=s("br"),Ae=p(),f=s("ul"),M=s("li"),It=n("The tag "),ne=s("em"),xt=n("circle"),Pt=n(" is the element that we are trying to produce. For this instance, our SVG element is a circle."),Bt=p(),v=s("li"),Mt=n("The first two arguments, "),re=s("em"),Dt=n("cx"),At=n(" and "),he=s("em"),Lt=n("cy"),Ct=n(", represent the position of the circle on the canvas. In this case we move 50 \u201Cunits\u201D in the x direction and 50 \u201Cunits\u201D in the y direction."),qt=p(),D=s("li"),Ht=n("The third argument, "),pe=s("em"),zt=n("r"),Ft=n(", represents the radius of the circle. It essentially sets how big the circle will be."),Wt=p(),A=s("li"),Yt=n("Next up, "),ue=s("em"),Nt=n("stroke"),Ut=n(", can be thought as taking a painters brush and outlining the circle with it. In this case the outline would be green."),jt=p(),L=s("li"),Jt=n("The following argument, "),ce=s("em"),Ot=n("stroke-width"),Xt=n(", defines how big the painters brush actually is."),Kt=p(),k=s("li"),Qt=n("Finally, the whole circle is colored yellow using "),fe=s("em"),Zt=n("fill"),$t=n(", inside of the outline we did with stroke."),ea=s("br"),ta=s("br"),Le=p(),j=s("p"),aa=n("Voila! The computer handles the rest by drawing the circle using the parameters you have provided. The end result looks something like this:"),Ce=p(),J=s("p"),C=s("img"),qe=p(),V=s("div"),me=s("p"),de=s("em"),sa=n("SVG of a yellow circle with green outline"),la=p(),He=s("br"),ze=p(),O=s("h2"),ia=n("Why should we be using SVGs?"),Fe=p(),E=s("p"),oa=n("The most important part to SVGs is the scalability of them. Unlike a Raster image, when an SVG is made bigger or smaller, it doesn\u2019t lose any detail. The math just calculates how that SVG would look at the new size! They are also super small in file size compared to JPGs and PNGs and can be optimized. Another neat fact is that depending on how it is used, they are natively accessible since they can be read like a book, unlike images. Finally, the most useful part of SVGs in my opinion is the fact they can be animated. While a normal image animation may take a lot of effort to put together, an SVG can be animated directly by changing the math that creates the shapes."),na=s("br"),ra=s("br"),We=p(),X=s("h2"),ha=n("Uses for an SVG"),Ye=p(),T=s("p"),pa=n("The use of an SVG is only limited by your technology and imagination. Some uses include logos, brochures, mockups, websites, backgrounds, art, and so much more. The website that you are reading this blog on has SVGs baked in to a few places including the animated landing page. I\u2019ve also made SVG art in the past for fun Canada Day celebrations. The posibilities are up to you to decide!"),ua=s("br"),ca=s("br"),Ne=p(),K=s("p"),q=s("img"),Ue=p(),R=s("div"),be=s("p"),we=s("em"),fa=n("SVG celebrating Canada Day"),ma=p(),je=s("br"),Je=p(),Q=s("h2"),da=n("How to make your own SVGs"),Oe=p(),m=s("p"),ba=n("There are a number of ways to make your own SVGs, and it\u2019s really easy to get started. For some free tools, all you need is a browser and some kind of text editor. (Ex. Chrome and VSCode) The browser understands how to display SVGs to see what you can make. "),H=s("a"),wa=n("Inkscape"),ya=n(" is also a free tool dedicated to SVG design. On the paid side of the spectrum, "),z=s("a"),va=n("Photoshop"),ka=n(" and "),F=s("a"),ga=n("Affinity Designer"),Ga=n(" have powerful SVG functionality built in. I personally use Inkscape and Affinity Designer though the tools mentioned are not the only ones out there. To learn more about SVG shapes and parameters, have a quick read through the "),W=s("a"),Sa=n("Mozilla Docs"),_a=n(" as they are really good and my go to when I want to learn something about SVGs."),Va=s("br"),Ea=s("br"),Xe=p(),Z=s("h2"),Ta=n("Recap"),Ke=p(),$=s("p"),Ra=n("Overall, SVGs may not be the only web graphic solution out there, but they are definitely a powerhouse hidden in a small and easy to use package. It\u2019s no doubt that as we find new and exciting ways to convey our information with images, that SVGs will stay high in importance. Give SVGs a try, you never know what cool things you may end up making!"),this.h()},l(e){g=l(e,"H1",{});var i=h(g);ot=r(i,fs),i.forEach(t),ye=u(e),G=l(e,"P",{});var Qe=h(G);nt=r(Qe,ds),rt=r(Qe," - "),ht=r(Qe,ms),Qe.forEach(t),ve=u(e),ke=l(e,"BR",{}),ge=u(e),Y=l(e,"H2",{});var Ca=h(Y);pt=r(Ca,"What is an SVG?"),Ca.forEach(t),Ge=u(e),w=l(e,"P",{});var ee=h(w);ut=r(ee,"The future of web graphics is ever changing but time and time again you will hear one special graphic uttered through the grape vine. That graphic goes by the name of SVG, but what exactly is it? SVG stands for "),le=l(ee,"EM",{});var qa=h(le);ct=r(qa,"scalable vector graphics"),qa.forEach(t),ft=r(ee,". It is an XML-based markup language for describing two-dimensional based vector graphics. That\u2019s still a pretty confusing way to describe it, so lets think of it this way."),mt=l(ee,"BR",{}),dt=l(ee,"BR",{}),ee.forEach(t),Se=u(e),y=l(e,"P",{});var te=h(y);bt=r(te,"You are most likely familiar with the most popular type of graphic called "),ie=l(te,"EM",{});var Ha=h(ie);wt=r(Ha,"Raster Graphics"),Ha.forEach(t),yt=r(te,". Raster Graphics are images made up of individual pixels with the most common types being PNG and JPEG. You interact with Raster Graphics everyday without even knowing it. An SVG on the other hand, can be simplified down to individual pieces of math and code to describe a shape."),vt=l(te,"BR",{}),kt=l(te,"BR",{}),te.forEach(t),_e=u(e),N=l(e,"P",{});var za=h(N);I=l(za,"IMG",{src:!0,alt:!0,title:!0}),za.forEach(t),Ve=u(e),S=l(e,"DIV",{class:!0});var Ia=h(S);oe=l(Ia,"P",{});var Fa=h(oe);x=l(Fa,"EM",{});var Ze=h(x);gt=r(Ze,"Difference between raster and vector images. (Yug et al., "),P=l(Ze,"A",{href:!0,rel:!0});var Wa=h(P);Gt=r(Wa,"https://commons.wikimedia.org/w/index.php?curid=1183592"),Wa.forEach(t),St=r(Ze,")"),Ze.forEach(t),Fa.forEach(t),_t=u(Ia),Ia.forEach(t),Ee=l(e,"BR",{}),Te=u(e),U=l(e,"H2",{});var Ya=h(U);Vt=r(Ya,"SVGs in action"),Ya.forEach(t),Re=u(e),_=l(e,"P",{});var $e=h(_);Et=r($e,"To see how an SVG works, let\u2019s look at the following block of code that describes the shape of a yellow circle with a green outline."),Tt=l($e,"BR",{}),Rt=l($e,"BR",{}),$e.forEach(t),Ie=u(e),B=l(e,"PRE",{class:!0});var ys=h(B);ys.forEach(t),xe=u(e),Pe=l(e,"BR",{}),Be=r(e,`
Let's break down what this actually means:`),Me=l(e,"BR",{}),De=l(e,"BR",{}),Ae=u(e),f=l(e,"UL",{});var d=h(f);M=l(d,"LI",{});var et=h(M);It=r(et,"The tag "),ne=l(et,"EM",{});var Na=h(ne);xt=r(Na,"circle"),Na.forEach(t),Pt=r(et," is the element that we are trying to produce. For this instance, our SVG element is a circle."),et.forEach(t),Bt=u(d),v=l(d,"LI",{});var ae=h(v);Mt=r(ae,"The first two arguments, "),re=l(ae,"EM",{});var Ua=h(re);Dt=r(Ua,"cx"),Ua.forEach(t),At=r(ae," and "),he=l(ae,"EM",{});var ja=h(he);Lt=r(ja,"cy"),ja.forEach(t),Ct=r(ae,", represent the position of the circle on the canvas. In this case we move 50 \u201Cunits\u201D in the x direction and 50 \u201Cunits\u201D in the y direction."),ae.forEach(t),qt=u(d),D=l(d,"LI",{});var tt=h(D);Ht=r(tt,"The third argument, "),pe=l(tt,"EM",{});var Ja=h(pe);zt=r(Ja,"r"),Ja.forEach(t),Ft=r(tt,", represents the radius of the circle. It essentially sets how big the circle will be."),tt.forEach(t),Wt=u(d),A=l(d,"LI",{});var at=h(A);Yt=r(at,"Next up, "),ue=l(at,"EM",{});var Oa=h(ue);Nt=r(Oa,"stroke"),Oa.forEach(t),Ut=r(at,", can be thought as taking a painters brush and outlining the circle with it. In this case the outline would be green."),at.forEach(t),jt=u(d),L=l(d,"LI",{});var st=h(L);Jt=r(st,"The following argument, "),ce=l(st,"EM",{});var Xa=h(ce);Ot=r(Xa,"stroke-width"),Xa.forEach(t),Xt=r(st,", defines how big the painters brush actually is."),st.forEach(t),Kt=u(d),k=l(d,"LI",{});var se=h(k);Qt=r(se,"Finally, the whole circle is colored yellow using "),fe=l(se,"EM",{});var Ka=h(fe);Zt=r(Ka,"fill"),Ka.forEach(t),$t=r(se,", inside of the outline we did with stroke."),ea=l(se,"BR",{}),ta=l(se,"BR",{}),se.forEach(t),d.forEach(t),Le=u(e),j=l(e,"P",{});var Qa=h(j);aa=r(Qa,"Voila! The computer handles the rest by drawing the circle using the parameters you have provided. The end result looks something like this:"),Qa.forEach(t),Ce=u(e),J=l(e,"P",{});var Za=h(J);C=l(Za,"IMG",{src:!0,alt:!0,title:!0}),Za.forEach(t),qe=u(e),V=l(e,"DIV",{class:!0});var xa=h(V);me=l(xa,"P",{});var $a=h(me);de=l($a,"EM",{});var es=h(de);sa=r(es,"SVG of a yellow circle with green outline"),es.forEach(t),$a.forEach(t),la=u(xa),xa.forEach(t),He=l(e,"BR",{}),ze=u(e),O=l(e,"H2",{});var ts=h(O);ia=r(ts,"Why should we be using SVGs?"),ts.forEach(t),Fe=u(e),E=l(e,"P",{});var lt=h(E);oa=r(lt,"The most important part to SVGs is the scalability of them. Unlike a Raster image, when an SVG is made bigger or smaller, it doesn\u2019t lose any detail. The math just calculates how that SVG would look at the new size! They are also super small in file size compared to JPGs and PNGs and can be optimized. Another neat fact is that depending on how it is used, they are natively accessible since they can be read like a book, unlike images. Finally, the most useful part of SVGs in my opinion is the fact they can be animated. While a normal image animation may take a lot of effort to put together, an SVG can be animated directly by changing the math that creates the shapes."),na=l(lt,"BR",{}),ra=l(lt,"BR",{}),lt.forEach(t),We=u(e),X=l(e,"H2",{});var as=h(X);ha=r(as,"Uses for an SVG"),as.forEach(t),Ye=u(e),T=l(e,"P",{});var it=h(T);pa=r(it,"The use of an SVG is only limited by your technology and imagination. Some uses include logos, brochures, mockups, websites, backgrounds, art, and so much more. The website that you are reading this blog on has SVGs baked in to a few places including the animated landing page. I\u2019ve also made SVG art in the past for fun Canada Day celebrations. The posibilities are up to you to decide!"),ua=l(it,"BR",{}),ca=l(it,"BR",{}),it.forEach(t),Ne=u(e),K=l(e,"P",{});var ss=h(K);q=l(ss,"IMG",{src:!0,alt:!0,title:!0}),ss.forEach(t),Ue=u(e),R=l(e,"DIV",{class:!0});var Pa=h(R);be=l(Pa,"P",{});var ls=h(be);we=l(ls,"EM",{});var is=h(we);fa=r(is,"SVG celebrating Canada Day"),is.forEach(t),ls.forEach(t),ma=u(Pa),Pa.forEach(t),je=l(e,"BR",{}),Je=u(e),Q=l(e,"H2",{});var os=h(Q);da=r(os,"How to make your own SVGs"),os.forEach(t),Oe=u(e),m=l(e,"P",{});var b=h(m);ba=r(b,"There are a number of ways to make your own SVGs, and it\u2019s really easy to get started. For some free tools, all you need is a browser and some kind of text editor. (Ex. Chrome and VSCode) The browser understands how to display SVGs to see what you can make. "),H=l(b,"A",{href:!0,rel:!0});var ns=h(H);wa=r(ns,"Inkscape"),ns.forEach(t),ya=r(b," is also a free tool dedicated to SVG design. On the paid side of the spectrum, "),z=l(b,"A",{href:!0,rel:!0});var rs=h(z);va=r(rs,"Photoshop"),rs.forEach(t),ka=r(b," and "),F=l(b,"A",{href:!0,rel:!0});var hs=h(F);ga=r(hs,"Affinity Designer"),hs.forEach(t),Ga=r(b," have powerful SVG functionality built in. I personally use Inkscape and Affinity Designer though the tools mentioned are not the only ones out there. To learn more about SVG shapes and parameters, have a quick read through the "),W=l(b,"A",{href:!0,rel:!0});var ps=h(W);Sa=r(ps,"Mozilla Docs"),ps.forEach(t),_a=r(b," as they are really good and my go to when I want to learn something about SVGs."),Va=l(b,"BR",{}),Ea=l(b,"BR",{}),b.forEach(t),Xe=u(e),Z=l(e,"H2",{});var us=h(Z);Ta=r(us,"Recap"),us.forEach(t),Ke=u(e),$=l(e,"P",{});var cs=h($);Ra=r(cs,"Overall, SVGs may not be the only web graphic solution out there, but they are definitely a powerhouse hidden in a small and easy to use package. It\u2019s no doubt that as we find new and exciting ways to convey our information with images, that SVGs will stay high in importance. Give SVGs a try, you never know what cool things you may end up making!"),cs.forEach(t),this.h()},h(){Ba(I.src,Da="/blog/raster_vs_vector.png")||c(I,"src",Da),c(I,"alt","Difference between bitmap and vector images"),c(I,"title","Raster Vs. Vector"),c(P,"href","https://commons.wikimedia.org/w/index.php?curid=1183592"),c(P,"rel","nofollow"),c(S,"class","text-center"),c(B,"class","language-html"),Ba(C.src,Aa="/blog/yellow_circle_svg.png")||c(C,"src",Aa),c(C,"alt","SVG of a yellow circle with green outline"),c(C,"title","Yellow Circle SVG"),c(V,"class","text-center"),Ba(q.src,La="/blog/canada_day_svg.png")||c(q,"src",La),c(q,"alt","SVG celebrating Canada Day"),c(q,"title","Canada Day SVG"),c(R,"class","text-center"),c(H,"href","https://inkscape.org/"),c(H,"rel","nofollow"),c(z,"href","https://www.adobe.com/ca/products/photoshop.html"),c(z,"rel","nofollow"),c(F,"href","https://affinity.serif.com/en-us/designer/"),c(F,"rel","nofollow"),c(W,"href","https://developer.mozilla.org/en-US/docs/Web/SVG"),c(W,"rel","nofollow")},m(e,i){o(e,g,i),a(g,ot),o(e,ye,i),o(e,G,i),a(G,nt),a(G,rt),a(G,ht),o(e,ve,i),o(e,ke,i),o(e,ge,i),o(e,Y,i),a(Y,pt),o(e,Ge,i),o(e,w,i),a(w,ut),a(w,le),a(le,ct),a(w,ft),a(w,mt),a(w,dt),o(e,Se,i),o(e,y,i),a(y,bt),a(y,ie),a(ie,wt),a(y,yt),a(y,vt),a(y,kt),o(e,_e,i),o(e,N,i),a(N,I),o(e,Ve,i),o(e,S,i),a(S,oe),a(oe,x),a(x,gt),a(x,P),a(P,Gt),a(x,St),a(S,_t),o(e,Ee,i),o(e,Te,i),o(e,U,i),a(U,Vt),o(e,Re,i),o(e,_,i),a(_,Et),a(_,Tt),a(_,Rt),o(e,Ie,i),o(e,B,i),B.innerHTML=ws,o(e,xe,i),o(e,Pe,i),o(e,Be,i),o(e,Me,i),o(e,De,i),o(e,Ae,i),o(e,f,i),a(f,M),a(M,It),a(M,ne),a(ne,xt),a(M,Pt),a(f,Bt),a(f,v),a(v,Mt),a(v,re),a(re,Dt),a(v,At),a(v,he),a(he,Lt),a(v,Ct),a(f,qt),a(f,D),a(D,Ht),a(D,pe),a(pe,zt),a(D,Ft),a(f,Wt),a(f,A),a(A,Yt),a(A,ue),a(ue,Nt),a(A,Ut),a(f,jt),a(f,L),a(L,Jt),a(L,ce),a(ce,Ot),a(L,Xt),a(f,Kt),a(f,k),a(k,Qt),a(k,fe),a(fe,Zt),a(k,$t),a(k,ea),a(k,ta),o(e,Le,i),o(e,j,i),a(j,aa),o(e,Ce,i),o(e,J,i),a(J,C),o(e,qe,i),o(e,V,i),a(V,me),a(me,de),a(de,sa),a(V,la),o(e,He,i),o(e,ze,i),o(e,O,i),a(O,ia),o(e,Fe,i),o(e,E,i),a(E,oa),a(E,na),a(E,ra),o(e,We,i),o(e,X,i),a(X,ha),o(e,Ye,i),o(e,T,i),a(T,pa),a(T,ua),a(T,ca),o(e,Ne,i),o(e,K,i),a(K,q),o(e,Ue,i),o(e,R,i),a(R,be),a(be,we),a(we,fa),a(R,ma),o(e,je,i),o(e,Je,i),o(e,Q,i),a(Q,da),o(e,Oe,i),o(e,m,i),a(m,ba),a(m,H),a(H,wa),a(m,ya),a(m,z),a(z,va),a(m,ka),a(m,F),a(F,ga),a(m,Ga),a(m,W),a(W,Sa),a(m,_a),a(m,Va),a(m,Ea),o(e,Xe,i),o(e,Z,i),a(Z,Ta),o(e,Ke,i),o(e,$,i),a($,Ra)},p:Ma,i:Ma,o:Ma,d(e){e&&t(g),e&&t(ye),e&&t(G),e&&t(ve),e&&t(ke),e&&t(ge),e&&t(Y),e&&t(Ge),e&&t(w),e&&t(Se),e&&t(y),e&&t(_e),e&&t(N),e&&t(Ve),e&&t(S),e&&t(Ee),e&&t(Te),e&&t(U),e&&t(Re),e&&t(_),e&&t(Ie),e&&t(B),e&&t(xe),e&&t(Pe),e&&t(Be),e&&t(Me),e&&t(De),e&&t(Ae),e&&t(f),e&&t(Le),e&&t(j),e&&t(Ce),e&&t(J),e&&t(qe),e&&t(V),e&&t(He),e&&t(ze),e&&t(O),e&&t(Fe),e&&t(E),e&&t(We),e&&t(X),e&&t(Ye),e&&t(T),e&&t(Ne),e&&t(K),e&&t(Ue),e&&t(R),e&&t(je),e&&t(Je),e&&t(Q),e&&t(Oe),e&&t(m),e&&t(Xe),e&&t(Z),e&&t(Ke),e&&t($)}}}const Ss={title:"SVGs: A Scalable Graphics Format",author:"Bradley Leonard",date:"2022-01-21",description:"An introduction the the wondeful world of SVGs! Starting at the bare basics, this post goes into what SVGs are, how to use them and why you might use SVGs over other traditional graphics formats in web design.",tags:["svg","graphics","web","design"]},{title:fs,author:ms,date:ds,description:Vs,tags:Es}=Ss;class Ts extends vs{constructor(g){super();ks(this,g,null,Gs,gs,{})}}export{Ts as default,Ss as metadata};
