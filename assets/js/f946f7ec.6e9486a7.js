"use strict";(self.webpackChunkphpugmrn_web=self.webpackChunkphpugmrn_web||[]).push([["34"],{3750:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var i=n(5893),s=n(7294),r=n(21),a=n(144),l=n(3167),o=n(4424);let c=function(){return(0,i.jsx)(r.Z,{title:"PHPUGMRN Raffler",description:"Raffle Tool",children:(0,i.jsx)("main",{children:(0,i.jsx)(a.Z,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)(0),[c,d]=(0,s.useState)([{option:""},{option:""},{option:""}]),[p,u]=s.useState(!1),h=n(2641).Wheel,m=()=>{for(var e="#",t=0;t<6;t++)e+=Math.floor(10*Math.random());return e};return(0,i.jsxs)("div",{className:"container margin-vert--lg",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--3"}),(0,i.jsx)("div",{className:"col col--9",children:(0,i.jsx)("h2",{children:"PHPUGMRN Raffler"})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--3"}),(0,i.jsx)("div",{className:"col col--3",children:(0,i.jsx)(o.J9,{initialValues:{participants:[{option:"",style:{backgroundColor:m()}}]},onSubmit:n=>{if(!e){let e=Math.floor(Math.random()*n.participants.length);d(n.participants),a(e),t(!0)}},render:e=>{let{values:t}=e;return(0,i.jsx)(o.l0,{children:(0,i.jsx)(o.F2,{name:"participants",render:e=>(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"margin-bottom--sm",children:(0,i.jsx)("button",{className:"button button--primary",type:"submit",children:"Let's go"})}),t.participants.map((t,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(o.gN,{name:`participants.${n}.option`}),(0,i.jsx)("button",{type:"button",onClick:()=>e.remove(n),children:"-"}),(0,i.jsx)("button",{type:"button",onClick:()=>e.insert(n,{option:"",style:{backgroundColor:m()}}),children:"+"})]},n))]})})})}})}),(0,i.jsxs)("div",{className:"col col--6",children:[p&&(0,i.jsx)(l.Z,{force:.8,duration:3e3,particleCount:250,width:1600,onComplete:()=>{u(!1)}}),(0,i.jsx)(h,{mustStartSpinning:e,prizeNumber:r,data:c,perpendicularText:!0,onStopSpinning:()=>{t(!1),u(!0)}})]})]})]})}})})})}}}]);