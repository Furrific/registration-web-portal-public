import{a as c,q as u,u as h}from"./VContainer-L-g1_iVh.js";import{p as m,I as f,d as g,J as y,t as _,c as C,L as s,f as r}from"./index-Ch5xtL6l.js";const b=m({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...f()},"VDivider"),V=g()({name:"VDivider",props:b(),setup(e,o){let{attrs:i,slots:a}=o;const{themeClasses:l}=y(e),{textColorClasses:n,textColorStyles:d}=u(_(e,"color")),v=C(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return h(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[v.value,d.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{V};