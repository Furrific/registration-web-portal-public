import{b as He,c as Ke,V as Ce}from"./VTextField-B9A1tsDH.js";import{p as _,ar as ie,aB as Ne,I as qe,d as X,u as W,aO as he,c as b,ac as Ae,ao as ye,ad as $e,t as O,f,s as M,r as z,aP as ze,m as L,a8 as je,ah as Ge,H as Z,ai as De,aC as ue,aU as me,X as re,ae as Ve,K as We,aV as Xe,b as Ye,aI as Je,aN as we,w as j,aM as te,aW as Qe,aX as de,al as Ze,h as pe,a as ve,aj as et,aY as tt,ax as lt,e as nt,o as at,L as oe,ag as ot,aR as ut,x as it,aT as Se}from"./index-DjVAorxC.js";import{u as rt}from"./form-DxKZ7tk2.js";import{f as Ee,m as st,a as ct}from"./forwardRefs-coWmDQRj.js";import{m as dt,e as vt,V as ft,a as Ie}from"./VList-CPPXMyHI.js";import{c as mt,d as Re,e as Pe,b as xe,g as gt}from"./SaveButton.vue_vue_type_script_setup_true_lang-DwwthZRf.js";import{b as ht}from"./scopeId-DkeNRcRh.js";import{a as se,v as yt,u as Y,R as Vt,d as ge,w as bt,q as kt,j as Ct,A as Be,o as Fe,b as wt,c as pt}from"./VContainer-reUGPYsu.js";import{a as St}from"./VChip-CPAKnHT8.js";const Oe=Symbol.for("vuetify:selection-control-group"),Le=_({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:ie,trueIcon:ie,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Ne},...se(),...yt(),...qe()},"SelectionControlGroup"),It=_({...Le({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Qt=X()({name:"VSelectionControlGroup",props:It(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:o}=c;const a=W(e,"modelValue"),r=he(),g=b(()=>e.id||`v-selection-control-group-${r}`),h=b(()=>e.name||g.value),u=new Set;return Ae(Oe,{modelValue:a,forceUpdate:()=>{u.forEach(t=>t())},onForceUpdate:t=>{u.add(t),ye(()=>{u.delete(t)})}}),$e({[e.defaultsTarget]:{color:O(e,"color"),disabled:O(e,"disabled"),density:O(e,"density"),error:O(e,"error"),inline:O(e,"inline"),modelValue:a,multiple:b(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),name:h,falseIcon:O(e,"falseIcon"),trueIcon:O(e,"trueIcon"),readonly:O(e,"readonly"),ripple:O(e,"ripple"),type:O(e,"type"),valueComparator:O(e,"valueComparator")}}),Y(()=>{var t;return f("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(t=o.default)==null?void 0:t.call(o)])}),{}}}),Me=_({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...se(),...Le()},"VSelectionControl");function Pt(e){const c=De(Oe,void 0),{densityClasses:o}=bt(e),a=W(e,"modelValue"),r=b(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),g=b(()=>e.falseValue!==void 0?e.falseValue:!1),h=b(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),u=b({get(){const k=c?c.modelValue.value:a.value;return h.value?ue(k).some(P=>e.valueComparator(P,r.value)):e.valueComparator(k,r.value)},set(k){if(e.readonly)return;const P=k?r.value:g.value;let p=P;h.value&&(p=k?[...ue(a.value),P]:ue(a.value).filter(l=>!e.valueComparator(l,r.value))),c?c.modelValue.value=p:a.value=p}}),{textColorClasses:t,textColorStyles:s}=kt(b(()=>{if(!(e.error||e.disabled))return u.value?e.color:e.baseColor})),{backgroundColorClasses:I,backgroundColorStyles:D}=Ct(b(()=>u.value&&!e.error&&!e.disabled?e.color:e.baseColor)),m=b(()=>u.value?e.trueIcon:e.falseIcon);return{group:c,densityClasses:o,trueValue:r,falseValue:g,model:u,textColorClasses:t,textColorStyles:s,backgroundColorClasses:I,backgroundColorStyles:D,icon:m}}const Te=X()({name:"VSelectionControl",directives:{Ripple:Vt},inheritAttrs:!1,props:Me(),emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:o,slots:a}=c;const{group:r,densityClasses:g,icon:h,model:u,textColorClasses:t,textColorStyles:s,backgroundColorClasses:I,backgroundColorStyles:D,trueValue:m}=Pt(e),k=he(),P=M(!1),p=M(!1),l=z(),d=b(()=>e.id||`input-${k}`),y=b(()=>!e.disabled&&!e.readonly);r==null||r.onForceUpdate(()=>{l.value&&(l.value.checked=u.value)});function S(C){y.value&&(P.value=!0,me(C.target,":focus-visible")!==!1&&(p.value=!0))}function w(){P.value=!1,p.value=!1}function F(C){C.stopPropagation()}function G(C){if(!y.value){l.value&&(l.value.checked=u.value);return}e.readonly&&r&&re(()=>r.forceUpdate()),u.value=C.target.checked}return Y(()=>{var $,H;const C=a.label?a.label({label:e.label,props:{for:d.value}}):e.label,[J,q]=ze(o),U=f("input",L({ref:l,checked:u.value,disabled:!!e.disabled,id:d.value,onBlur:w,onFocus:S,onInput:G,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:m.value,name:e.name,"aria-checked":e.type==="checkbox"?u.value:void 0},q),null);return f("div",L({class:["v-selection-control",{"v-selection-control--dirty":u.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":P.value,"v-selection-control--focus-visible":p.value,"v-selection-control--inline":e.inline},g.value,e.class]},J,{style:e.style}),[f("div",{class:["v-selection-control__wrapper",t.value],style:s.value},[($=a.default)==null?void 0:$.call(a,{backgroundColorClasses:I,backgroundColorStyles:D}),je(f("div",{class:["v-selection-control__input"]},[((H=a.input)==null?void 0:H.call(a,{model:u,textColorClasses:t,textColorStyles:s,backgroundColorClasses:I,backgroundColorStyles:D,inputNode:U,icon:h.value,props:{onFocus:S,onBlur:w,id:d.value}}))??f(Z,null,[h.value&&f(ge,{key:"icon",icon:h.value},null),U])]),[[Ge("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&f(He,{for:d.value,onClick:F},{default:()=>[C]})])}),{isFocused:P,input:l}}}),xt=_({indeterminate:Boolean,indeterminateIcon:{type:ie,default:"$checkboxIndeterminate"},...Me({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Tt=X()({name:"VCheckboxBtn",props:xt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{slots:o}=c;const a=W(e,"indeterminate"),r=W(e,"modelValue");function g(t){a.value&&(a.value=!1)}const h=b(()=>a.value?e.indeterminateIcon:e.falseIcon),u=b(()=>a.value?e.indeterminateIcon:e.trueIcon);return Y(()=>{const t=Ve(Te.filterProps(e),["modelValue"]);return f(Te,L(t,{modelValue:r.value,"onUpdate:modelValue":[s=>r.value=s,g],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:h.value,trueIcon:u.value,"aria-checked":a.value?"mixed":void 0}),o)}),{}}}),At=_({id:String,submenu:Boolean,...Ve(mt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Re}}),["absolute"])},"VMenu"),Dt=X()({name:"VMenu",props:At(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:o}=c;const a=W(e,"modelValue"),{scopeId:r}=ht(),{isRtl:g}=We(),h=he(),u=b(()=>e.id||`v-menu-${h}`),t=z(),s=De(Pe,null),I=M(new Set);Ae(Pe,{register(){I.value.add(h)},unregister(){I.value.delete(h)},closeParents(l){setTimeout(()=>{var d;!I.value.size&&!e.persistent&&(l==null||(d=t.value)!=null&&d.contentEl&&!Xe(l,t.value.contentEl))&&(a.value=!1,s==null||s.closeParents())},40)}}),Ye(()=>{s==null||s.unregister(),document.removeEventListener("focusin",D)}),Je(()=>a.value=!1);async function D(l){var S,w,F;const d=l.relatedTarget,y=l.target;await re(),a.value&&d!==y&&((S=t.value)!=null&&S.contentEl)&&((w=t.value)!=null&&w.globalTop)&&![document,t.value.contentEl].includes(y)&&!t.value.contentEl.contains(y)&&((F=we(t.value.contentEl)[0])==null||F.focus())}j(a,l=>{l?(s==null||s.register(),te&&document.addEventListener("focusin",D,{once:!0})):(s==null||s.unregister(),te&&document.removeEventListener("focusin",D))},{immediate:!0});function m(l){s==null||s.closeParents(l)}function k(l){var d,y,S,w,F;if(!e.disabled)if(l.key==="Tab"||l.key==="Enter"&&!e.closeOnContentClick){if(l.key==="Enter"&&(l.target instanceof HTMLTextAreaElement||l.target instanceof HTMLInputElement&&l.target.closest("form")))return;l.key==="Enter"&&l.preventDefault(),Qe(we((d=t.value)==null?void 0:d.contentEl,!1),l.shiftKey?"prev":"next",C=>C.tabIndex>=0)||(a.value=!1,(S=(y=t.value)==null?void 0:y.activatorEl)==null||S.focus())}else e.submenu&&l.key===(g.value?"ArrowRight":"ArrowLeft")&&(a.value=!1,(F=(w=t.value)==null?void 0:w.activatorEl)==null||F.focus())}function P(l){var y;if(e.disabled)return;const d=(y=t.value)==null?void 0:y.contentEl;d&&a.value?l.key==="ArrowDown"?(l.preventDefault(),l.stopImmediatePropagation(),de(d,"next")):l.key==="ArrowUp"?(l.preventDefault(),l.stopImmediatePropagation(),de(d,"prev")):e.submenu&&(l.key===(g.value?"ArrowRight":"ArrowLeft")?a.value=!1:l.key===(g.value?"ArrowLeft":"ArrowRight")&&(l.preventDefault(),de(d,"first"))):(e.submenu?l.key===(g.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(l.key))&&(a.value=!0,l.preventDefault(),setTimeout(()=>setTimeout(()=>P(l))))}const p=b(()=>L({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-controls":u.value,onKeydown:P},e.activatorProps));return Y(()=>{const l=xe.filterProps(e);return f(xe,L({ref:t,id:u.value,class:["v-menu",e.class],style:e.style},l,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,absolute:!0,activatorProps:p.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":m,onKeydown:k},r),{activator:o.activator,default:function(){for(var d=arguments.length,y=new Array(d),S=0;S<d;S++)y[S]=arguments[S];return f(Be,{root:"VMenu"},{default:()=>{var w;return[(w=o.default)==null?void 0:w.call(o,...y)]}})}})}),Ee({id:u,ΨopenChildren:I},t)}}),Et=_({renderless:Boolean,...se()},"VVirtualScrollItem"),Rt=X()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Et(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:o,emit:a,slots:r}=c;const{resizeRef:g,contentRect:h}=Fe(void 0,"border");j(()=>{var u;return(u=h.value)==null?void 0:u.height},u=>{u!=null&&a("update:height",u)}),Y(()=>{var u,t;return e.renderless?f(Z,null,[(u=r.default)==null?void 0:u.call(r,{itemRef:g})]):f("div",L({ref:g,class:["v-virtual-scroll__item",e.class],style:e.style},o),[(t=r.default)==null?void 0:t.call(r)])})}}),Bt=-1,Ft=1,fe=100,Ot=_({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Lt(e,c){const o=Ze(),a=M(0);pe(()=>{a.value=parseFloat(e.itemHeight||0)});const r=M(0),g=M(Math.ceil((parseInt(e.height)||o.height.value)/(a.value||16))||1),h=M(0),u=M(0),t=z(),s=z();let I=0;const{resizeRef:D,contentRect:m}=Fe();pe(()=>{D.value=t.value});const k=b(()=>{var n;return t.value===document.documentElement?o.height.value:((n=m.value)==null?void 0:n.height)||parseInt(e.height)||0}),P=b(()=>!!(t.value&&s.value&&k.value&&a.value));let p=Array.from({length:c.value.length}),l=Array.from({length:c.value.length});const d=M(0);let y=-1;function S(n){return p[n]||a.value}const w=tt(()=>{const n=performance.now();l[0]=0;const v=c.value.length;for(let T=1;T<=v-1;T++)l[T]=(l[T-1]||0)+S(T-1);d.value=Math.max(d.value,performance.now()-n)},d),F=j(P,n=>{n&&(F(),I=s.value.offsetTop,w.immediate(),K(),~y&&re(()=>{te&&window.requestAnimationFrame(()=>{ae(y),y=-1})}))});ye(()=>{w.clear()});function G(n,v){const T=p[n],A=a.value;a.value=A?Math.min(a.value,v):v,(T!==v||A!==a.value)&&(p[n]=v,w())}function C(n){return n=ve(n,0,c.value.length-1),l[n]||0}function J(n){return Mt(l,n)}let q=0,U=0,$=0;j(k,(n,v)=>{v&&(K(),n<v&&requestAnimationFrame(()=>{U=0,K()}))});let H=-1;function Q(){if(!t.value||!s.value)return;const n=t.value.scrollTop,v=performance.now();v-$>500?(U=Math.sign(n-q),I=s.value.offsetTop):U=n-q,q=n,$=v,window.clearTimeout(H),H=window.setTimeout(le,500),K()}function le(){!t.value||!s.value||(U=0,$=0,window.clearTimeout(H),K())}let ne=-1;function K(){cancelAnimationFrame(ne),ne=requestAnimationFrame(ce)}function ce(){if(!t.value||!k.value)return;const n=q-I,v=Math.sign(U),T=Math.max(0,n-fe),A=ve(J(T),0,c.value.length),V=n+k.value+fe,x=ve(J(V)+1,A+1,c.value.length);if((v!==Bt||A<r.value)&&(v!==Ft||x>g.value)){const E=C(r.value)-C(A),N=C(x)-C(g.value);Math.max(E,N)>fe?(r.value=A,g.value=x):(A<=0&&(r.value=A),x>=c.value.length&&(g.value=x))}h.value=C(r.value),u.value=C(c.value.length)-C(g.value)}function ae(n){const v=C(n);!t.value||n&&!v?y=n:t.value.scrollTop=v}const i=b(()=>c.value.slice(r.value,g.value).map((n,v)=>({raw:n,index:v+r.value,key:et(n)&&"value"in n?n.value:v+r.value})));return j(c,()=>{p=Array.from({length:c.value.length}),l=Array.from({length:c.value.length}),w.immediate(),K()},{deep:!0}),{calculateVisibleItems:K,containerRef:t,markerRef:s,computedItems:i,paddingTop:h,paddingBottom:u,scrollToIndex:ae,handleScroll:Q,handleScrollend:le,handleItemResize:G}}function Mt(e,c){let o=e.length-1,a=0,r=0,g=null,h=-1;if(e[o]<c)return o;for(;a<=o;)if(r=a+o>>1,g=e[r],g>c)o=r-1;else if(g<c)h=r,a=r+1;else return g===c?r:a;return h}const Ut=_({items:{type:Array,default:()=>[]},renderless:Boolean,...Ot(),...se(),...wt()},"VVirtualScroll"),_t=X()({name:"VVirtualScroll",props:Ut(),setup(e,c){let{slots:o}=c;const a=lt("VVirtualScroll"),{dimensionStyles:r}=pt(e),{calculateVisibleItems:g,containerRef:h,markerRef:u,handleScroll:t,handleScrollend:s,handleItemResize:I,scrollToIndex:D,paddingTop:m,paddingBottom:k,computedItems:P}=Lt(e,O(e,"items"));return nt(()=>e.renderless,()=>{function p(){var y,S;const d=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";h.value===document.documentElement?(document[d]("scroll",t,{passive:!0}),document[d]("scrollend",s)):((y=h.value)==null||y[d]("scroll",t,{passive:!0}),(S=h.value)==null||S[d]("scrollend",s))}at(()=>{h.value=gt(a.vnode.el,!0),p(!0)}),ye(p)}),Y(()=>{const p=P.value.map(l=>f(Rt,{key:l.key,renderless:e.renderless,"onUpdate:height":d=>I(l.index,d)},{default:d=>{var y;return(y=o.default)==null?void 0:y.call(o,{item:l.raw,index:l.index,...d})}}));return e.renderless?f(Z,null,[f("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:oe(m.value)}},null),p,f("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:oe(k.value)}},null)]):f("div",{ref:h,class:["v-virtual-scroll",e.class],onScrollPassive:t,onScrollend:s,style:[r.value,e.style]},[f("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:oe(m.value),paddingBottom:oe(k.value)}},[p])])}),{calculateVisibleItems:g,scrollToIndex:D}}});function Ht(e,c){const o=M(!1);let a;function r(u){cancelAnimationFrame(a),o.value=!0,a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{o.value=!1})})}async function g(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(o.value){const t=j(o,()=>{t(),u()})}else u()})}async function h(u){var I,D;if(u.key==="Tab"&&((I=c.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const t=(D=e.value)==null?void 0:D.$el;if(!t)return;(u.key==="Home"||u.key==="End")&&t.scrollTo({top:u.key==="Home"?0:t.scrollHeight,behavior:"smooth"}),await g();const s=t.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const m=t.getBoundingClientRect().top;for(const k of s)if(k.getBoundingClientRect().top>=m){k.focus();break}}else{const m=t.getBoundingClientRect().bottom;for(const k of[...s].reverse())if(k.getBoundingClientRect().bottom<=m){k.focus();break}}}return{onScrollPassive:r,onKeydown:h}}const Kt=_({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ie,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...dt({itemChildren:!1})},"Select"),Nt=_({...Kt(),...Ve(Ke({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...st({transition:{component:Re}})},"VSelect"),Zt=X()({name:"VSelect",props:Nt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:o}=c;const{t:a}=ot(),r=z(),g=z(),h=z(),u=W(e,"menu"),t=b({get:()=>u.value,set:i=>{var n;u.value&&!i&&((n=g.value)!=null&&n.ΨopenChildren.size)||(u.value=i)}}),{items:s,transformIn:I,transformOut:D}=vt(e),m=W(e,"modelValue",[],i=>I(i===null?[null]:ue(i)),i=>{const n=D(i);return e.multiple?n:n[0]??null}),k=b(()=>typeof e.counterValue=="function"?e.counterValue(m.value):typeof e.counterValue=="number"?e.counterValue:m.value.length),P=rt(e),p=b(()=>m.value.map(i=>i.value)),l=M(!1),d=b(()=>t.value?e.closeText:e.openText);let y="",S;const w=b(()=>e.hideSelected?s.value.filter(i=>!m.value.some(n=>e.valueComparator(n,i))):s.value),F=b(()=>e.hideNoData&&!w.value.length||P.isReadonly.value||P.isDisabled.value),G=b(()=>{var i;return{...e.menuProps,activatorProps:{...((i=e.menuProps)==null?void 0:i.activatorProps)||{},"aria-haspopup":"listbox"}}}),C=z(),J=Ht(C,r);function q(i){e.openOnClear&&(t.value=!0)}function U(){F.value||(t.value=!t.value)}function $(i){Se(i)&&H(i)}function H(i){var A,V;if(!i.key||P.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(i.key)&&i.preventDefault(),["Enter","ArrowDown"," "].includes(i.key)&&(t.value=!0),["Escape","Tab"].includes(i.key)&&(t.value=!1),i.key==="Home"?(A=C.value)==null||A.focus("first"):i.key==="End"&&((V=C.value)==null||V.focus("last"));const n=1e3;if(!Se(i))return;const v=performance.now();v-S>n&&(y=""),y+=i.key.toLowerCase(),S=v;const T=s.value.find(x=>x.title.toLowerCase().startsWith(y));if(T!==void 0){m.value=[T];const x=w.value.indexOf(T);te&&window.requestAnimationFrame(()=>{var E;x>=0&&((E=h.value)==null||E.scrollToIndex(x))})}}function Q(i){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!i.props.disabled)if(e.multiple){const v=m.value.findIndex(A=>e.valueComparator(A.value,i.value)),T=n??!~v;if(~v){const A=T?[...m.value,i]:[...m.value];A.splice(v,1),m.value=A}else T&&(m.value=[...m.value,i])}else{const v=n!==!1;m.value=v?[i]:[],re(()=>{t.value=!1})}}function le(i){var n;(n=C.value)!=null&&n.$el.contains(i.relatedTarget)||(t.value=!1)}function ne(){var i;e.eager&&((i=h.value)==null||i.calculateVisibleItems())}function K(){var i;l.value&&((i=r.value)==null||i.focus())}function ce(i){l.value=!0}function ae(i){if(i==null)m.value=[];else if(me(r.value,":autofill")||me(r.value,":-webkit-autofill")){const n=s.value.find(v=>v.title===i);n&&Q(n)}else r.value&&(r.value.value="")}return j(t,()=>{if(!e.hideSelected&&t.value&&m.value.length){const i=w.value.findIndex(n=>m.value.some(v=>e.valueComparator(v.value,n.value)));te&&window.requestAnimationFrame(()=>{var n;i>=0&&((n=h.value)==null||n.scrollToIndex(i))})}}),j(()=>e.items,(i,n)=>{t.value||l.value&&!n.length&&i.length&&(t.value=!0)}),Y(()=>{const i=!!(e.chips||o.chip),n=!!(!e.hideNoData||w.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),v=m.value.length>0,T=Ce.filterProps(e),A=v||!l.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return f(Ce,L({ref:r},T,{modelValue:m.value.map(V=>V.props.value).join(", "),"onUpdate:modelValue":ae,focused:l.value,"onUpdate:focused":V=>l.value=V,validationValue:m.externalValue,counterValue:k.value,dirty:v,class:["v-select",{"v-select--active-menu":t.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":m.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:A,"onClick:clear":q,"onMousedown:control":U,onBlur:le,onKeydown:H,"aria-label":a(d.value),title:a(d.value)}),{...o,default:()=>f(Z,null,[f(Dt,L({ref:g,modelValue:t.value,"onUpdate:modelValue":V=>t.value=V,activator:"parent",contentClass:"v-select__content",disabled:F.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:ne,onAfterLeave:K},G.value),{default:()=>[n&&f(ft,L({ref:C,selected:p.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:V=>V.preventDefault(),onKeydown:$,onFocusin:ce,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},J,e.listProps),{default:()=>{var V,x,E;return[(V=o["prepend-item"])==null?void 0:V.call(o),!w.value.length&&!e.hideNoData&&(((x=o["no-data"])==null?void 0:x.call(o))??f(Ie,{key:"no-data",title:a(e.noDataText)},null)),f(_t,{ref:h,renderless:!0,items:w.value},{default:N=>{var ke;let{item:R,index:ee,itemRef:B}=N;const be=L(R.props,{ref:B,key:R.value,onClick:()=>Q(R,null)});return((ke=o.item)==null?void 0:ke.call(o,{item:R,index:ee,props:be}))??f(Ie,L(be,{role:"option"}),{prepend:Ue=>{let{isSelected:_e}=Ue;return f(Z,null,[e.multiple&&!e.hideSelected?f(Tt,{key:R.value,modelValue:_e,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependAvatar&&f(ct,{image:R.props.prependAvatar},null),R.props.prependIcon&&f(ge,{icon:R.props.prependIcon},null)])}})}}),(E=o["append-item"])==null?void 0:E.call(o)]}})]}),m.value.map((V,x)=>{function E(B){B.stopPropagation(),B.preventDefault(),Q(V,!1)}const N={"onClick:close":E,onKeydown(B){B.key!=="Enter"&&B.key!==" "||(B.preventDefault(),B.stopPropagation(),E(B))},onMousedown(B){B.preventDefault(),B.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},R=i?!!o.chip:!!o.selection,ee=R?ut(i?o.chip({item:V,index:x,props:N}):o.selection({item:V,index:x})):void 0;if(!(R&&!ee))return f("div",{key:V.value,class:"v-select__selection"},[i?o.chip?f(Be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:V.title}}},{default:()=>[ee]}):f(St,L({key:"chip",closable:e.closableChips,size:"small",text:V.title,disabled:V.props.disabled},N),null):ee??f("span",{class:"v-select__selection-text"},[V.title,e.multiple&&x<m.value.length-1&&f("span",{class:"v-select__selection-comma"},[it(",")])])])})]),"append-inner":function(){var N;for(var V=arguments.length,x=new Array(V),E=0;E<V;E++)x[E]=arguments[E];return f(Z,null,[(N=o["append-inner"])==null?void 0:N.call(o,...x),e.menuIcon?f(ge,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ee({isFocused:l,menu:t,select:Q},r)}});export{Zt as V,Rt as a,Tt as b,Me as c,Te as d,Le as e,Qt as f,xt as g,Kt as h,Ht as i,Dt as j,_t as k,Ot as m,Lt as u};
