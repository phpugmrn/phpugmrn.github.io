"use strict";(self.webpackChunkphpugmrn_web=self.webpackChunkphpugmrn_web||[]).push([[6772],{6252:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(2300),r=a(1262),c=a(6417),o=a(9433);const i=function(){return n.createElement(l.Z,{title:"PHPUGMRN Raffler",description:"Raffle Tool"},n.createElement("main",null,n.createElement(r.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>{const[e,t]=(0,n.useState)(!1),[l,r]=(0,n.useState)(0),[i,m]=(0,n.useState)([{option:""},{option:""},{option:""}]),[s,p]=n.useState(!1),u=a(2641).Wheel,d=()=>{for(var e="#",t=0;t<6;t++)e+=Math.floor(10*Math.random());return e};return n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"}),n.createElement("div",{className:"col col--9"},n.createElement("h2",null,"PHPUGMRN Raffler"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"}),n.createElement("div",{className:"col col--3"},n.createElement(o.J9,{initialValues:{participants:[{option:"",style:{backgroundColor:d()}}]},onSubmit:a=>{if(!e){const e=Math.floor(Math.random()*a.participants.length);m(a.participants),r(e),t(!0)}},render:e=>{let{values:t}=e;return n.createElement(o.l0,null,n.createElement(o.F2,{name:"participants",render:e=>n.createElement("div",null,n.createElement("div",{className:"margin-bottom--sm"},n.createElement("button",{className:"button button--primary",type:"submit"},"Let's go")),t.participants.map(((t,a)=>n.createElement("div",{key:a},n.createElement(o.gN,{name:`participants.${a}.option`}),n.createElement("button",{type:"button",onClick:()=>e.remove(a)},"-"),n.createElement("button",{type:"button",onClick:()=>e.insert(a,{option:"",style:{backgroundColor:d()}})},"+")))))}))}})),n.createElement("div",{className:"col col--6"},s&&n.createElement(c.Z,{force:.8,duration:3e3,particleCount:250,width:1600,onComplete:()=>{p(!1)}}),n.createElement(u,{mustStartSpinning:e,prizeNumber:l,data:i,perpendicularText:!0,onStopSpinning:()=>{t(!1),p(!0)}}))))}))))}}}]);