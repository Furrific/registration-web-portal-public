import{s as F,o as Ze,c as v,aX as Qe,af as H,a8 as q,aY as C,aC as ye,r as V,p as x,u as Q,b as me,ax as et,t as k,aL as tt,a5 as ge,aZ as at,ar as j,d as T,f as c,ad as Se,ag as nt,aF as D,I as be,w as lt,J as he,a_ as it,ae as st,H as oe,m as ee,aB as rt,aG as B,aa as pe,a9 as ut,aV as ot}from"./index-CBLLpUz9.js";import{M as ct,d as dt,a as ce}from"./forwardRefs-D2qfTUv9.js";import{a as E,i as R,u as $,A as te,f as ke,v as Ce,b as we,g as Ie,h as Ae,M as vt,x as Pe,R as ft,N as yt,k as Ve,J as mt,w as Le,c as Be,l as Oe,n as Me,K as gt,d as de,q as St,j as bt}from"./VContainer-B8rCAnu7.js";import{c as ht}from"./createSimpleFunctional-B2WXtTo3.js";import{V as pt}from"./VDivider-CGDLo0GR.js";function kt(){const e=F(!1);return Ze(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Qe(e)}}const ae=Symbol.for("vuetify:list");function je(){const e=H(ae,{hasPrepend:F(!1),updateHasPrepend:()=>null}),l={hasPrepend:F(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return q(ae,l),e}function xe(){return H(ae,null)}const le=e=>{const l={activate:t=>{let{id:a,value:i,activated:n}=t;return a=C(a),e&&!i&&n.size===1&&n.has(a)||(i?n.add(a):n.delete(a)),n},in:(t,a,i)=>{let n=new Set;if(t!=null)for(const s of ye(t))n=l.activate({id:s,value:!0,activated:new Set(n),children:a,parents:i});return n},out:t=>Array.from(t)};return l},_e=e=>{const l=le(e);return{activate:a=>{let{activated:i,id:n,...s}=a;n=C(n);const u=i.has(n)?new Set([n]):new Set;return l.activate({...s,id:n,activated:u})},in:(a,i,n)=>{let s=new Set;if(a!=null){const u=ye(a);u.length&&(s=l.in(u.slice(0,1),i,n))}return s},out:(a,i,n)=>l.out(a,i,n)}},Ct=e=>{const l=le(e);return{activate:a=>{let{id:i,activated:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.activate({id:i,activated:n,children:s,...u})},in:l.in,out:l.out}},wt=e=>{const l=_e(e);return{activate:a=>{let{id:i,activated:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.activate({id:i,activated:n,children:s,...u})},in:l.in,out:l.out}},It={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){const n=new Set;n.add(l);let s=i.get(l);for(;s!=null;)n.add(s),s=i.get(s);return n}else return a.delete(l),a},select:()=>null},Fe={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){let n=i.get(l);for(a.add(l);n!=null&&n!==l;)a.add(n),n=i.get(n);return a}else a.delete(l);return a},select:()=>null},At={open:Fe.open,select:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(!t)return a;const n=[];let s=i.get(l);for(;s!=null;)n.push(s),s=i.get(s);return new Set(n)}},ie=e=>{const l={select:t=>{let{id:a,value:i,selected:n}=t;if(a=C(a),e&&!i){const s=Array.from(n.entries()).reduce((u,b)=>{let[f,g]=b;return g==="on"&&u.push(f),u},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,i?"on":"off"),n},in:(t,a,i)=>{let n=new Map;for(const s of t||[])n=l.select({id:s,value:!0,selected:new Map(n),children:a,parents:i});return n},out:t=>{const a=[];for(const[i,n]of t.entries())n==="on"&&a.push(i);return a}};return l},Te=e=>{const l=ie(e);return{select:a=>{let{selected:i,id:n,...s}=a;n=C(n);const u=i.has(n)?new Map([[n,i.get(n)]]):new Map;return l.select({...s,id:n,selected:u})},in:(a,i,n)=>{let s=new Map;return a!=null&&a.length&&(s=l.in(a.slice(0,1),i,n)),s},out:(a,i,n)=>l.out(a,i,n)}},Pt=e=>{const l=ie(e);return{select:a=>{let{id:i,selected:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.select({id:i,selected:n,children:s,...u})},in:l.in,out:l.out}},Vt=e=>{const l=Te(e);return{select:a=>{let{id:i,selected:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.select({id:i,selected:n,children:s,...u})},in:l.in,out:l.out}},Lt=e=>{const l={select:t=>{let{id:a,value:i,selected:n,children:s,parents:u}=t;a=C(a);const b=new Map(n),f=[a];for(;f.length;){const y=f.shift();n.set(C(y),i?"on":"off"),s.has(y)&&f.push(...s.get(y))}let g=C(u.get(a));for(;g;){const y=s.get(g),h=y.every(r=>n.get(C(r))==="on"),S=y.every(r=>!n.has(C(r))||n.get(C(r))==="off");n.set(g,h?"on":S?"off":"indeterminate"),g=C(u.get(g))}return e&&!i&&Array.from(n.entries()).reduce((h,S)=>{let[r,o]=S;return o==="on"&&h.push(r),h},[]).length===0?b:n},in:(t,a,i)=>{let n=new Map;for(const s of t||[])n=l.select({id:s,value:!0,selected:new Map(n),children:a,parents:i});return n},out:(t,a)=>{const i=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&i.push(n);return i}};return l},N=Symbol.for("vuetify:nested"),Ge={id:F(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:V(!1),selectable:V(!1),opened:V(new Set),activated:V(new Set),selected:V(new Map),selectedValues:V([]),getPath:()=>[]}},Bt=x({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Ot=e=>{let l=!1;const t=V(new Map),a=V(new Map),i=Q(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Ct(e.mandatory);case"single-leaf":return wt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return _e(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Vt(e.mandatory);case"leaf":return Pt(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return Te(e.mandatory);case"classic":default:return Lt(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return At;case"single":return It;case"multiple":default:return Fe}}),b=Q(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),f=Q(e,"selected",e.selected,r=>s.value.in(r,t.value,a.value),r=>s.value.out(r,t.value,a.value));me(()=>{l=!0});function g(r){const o=[];let d=r;for(;d!=null;)o.unshift(d),d=a.value.get(d);return o}const y=et("nested"),h=new Set,S={id:F(),root:{opened:i,activatable:k(e,"activatable"),selectable:k(e,"selectable"),activated:b,selected:f,selectedValues:v(()=>{const r=[];for(const[o,d]of f.value.entries())d==="on"&&r.push(o);return r}),register:(r,o,d)=>{if(h.has(r)){g(r).map(String).join(" -> "),g(o).concat(r).map(String).join(" -> ");return}else h.add(r);o&&r!==o&&a.value.set(r,o),d&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(l)return;h.delete(r),t.value.delete(r);const o=a.value.get(r);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(p=>p!==r))}a.value.delete(r)},open:(r,o,d)=>{y.emit("click:open",{id:r,value:o,path:g(r),event:d});const p=u.value.open({id:r,value:o,opened:new Set(i.value),children:t.value,parents:a.value,event:d});p&&(i.value=p)},openOnSelect:(r,o,d)=>{const p=u.value.select({id:r,value:o,selected:new Map(f.value),opened:new Set(i.value),children:t.value,parents:a.value,event:d});p&&(i.value=p)},select:(r,o,d)=>{y.emit("click:select",{id:r,value:o,path:g(r),event:d});const p=s.value.select({id:r,value:o,selected:new Map(f.value),children:t.value,parents:a.value,event:d});p&&(f.value=p),S.root.openOnSelect(r,o,d)},activate:(r,o,d)=>{if(!e.activatable)return S.root.select(r,!0,d);y.emit("click:activate",{id:r,value:o,path:g(r),event:d});const p=n.value.activate({id:r,value:o,activated:new Set(b.value),children:t.value,parents:a.value,event:d});p&&(b.value=p)},children:t,parents:a,getPath:g}};return q(N,S),S.root},De=(e,l)=>{const t=H(N,Ge),a=Symbol(tt()),i=v(()=>e.value!==void 0?e.value:a),n={...t,id:i,open:(s,u)=>t.root.open(i.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(i.value,s,u),isOpen:v(()=>t.root.opened.value.has(i.value)),parent:v(()=>t.root.parents.value.get(i.value)),activate:(s,u)=>t.root.activate(i.value,s,u),isActivated:v(()=>t.root.activated.value.has(C(i.value))),select:(s,u)=>t.root.select(i.value,s,u),isSelected:v(()=>t.root.selected.value.get(C(i.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return ge(()=>{!t.isGroupActivator&&t.root.register(i.value,t.id.value,l)}),me(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&q(N,n),n},Mt=()=>{const e=H(N,Ge);q(N,{...e,isGroupActivator:!0})},jt=at({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Mt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),xt=x({activeColor:String,baseColor:String,color:String,collapseIcon:{type:j,default:"$collapse"},expandIcon:{type:j,default:"$expand"},prependIcon:j,appendIcon:j,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...R()},"VListGroup"),ve=T()({name:"VListGroup",props:xt(),setup(e,l){let{slots:t}=l;const{isOpen:a,open:i,id:n}=De(k(e,"value"),!0),s=v(()=>`v-list-group--id-${String(n.value)}`),u=xe(),{isBooted:b}=kt();function f(S){S.stopPropagation(),i(!a.value,S)}const g=v(()=>({onClick:f,class:"v-list-group__header",id:s.value})),y=v(()=>a.value?e.collapseIcon:e.expandIcon),h=v(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return $(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&c(te,{defaults:h.value},{default:()=>[c(jt,null,{default:()=>[t.activator({props:g.value,isOpen:a.value})]})]}),c(ct,{transition:{component:dt},disabled:!b.value},{default:()=>{var S;return[Se(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(S=t.default)==null?void 0:S.call(t)]),[[nt,a.value]])]}})]})),{isOpen:a}}}),_t=x({opacity:[Number,String],...E(),...R()},"VListItemSubtitle"),Ft=T()({name:"VListItemSubtitle",props:_t(),setup(e,l){let{slots:t}=l;return $(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Tt=ht("v-list-item-title"),Gt=x({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:D(),onClickOnce:D(),...ke(),...E(),...Ce(),...we(),...Ie(),...Ae(),...vt(),...R(),...be(),...Pe({variant:"text"})},"VListItem"),fe=T()({name:"VListItem",directives:{Ripple:ft},props:Gt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:a,emit:i}=l;const n=yt(e,t),s=v(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:b,select:f,isOpen:g,isSelected:y,isIndeterminate:h,isGroupActivator:S,root:r,parent:o,openOnSelect:d,id:p}=De(s,!1),I=xe(),L=v(()=>{var m;return e.active!==!1&&(e.active||((m=n.isActive)==null?void 0:m.value)||(r.activatable.value?b.value:y.value))}),G=v(()=>e.link!==!1&&n.isLink.value),O=v(()=>!!I&&(r.selectable.value||r.activatable.value||e.value!=null)),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||O.value)),J=v(()=>e.rounded||e.nav),X=v(()=>e.color??e.activeColor),z=v(()=>({color:L.value?X.value??e.baseColor:e.baseColor,variant:e.variant}));lt(()=>{var m;return(m=n.isActive)==null?void 0:m.value},m=>{m&&K()}),ge(()=>{var m;(m=n.isActive)!=null&&m.value&&K()});function K(){o.value!=null&&r.open(o.value,!0),d(!0)}const{themeClasses:W}=he(e),{borderClasses:M}=Ve(e),{colorClasses:w,colorStyles:_,variantClasses:$e}=mt(z),{densityClasses:Ke}=Le(e),{dimensionStyles:Ue}=Be(e),{elevationClasses:He}=Oe(e),{roundedClasses:qe}=Me(J),Je=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=v(()=>({isActive:L.value,select:f,isOpen:g.value,isSelected:y.value,isIndeterminate:h.value}));function Xe(m){var U;i("click",m),A.value&&((U=n.navigate)==null||U.call(n,m),!S&&(r.activatable.value?u(!b.value,m):(r.selectable.value||e.value!=null)&&f(!y.value,m)))}function ze(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.target.dispatchEvent(new MouseEvent("click",m)))}return $(()=>{const m=G.value?"a":e.tag,U=a.title||e.title!=null,We=a.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),Ye=!!(se||a.append),re=!!(e.prependAvatar||e.prependIcon),Z=!!(re||a.prepend);return I==null||I.updateHasPrepend(Z),e.activeColor&&it("active-color",["color","base-color"]),Se(c(m,ee({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Z&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},W.value,M.value,w.value,Ke.value,He.value,Je.value,qe.value,$e.value,e.class],style:[_.value,Ue.value,e.style],tabindex:A.value?I?-2:0:void 0,"aria-selected":O.value?r.activatable.value?b.value:r.selectable.value?y.value:L.value:void 0,onClick:Xe,onKeydown:A.value&&!G.value&&ze},n.linkProps),{default:()=>{var ue;return[gt(A.value||L.value,"v-list-item"),Z&&c("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?c(te,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=a.prepend)==null?void 0:P.call(a,Y.value)]}}):c(oe,null,[e.prependAvatar&&c(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[U&&c(Tt,{key:"title"},{default:()=>{var P;return[((P=a.title)==null?void 0:P.call(a,{title:e.title}))??e.title]}}),We&&c(Ft,{key:"subtitle"},{default:()=>{var P;return[((P=a.subtitle)==null?void 0:P.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=a.default)==null?void 0:ue.call(a,Y.value)]),Ye&&c("div",{key:"append",class:"v-list-item__append"},[a.append?c(te,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=a.append)==null?void 0:P.call(a,Y.value)]}}):c(oe,null,[e.appendIcon&&c(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[st("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:b,isGroupActivator:S,isSelected:y,list:I,select:f,root:r,id:p}}}),Dt=x({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...R()},"VListSubheader"),Nt=T()({name:"VListSubheader",props:Dt(),setup(e,l){let{slots:t}=l;const{textColorClasses:a,textColorStyles:i}=St(k(e,"color"));return $(()=>{const n=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s;return[n&&c("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Et=x({items:Array,returnObject:Boolean},"VListChildren"),Ne=T()({name:"VListChildren",props:Et(),setup(e,l){let{slots:t}=l;return je(),()=>{var a,i;return((a=t.default)==null?void 0:a.call(t))??((i=e.items)==null?void 0:i.map(n=>{var h,S;let{children:s,props:u,type:b,raw:f}=n;if(b==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:u}))??c(pt,u,null);if(b==="subheader")return((S=t.subheader)==null?void 0:S.call(t,{props:u}))??c(Nt,u,null);const g={subtitle:t.subtitle?r=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var o;return(o=t.append)==null?void 0:o.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var o;return(o=t.title)==null?void 0:o.call(t,{...r,item:f})}:void 0},y=ve.filterProps(u);return s?c(ve,ee({value:u==null?void 0:u.value},y),{activator:r=>{let{props:o}=r;const d={...u,...o,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):c(fe,d,g)},default:()=>c(Ne,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):c(fe,ee(u,{value:e.returnObject?f:u.value}),g)}))}}}),Rt=x({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:rt}},"list-items");function ne(e,l){const t=B(l,e.itemTitle,l),a=B(l,e.itemValue,t),i=B(l,e.itemChildren),n=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?pe(l,["children"]):l:void 0:B(l,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(i)?Ee(e,i):void 0,raw:l}}function Ee(e,l){const t=[];for(const a of l)t.push(ne(e,a));return t}function Yt(e){const l=v(()=>Ee(e,e.items)),t=v(()=>l.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(s=>s!==null)),n.map(s=>e.returnObject&&typeof s=="string"?ne(e,s):l.value.find(u=>e.valueComparator(s,u.value))||ne(e,s))}function i(n){return e.returnObject?n.map(s=>{let{raw:u}=s;return u}):n.map(s=>{let{value:u}=s;return u})}return{items:l,transformIn:a,transformOut:i}}function $t(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Kt(e,l){const t=B(l,e.itemType,"item"),a=$t(l)?l:B(l,e.itemTitle),i=B(l,e.itemValue,void 0),n=B(l,e.itemChildren),s=e.itemProps===!0?pe(l,["children"]):B(l,e.itemProps),u={title:a,value:i,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?Re(e,n):void 0,raw:l}}function Re(e,l){const t=[];for(const a of l)t.push(Kt(e,a));return t}function Ut(e){return{items:v(()=>Re(e,e.items))}}const Ht=x({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:j,collapseIcon:j,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":D(),"onClick:select":D(),"onUpdate:opened":D(),...Bt({selectStrategy:"single-leaf",openStrategy:"list"}),...ke(),...E(),...Ce(),...we(),...Ie(),itemType:{type:String,default:"type"},...Rt(),...Ae(),...R(),...be(),...Pe({variant:"text"})},"VList"),Zt=T()({name:"VList",props:Ht(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:a}=Ut(e),{themeClasses:i}=he(e),{backgroundColorClasses:n,backgroundColorStyles:s}=bt(k(e,"bgColor")),{borderClasses:u}=Ve(e),{densityClasses:b}=Le(e),{dimensionStyles:f}=Be(e),{elevationClasses:g}=Oe(e),{roundedClasses:y}=Me(e),{children:h,open:S,parents:r,select:o,getPath:d}=Ot(e),p=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=k(e,"activeColor"),L=k(e,"baseColor"),G=k(e,"color");je(),ut({VListGroup:{activeColor:I,baseColor:L,color:G,expandIcon:k(e,"expandIcon"),collapseIcon:k(e,"collapseIcon")},VListItem:{activeClass:k(e,"activeClass"),activeColor:I,baseColor:L,color:G,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),slim:k(e,"slim"),variant:k(e,"variant")}});const O=F(!1),A=V();function J(w){O.value=!0}function X(w){O.value=!1}function z(w){var _;!O.value&&!(w.relatedTarget&&((_=A.value)!=null&&_.contains(w.relatedTarget)))&&M()}function K(w){const _=w.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(_.tagName))){if(w.key==="ArrowDown")M("next");else if(w.key==="ArrowUp")M("prev");else if(w.key==="Home")M("first");else if(w.key==="End")M("last");else return;w.preventDefault()}}function W(w){O.value=!0}function M(w){if(A.value)return ot(A.value,w)}return $(()=>c(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},i.value,n.value,u.value,b.value,g.value,p.value,y.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:J,onFocusout:X,onFocus:z,onKeydown:K,onMousedown:W},{default:()=>[c(Ne,{items:a.value,returnObject:e.returnObject},t)]})),{open:S,select:o,focus:M,children:h,parents:r,getPath:d}}});export{Zt as V,fe as a,ve as b,Tt as c,Ft as d,Yt as e,Rt as m,kt as u};
