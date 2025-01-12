import{c as D}from"./createSimpleFunctional-sHKoRSOj.js";import{a as L,v as $,b as z,g as F,F as w,G as R,h as p,i as E,x as J,J as O,w as j,c as q,l as G,H,I as K,n as M,q as N,K as Q,d as U,A as d,V as W}from"./VContainer-CM9UiuYN.js";import{p as X,ar as Y,I as Z,d as ee,u as ae,c as o,J as te,t as le,ac as ne,f as t,m as se}from"./index-DNBeotG3.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=X({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Y,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...L(),...$(),...z(),...F(),...w(),...R(),...p(),...E(),...Z(),...J({variant:"flat"})},"VAlert"),ve=ee()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=ae(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=te(e),{colorClasses:b,colorStyles:k,variantClasses:P}=O(y),{densityClasses:V}=j(e),{dimensionStyles:C}=q(e),{elevationClasses:g}=G(e),{locationStyles:x}=H(e),{positionClasses:S}=K(e),{roundedClasses:_}=M(e),{textColorClasses:I,textColorStyles:h}=N(le(e,"borderColor")),{t:A}=ne(),i=o(()=>({"aria-label":A(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),B=!!(a.title||e.title),T=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,b.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[k.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[Q(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",I.value],style:h.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(U,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[B&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),T&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(W,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{ve as V,oe as a};