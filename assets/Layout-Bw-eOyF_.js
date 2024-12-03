import{R as V,S as R,N as I,F as N,A as X}from"./Aside-kakgdKWN.js";import{h as Y,d as $,r as w,u as D,b as m,f as e,t as B,i as y,c as f,j as P,C as q,k as F,n as E,o as s,_ as k,a as T,F as A,l as z,e as g,m as j,p as H,w as U,P as G}from"./index-CkRd138r.js";const Z=Y("layout",{state:()=>({layout:"left-main"}),getters:{getCurrentLayout(c){return c.layout}},actions:{updateLayout(c,l){c==="right-panel"?this.layout==="left-main-right"&&l?this.layout="left-main":this.layout==="main-right"&&l?this.layout="main":this.layout==="left-main"?this.layout="left-main-right":this.layout==="main"?this.layout="main-right":this.layout.includes("fly")&&l&&(this.layout=this.layout.split(" ")[0],this.layout==="left-main-right"?this.layout="left-main":this.layout="main"):c==="left-panel"?this.layout==="main"?this.layout="left-main":this.layout==="left-main"?this.layout="main":this.layout==="left-main-right"?this.layout="main-right":this.layout==="main-right"&&(this.layout="left-main-right"):this.layout=this.layout+" fly"}}}),O={class:"button-group"},W=$({__name:"FlyPanel",props:{title:String},setup(c){const l=c,i=w(!1),u=D("fly-container"),v=Z(),d=()=>{v.updateLayout("right-panel",!0),i.value=!1,u.value.removeAttribute("style")},p=()=>{const a=u.value,t=a.getBoundingClientRect();a.style.top=t.top-32+"px",a.style.left=t.left-32+"px",a.style.height=t.height+"px",v.updateLayout("fly"),i.value=!0},o=a=>{let t=u.value,r,C,M=a.clientX,S=a.clientY;const x=window.getComputedStyle(t);r=parseInt(x.top,10),C=parseInt(x.left,10);const L=function(h){t.style.top=r+h.clientY-S+"px",t.style.left=C+h.clientX-M+"px"},_=function(){document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",_),t.style.zIndex="99999999"};document.addEventListener("mousemove",L),document.addEventListener("mouseup",_)},n=a=>{let t=u.value;const r=a.target.classList[1],C=t.getBoundingClientRect().width,M=t.getBoundingClientRect().height;t.classList.add("resizing");let S=a.clientX,x=a.clientY;const L=function(h){r==="right"?t.style.width=C+(h.clientX-S)+"px":(r==="bottom"||(t.style.width=C+(h.clientX-S)+"px"),t.style.height=M+(h.clientY-x)+"px")},_=function(){document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",_),t.classList.remove("resizing")};document.addEventListener("mousemove",L),document.addEventListener("mouseup",_)};return(a,t)=>(s(),m("div",{class:E(["fly-container",{fly:i.value}]),ref:"fly-container"},[e("div",{class:"panel-title",onMousedown:t[3]||(t[3]=r=>i.value&&o(r))},[e("span",null,B(l.title),1),e("div",O,[i.value?y("",!0):(s(),m("button",{key:0,class:"icon-only",onClick:t[0]||(t[0]=r=>p())},t[7]||(t[7]=[e("svg",{fill:"#000000",width:"18px",height:"18px",viewBox:"0 0 32 32",id:"icon",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"popup"),e("path",{d:"M28,4H10A2.0059,2.0059,0,0,0,8,6V20a2.0059,2.0059,0,0,0,2,2H28a2.0059,2.0059,0,0,0,2-2V6A2.0059,2.0059,0,0,0,28,4Zm0,16H10V6H28Z",stroke:"#4169e1"}),e("path",{stroke:"#4169e1",d:"M18,26H4V16H6V14H4a2.0059,2.0059,0,0,0-2,2V26a2.0059,2.0059,0,0,0,2,2H18a2.0059,2.0059,0,0,0,2-2V24H18Z"})],-1)]))),i.value?y("",!0):(s(),f(V,{key:1,direction:"right",onClick:t[1]||(t[1]=r=>P(v).updateLayout("right-panel",!0))})),i.value?(s(),f(q,{key:2,onCloseEvent:t[2]||(t[2]=r=>d())})):y("",!0)])],32),F(a.$slots,"default",{},void 0),e("div",{class:"resize-bar right",onMousedown:t[4]||(t[4]=r=>n(r))},null,32),e("div",{class:"resize-bar bottom",onMousedown:t[5]||(t[5]=r=>n(r))},null,32),e("div",{class:"resize-bar corner",onMousedown:t[6]||(t[6]=r=>n(r))},null,32)],2))}}),J=k(W,[["__scopeId","data-v-07e169d5"]]),K={};function Q(c,l){return s(),m("div",null," ChatBot ")}const t0=k(K,[["render",Q]]),e0={class:"panel-container"},l0=$({__name:"panel",props:{title:String},setup(c){const l=c;return(i,u)=>(s(),m("div",e0,[e("h3",null,B(l.title),1),F(i.$slots,"default",{},void 0)]))}}),b=k(l0,[["__scopeId","data-v-d4a52f30"]]),n0={class:"multi-tabs-container"},a0={class:"tab-container"},s0={class:"tabs"},o0=["aria-selected","onClick"],i0=$({__name:"MultiSelectTab",setup(c){const l=w([0]),i=w("Single"),u=["Typescript","Vue","Angular","React","Accessibility"];T(()=>{let d=document.createElement("Panel"),p=document.createElement("template");p.textContent=u[0],d.setAttribute("title","First Panel")});const v=d=>{i.value==="Single"?l.value[0]=d:l.value.includes(d)?l.value.length>1&&(l.value=l.value.filter(p=>p!==d)):l.value.push(d)};return(d,p)=>(s(),m("div",n0,[e("div",a0,[e("div",s0,[(s(),m(A,null,z(u,(o,n)=>e("button",{key:o,"aria-selected":!!l.value.includes(n),onClick:a=>v(n)},B(o),9,o0)),64))]),g(R,{id:"tab_layout",options:["Single","Multiple"],c_style:"min-width: 10rem; max-width: 10rem; margin-left: auto;",onOptionChange:p[0]||(p[0]=o=>i.value=o)})]),e("div",{class:E(["panels-container",l.value.length>1?`card-${l.value.length}`:""])},[(s(!0),m(A,null,z(l.value,(o,n)=>(s(),m(A,{key:o},[l.value.includes(o)?(s(),m("div",{key:0,class:"panel",style:j({order:n})},[o===0?(s(),f(b,{key:0,title:"TypeScript"})):y("",!0),o===1?(s(),f(b,{key:1,title:"Vue"})):y("",!0),o===2?(s(),f(b,{key:2,title:"Angular"})):y("",!0),o===3?(s(),f(b,{key:3,title:"React"})):y("",!0),o===4?(s(),f(b,{key:4,title:"Accessibility"})):y("",!0)],4)):y("",!0)],64))),128))],2)]))}}),r0=k(i0,[["__scopeId","data-v-63edc1dd"]]),u0={class:"flexible-layout-container"},c0={class:"panel-controller"},d0={class:"right-panel-controllers"},p0={"aria-labelledby":"sidebar_title",class:"left-panel"},y0={"aria-labelledby":"sidebar_title",class:"right-panel"},m0=$({__name:"Layout",setup(c){const l=Z(),i=w(""),u=w(!1),v=w("");T(()=>{document.body.className="flexible-layout"});const d=()=>{u.value=!u.value,l.updateLayout("left-panel")},p=o=>{i.value=o.target.textContent,l.updateLayout("right-panel"),v.value=i.value};return(o,n)=>(s(),m("div",u0,[g(I,{title:"Flexible-Layout"}),e("header",null,[e("div",c0,[g(V,{direction:"left",onClick:n[0]||(n[0]=a=>d()),rotate:u.value},null,8,["rotate"]),n[3]||(n[3]=H(" Profile "))]),e("div",d0,[e("button",{class:"text-icon",onClick:n[1]||(n[1]=a=>p(a))},n[4]||(n[4]=[e("svg",{width:"19px",height:"19px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M21 5L19 12H7.37671M20 16H8L6 3H3M16 6H11M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",stroke:"#4169e1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),H("Cart")])),e("button",{class:"text-icon",onClick:n[2]||(n[2]=a=>p(a))},n[5]||(n[5]=[e("svg",{fill:"#4169e1",width:"16px",height:"16px",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("path",{stroke:"#4169e1",d:"M1.004 16.665c-0.003-0.105-0.004-0.228-0.004-0.352 0-0.425 0.019-0.846 0.056-1.261l-0.004 0.054c0.121-0.887 0.677-1.621 1.442-1.99l0.015-0.007c0.197-0.075 0.342-0.248 0.374-0.458l0-0.003c0.385-2.046 1.195-3.855 2.337-5.404l-0.025 0.036c0.134-0.185 0.24-0.312 0.069-0.555-0.219-0.306-0.062-0.587 0.165-0.844 1.563-1.799 3.584-3.161 5.883-3.907l0.093-0.026c1.386-0.505 2.985-0.796 4.653-0.796 3.986 0 7.583 1.667 10.131 4.342l0.005 0.006c0.39 0.379 0.911 0.76 0.412 1.425-0.082 0.11 0.065 0.207 0.129 0.294 1.157 1.545 1.989 3.401 2.356 5.419l0.012 0.080c0.039 0.225 0.177 0.295 0.34 0.376 0.906 0.425 1.522 1.33 1.522 2.378 0 0.036-0.001 0.072-0.002 0.108l0-0.005c0.023 0.339 0.036 0.734 0.036 1.132 0 0.666-0.037 1.323-0.108 1.97l0.007-0.080c-0.239 1.258-1.33 2.197-2.64 2.197-0.173 0-0.341-0.016-0.505-0.047l0.017 0.003c-0.431-0.090-0.545-0.421-0.542-0.825 0.008-1.655 0.040-3.308 0-4.961 0.001-0.046 0.001-0.101 0.001-0.156 0-4.242-2.411-7.92-5.938-9.74l-0.061-0.029c-1.523-0.82-3.332-1.303-5.254-1.303-5.408 0-9.924 3.816-11.003 8.903l-0.013 0.074c-0.138 0.853-0.217 1.836-0.217 2.837 0 0.344 0.009 0.686 0.028 1.026l-0.002-0.047c0.013 1.187 0 2.376-0.030 3.563 0 0.009 0.001 0.020 0.001 0.030 0 0.357-0.289 0.645-0.645 0.645-0.019 0-0.039-0.001-0.058-0.003l0.002 0c-0.097 0.012-0.209 0.019-0.323 0.019-1.501 0-2.717-1.217-2.717-2.717 0-0.064 0.002-0.127 0.006-0.19l-0 0.008zM19.365 22.819c0.757 0.1 1.513 0.222 2.277 0.266 0.089 0.010 0.192 0.016 0.297 0.016 0.819 0 1.557-0.347 2.076-0.901l0.002-0.002c0.619-0.636 1-1.505 1-2.464 0-0.078-0.003-0.156-0.008-0.233l0.001 0.011c-0.056-1.017-0.948-1.618-2.156-1.408-1.142 0.25-2.145 0.592-3.093 1.031l0.091-0.038c-0.88 0.322-1.638 0.775-2.293 1.342l0.009-0.008c-0.884 0.82-0.382 1.906 1.027 2.247 0.252 0.061 0.512 0.095 0.77 0.141zM15.155 20.701c-0.091-0.257-0.218-0.478-0.378-0.672l0.003 0.004c-0.603-0.886-1.302-1.646-2.098-2.294l-0.019-0.015c-0.387-0.335-0.812-0.66-1.256-0.959l-0.048-0.030c-0.508-0.359-1.096-0.724-1.706-1.053l-0.094-0.046h-0.002c-0.249-0.15-0.55-0.238-0.872-0.238-0.905 0-1.646 0.7-1.711 1.588l-0 0.006c-0.087 0.376-0.137 0.807-0.137 1.25 0 1.151 0.338 2.222 0.92 3.122l-0.014-0.023c0.542 0.848 1.461 1.413 2.515 1.458l0.006 0c0.662 0.062 1.328 0.099 1.993 0.146 0.134 0.014 0.289 0.022 0.446 0.022 0.413 0 0.813-0.055 1.193-0.158l-0.032 0.007c0.686-0.164 1.211-0.708 1.345-1.392l0.002-0.011c0.013-0.073 0.020-0.156 0.020-0.241 0-0.168-0.028-0.329-0.079-0.479l0.003 0.010zM28.002 24.24c-0.001-0.719-0.255-1.378-0.678-1.893l0.004 0.005c-0.052-0.042-0.119-0.067-0.192-0.067-0.137 0-0.252 0.089-0.292 0.212l-0.001 0.002c-0.14 0.436-0.287 0.797-0.456 1.146l0.023-0.053c-0.47 1.085-1.133 2.005-1.953 2.755l-0.006 0.006c-0.996 0.894-2.163 1.623-3.442 2.128l-0.078 0.027c-0.305 0.124-0.606 0.234-0.902 0.332l-0.008 0.003c-0.197 0.066-0.392 0.126-0.584 0.182l-0.004 0.001-0.275 0.079-0.015 0.004c-0.185 0.050-0.365 0.097-0.541 0.14l-0.281 0.066c-0.169 0.038-0.33 0.072-0.487 0.104l-0.031 0.006q-0.324 0.062-0.65 0.116l-0.035 0.005-0.17 0.025-0.021 0.005q-0.175 0.025-0.35 0.047l-0.175 0.021q-0.338 0.042-0.679 0.062h-0.005c-5.111 0.536 1.297 1.656 6.117 0.809l0.032-0.006q0.429-0.078 0.854-0.177c0.045-0.012 0.092-0.023 0.137-0.034 0.66-0.161 1.238-0.377 1.781-0.65l-0.048 0.022c1.644-0.678 2.865-2.090 3.263-3.817l0.007-0.037c0.090-0.414 0.142-0.89 0.142-1.378 0-0.070-0.001-0.14-0.003-0.209l0 0.010z"})],-1),H(" Chat Bot")])),n[6]||(n[6]=e("button",{class:"text-icon"},[e("svg",{fill:"#4169e1",width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"},[e("path",{d:"M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z"})]),H(" Setting")],-1))])]),e("div",{class:E(["main-content-area",P(l).$state.layout])},[e("aside",p0,[g(G,{layoutDemo:"layout"})]),e("main",null,[g(r0)]),e("aside",y0,[g(J,{title:i.value},{default:U(()=>[v.value==="Cart"?(s(),f(X,{key:0,layoutDemo:"layout"})):y("",!0),v.value==="Chat Bot"?(s(),f(t0,{key:1})):y("",!0)]),_:1},8,["title"])])],2),g(N)]))}}),h0=k(m0,[["__scopeId","data-v-b8ca9254"]]);export{h0 as default};
