var Sketch=function(){"use strict";function t(t){return"function"==typeof t}function e(t){return"string"==typeof t}function n(t,e,n){for(var i in e)(n||!t.hasOwnProperty(i))&&(t[i]=e[i]);return t}function i(t,e){return function(){t.apply(e,arguments)}}function r(e){var n={};for(var r in e)n[r]=t(e[r])?i(e[r],e):e[r];return n}function a(i){function a(e){t(e)&&e.apply(i,[].splice.call(arguments,1))}function o(n){for(P=0;P<U.length;P++)e(T=U[P])?x[(n?"add":"remove")+"EventListener"].call(x,T,w,!1):t(T)?w=T:x=T}function c(){x=G?i.style:i.canvas,k=G?"px":"",i.fullscreen&&(i.height=g.innerHeight,i.width=g.innerWidth),x.height=i.height+k,x.width=i.width+k,i.retina&&X&&F&&(x.height=i.height*F,x.width=i.width*F,x.style.height=i.height+"px",x.style.width=i.width+"px",i.scale(F,F)),D&&a(i.resize)}function l(t,e){return function(t,e){E=e.getBoundingClientRect(),t.x=t.pageX-E.left-g.scrollX,t.y=t.pageY-E.top-g.scrollY}(t,i.element),(e=e||{}).ox=e.x||t.x,e.oy=e.y||t.y,e.x=t.x,e.y=t.y,e.dx=e.x-e.ox,e.dy=e.y-e.oy,e}function s(t){for(t=function(t){if(t.preventDefault(),(N=r(t)).originalEvent=t,N.touches)for(B.length=N.touches.length,P=0;P<N.touches.length;P++)B[P]=l(N.touches[P],B[P]);else B.length=0,B[0]=l(N,M);return n(M,B[0],!0),N}(t),R=(_=U.indexOf(O=t.type))-1,i.dragging=!!/down|start/.test(O)||!/up|end/.test(O)&&i.dragging;R;)e(U[R])?a(i[U[R--]],t):e(U[_])?a(i[U[_++]],t):R=0}function u(){i.now=+new Date,i.running=!0}function p(){i.running=!1}var y,w,x,C,E,P,k,b,T,N,O,S,L,R,_,W=0,B=[],D=!1,F=g.devicePixelRatio,G=i.type==f,X=i.type==h,M={x:0,y:0,ox:0,oy:0,dx:0,dy:0},U=[i.element,s,"mousedown","touchstart",s,"mousemove","touchmove",s,"mouseup","touchend",s,"click",d,function(t){S=t.keyCode,L="keyup"==t.type,z[S]=z[function(t){return v[t]||String.fromCharCode(t)}(S)]=!L,a(i[t.type],t)},"keydown","keyup",g,function(t){i.autopause&&("blur"==t.type?p:u)(),a(i[t.type],t)},"focus","blur",c,"resize"],z={};for(S in v)z[v[S]]=!1;return n(i,{touches:B,mouse:M,keys:z,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:function(){C=i.element.parentNode,P=m.indexOf(i),C&&C.removeChild(i.element),~P&&m.splice(P,1),o(!1),p()},toggle:function(){(i.running?p:u)()},clear:function(){X&&i.clearRect(0,0,i.width,i.height)},start:u,stop:p}),m.push(i),i.autostart&&u(),o(!0),c(),function e(){I(y),y=A(e),D||(a(i.setup),D=t(i.setup),a(i.resize)),i.running&&!W&&(i.dt=(b=+new Date)-i.now,i.millis+=i.dt,i.now=b,a(i.update),i.autoclear&&X&&i.clear(),a(i.draw)),W=++W%i.interval}(),i}for(var o,c,l="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),s="__hasSketch",u=Math,h="canvas",p="webgl",f="dom",d=document,g=window,m=[],y={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:d.body,interval:1,globals:!0,retina:!1,type:h},v={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},w={CANVAS:h,WEB_GL:p,WEBGL:p,DOM:f,instances:m,install:function(t){if(!t[s]){for(var e=0;e<l.length;e++)t[l[e]]=u[l[e]];n(t,{TWO_PI:2*u.PI,HALF_PI:u.PI/2,QUATER_PI:u.PI/4,random:function(t,e){return function(t){return"[object Array]"==Object.prototype.toString.call(t)}(t)?t[~~(u.random()*t.length)]:(function(t){return"number"==typeof t}(e)||(e=t||1,t=0),t+u.random()*(e-t))},lerp:function(t,e,n){return t+n*(e-t)},map:function(t,e,n,i,r){return(t-e)/(n-e)*(r-i)+i}}),t[s]=!0}},create:function(t){return(t=n(t||{},y)).globals&&w.install(self),o=t.element=t.element||d.createElement(t.type===f?"div":"canvas"),c=t.context=t.context||function(){switch(t.type){case h:return o.getContext("2d",t);case p:return o.getContext("webgl",t)||o.getContext("experimental-webgl",t);case f:return o.canvas=o}}(),t.container.appendChild(o),w.augment(c,t)},augment:function(t,e){return(e=n(e||{},y)).element=t.canvas||t,e.element.className+=" sketch",n(t,e,!0),a(t)}},x=["ms","moz","webkit","o"],C=self,E=0,P="AnimationFrame",k="request"+P,b="cancel"+P,A=C[k],I=C[b],T=0;T<x.length&&!A;T++)A=C[x[T]+"Request"+P],I=C[x[T]+"Cancel"+k];return C[k]=A=A||function(t){var e=+new Date,n=u.max(0,16-(e-E)),i=setTimeout(function(){t(e+n)},n);return E=e+n,i},C[b]=I=I||function(t){clearTimeout(t)},w}();const clickCanvas=document.getElementById("clickCanvas");if(clickCanvas){function Particle(t,e,n){this.init(t,e,n)}Particle.prototype={init:function(t,e,n){this.alive=!0,this.radius=n||10,this.wander=.15,this.theta=random(TWO_PI),this.drag=.92,this.color="#ffeb3b",this.x=t||0,this.y=e||0,this.vx=0,this.vy=0},move:function(){this.x+=this.vx,this.y+=this.vy,this.vx*=this.drag,this.vy*=this.drag,this.theta+=random(-.5,.5)*this.wander,this.vx+=.1*sin(this.theta),this.vy+=.1*cos(this.theta),this.radius*=.96,this.alive=this.radius>.5},draw:function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,TWO_PI),t.fillStyle=this.color,t.fill()}};var MAX_PARTICLES=50,COLOURS=["#5ee4ff","#f44033","#ffeb3b","#F38630","#FA6900","#f403e8","#F9D423"],particles=[],pool=[],clickparticle=Sketch.create({container:document.getElementById("clickCanvas")});clickparticle.spawn=function(t,e){particles.length>=MAX_PARTICLES&&pool.push(particles.shift()),particle=pool.length?pool.pop():new Particle,particle.init(t,e,random(5,20)),particle.wander=random(.5,2),particle.color=random(COLOURS),particle.drag=random(.9,.99),theta=random(TWO_PI),force=random(1,5),particle.vx=sin(theta)*force,particle.vy=cos(theta)*force,particles.push(particle)},clickparticle.update=function(){var t,e;for(t=particles.length-1;t>=0;t--)(e=particles[t]).alive?e.move():pool.push(particles.splice(t,1)[0])},clickparticle.draw=function(){clickparticle.globalCompositeOperation="lighter";for(var t=particles.length-1;t>=0;t--)particles[t].draw(clickparticle)},document.addEventListener("mousedown",function(t){var e,n;"TEXTAREA"!==t.target.nodeName&&"INPUT"!==t.target.nodeName&&"A"!==t.target.nodeName&&"I"!==t.target.nodeName&&"IMG"!==t.target.nodeName&&function(){for(e=random(15,20),n=0;n<e;n++)clickparticle.spawn(t.pageX-100,t.pageY-100)}()})}