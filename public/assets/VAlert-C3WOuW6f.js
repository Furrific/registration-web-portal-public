import{P as f,p as T,ar as D,I as z,d as L,u as F,c,J as K,t as R,ac as E,f as a,m as G}from"./index-CTNPV0x_.js";import{c as J}from"./createSimpleFunctional-et6j0wIR.js";import{a as M,v as O,b as j,g as q,F as H,G as N,h as Q,i as W,x as X,J as Y,w as Z,c as U,l as ee,H as te,I as ae,n as ne,q as oe,K as le,d as se,A as y,V as re}from"./VContainer-CZN_Sn5S.js";const u=new Map,ie=async(e,l)=>{const s=f(),t=`${e}.${l}`;try{const n=u.get(t);if(!n||n.timestamp<Date.now()-1e3*60*5)try{const o=await s.getConventionConfig(e,l);return u.set(t,{timestamp:Date.now(),value:o.Setting}),o.Setting}catch{return}return n.value}catch{return}},ce=async(e,l,s)=>{const t=`${e}.${l}`;try{return await f().saveConventionConfig(e,l,s),u.set(t,{timestamp:Date.now(),value:s}),!0}catch(n){return console.error(n),!1}};function Ce(){return{getConventionConfig:ie,saveConventionConfig:ce}}const ue=J("v-alert-title"),de=["success","info","warning","error"],ve=T({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:D,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>de.includes(e)},...M(),...O(),...j(),...q(),...H(),...N(),...Q(),...W(),...z(),...X({variant:"flat"})},"VAlert"),ge=L()({name:"VAlert",props:ve(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{emit:s,slots:t}=l;const n=F(e,"modelValue"),o=c(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),C=c(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:g}=K(e),{colorClasses:b,colorStyles:k,variantClasses:P}=Y(C),{densityClasses:V}=Z(e),{dimensionStyles:S}=U(e),{elevationClasses:h}=ee(e),{locationStyles:x}=te(e),{positionClasses:_}=ae(e),{roundedClasses:w}=ne(e),{textColorClasses:$,textColorStyles:A}=oe(R(e,"borderColor")),{t:p}=E(),d=c(()=>({"aria-label":p(e.closeLabel),onClick(i){n.value=!1,s("click:close",i)}}));return()=>{const i=!!(t.prepend||o.value),B=!!(t.title||e.title),I=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},g.value,b.value,V.value,h.value,_.value,w.value,P.value,e.class],style:[k.value,S.value,x.value,e.style],role:"alert"},{default:()=>{var v,m;return[le(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",$.value],style:A.value},null),i&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(y,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):a(se,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[B&&a(ue,{key:"title"},{default:()=>{var r;return[((r=t.title)==null?void 0:r.call(t))??e.title]}}),((v=t.text)==null?void 0:v.call(t))??e.text,(m=t.default)==null?void 0:m.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),I&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(y,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var r;return[(r=t.close)==null?void 0:r.call(t,{props:d.value})]}}):a(re,G({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},d.value),null)])]}})}}});export{ge as V,ue as a,Ce as u};