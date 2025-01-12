import{p as m,d as P,af as C,f as l,ad as h,ag as L,ar as k,c as v,ae as j,a8 as $,as as z,G as F,H,a9 as N,t}from"./index-C2be9rQA.js";import{d as O}from"./forwardRefs-mpSsDQm9.js";import{a as g,u as b,b as q,R as J,j as T,c as K,A as w,d as M,g as Q,s as U,h as W,i as A,t as X,l as Y,n as Z,B as ee,r as ae}from"./VContainer-DsKJp95U.js";import{m as ne,u as le}from"./VOverlay-R8alvfdz.js";const p=Symbol.for("vuetify:v-expansion-panel"),B=m({...g(),...ne()},"VExpansionPanelText"),S=P()({name:"VExpansionPanelText",props:B(),setup(e,d){let{slots:n}=d;const a=C(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:u}=le(e,a.isSelected);return b(()=>l(O,{onAfterLeave:u},{default:()=>{var i;return[h(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&o.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(i=n.default)==null?void 0:i.call(n)])]),[[L,a.isSelected.value]])]}})),{}}}),_=m({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...g(),...q()},"VExpansionPanelTitle"),I=P()({name:"VExpansionPanelTitle",directives:{Ripple:J},props:_(),setup(e,d){let{slots:n}=d;const a=C(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:u}=T(e,"color"),{dimensionStyles:i}=K(e),r=v(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),y=v(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return b(()=>{var x;return h(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},o.value,e.class],style:[u.value,i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,r.value),!e.hideActions&&l(w,{defaults:{VIcon:{icon:y.value}}},{default:()=>{var f;return[l("span",{class:"v-expansion-panel-title__icon"},[((f=n.actions)==null?void 0:f.call(n,r.value))??l(M,null,null)])]}})]),[[j("ripple"),e.ripple]])}),{}}}),D=m({title:String,text:String,bgColor:String,...Q(),...U(),...W(),...A(),..._(),...B()},"VExpansionPanel"),ue=P()({name:"VExpansionPanel",props:D(),emits:{"group:selected":e=>!0},setup(e,d){let{slots:n}=d;const a=X(e,p),{backgroundColorClasses:o,backgroundColorStyles:u}=T(e,"bgColor"),{elevationClasses:i}=Y(e),{roundedClasses:r}=Z(e),y=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=v(()=>a.group.items.value.reduce((c,s,V)=>(a.group.selected.value.includes(s.id)&&c.push(V),c),[])),f=v(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===1)}),R=v(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===-1)});return $(p,a),b(()=>{const c=!!(n.text||e.text),s=!!(n.title||e.title),V=I.filterProps(e),G=S.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":f.value,"v-expansion-panel--after-active":R.value,"v-expansion-panel--disabled":y.value},r.value,o.value,e.class],style:[u.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...i.value]},null),l(w,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...G}}},{default:()=>{var E;return[s&&l(I,{key:"title"},{default:()=>[n.title?n.title():e.title]}),c&&l(S,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(E=n.default)==null?void 0:E.call(n)]}})]})}),{groupItem:a}}}),te=["default","accordion","inset","popout"],se=m({flat:Boolean,...ee(),...z(D(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...F(),...g(),...A(),variant:{type:String,default:"default",validator:e=>te.includes(e)}},"VExpansionPanels"),re=P()({name:"VExpansionPanels",props:se(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:n}=d;const{next:a,prev:o}=ae(e,p),{themeClasses:u}=H(e),i=v(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return N({VExpansionPanel:{bgColor:t(e,"bgColor"),collapseIcon:t(e,"collapseIcon"),color:t(e,"color"),eager:t(e,"eager"),elevation:t(e,"elevation"),expandIcon:t(e,"expandIcon"),focusable:t(e,"focusable"),hideActions:t(e,"hideActions"),readonly:t(e,"readonly"),ripple:t(e,"ripple"),rounded:t(e,"rounded"),static:t(e,"static")}}),b(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},u.value,i.value,e.class],style:e.style},{default:()=>{var r;return[(r=n.default)==null?void 0:r.call(n,{prev:o,next:a})]}})),{next:a,prev:o}}});export{re as V,ue as a,I as b,S as c};
