import{d as b,a as r,c as d,e as a,p as C,t as h,_ as p,n as y,F as x,l as w,m as _,u as M,o as V,b as m,f as o}from"./index-Dt1sufm2.js";const $=b({__name:"nav",props:{title:String},setup(e){const l=e;return(i,n)=>(r(),d("nav",null,[n[0]||(n[0]=a("a",{href:"javascript:void(0)",class:"site-logo"},null,-1)),n[1]||(n[1]=C()),a("span",null,h(l.title),1)]))}}),U=p($,[["__scopeId","data-v-651fdb3b"]]),k={};function A(e,l){return r(),d("footer",null,"Enjoy Harley's UX World")}const Q=p(k,[["render",A],["__scopeId","data-v-2141c225"]]),B=b({__name:"rotateButton",props:{direction:String,rotate:Boolean},setup(e){const l=e;return(i,n)=>(r(),d("button",{class:y(e.direction)},[a("div",{class:y(["arrow",{rotate:l.rotate}])},null,2)],2))}}),Z=p(B,[["__scopeId","data-v-5e4b701e"]]),S=["id"],H=["aria-labelledby"],N=["name","data-label","checked","value"],L=b({__name:"SegmentControl",props:{id:String,options:Array,c_style:String},emits:["optionChange"],setup(e,{emit:l}){const i=e,n=l,t=v=>{n("optionChange",v.target.value)};return(v,s)=>(r(),d(x,null,[a("span",{class:"sr-only",id:i.id,"aria-hidden":"true"},"Action",8,S),a("div",{class:"segment-control",role:"radiogroup","aria-labelledby":i.id,style:_(e.c_style)},[(r(!0),d(x,null,w(i.options,(c,f)=>(r(),d("input",{type:"radio",name:i.id,"data-label":c,key:f,checked:f===0,value:c,onChange:s[0]||(s[0]=u=>t(u))},null,40,N))),128))],12,H)],64))}}),g=p(L,[["__scopeId","data-v-0a08853d"]]),q={class:"inside-panel"},E={class:"contract-list",ref:"contract-list"},O={class:"contract","aria-label":"option contract"},P={class:"expandable",id:"opt_leg1"},R={class:"contract","aria-label":"option contract"},T={class:"expandable",id:"opt_leg2"},j={class:"contract","aria-label":"option contract"},D={class:"expandable",id:"opt_leg3"},I=b({__name:"Aside",props:{layoutDemo:String},setup(e){const l=e,i=M("contract-list");return V(()=>{var n;(n=i.value)==null||n.querySelectorAll(".expand-btn").forEach(t=>{t.addEventListener("click",v=>{var f,u;let s=v.target.closest("button"),c=(s==null?void 0:s.getAttribute("aria-expanded"))==="true"?"false":"true";(u=(f=i.value)==null?void 0:f.querySelector('button[aria-expanded="true"]'))==null||u.setAttribute("aria-expanded","false"),s==null||s.setAttribute("aria-expanded",c)})})}),(n,t)=>(r(),d("div",q,[a("div",{class:"title",style:_({display:l.layoutDemo?"none":"flex"})},t[0]||(t[0]=[a("span",{id:"sidebar_title","aria-hidden":"true"},"Accessibility Practice",-1)]),4),a("div",E,[a("div",O,[t[3]||(t[3]=a("span",{class:"sr-only",id:"btn_desc","aria-hidden":"true"},"option contract information",-1)),t[4]||(t[4]=a("button",{"aria-controls":"opt_leg1","aria-expanded":"false",class:"expand-btn","aria-describedby":"btn_desc"},[a("div",null,[a("span",null,"APR 27, 2024 105.00 CALL")]),a("div",null,[a("span",null,"BUY TO OPEN 1 at $5.25")])],-1)),a("div",P,[a("div",null,[m(g,{id:"opt_class_leg1",options:["Buy","Sell"]}),t[1]||(t[1]=a("div",{class:"input-container"},[a("label",{for:"qty_leg1"},"Quantity"),a("input",{type:"number",id:"qty_leg1",step:"1",value:"1"})],-1))]),t[2]||(t[2]=o('<ul aria-label="option contract information" data-v-ff5a5a84><li data-v-ff5a5a84><span data-v-ff5a5a84>Bid</span> <span data-v-ff5a5a84>$5.00</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Ask</span> <span data-v-ff5a5a84>$5.12</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Vol</span> <span data-v-ff5a5a84>100</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Open interest</span> <span data-v-ff5a5a84>200</span></li></ul>',1))]),t[5]||(t[5]=o('<div class="options" data-v-ff5a5a84><button class="icon-only trash" aria-label="remove this contract" data-v-ff5a5a84><svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ff5a5a84><path d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636" stroke="#000" stroke-linecap="round" stroke-linejoin="round" data-v-ff5a5a84></path></svg></button><button class="icon-only more" aria-label="more action" aria-haspopup="listbox" data-v-ff5a5a84><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" data-v-ff5a5a84><circle cx="12" cy="6" r="2" transform="rotate(90 12 6)" fill="#4169e1" data-v-ff5a5a84></circle><circle cx="12" cy="12" r="2" transform="rotate(90 12 12)" fill="#4169e1" data-v-ff5a5a84></circle><path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" fill="#4169e1" data-v-ff5a5a84></path></svg></button></div>',1))]),a("div",R,[t[8]||(t[8]=a("button",{"aria-controls":"opt_leg2","aria-expanded":"false",class:"expand-btn","aria-describedby":"btn_desc"},[a("div",null,[a("span",null,"APR 27, 2024 105.00 CALL")]),a("div",null,[a("span",null,"SELL TO OPEN 1 at $5.25")])],-1)),a("div",T,[a("div",null,[m(g,{id:"opt_class_leg2",options:["Buy","Sell"]}),t[6]||(t[6]=a("div",{class:"input-container"},[a("label",{for:"qty_leg2"},"Quantity"),a("input",{type:"number",id:"qty_leg2",step:"1",value:"1"})],-1))]),t[7]||(t[7]=o('<ul aria-label="option contract information" data-v-ff5a5a84><li data-v-ff5a5a84><span data-v-ff5a5a84>Bid</span> <span data-v-ff5a5a84>$5.00</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Ask</span> <span data-v-ff5a5a84>$5.12</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Vol</span> <span data-v-ff5a5a84>100</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Open interest</span> <span data-v-ff5a5a84>200</span></li></ul>',1))]),t[9]||(t[9]=o('<div class="options" data-v-ff5a5a84><button class="icon-only trash" aria-label="remove this contract" data-v-ff5a5a84><svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ff5a5a84><path d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636" stroke="#000" stroke-linecap="round" stroke-linejoin="round" data-v-ff5a5a84></path></svg></button><button class="icon-only more" aria-label="more action" aria-haspopup="listbox" data-v-ff5a5a84><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" data-v-ff5a5a84><circle cx="12" cy="6" r="2" transform="rotate(90 12 6)" fill="#4169e1" data-v-ff5a5a84></circle><circle cx="12" cy="12" r="2" transform="rotate(90 12 12)" fill="#4169e1" data-v-ff5a5a84></circle><path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" fill="#4169e1" data-v-ff5a5a84></path></svg></button></div>',1))]),a("div",j,[t[12]||(t[12]=a("button",{"aria-controls":"opt_leg3","aria-expanded":"false",class:"expand-btn","aria-describedby":"btn_desc"},[a("div",null,[a("span",null,"APR 27, 2024 105.00 CALL")]),a("div",null,[a("span",null,"BUY TO OPEN 1 at $5.25")])],-1)),a("div",D,[a("div",null,[m(g,{id:"opt_class_leg3",options:["Buy","Sell"]}),t[10]||(t[10]=a("div",{class:"input-container"},[a("label",{for:"qty_leg3"},"Quantity"),a("input",{type:"number",id:"qty_leg3",step:"1",value:"1"})],-1))]),t[11]||(t[11]=o('<ul aria-label="option contract information" data-v-ff5a5a84><li data-v-ff5a5a84><span data-v-ff5a5a84>Bid</span> <span data-v-ff5a5a84>$5.00</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Ask</span> <span data-v-ff5a5a84>$5.12</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Vol</span> <span data-v-ff5a5a84>100</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Open interest</span> <span data-v-ff5a5a84>200</span></li></ul>',1))]),t[13]||(t[13]=o('<div class="options" data-v-ff5a5a84><button class="icon-only trash" aria-label="remove this contract" data-v-ff5a5a84><svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ff5a5a84><path d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636" stroke="#000" stroke-linecap="round" stroke-linejoin="round" data-v-ff5a5a84></path></svg></button><button class="icon-only more" aria-label="more action" aria-haspopup="listbox" data-v-ff5a5a84><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" data-v-ff5a5a84><circle cx="12" cy="6" r="2" transform="rotate(90 12 6)" fill="#4169e1" data-v-ff5a5a84></circle><circle cx="12" cy="12" r="2" transform="rotate(90 12 12)" fill="#4169e1" data-v-ff5a5a84></circle><path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" fill="#4169e1" data-v-ff5a5a84></path></svg></button></div>',1))])],512),t[14]||(t[14]=o('<div class="summary" data-v-ff5a5a84><ul class="quote-list" aria-label="multi legs quote information" data-v-ff5a5a84><li data-v-ff5a5a84><span data-v-ff5a5a84>Net bid</span><span data-v-ff5a5a84>$5.08</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Midpoint</span><span data-v-ff5a5a84>$5.15</span></li><li data-v-ff5a5a84><span data-v-ff5a5a84>Net ask</span><span data-v-ff5a5a84>$5.20</span></li></ul><div class="input-container" data-v-ff5a5a84><label for="qty_leg1" data-v-ff5a5a84>Order Type</label><select name="" id="" data-v-ff5a5a84><option value="netDebit" selected data-v-ff5a5a84>Net Debit</option><option value="netCrebit" data-v-ff5a5a84>Net Credit</option></select></div><div class="input-container" data-v-ff5a5a84><label for="eva_price" data-v-ff5a5a84>Evaluation Price</label><input type="number" id="eva_price" value="22.48" data-v-ff5a5a84></div></div>',1)),t[15]||(t[15]=a("div",{class:"bottom-section"},[a("div",{class:"gain-loss-group",role:"group","aria-label":"gain or loss estimated information"},[a("div",{role:"region","aria-live":"polite","aria-atomic":"true","aria-label":"estimated max gain"},[a("span",{"aria-hidden":"true"},"Estimated max gain"),a("span",{style:{color:"#368727"}},"Unlimited")]),a("div",{role:"region","aria-live":"polite","aria-atomic":"true","aria-label":"estimated max loss"},[a("span",{"aria-hidden":"true"},"Estimated max loss"),a("span",{style:{color:"rgba(224,22,22, .75)"}},"-$1,748.00")]),a("div",{role:"region","aria-live":"polite","aria-atomic":"true","aria-label":"break even"},[a("span",{"aria-hidden":"true"},"Break even"),a("span",null,"AAPL at $185.02 and $222.48")]),a("div",{role:"region","aria-live":"polite","aria-atomic":"true","aria-label":"probability of profit"},[a("span",{"aria-hidden":"true"},"Probability of profit"),a("div",{class:"possible-circle","data-rate":"67%"})])]),a("button",null,"Ship it")],-1))]))}}),z=p(I,[["__scopeId","data-v-ff5a5a84"]]);export{z as A,Q as F,U as N,Z as R,g as S};
